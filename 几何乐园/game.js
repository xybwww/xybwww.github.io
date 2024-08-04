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
    const stack = Composites.stack(0, 0, window.innerWidth / 30, 50, 0, 20, function (x, y) {
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
        $(".selected").removeClass()
        $(this).prev().addClass("selected")
        Composite.add(engine.world, hand)
    })
});