$(function () {

    const Engine = Matter.Engine // 引擎.引擎模块包含创建和操作引擎的方法
    const Render = Matter.Render // 基于HTML5画布的渲染器
    const Bodies = Matter.Bodies // 用于创建各种形状的物体，物体必须添加到Wolrd中，然后由引擎运行世界
    const Composite = Matter.Composite // 复合体，旧版的 Matter.World 已经合并到这个模块里
    const Composites = Matter.Composites
    const Runner = Matter.Runner // 循环模块

    // 创建引擎
    const engine = Engine.create()
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

    // 球堆
    const stack = Composites.stack(0, 0, window.innerWidth / 30, 5, 0, 20, function (x, y) {
        return Bodies.circle(x, y, 15, { mass: 1, restitution: 1 })
    })

    // 下地面
    const buttomGround = Bodies.rectangle(window.innerWidth / 2, window.innerHeight - 55, window.innerWidth, 10, {
        isStatic: true,
        render: {
            fillStyle: 'gray'
        }
    })
    // 左地面
    const leftGround = Bodies.rectangle(5, (window.innerHeight - 50) / 2, 10, window.innerHeight - 5, {
        isStatic: true,
        render: {
            fillStyle: 'gray'
        }
    })
    // 右地面
    const rightGround = Bodies.rectangle(window.innerWidth - 5, (window.innerHeight - 50) / 2, 10, window.innerHeight - 5, {
        isStatic: true,
        render: {
            fillStyle: 'gray'
        }
    })
    /* // 定义线的起点和终点
     const startX = 100;
     const startY = 300;
     const endX = 800;
     const endY = 500;
 
     // 计算线的中点，这将作为长方形的中心
     const centerX = (startX + endX) / 2;
     const centerY = (startY + endY) / 2;
 
     // 计算线的长度（虽然这个长度对于创建矩形不是必需的，但可以用于其他目的）
     const lineLength = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));
 
     // 假设长方形的“宽度”非常细（比如1个单位），高度也设置为非常细但不影响显示（因为我们将使用填充）
     const width = 1; // 线的粗细
     const height = lineLength; // 高度也设置为1，但由于填充，它看起来仍然像一条线
 
     // 计算旋转角度以匹配线的方向
     // 使用atan2来确保正确处理所有角度，包括垂直线
     const angle = Math.atan2(endY - startY, endX - startX) * (180 / Math.PI);
 
     // 创建长方形（实际上是一个细长的矩形）
     const lineBody = Mr.Bodies.rectangle(
         centerX, centeratteY, // 中心位置
         width, height,    // 尺寸
         {
             angle: -angle, // 注意：Matter.js中的角度方向可能与我们的直觉相反，可能需要调整
             isStatic: true, // 静态物体，不会受物理影响
             render: {
                 fillStyle: 'white', // 填充颜色
                 // 如果不需要边框，可以不设置strokeStyle属性
                 // strokeStyle: 'black' // 边框颜色
             }
         }
     );
 */
    Composite.add(engine.world, [stack, buttomGround, leftGround, rightGround])


    /*
        // 监听鼠标移动事件
        Matter.Events.on(mouseConstraint, "mousemove", function (event) {
            Composite.add(engine.world, Bodies.circle(event.mouse.position.x, event.mouse.position.y, 10, {
                isStatic: true, render: { fillStyle: 'gray' }
            }))
        })
    */


    Render.run(render)
    // 创建运行方法
    const runner = Runner.create()
    // 运行渲染器
    Runner.run(runner, engine)







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
                visible: false // 默认为 true，会显示鼠标拖拽轨迹
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
    var straightLineCache
    $('#straightLine').click(function () {
        changeMenu()
        menu = "straightLine"
        $(".selected").removeClass()
        $(this).prev().addClass("selected")
    })
    function straightLine(end) {
        if (straightLineCache) {
            if (straightLineCache !== 1) Composite.remove(engine.world, straightLineCache)
            straightLineCache = Matter.Bodies.rectangle(
                (start.x + end.x) / 2, (start.y + end.y) / 2, // 中心位置
                Math.sqrt(Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2)), 10,   //  尺寸
                {
                    angle: Math.atan2(end.y - start.y, end.x - start.x), // 注意：Matter.js中的角度方向可能与我们的直觉相反，可能需要调整
                    isStatic: true, // 静态物体，不会受物理影响
                    render: {
                        fillStyle: 'white', // 填充颜色
                        // 如果不需要边框，可以不设置strokeStyle属性
                        // strokeStyle: 'black' // 边框颜色
                    }
                })
            Composite.add(engine.world, straightLineCache)
        } else {
            straightLineCache = 1
        }
    }

    //鼠标检测
    Matter.Events.on(hand, 'mousedown', function (event) {
        start = { x: event.mouse.position.x, y: event.mouse.position.y }
    })
    Matter.Events.on(hand, 'mousemove', function (event) {
        if (menu === "straightLine") {
            straightLine(event.mouse.position)
        }
    })
    Matter.Events.on(hand, 'mouseup', function (event) {
        if (menu === "straightLine") {
            straightLine(event.mouse.position)
            straightLineCache = null
        }
    })
});