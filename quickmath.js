//html elements
const output = document.getElementById("output");
const questionBox = document.getElementById("question-box")
const randomiseButton = document.getElementById("maths-btn");

//question elements
let question = ''

let connectCosts = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 20, 21, 23, 24, 25,26, 29]
let generatorCost = [10, 15, 20];

function makeQuestion(){
  let generatorsToBuy = Math.floor(Math.random()*4)+1
    while(generatorsToBuy > 0){
      //should be randomly adding a connection fee and a generator cost should be one less connectiron cost
      // get a random element of array
      question = connectCosts.pop(Math.floor(Math.random()*connectCosts.length));
      console.log(question);
      generatorsToBuy = generatorsToBuy--;
    }
};

function getEntEpisodes() {
  entEpisodes.forEach((episode) => {
    if (episode.season >= entStart.value && episode.season <= entEnd.value) {
      selectedEpisodes.push(episode);
    }
  });
}


function setQuestion (){
questionBox.innerText =  question;
};


randomiseButton.addEventListener("click", setQuestion);
