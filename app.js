// 0 create dummy cards
// 1 display data
// 2 on click, flip card
// 3 get info for new card
  // create data properties for front and back
  // bind those to form inputs using vmodel
// 4 add card
// 5 delete card
// 6 animate card flip
// display error

// 0 create dummy cards
const cards = [
  {
    front: '2 + 2',
    back: '4',
    flipped: false,
  },
  {
    front: '3 + 3',
    back: '6',
    flipped: false,

  },
  {
    front: '4 + 4',
    back: '8',
    flipped: false,
  },
  {
    front: '5 + 5',
    back: '10',
    flipped: false,
  },
]; 


// 1 display data
  new Vue({
    el: '#flashcard-app',
    data: {
      cards: cards,
      newFront: '',
      newBack: '',
      error: false
      
    },
    methods: {
      toggleCard: function(card){
      card.flipped = !card.flipped;
      },
      addNew: function(){
        if(!this.newFront || !this.newBack){
          this.error = true;
        } else {
        this.cards.push({
          front: this.newFront,
          back: this.newBack,
          flipped: false
        });
        this.newFront = "";
        this.newBack = "";
      }
    }
  }
  });