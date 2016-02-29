var articleSectionArray = document.getElementsByClassName("article-section");
var outputTarget = document.getElementById("output-target");

// When this function gets called in the for loop below, 'i' gets passed to it during the original 
//  call.  It returns an anon func the has the [i] element evaluated.
function reportClick(i) {
  return function(){
    outputTarget.textContent = "you clicked on the '" + articleSectionArray[i].textContent + "' section";
  };
}

for (var i=0; i < articleSectionArray.length; i++) {
       articleSectionArray[i].addEventListener("click", reportClick(i));
};

