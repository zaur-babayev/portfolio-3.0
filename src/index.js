let typeSplit = new SplitType(".nav-home, .nav-link", {
  types: "words, chars",
  tagName: "span",
});

function getRandomLetter(length) {
  var result = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

$(".char").each(function (index) {
  let text = $(this).text();
  $(this).attr("letter", text);
});

$(".nav-home, .nav-link").each(function (index) {
  function resetText() {
    if (myInterval !== undefined) {
      clearInterval(myInterval);
    }
    chars.each(function (index) {
      let letter = $(this).attr("letter");
      $(this).text(letter);
    });
  }

  let myInterval;
  let chars = $(this).find(".char");
  $(this).on("mouseenter", function () {
    let length = chars.length;
    myInterval = setInterval(function () {
      chars.each(function (index) {
        if (index < length) {
          let letter = getRandomLetter(1);
          $(this).text(letter);
        } else {
          let letter = $(this).attr("letter");
          $(this).text(letter);
        }
      });
      length = length - 1;
    }, 100);
    setTimeout(() => {
      resetText();
    }, 600);
  });
  $(this).on("mouseleave", function () {
    resetText();
  });
});



// $(document).ready(function () {
//   $(".images").slick({
//     centerMode: true,
//     dots: false,
//     infinite: true,
//     arrows: false,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   });
// });

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".locomotive-scroll"),
  smooth: true,
  smartphone: {
    smooth: true,
    breakpoint: 0,
  },
  tablet: {
    smooth: true,
  },
  smoothMobile: 0,
  multiplier: 1.0,
});

// Wait 2 seconds then calculate the new page height
setTimeout(() => {
  locoScroll.update();
}, 2000);

// Optional Script for Anchor Links
$(".nav__link.is--first").on("click", function () {
  const slider = document.querySelector("#about");
  locoScroll.scrollTo(slider);
});

$(".nav__link.is--second").on("click", function () {
  const slider = document.querySelector("#projects");
  locoScroll.scrollTo(slider);
});

$(".nav__link.is--third").on("click", function () {
  const slider = document.querySelector("#contact");
  locoScroll.scrollTo(slider);
});

// falling tags
document.addEventListener('DOMContentLoaded', (event) => {
  // Initialize the simulation when the DOM is fully loaded
  var containerElement = document.querySelector(".balls-area");
  if (!containerElement) {
    console.error('balls-area element not found');
    return;
  }

  var containerWidth = containerElement.clientWidth + 2;
  var containerHeight = containerElement.clientHeight + 2;

  function createRender(element, engine) {
    return Matter.Render.create({
      element: element,
      engine: engine,
      options: {
        width: containerWidth,
        height: containerHeight,
        pixelRatio: 2,
        background: "transparent",
        wireframes: false
      }
    });
  }

  function createWalls() {
    return [
      Matter.Bodies.rectangle(containerWidth / 2 + 160, containerHeight + 80, containerWidth + 320, 160, { isStatic: true, render: { fillStyle: "#000000" }}),
      Matter.Bodies.rectangle(-80, containerHeight / 2, 160, containerHeight, { isStatic: true }),
      Matter.Bodies.rectangle(containerWidth + 80, containerHeight / 2, 160, 1200, { isStatic: true }),
      Matter.Bodies.rectangle(containerWidth / 2 + 160, -80, containerWidth + 320, 160, { isStatic: true })
    ];
  }

  function createTags() {
    const radius = 20;
    const tagsData = [
      { x: containerWidth / 2 + 150, y: 500, width: 164, height: 56, texture: "uiux.svg" },
      { x: containerWidth / 2 + 150, y: 460, width: 240, height: 56, texture: "wordpress.svg" },
      { x: containerWidth / 2 + 250, y: 420, width: 200, height: 56, texture: "webflow.svg" },
      { x: containerWidth / 2 - 75, y: 380, width: 160, height: 56, texture: "whitelevel.svg" },
      { x: containerWidth / 2 - 74, y: 540, width: 248, height: 56, texture: "webflow-green.svg" },
      { x: containerWidth / 2 + 174, y: 490, width: 105, height: 56, texture: "sass.svg" },
      { x: containerWidth / 2 - 142, y: 440, width: 186, height: 56, texture: "web.svg" },
      { x: containerWidth / 2 - 10, y: 260, width: 128, height: 56, texture: "startup.svg" },
      { x: containerWidth / 2 - 242, y: 420, width: 168, height: 56, texture: "maintence.svg" },
      { x: containerWidth / 2 + 60, y: 380, width: 155, height: 56, texture: "integration.svg" },
      { x: containerWidth / 2, y: 360, width: 180, height: 56, texture: "motion.svg" },
      { x: containerWidth / 2 - 59, y: 260, width: 172, height: 56, texture: "pay.svg" },
      { x: containerWidth / 2 - 59, y: 260, width: 115, height: 56, texture: "gsap.svg" },
      { x: containerWidth / 2 - 59, y: 260, width: 210, height: 56, texture: "figma.svg" },
      { x: containerWidth / 2 - 59, y: 260, width: 145, height: 56, texture: "migration.svg" },
    ];

    return tagsData.map(tag => 
      Matter.Bodies.rectangle(tag.x, tag.y, tag.width, tag.height, {
        chamfer: { radius: radius },
        render: {
          sprite: {
            texture: `https://uploads-ssl.webflow.com/64f41ea3b31af27272713c03/64f47540c9a2047edbb293d1_${tag.texture}`,
            xScale: 1,
            yScale: 1
          }
        }
      })
    );
  }

  function initSimulation() {
    var Engine = Matter.Engine,
        Render = Matter.Render,
        Events = Matter.Events,
        MouseConstraint = Matter.MouseConstraint,
        Mouse = Matter.Mouse,
        World = Matter.World,
        Bodies = Matter.Bodies;

    var engine = Engine.create();
    var world = engine.world;

    var render = createRender(containerElement, engine);

    var walls = createWalls();
    var tags = createTags();

    World.add(world, [...walls, ...tags]);

    var mouse = Mouse.create(render.canvas);
    var mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false }
      }
    });

    World.add(world, mouseConstraint);
    render.mouse = mouse;

    mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
    mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);

    let click = false;

    document.addEventListener("mousedown", () => (click = true));
    document.addEventListener("mousemove", () => (click = false));
    document.addEventListener("mouseup", () => console.log(click ? "click" : "drag"));

    Events.on(mouseConstraint, "mouseup", function (event) {
      var mouseConstraint = event.source;
      var bodies = engine.world.bodies;
      if (!mouseConstraint.bodyB) {
        for (var i = 0; i < bodies.length; i++) {
          var body = bodies[i];
          if (click === true) {
            if (Matter.Bounds.contains(body.bounds, mouseConstraint.mouse.position)) {
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

  var observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log('balls-area is in view, initializing simulation...');
        initSimulation();
        observer.disconnect();
      }
    });
  }, {});

  observer.observe(containerElement);
});
