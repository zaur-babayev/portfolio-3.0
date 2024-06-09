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
