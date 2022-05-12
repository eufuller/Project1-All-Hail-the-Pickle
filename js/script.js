//import { getCharacter } from 'rickmortyapi';

//Element References
const $name = $("#name");
const $species = $("#species");
const $status = $("#status");
const $form = $("form");
const $input = $('input[type="text"]');
const userInput = $input.val(); //establishing/storing the value of the user input bar (so the user's actual input), into a variable
let searchBarInput = null;

//Variables
let URL = "https://rickandmortyapi.com/api/character/2"; //API Link


//Event Listeners

//console.log($input)
//$("#target").submit(getCharData);
$form.submit(getCharData);

$("#target").submit(function(event){
    event.preventDefault()
    console.log($("#searchBar").val())
})

/*
function handler(event) {
  event.preventDefault();
  searchBarInput = $("#searchBar").val()
  console.log(searchBarInput)
  // console.log(event)
  // console.log($("#searchBar").val())
}
*/

//Functions
function getCharData(event) {
  if (event) {
    event.preventDefault();
    //console.log(event)
    console.log(URL);
  }

  //console.log($("#searchBar").val());
  
  $.ajax(URL).then(function (data) {
    // console.log(URL)
    // console.log(data)
    $name.text(data.name);
    $species.text(data.species);
    $status.text(data.status);
    $("main").prepend(`<img src = "${data.image}"/>`);
    
  }),
    function (error) {
      console.log(error);
    };
}
