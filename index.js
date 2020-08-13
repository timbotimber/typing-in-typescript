// List of sentences
const thingsILike = [
    "Bill Murray",
    "Tom And Jerry",
    "Synths",
    "The Empire Strikes Back",
    "Javascript",
];
// phrase being edited
let phrase = 0;
// Character number of the current prase being processed
let phraseCharacter = 0;
// Holds the handle returned from setInterval
let intervalValue;
const element = document.querySelector("#text");
const cursor = document.querySelector("#cursor");
// Implements typing effect
function Type() {
    // Get substring with 1 character added
    let text = thingsILike[phrase].substring(0, phraseCharacter + 1);
    element.innerHTML = text;
    phraseCharacter++;
    // If full sentence has been displayed then start to delete the sentence after some time
    if (text === thingsILike[phrase]) {
        // Hide the cursor
        cursor.style.display = "none";
        clearInterval(intervalValue);
        setTimeout(function () {
            intervalValue = setInterval(Delete, 100);
        }, 2000);
    }
}
// Implements deleting effect
function Delete() {
    // Get substring with 1 character deleted
    let text = thingsILike[phrase].substring(0, phraseCharacter - 1);
    element.innerHTML = text;
    phraseCharacter--;
    // If sentence has been deleted then start to display the next sentence
    if (text === "") {
        clearInterval(intervalValue);
        // If current sentence was last then display the first one, else move to the next
        if (phrase == thingsILike.length - 1)
            phrase = 0;
        else
            phrase++;
        phraseCharacter = 0;
        // Start to display the next sentence after some time
        setTimeout(function () {
            cursor.style.display = "inline-block";
            intervalValue = setInterval(Type, 100);
        }, 2000);
    }
}
// Start the typing effect on load
intervalValue = setInterval(Type, 100);
