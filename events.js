var articleSectionArray = document.getElementsByClassName("article-section");
var outputTarget = document.getElementById("output-target");
var h1Title = document.getElementById("page-title");
var textBoxInput = document.getElementById("keypress-input");


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