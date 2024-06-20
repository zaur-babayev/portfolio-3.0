let typeSplit = new SplitType(".nav-home, .navigation-link", {
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

$(".nav-home, .navigation-link").each(function (index) {
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


