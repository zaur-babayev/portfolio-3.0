function initSimulation() {
    var Engine = Matter.Engine,
      Render = Matter.Render,
      Events = Matter.Events,
      MouseConstraint = Matter.MouseConstraint,
      Mouse = Matter.Mouse,
      World = Matter.World,
      Bodies = Matter.Bodies;
  
    var engine = Engine.create(),
      world = engine.world;
    var containerElement = document.querySelector(".balls-area");
    var containerWidth = containerElement.clientWidth + 2;
    var containerHeight = containerElement.clientHeight + 2;
  
    var render = Render.create({
      element: containerElement,
      engine: engine,
      options: {
        width: containerWidth,
        height: containerHeight,
        pixelRatio: 2,
        background: "transparent",
        border: "none",
        wireframes: false
      }
    });
  
    var ground = Bodies.rectangle(
      containerWidth / 2 + 160,
      containerHeight + 80,
      containerWidth + 320,
      160,
      { render: { fillStyle: "#000000" }, isStatic: true }
    );
    var wallLeft = Bodies.rectangle(
      -80,
      containerHeight / 2,
      160,
      containerHeight,
      { isStatic: true }
    );
    var wallRight = Bodies.rectangle(
      containerWidth + 80,
      containerHeight / 2,
      160,
      1200,
      { isStatic: true }
    );
    var roof = Bodies.rectangle(
      containerWidth / 2 + 160,
      -80,
      containerWidth + 320,
      160,
      { isStatic: true }
    );
  
    var border = 0;
    var radius = 0;
  
    var tagUiUx = Bodies.rectangle(containerWidth / 2 + 150, 500, 272, 44, {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture:
            "https://uploads-ssl.webflow.com/6364d0ad4443c4f2436e099a/6665a608914785fb3c6ddd30_01.svg",
          xScale: 1,
          yScale: 1,
        },
      },
    });
    var tagWordpress = Bodies.rectangle(containerWidth / 2 + 150, 460, 145, 44, {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture:
            "https://uploads-ssl.webflow.com/6364d0ad4443c4f2436e099a/6665a6081c0b6ee8f11c1df1_02.svg",
          xScale: 1,
          yScale: 1,
        },
      },
    });
    var tagWebflow = Bodies.rectangle(containerWidth / 2 + 250, 420, 94, 44, {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture:
            "https://uploads-ssl.webflow.com/6364d0ad4443c4f2436e099a/6665a608810e35b0a705a3d5_03.svg",
          xScale: 1,
          yScale: 1,
        },
      },
    });
    var tagWhitelevel = Bodies.rectangle(containerWidth / 2 - 75, 380, 328, 44, {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture:
            "https://uploads-ssl.webflow.com/6364d0ad4443c4f2436e099a/6665a608e1408107fd3fa089_04.svg",
          xScale: 1,
          yScale: 1,
        },
      },
    });
  
    var tagWebflowgreen = Bodies.rectangle(
      containerWidth / 2 - 74,
      540,
      153,
      44,
      {
        chamfer: { radius: radius },
        render: {
          sprite: {
            texture:
              "https://uploads-ssl.webflow.com/6364d0ad4443c4f2436e099a/6665a6081c77c85726bbc1b8_05.svg",
            xScale: 1,
            yScale: 1,
          },
        },
      }
    );
    var tagSass = Bodies.rectangle(containerWidth / 2 + 174, 490, 134, 44, {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture:
            "https://uploads-ssl.webflow.com/6364d0ad4443c4f2436e099a/6665a608d34ea2aec9353a77_06.svg",
          xScale: 1,
          yScale: 1,
        },
      },
    });
    var tagWeb = Bodies.rectangle(containerWidth / 2 - 142, 440, 221, 44, {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture:
            "https://uploads-ssl.webflow.com/6364d0ad4443c4f2436e099a/6665a608c0c16b7b96189e69_07.svg",
          xScale: 1,
          yScale: 1,
        },
      },
    });
    var tagStartup = Bodies.rectangle(containerWidth / 2 - 10, 260, 162, 44, {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture:
            "https://uploads-ssl.webflow.com/6364d0ad4443c4f2436e099a/6665a60807223aa6dc2ae84b_08.svg",
          xScale: 1,
          yScale: 1,
        },
      },
    });
    var tagMaintence = Bodies.rectangle(containerWidth / 2 - 242, 420, 288, 44, {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture:
            "https://uploads-ssl.webflow.com/6364d0ad4443c4f2436e099a/6665a60829996f8b71ac96a5_09.svg",
          xScale: 1,
          yScale: 1,
        },
      },
    });
    var tagIntegration = Bodies.rectangle(containerWidth / 2 + 60, 380, 322, 44, {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture:
            "https://uploads-ssl.webflow.com/6364d0ad4443c4f2436e099a/6665a608d663c4f53eb82370_10.svg",
          xScale: 1,
          yScale: 1,
        },
      },
    });
    var tagMotion = Bodies.rectangle(containerWidth / 2, 360, 305, 44, {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture:
            "https://uploads-ssl.webflow.com/6364d0ad4443c4f2436e099a/6665a6080449ef4a4cdbec4c_11.svg",
          xScale: 1,
          yScale: 1,
        },
      },
    });
    var tagPay = Bodies.rectangle(containerWidth / 2 - 59, 260, 323, 44, {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture:
            "https://uploads-ssl.webflow.com/6364d0ad4443c4f2436e099a/6665a60874e931ce79686801_12.svg",
          xScale: 1,
          yScale: 1,
        },
      },
    });
    var tagGsap = Bodies.rectangle(containerWidth / 2 - 59, 260, 197, 44, {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture:
            "https://uploads-ssl.webflow.com/6364d0ad4443c4f2436e099a/6665a6080727c9bc65bb3aa1_13.svg",
          xScale: 1,
          yScale: 1,
        },
      },
    });
  
  
    World.add(engine.world, [
      ground,
      wallLeft,
      wallRight,
      roof,
      tagUiUx,
      tagWordpress,
      tagWebflow,
      tagWhitelevel,
      tagWebflowgreen,
      tagSass,
      tagWeb,
      tagStartup,
      tagMaintence,
      tagIntegration,
      tagMotion,
      tagPay,
      tagGsap
    ]);
  
    var mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false
          }
        }
      });
  
    World.add(world, mouseConstraint);
  
    render.mouse = mouse;
  
    mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
    mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);
  
    let click = false;
  
    document.addEventListener("mousedown", () => (click = true));
    document.addEventListener("mousemove", () => (click = false));
    document.addEventListener("mouseup", () =>
      console.log(click ? "click" : "drag")
    );
  
    Events.on(mouseConstraint, "mouseup", function (event) {
      var mouseConstraint = event.source;
      var bodies = engine.world.bodies;
      if (!mouseConstraint.bodyB) {
        for (i = 0; i < bodies.length; i++) {
          var body = bodies[i];
          if (click === true) {
            if (
              Matter.Bounds.contains(body.bounds, mouseConstraint.mouse.position)
            ) {
              var bodyUrl = body.url;
              console.log("Body.Url >> " + bodyUrl);
              if (bodyUrl != undefined) {
                window.open(bodyUrl, "_blank");
                console.log("Hyperlink was opened");
              }
              break;
            }
          }
        }
      }
    });
  
    Engine.run(engine);
  
    Render.run(render);
  }
  
  var containerElement = document.querySelector(".balls-area");
  
  var observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        initSimulation();
        observer.disconnect();
      }
    });
  }, {});
  
  observer.observe(containerElement);
  