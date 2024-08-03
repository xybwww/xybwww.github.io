let Engine = Matter.Engine // 引擎.引擎模块包含创建和操作引擎的方法
let Render = Matter.Render // 基于HTML5画布的渲染器
let Bodies = Matter.Bodies // 用于创建各种形状的物体，物体必须添加到Wolrd中，然后由引擎运行世界
let Composite = Matter.Composite // 复合体，旧版的 Matter.World 已经合并到这个模块里
let Composites = Matter.Composites
let Runner = Matter.Runner // 循环模块

// 创建引擎
let engine = Engine.create()

// 创建渲染器
let render = Render.create({
    element: document.getElementById('canvas'), // 绑定页面元素,
    engine: engine,
    options: {
        width: window.innerWidth-200,
        height: window.innerHeight,
        wireframes: false, // 关闭线框模式
        showVelocity: true // 显示速度
    }
})

// 堆
let stack = Composites.stack(0, 0, window.innerWidth /10, 1, 0, 20, function (x, y) {
    return Bodies.circle(x,y,15, { mass: 1, restitution: 1 })
})

// 地面
let ground = Bodies.rectangle(window.innerWidth / 2, window.innerHeight - 5, window.innerWidth, 10, {
    isStatic: true,
    render: {
        fillStyle: '#cccccc'
    }
})

let mouse = Matter.Mouse.create(render.canvas)

// 给鼠标添加约束
let mouseConstraint = Matter.MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
        stiffness: 1,
        render: {
            visible: true // 默认为 true，会显示鼠标拖拽轨迹
        }
    }
})


// 监听鼠标移动事件
Matter.Events.on(mouseConstraint, "mousemove", function(event) {
    Composite.add(engine.world, Bodies.circle(event.mouse.position.x, event.mouse.position.y, 10, {
        isStatic: true, render: { fillStyle: '#cccccc' }
    }))
})

Composite.add(engine.world, [stack, ground, mouseConstraint])
Render.run(render)

// 创建运行方法
let runner = Runner.create()

// 运行渲染器
Runner.run(runner, engine)