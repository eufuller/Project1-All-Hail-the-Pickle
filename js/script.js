//import { getCharacter } from 'rickmortyapi';

//Variables
const URL = "https://rickandmortyapi.com/api/character/2"; //API Link

//Element References
const $name = $("#name")
const $species = $("#species")
const $status = $("#status")
const $form = $("form")
const $input = $('input[type="text]')

//Event Listeners

console.log($input)
//$("#target").submit(getCharData);
$form.submit(getCharData)

function handler(event){
    event.preventDefault()
    console.log(event)
    console.log($("#searchBar").val())
}

//Functions
function getCharData(event) {
  if (event) {
    event.preventDefault()
    console.log(event)
  }
  
    console.log($("#searchBar").val())
  //const userInput = $input.val(); //establishing/storing the value of the user input bar (so the user's actual input), into a variable

  $.ajax(URL).then(function (data) {
    console.log(data)
    $name.text(data.name)
    $species.text(data.species)
    $status.text(data.status)
    $("main").prepend(`<img src = "${data.image}"/>`)
  }),
    function (error) {
      console.log(error);
    };
}
