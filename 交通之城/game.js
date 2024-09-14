$(function () {

  const Engine = Matter.Engine // 引擎.引擎模块包含创建和操作引擎的方法
  const Render = Matter.Render // 基于HTML5画布的渲染器
  const Bodies = Matter.Bodies // 用于创建各种形状的物体，物体必须添加到Wolrd中，然后由引擎运行世界
  const Composite = Matter.Composite // 复合体，旧版的 Matter.World 已经合并到这个模块里
  const Runner = Matter.Runner // 循环模块

  // 创建引擎
  const engine = Engine.create({
    gravity: { x: 0, y: 0.98 },
  })
  // 创建渲染器
  const render = Render.create({
    element: $("#canvas")[0], // 绑定页面元素,
    engine: engine,
    options: {
      width: window.innerWidth,
      height: window.innerHeight - 50,
      wireframes: false, // 关闭线框模式
      showVelocity: true // 显示速度
    }
  })


  // 下地面
  const buttomGround = Bodies.rectangle(window.innerWidth / 2, window.innerHeight - 50, window.innerWidth, 20, {
    isStatic: true,
    render: {
      fillStyle: 'gray'
    }
  })
  // 左地面
  const leftGround = Bodies.rectangle(0, (window.innerHeight - 50) / 2, 20, window.innerHeight - 50, {
    isStatic: true,
    render: {
      fillStyle: 'gray'
    }
  })
  // 右地面
  const rightGround = Bodies.rectangle(window.innerWidth, (window.innerHeight - 50) / 2, 20, window.innerHeight - 50, {
    isStatic: true,
    render: {
      fillStyle: 'gray'
    }
  })
  const grounds = [buttomGround, leftGround, rightGround]
  Composite.add(engine.world, grounds)

  Render.run(render)
  // 创建运行方法
  const runner = Runner.create()
  // 运行渲染器
  Runner.run(runner, engine)



  var elements = []




  //菜单
  $("#menu").width(window.innerWidth - 100);

  //菜单项目
  var menu = "hand"
  function changeMenu() {
    switch (menu) {
      case "hand":
        Composite.remove(engine.world, hand)
        break;
    }
  }

  //手拖动
  const hand = Matter.MouseConstraint.create(engine, {
    mouse: Matter.Mouse.create(render.canvas),
    constraint: {
      stiffness: 1,
      render: {
        visible: true // 默认为 true，会显示鼠标拖拽轨迹
      }
    }
  })
  Composite.add(engine.world, hand)
  $('#hand').click(function () {
    changeMenu()
    menu = "hand"
    $(".selected").removeClass()
    $(this).prev().addClass("selected")
    Composite.add(engine.world, hand)
  })

  var start
  //画直线
  var lineCache, lineValues
  $('#line').click(function () {
    changeMenu()
    menu = "line"
    $(".selected").removeClass()
    $(this).prev().addClass("selected")
  })
  function line(end, values) {
    if (lineCache) {
      if (lineCache !== 1) Composite.remove(engine.world, lineCache)
      lineValues = values || { name: "line", x: (start.x + end.x) / 2, y: (start.y + end.y) / 2, width: Math.round(Math.sqrt(Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2))), height: 10, angle: Math.round(Math.atan2(end.y - start.y, end.x - start.x) * 1000) / 1000 }
      lineCache = Matter.Bodies.rectangle(
        lineValues.x, lineValues.y, // 中心位置
        lineValues.width, lineValues.height,   //  尺寸
        {
          angle: lineValues.angle, // 注意：Matter.js中的角度方向可能与我们的直觉相反，可能需要调整
          friction: 0,
          isStatic: true, // 静态物体，不会受物理影响
          render: {
            fillStyle: 'lightgray', // 填充颜色
            // 如果不需要边框，可以不设置strokeStyle属性
            // strokeStyle: 'black' // 边框颜色
          }
        })
      Composite.add(engine.world, lineCache)
    } else {
      lineCache = 1
    }
  }

  //伸缩电梯
  var teleElevators = []
  $('#teleElevator').click(function () {
    changeMenu()
    menu = "teleElevator"
    $(".selected").removeClass()
    $(this).prev().addClass("selected")
  })
  function teleElevator(end, values) {
    if (lineCache) {
      if (lineCache !== 1) Composite.remove(engine.world, lineCache)
      lineValues = values || { name: "teleElevator", x: (start.x + end.x) / 2, y: (start.y + end.y) / 2, width: Math.round(Math.sqrt(Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2))), height: 10, angle: Math.round(Math.atan2(end.y - start.y, end.x - start.x) * 1000) / 1000 }
      lineCache = Matter.Bodies.rectangle(
        lineValues.x, lineValues.y, // 中心位置
        lineValues.width, lineValues.height,   //  尺寸
        {
          angle: lineValues.angle, // 注意：Matter.js中的角度方向可能与我们的直觉相反，可能需要调整
          friction: 0,
          isStatic: true, // 静态物体，不会受物理影响
          render: {
            fillStyle: 'dodgerblue', // 填充颜色
            // 如果不需要边框，可以不设置strokeStyle属性
            // strokeStyle: 'black' // 边框颜色
          }
        })
      Composite.add(engine.world, lineCache)
    } else {
      lineCache = 1
    }
  }
  //伸缩电梯
  setInterval(function () {
    teleElevators.forEach(function (element) {
      Composite.remove(engine.world, element.element)
      element.nowWidth += element.heightPosition
      if (element.nowWidth >= element.maxWidth || element.nowWidth <= 0) {
        element.heightPosition = -element.heightPosition
      }
      element.element = Matter.Bodies.rectangle(
        element.element.position.x, element.element.position.y, // 中心位置
        element.nowWidth, 10,   //  尺寸
        {
          angle: element.element.angle, // 注意：Matter.js中的角度方向可能与我们的直觉相反，可能需要调整
          friction: 0,
          isStatic: true, // 静态物体，不会受物理影响
          render: {
            fillStyle: 'dodgerblue', // 填充颜色
            // 如果不需要边框，可以不设置strokeStyle属性
            // strokeStyle: 'black' // 边框颜色
          }
        })
      Composite.add(engine.world, element.element)
    })
  }, 100);

  //画圆形
  $('#circle').click(function () {
    changeMenu()
    menu = "circle"
    $(".selected").removeClass()
    $(this).prev().addClass("selected")
  })
  function circle(position) {
    Composite.add(engine.world, Bodies.circle(position.x, position.y, 15, { mass: 0.1, restitution: 0.5, friction: 0, name: "circle" }))
  }

  //橡皮擦
  var eraserTimer
  const eraser = Matter.Bodies.circle(0, 0, 5, {
    //静止
    friction: 1,
    frictionAir: 0.1,
    density: 0.0001,
    restitution: 0,
    velocity: { x: 0, y: 0 },
    angularVelocity: 0,
    render: {
      fillStyle: 'lightgray'
    }
  });
  $('#erase').click(function () {
    changeMenu()
    menu = "erase"
    $(".selected").removeClass()
    $(this).prev().addClass("selected")
  })
  function moveEraser(position) {
    Matter.Body.setPosition(eraser, { x: position.x, y: position.y });
  }

  //传送门
  var doorsExit = []
  let placeDoor
  const doorVertices = [
    { x: 20, y: 60 },
    { x: 20, y: 20 },
    { x: 17, y: 13 },
    { x: 13, y: 7 },
    { x: 7, y: 3 },
    { x: 0, y: 1 },
    { x: -7, y: 3 },
    { x: -13, y: 7 },
    { x: -17, y: 13 },
    { x: -20, y: 20 },
    { x: -20, y: 60 }
  ]
  function door(enter, position) {
    placeDoor = Matter.Bodies.fromVertices(position.x, position.y, doorVertices, {
      isStatic: true,
      name: enter ? "doorEnter" : "doorExit",
      render: {
        fillStyle: enter ? 'darkgreen' : 'blue'
      }
    })
    Composite.add(engine.world, placeDoor)
    if (!enter) {
      doorsExit.push(placeDoor)
    }
  }
  //入门
  $('#doorEnter').click(function () {
    changeMenu()
    menu = "doorEnter"
    $(".selected").removeClass()
    $(this).prev().addClass("selected")
  })
  //出门
  $('#doorExit').click(function () {
    changeMenu()
    menu = "doorExit"
    $(".selected").removeClass()
    $(this).prev().addClass("selected")
  })

  //鼠标检测
  var timer
  Matter.Events.on(hand, 'mousedown', function (event) {
    switch (menu) {
      case "line":
      case "teleElevator":
        start = { x: event.mouse.position.x, y: event.mouse.position.y }
        break;
      case "circle":
        if (!timer) {
          circle(event.mouse.position)
          timer = setTimeout(
            function () {
              timer = setInterval(function () {
                circle(event.mouse.position)
              }, 100);
            }
            , 500)
        }
        break;
      case "erase":
        moveEraser(event.mouse.position)
        Composite.add(engine.world, eraser)
        clearInterval(eraserTimer)
        eraserTimer = setInterval(function () {
          moveEraser(event.mouse.position)
        }, 100)
        break;
      case "doorEnter":
        door(true, event.mouse.position)
        break;
      case "doorExit":
        door(false, event.mouse.position)
        break;
    }
  })
  Matter.Events.on(hand, 'mousemove', function (event) {
    switch (menu) {
      case "line":
        line(event.mouse.position)
        break;
      case "teleElevator":
        teleElevator(event.mouse.position)
        break;
      case "erase":
        clearInterval(eraserTimer)
        moveEraser(event.mouse.position)
        eraserTimer = setInterval(function () {
          moveEraser(event.mouse.position)
        }, 100)
        break;
      case "doorEnter":
      case "doorExit":
        if (placeDoor) {
          Matter.Body.setPosition(placeDoor, { x: event.mouse.position.x, y: event.mouse.position.y });
        }
        break;
    }
  })
  Matter.Events.on(hand, 'mouseup', function (event) {
    switch (menu) {
      case "line":
        line(event.mouse.position)
        elements.push(lineValues)
        lineCache = null
        break;
      case "teleElevator":
        teleElevator(event.mouse.position)
        teleElevators.push({
          element: lineCache,
          maxWidth: Math.sqrt(Math.pow(event.mouse.position.x - start.x, 2) + Math.pow(event.mouse.position.y - start.y, 2)),
          nowWidth: Math.sqrt(Math.pow(event.mouse.position.x - start.x, 2) + Math.pow(event.mouse.position.y - start.y, 2)),
          heightPosition: -5,
        })
        elements.push(lineValues)
        lineCache = null
        break;
      case "circle":
        clearTimeout(timer)
        clearInterval(timer)
        timer = undefined
        break;
      case "erase":
        clearInterval(eraserTimer)
        Composite.remove(engine.world, eraser);
        break
      case "doorEnter":
      case "doorExit":
        placeDoor = undefined
        break
    }
  })

  //碰撞检测
  Matter.Events.on(engine, 'collisionStart', function (event) {
    for (let pair of event.pairs) {
      if (pair.bodyA === eraser || pair.bodyB === eraser) {
        let theOther
        if (pair.bodyA === eraser) {
          theOther = pair.bodyB
        }
        else {
          theOther = pair.bodyA
        }
        removeBody(theOther)
        if (grounds.includes(theOther)) {
          continue
        } else {
          if (doorsExit.includes(theOther)) {
            doorsExit.splice(doorsExit.indexOf(theOther), 1);
          } else {
            let teleElevatorToRemove = teleElevators.findIndex(element => element.element === theOther);
            if (teleElevatorToRemove !== -1) {
              teleElevators.splice(teleElevatorToRemove, 1);
            }
          }
        }
      } else if (pair.bodyA.name === "doorEnter" || pair.bodyB.name === "doorEnter") {
        if (pair.bodyA.name === "doorEnter") {
          Matter.Body.setPosition(pair.bodyB, doorsExit[Math.floor(Math.random() * doorsExit.length)].position);

        }
        else {
          Matter.Body.setPosition(pair.bodyA, doorsExit[Math.floor(Math.random() * doorsExit.length)].position);
        }
      }
    }
  })


  //删除刚体
  function removeBody(body) {
    if (grounds.includes(body)) {
      return
    } else {
      if (doorsExit.includes(body)) {
        doorsExit.splice(doorsExit.indexOf(body), 1);
      } else {
        let teleElevatorToRemove = teleElevators.findIndex(element => element.element === body);
        if (teleElevatorToRemove !== -1) {
          teleElevators.splice(teleElevatorToRemove, 1);
        }
      }
    }
    Composite.remove(engine.world, body);
    const index = elements.findIndex(element => element === body);
    if (index > -1) {
      elements.splice(index, 1);
    }
  }

  //删除掉出的刚体
  setInterval(function () {
    // 遍历所有刚体
    Composite.allBodies(engine.world).forEach((body) => {
      // 检查y坐标
      if (body.position.y > window.innerHeight) {
        // 删除刚体
        removeBody(body)
      }
    });
  }, 10000);





  //侧边功能
  //设置
  $('#settings').click(function () {
    $("#settingsDiv").toggle("slow");
  })

  //导入
  $('#import').click(function () {

    $("#fileInput")[0].click();

    $('#fileInput').on('change', function () {
      let file = $(this)[0].files[0]; // 获取文件

      if (file) {
        Composite.allBodies(engine.world).forEach((body) => {
          // 删除刚体
          removeBody(body)
        });

        const reader = new FileReader();

        reader.onload = function (e) {
          const text = e.target.result;

          try {
            elements = JSON.parse(text);
            for (let element of elements) {
              lineCache = 1
              switch (element.name) {
                case "line":
                  line(undefined, element)
                  break;
                case "teleElevator":
                  teleElevator(undefined, element)
                  teleElevators.push({
                    element: lineCache,
                    maxWidth: element.width,
                    nowWidth: element.width,
                    heightPosition: -5,
                  })
                  break;
                case "circle":
                  circle(element.position)
                  break
                case "doorEnter":
                  door(true, element.position)
                  break
                case "doorExit":
                  door(false, element.position)
                  break
              }
            }
          } catch (error) {
            console.error('Error parsing JSON:', error);
            alert('Error parsing JSON file.');
          }
        };
        reader.readAsText(file);
      }
    });
  })

  //导出
  $('#export').click(function () {
    Composite.allBodies(engine.world).forEach((body) => {
      if (["circle", "doorEnter", "doorExit".includes(body.name)]) {
        elements.push({ name: body.name, position: body.position })
      }
    });
    const jsonData = JSON.stringify(elements, null, 2); // 使用两个空格进行缩进，以便阅读

    // 创建一个Blob对象，用于存储数据
    const blob = new Blob([jsonData], { type: 'application/json;charset=utf-8' });

    // 创建一个指向Blob的URL
    const url = URL.createObjectURL(blob);

    $('<a>', { href: url, download: '交通之城存档' })[0].click();
    URL.revokeObjectURL(url);

  })
})
