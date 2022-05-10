import { getCharacter } from 'rickmortyapi';

//Variables
const URL = "https://rickandmortyapi.com/api/character/"; //API Link

//Element References
const $name = $("#name");
const $species = $("#species");
const $status = $("#status");
const $form = $("form");
const $input = $('input[type="text]');

//Event Listeners
$form.on("submit", getCharData);

//Functions
function getCharData(event) {
  event.preventDefault();
  const userInput = $input.val(); //establishing/storing the value of the user input bar (so the user's actual input), into a variable

  $.ajax(URL + userInput).then(function(data) {
    console.log(data);
    $name.text(data.name);
    $species.text(data.species);
    $status.text(data.status);
    $("main").append(`<img src = "${data.image}"/>`); //COME BACK TO CHANGE TO API'S POSTER NAME
  }),
    function (error) {
      console.log(error);
    };
}
