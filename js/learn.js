document.addEventListener("DOMContentLoaded", function (event) {

  let cards = getCards();
  let cardContainer = document.getElementById("stackedcards-container");
  let cardTemplate = document.getElementById("card-template").innerHTML;
  for (let card of cards) {
    let content = cardTemplate.replace("{{count}}", card["count"]).replace("{{id}}", card["id"]).replace("{{lang1}}", card["lang1"]).replace("{{lang2}}", card["lang2"]).replace("{{lang2}}", card["lang2"]);

    var node = document.createElement("div");
    node.classList = "card-item";
    node.innerHTML = content;
    cardContainer.appendChild(node);
  }

  window.setTimeout(init, 1000);

});

last_wrong = false;

function validate_this(form, id) {
  cards = getCards();
  card = cards.find( c => c.id == id);

  input = form.querySelector(".reply");
  if (input.value === card["lang2"]) {
    onActionRight();
    if(!last_wrong){
      if(!card["count"]){
        card["count"] = 0;
      }
      card["count"] += 1;
      setCards(cards);
    }
    last_wrong = false;
  } else {
    let cardContainer = document.getElementById("stackedcards-container");
    let cardTemplate = document.getElementById("card-template").innerHTML;

    let content = cardTemplate.replace("{{id}}", id).replace("{{count}}", card["count"]).replace("{{lang1}}", card["lang1"]).replace("{{lang2}}", card["lang2"]).replace("{{lang2}}", card["lang2"]);

    if(!last_wrong) {
      var node = document.createElement("div");
      node.classList = "card-item";
      node.innerHTML = content;
      index = 3;
      if (index >= cardContainer.children.length) {
        cardContainer.appendChild(node)
      } else {
        cardContainer.insertBefore(node, cardContainer.children[index])
      }

      form.parentElement.classList += " invalid";

      init();
    }

    input.classList += " wrongInput";
    form.querySelector(".rightAnswer").classList += " visible";
    last_wrong = true;
  }
  console.log();
  console.log(form);
}
