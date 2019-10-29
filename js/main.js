function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

function addVoc(lang1, lang2){
  var cards = getCards();
  cards.push({"id": uuidv4(), "lang1":lang1, "lang2": lang2, "count": 0});
  setCards(cards);
}


function getCards(){
  let cards = localStorage.getItem('cards');
  if(!cards){
    cards = [];
    setCards(cards);
  }else{
    cards = JSON.parse(cards);
  }

  cards = cards.sort((a,b) => a.count<b.count?-1:1);

  return cards;
}

function setCards(cards) {
  localStorage.setItem('cards', JSON.stringify(cards));
}

