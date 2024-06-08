<script src="https://unpkg.com/split-type"></script>
<script type="text/javascript" src="https://kenwheeler.github.io/slick/slick/slick.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.19.0/matter.min.js"></script>

<script>
let typeSplit = new SplitType(".avatar-text", {
types: "words, chars",
tagName: "span"
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

$(".avatar-text").each(function (index) {
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

</script>


<script>

  $(document).ready(function() {
  $('.images').slick({
          centerMode: true,
      dots: false,
      infinite: true,
      arrows: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,

  });

});

</script>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.4/dist/locomotive-scroll.css">
<!-- Browser support for IE 11 -->
<script nomodule src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.6.0/polyfill.min.js" crossorigin="anonymous"></script>
<script nomodule src="https://polyfill.io/v3/polyfill.min.js?features=Object.assign%2CElement.prototype.append%2CNodeList.prototype.forEach%2CCustomEvent%2Csmoothscroll" crossorigin="anonymous"></script>
<!-- end of Browser support for IE 11-->

<script src="https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.4/dist/locomotive-scroll.min.js"></script>
<script>
const locoScroll = new LocomotiveScroll({
el: document.querySelector(".locomotive-scroll"),
smooth: true,
smartphone: {
  smooth: true, 
  breakpoint: 0
},
tablet: {
    smooth: true
},
smoothMobile: 0,
multiplier: 1.0,
});

// Wait 2 seconds then calculate the new page height
setTimeout(() => {  
  locoScroll.update();
}, 2000);

// Optional Script for Anchor Links
$('.nav__link.is--first').on('click', function() {
      const slider = document.querySelector('#about');
  locoScroll.scrollTo(slider)
});

$('.nav__link.is--second').on('click', function() {
      const slider = document.querySelector('#projects');
  locoScroll.scrollTo(slider)
});

$('.nav__link.is--third').on('click', function() {
      const slider = document.querySelector('#contact');
  locoScroll.scrollTo(slider)
});
</script>


<!--falling text-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.19.0/matter.min.js"></script>
<script>
const splitWords = () => {
  const textNode = document.querySelector(".text-block");
  const text = textNode.textContent;
  const newDomElements = text.split(" ").map((text) => {
    const highlighted =
          text.startsWith('Academy of Arts') ||
          text.startsWith('Salv Technologies');
    return `<span class="word ${
    highlighted ? "highlighted" : null
  }">${text}</span>`;
  });
  textNode.innerHTML = newDomElements.join(" ");
};

const renderCanvas = () => {
  const Engine = Matter.Engine;
  const Render = Matter.Render;
  const World = Matter.World;
  const Bodies = Matter.Bodies;
  const Runner = Matter.Runner;
  const params = {
    isStatic: true,
    render: {
      fillStyle: "transparent"
    }
  };
  const canvasSize = {
    width: window.innerWidth,
    height: window.innerHeight
  };
  const engine = Engine.create({});

  const render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      ...canvasSize,
      background: "transparent",
      wireframes: false
    }
  });
  const floor = Bodies.rectangle(
    canvasSize.width / 2,
    canvasSize.height,
    canvasSize.width,
    50,
    params
  );
  const wall1 = Bodies.rectangle(
    0,
    canvasSize.height / 2,
    50,
    canvasSize.height,
    params
  );
  const wall2 = Bodies.rectangle(
    canvasSize.width,
    canvasSize.height / 2,
    50,
    canvasSize.height,
    params
  );
  const top = Bodies.rectangle(
    canvasSize.width / 2,
    0,
    canvasSize.width,
    50,
    params
  );
  const wordElements = document.querySelectorAll(".word");
  const wordBodies = [...wordElements].map((elemRef) => {
    const width = elemRef.offsetWidth;
    const height = elemRef.offsetHeight;
    const rect = elemRef.getBoundingClientRect();
    const initialX = rect.left + window.scrollX + width / 20;
    const initialY = rect.top + window.scrollY + height / 20;

    return {
      body: Matter.Bodies.rectangle(initialX, initialY, width, height, {
        render: {
          fillStyle: "transparent"
        }
      }),
      elem: elemRef,
      render() {
        const { x, y } = this.body.position;
        this.elem.style.position = 'absolute';
        this.elem.style.top = `${y - height / 20}px`;
        this.elem.style.left = `${x - width / 20}px`;
        this.elem.style.transform = `rotate(${this.body.angle}rad)`;
      }
    };
  });

  const mouse = Matter.Mouse.create(document.body);
  const mouseConstraint = Matter.MouseConstraint.create(engine, {
    mouse,
    constraint: {
      stiffness: 0.2,
      render: {
        visible: false
      }
    }
  });
  mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
  mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);

  World.add(engine.world, [
    floor,
    ...wordBodies.map((box) => box.body),
    wall1,
    wall2,
    top,
    mouseConstraint
  ]);
  render.mouse = mouse;
  Runner.run(engine);
  Render.run(render);

  (function rerender() {
    wordBodies.forEach((element) => {
      element.render();
    });
    Matter.Engine.update(engine);
    requestAnimationFrame(rerender);
  })();
};

window.addEventListener("DOMContentLoaded", (event) => {
  const breakButton = document.querySelector('.break-button');
  if (breakButton) {
    breakButton.addEventListener('click', (event) => {
      splitWords();
      renderCanvas();
    });
  }
});
</script>