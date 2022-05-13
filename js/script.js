//import { getCharacter } from 'rickmortyapi';

//Element References
const $name = $("#name");
const $species = $("#species");
const $status = $("#status");
const $type = $("#Type");
const $gender = $("#gender");
const $form = $("form");
const $input = $('input[type="text"]');
const userInput = $input.val(); //establishing/storing the value of the user input bar (so the user's actual input), into a variable
let searchBarInput = null;

//Variables
let URL = "https://rickandmortyapi.com/api/character/265"; //API Link to Pickle Rick

//Event Listeners
$form.submit(getCharData);

$("#target").submit(function (event) {
  event.preventDefault();
});

//Functions
function getCharData(event) {
  if (event) {
    event.preventDefault();
    console.log(URL);
  }

  $.ajax(URL).then(function (data) {
    console.log(data);
    $name.text(data.name);
    $species.text(data.species);
    $status.text(data.status);
    $gender.text(data.gender);
    $("main").append(`<img src = "${data.image}"/>`);
  }),
    function (error) {
      console.log(error);
    };
}

//Future Project: Element References
//const $form = $("form");
//const $input = $('input[type="text"]');
//const userInput = $input.val(); //establishing/storing the value of the user input bar (so the user's actual input), into a variable
//let searchBarInput = null;

//Future Project: Event Listeners
//console.log($input)
//$("#target").submit(getCharData);
//$form.submit(getCharData);
//console.log($("#searchBar").val())

//Future Project: Functions
// function handler(event) {
//     event.preventDefault();
//     searchBarInput = $("#searchBar").val()
//     console.log(searchBarInput)
// console.log(event)
// console.log($("#searchBar").val())
