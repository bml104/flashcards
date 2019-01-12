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
    front: 'hola!',
    back: 'Hello!',
    flipped: false,
  },
  {
    front: "?Que' tal?",
    back: "how's it going?",
    flipped: false,

  },
  {
    front: 'Bien, gracias',
    back: 'Good, thanks',
    flipped: false,
  },
  {
    front: 'soy',
    back: 'im',
    flipped: false,
  },
  {
    front: 'Encantado',
    back: 'Nice to meet you(male)',
    flipped: false,
  },
  {
    front: 'Encandada',
    back: 'Nice to meet you(female)',
    flipped: false,
  },
  {
    front: 'Hasta luego!',
    back: 'See you later!',
    flipped: false,
  },
  {
    front: 'Como te llamas',
    back: "What's your name?",
    flipped: false,
  },
  {
    front: 'Cuantos anos tiens?',
    back: 'How old are you?',
    flipped: false,
  },
  {
    front: 'Tengo ... anos',
    back: 'im ... years old',
    flipped: false,
  },
  {
    front: 'yo',
    back: 'i',
    flipped: false,
  },
  {
    front: 'tu`',
    back: 'you(informal)',
    flipped: false,
  },
  {
    front: 'el',
    back: 'he',
    flipped: false,
  },
  {
    front: 'ella',
    back: 'she',
    flipped: false,
  },
  {
    front: 'usted',
    back: 'you(formal)',
    flipped: false,
  },
  {
    front: 'si',
    back: 'yes',
    flipped: false,
  },
  {
    front: 'perdon',
    back: 'excuse me/sorry',
    flipped: false,
  },
  {
    front: 'de nada',
    back: "you're welcome",
    flipped: false,
  },
  {
    front: 'lo seiento',
    back: "i'm sorry",
    flipped: false,
  },
  {
    front: 'por favor',
    back: 'please',
    flipped: false,
  },
  {
    front: 'Donde estan',
    back: 'Where are they',
    flipped: false,
  },
  {
    front: 'No entiendo',
    back: 'I do not understand',
    flipped: false,
  },
  {
    front: 'los  servicios',
    back: 'services',
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
    },
    randomList: function(rand){
      return rand.sort(function(){return 0.5 - Math.random()});
    }
  }
  });