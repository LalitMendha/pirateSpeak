//This is the js file that converts English to pirate speak.

//Get the button id
var btnTranslate = document.querySelector("#btnTranslate");
//Add Event to button
btnTranslate.addEventListener("click", clickHandler);


function clickHandler() {
    //Get the input text
    var inputText = document.querySelector("#inputText").value;
    //Server URL
    var url = "https://api.funtranslations.com/translate/pirate.json";
    //Make the url to input to server 
    var urlInput = url + "?text=" + inputText
    // //encode URL
    urlInput = encodeURI(urlInput);
    //Get the Output box
    var outputText = document.querySelector("#outputText");
    //Call the server and give the query
    fetch(urlInput)
    .then((response) => response.json())
    .then(json=> outputText.innerText = json.contents.translated)
    .catch(handleError => console.log("Error occured while connecting to server !!"));
}
