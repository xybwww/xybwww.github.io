    const Engine = Matter.Engine;
const Render = Matter.Render;
const Bodies = Matter.Bodies;
const Composite = Matter.Composite;
const Composites = Matter.Composites;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;
// 创建引擎
const engine = Engine.create();

// 创建渲染器
const render = Render.create({
    element:document.getElementyId('c'),
    engine: engine,
    options: {
                width: window.innerWidth*2,
                height: window.innerHeight*2,
        wireframes: false,
        showVelocity: true
    }
});

// 创建一些物体
const rectA = Bodies.rectangle(200, 330, 20, 100, {
    isStatic: true,
    render: { fillStyle: '#f00' },
    collisionFilter: { group: -1 }
});

const rectB = Bodies.rectangle(200, 330, 200, 20, {
    render: { fillStyle: '#00f' },
    collisionFilter: { group: -1 }
});

const rotateConstraint = Constraint.create({
    bodyA: rectA,
    bodyB: rectB,
    length: 0
});

const box = Bodies.rectangle(80, 100, 80, 80);

const stack = Composites.stack(20, 30, 4, 3, 10, 20, (x, y) => Bodies.rectangle(x, y, 40, 20, { restitution: 0.3, mass: 0.1 }));
const stack_circle = Composites.stack(220, 60, 3, 4, 10, 20, (x, y) => Bodies.circle(x, y, 16));
const ground = Bodies.rectangle(1000, 1390, 2000, 20, {
    isStatic: true,
    render: { fillStyle: '#cccccc' }
});



// 将所有物体添加到世界
Composite.add(engine.world, [rectA, rectB, rotateConstraint, stack, stack_circle, ground, box]);
     
// 运行渲染器
Matter.Render.run(render)
 
  let runner = Matter.Runner.create()
 
  Matter.Runner.run(runner, engine)
