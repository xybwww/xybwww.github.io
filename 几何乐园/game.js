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

    Composite.add(engine.world, [buttomGround, leftGround, rightGround])

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
    var lineCache
    $('#line').click(function () {
        changeMenu()
        menu = "line"
        $(".selected").removeClass()
        $(this).prev().addClass("selected")
    })
    function line(end) {
        if (lineCache) {
            if (lineCache !== 1) Composite.remove(engine.world, lineCache)
            lineCache = Matter.Bodies.rectangle(
                (start.x + end.x) / 2, (start.y + end.y) / 2, // 中心位置
                Math.sqrt(Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2)), 10,   //  尺寸
                {
                    angle: Math.atan2(end.y - start.y, end.x - start.x), // 注意：Matter.js中的角度方向可能与我们的直觉相反，可能需要调整
                    isStatic: true, // 静态物体，不会受物理影响
                    render: {
                        fillStyle: 'ligthgray', // 填充颜色
                        // 如果不需要边框，可以不设置strokeStyle属性
                        // strokeStyle: 'black' // 边框颜色
                    }
                })
            Composite.add(engine.world, lineCache)
        } else {
            lineCache = 1
        }
    }

    //画圆形
    var lineCache
    $('#circle').click(function () {
        changeMenu()
        menu = "circle"
        $(".selected").removeClass()
        $(this).prev().addClass("selected")
    })
    function circle(position) {
        Composite.add(engine.world, Bodies.circle(position.x, position.y, 15, { mass: 0.1, restitution: 0.5 }))
    }

    //橡皮擦
    const eraser = Matter.Bodies.circle(0, 0, 5, {
         isStatic: true,
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
    Matter.Events.on(engine, 'collisionStart', function (event) {
        event.pairs.forEach(pair => {
            if (pair.bodyA === eraser) {
                Composite.remove(engine.world, pair.bodyB);
            }
            else if (pair.bodyB === eraser) {
                Composite.remove(engine.world, pair.bodyA);
            }
        })
    })

    //鼠标检测
    var timer
    Matter.Events.on(hand, 'mousedown', function (event) {
        switch (menu) {
            case "line":
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
                    break;
                }
            case "erase":
                Matter.Body.setPosition(eraser, { x: event.mouse.position.x, y: event.mouse.position.y });
                Composite.add(engine.world, eraser)
                break;
        }
    })
    Matter.Events.on(hand, 'mousemove', function (event) {
        switch (menu) {
            case "line":
                line(event.mouse.position)
                break;
            case "erase":
                Matter.Body.setPosition(eraser, { x: event.mouse.position.x, y: event.mouse.position.y });
                break;
        }
    })
    Matter.Events.on(hand, 'mouseup', function (event) {
        switch (menu) {
            case "line":
                line(event.mouse.position)
                lineCache = null
                break;
            case "circle":
                clearTimeout(timer)
                clearInterval(timer)
                timer = undefined
                break;
            case "erase":
                Composite.remove(engine.world, eraser);
                break
        }
    })
});