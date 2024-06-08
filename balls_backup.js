Matter.use('matter-wrap');

const matterContainer = document.querySelector("#balls-area");
const THICCNESS = 60;
const originalImgSrc = "https://cdn.prod.website-files.com/6364d0ad4443c4f2436e099a/6662cd689dbc8fbe230da51e_dont_press_illustration.svg";  // Update this with the correct path to the original image
const pressedImgSrc = "https://uploads-ssl.webflow.com/6364d0ad4443c4f2436e099a/6662cd6654137412436c713a_oh_you_pressed_illustration.svg";

let engine, render, runner;
let isInitialized = false;

function initializeMatter() {
  // module aliases
  const { Engine, Render, Runner, Bodies, Composite, Mouse, MouseConstraint } = Matter;

  // create an engine
  engine = Engine.create();

  // create a renderer
  render = Render.create({
    element: matterContainer,
    engine: engine,
    options: {
      width: matterContainer.clientWidth,
      height: matterContainer.clientHeight,
      background: "transparent",
      wireframes: false,
      showAngleIndicator: false
    }
  });

  const circleSpacing = 40; // Adjust this value to increase/decrease the spacing between circles
  const randomOffsetRange = 20; // Adjust this value to control the randomness of the distribution
  
  for (let i = 0; i < 200; i++) {
      let randomOffset = Math.random() * randomOffsetRange * 2 - randomOffsetRange; // Random offset within the specified range
      let xPosition = (matterContainer.clientWidth / 2) + randomOffset + (i % 20) * circleSpacing + circleSpacing / 2; // Distribute circles around the horizontal center of the viewport with randomness
      // let yPosition = Math.floor(i / 20) * circleSpacing + circleSpacing / 2; // Distribute circles vertically as well
      let circle = Bodies.circle(xPosition/2, 0, 30, { // Keep radius as 20
          friction: 0.3,
          frictionAir: 0.00001,
          restitution: 0.8,
          render: {
              fillStyle: "#f35901"
          },
          plugin: {
              wrap: {
                  min: {
                      x: 0,
                      y: 0
                  },
                  max: {
                      x: matterContainer.clientWidth,
                      y: matterContainer.clientHeight
                  }
              }
          }
      });
      Composite.add(engine.world, circle);
  }

  const ground = Bodies.rectangle(
    matterContainer.clientWidth / 2,
    matterContainer.clientHeight + THICCNESS / 2,
    matterContainer.clientWidth,
    THICCNESS,
    { isStatic: true }
  );

  const leftWall = Bodies.rectangle(
    -THICCNESS / 2,
    matterContainer.clientHeight / 2,
    THICCNESS,
    matterContainer.clientHeight,
    { isStatic: true }
  );

  const rightWall = Bodies.rectangle(
    matterContainer.clientWidth + THICCNESS / 2,
    matterContainer.clientHeight / 2,
    THICCNESS,
    matterContainer.clientHeight,
    { isStatic: true }
  );

  const ceiling = Bodies.rectangle(
    matterContainer.clientWidth / 2,
    -THICCNESS / 2,
    matterContainer.clientWidth,
    THICCNESS,
    { isStatic: true }
  );

  Composite.add(engine.world, [ground, leftWall, rightWall, ceiling]);

  const mouse = Mouse.create(render.canvas);
  const mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      stiffness: 0.2,
      render: {
        visible: false
      }
    }
  });

  Composite.add(engine.world, mouseConstraint);

  // allow scroll through the canvas
  mouseConstraint.mouse.element.removeEventListener(
    "mousewheel",
    mouseConstraint.mouse.mousewheel
  );
  mouseConstraint.mouse.element.removeEventListener(
    "DOMMouseScroll",
    mouseConstraint.mouse.mousewheel
  );

  // run the renderer
  Render.run(render);

  // create runner
  runner = Runner.create();

  // run the engine
  Runner.run(runner, engine);

  function handleResize() {
    // set canvas size to new values
    render.canvas.width = matterContainer.clientWidth;
    render.canvas.height = matterContainer.clientHeight;

    // reposition ground
    Matter.Body.setPosition(
      ground,
      Matter.Vector.create(
        matterContainer.clientWidth / 2,
        matterContainer.clientHeight + THICCNESS / 2
      )
    );

    // reposition left wall
    Matter.Body.setPosition(
      leftWall,
      Matter.Vector.create(
        -THICCNESS / 2,
        matterContainer.clientHeight / 2
      )
    );

    // reposition right wall
    Matter.Body.setPosition(
      rightWall,
      Matter.Vector.create(
        matterContainer.clientWidth + THICCNESS / 2,
        matterContainer.clientHeight / 2
      )
    );

    // reposition ceiling
    Matter.Body.setPosition(
      ceiling,
      Matter.Vector.create(
        matterContainer.clientWidth / 2,
        -THICCNESS / 2
      )
    );
  }

  window.addEventListener("resize", handleResize);

  isInitialized = true;
}

function resetMatter() {
  if (engine) {
      Composite.clear(engine.world, true);
      Runner.stop(runner);
      Render.stop(render);

      // Clear canvas
      render.canvas.width = render.canvas.width;

      isInitialized = false;

      // Reset button image
      const buttonImg = document.querySelector(".break-button img");
      buttonImg.src = originalImgSrc;
  }
}

document.querySelector(".break-button").addEventListener("click", function() {
  const img = this.querySelector("img");

  if (!isInitialized) {
      initializeMatter();
      img.src = pressedImgSrc;
  } else {
      resetMatter();
  }
});


