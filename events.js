var articleSectionArray = document.getElementsByClassName("article-section");
var outputTarget = document.getElementById("output-target");
var h1Title = document.getElementById("page-title");
var textBoxInput = document.getElementById("keypress-input");
var changeTextColorButton = document.getElementById("add-color");
var makeLargerButton = document.getElementById("make-large");
var addBorderButton = document.getElementById("add-border");
var addRoundingButton = document.getElementById("add-rounding");
var guineaPig = document.getElementById("guinea-pig");


// When this function gets called in the for loop below, 'i' gets passed to it during the original 
//  call.  It returns an anon func the has the [i] element evaluated.
function reportSectionClick(i) {
  return function(){
    outputTarget.textContent = "you clicked on the '" + articleSectionArray[i].textContent + "' section";
  };
}

function outputChange(textString) {
  return function() {
    outputTarget.textContent = textString;
  };
}

function changeTextColor() {
  return function() {
    guineaPig.classList.add("css-make-blue");
  };
}

function makeLarger() {
  return function() {
    guineaPig.classList.add("css-get-larger");
  };
}

function addBorder() {
  return function() {
    guineaPig.classList.add("css-add-border");
  };
}

function makeRounded() {
  return function() {
    guineaPig.classList.add("css-round-border");
  };
}

function outputMimicTextBox() {
  return function() {
    outputTarget.textContent = textBoxInput.value;
  };
}

for (var i=0; i < articleSectionArray.length; i++) {
       articleSectionArray[i].addEventListener("click", reportSectionClick(i));
};

h1Title.addEventListener("mouseover", outputChange("You moved your mouse over the header"));
h1Title.addEventListener("mouseout", outputChange("You left me!!"));
textBoxInput.addEventListener("input", outputMimicTextBox());
changeTextColorButton.addEventListener("click", changeTextColor());
makeLargerButton.addEventListener("click", makeLarger());
addBorderButton.addEventListener("click", addBorder());
addRoundingButton.addEventListener("click", makeRounded());
