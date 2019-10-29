document.addEventListener("DOMContentLoaded", function(event) {

  let cards = getCards();
  let cardContainer = document.getElementById("stackedcards-container");
  let formContent = cardContainer.innerHTML;
  for(let i = 0;i<100; i++){
    cardContainer.innerHTML += formContent;
  }
  window.setTimeout(init,1);

});

function create_new_voc(form){
  let lang1 = document.getElementById("lang1").value;
  let lang2 = document.getElementById("lang2").value;

  addVoc(lang1, lang2);
  onActionRight();

}
