const circusLocation = "hidden circus tent";
const booleanValue = circusLocation.includes("circus");
const mathResult = 4 + 5;

let circusAdjective = "crazy";
let storyTone = "Amusing";
let clownOutfit = "colorful polka-dot suit";
let clownMessage = "I once tried to juggle spaghetti. It got messy!";

const clown = {
    name: "Bozo",
    action: "juggled flaming pineapples",
    sound: "honked honked",
}

const clownName = clown.name;
const clownAction = clown.action;
const clownSound = clown.sound;

const story = `In a ${circusAdjective} circus tent, I stumbled upon a hidden clown factory. The ${clownOutfit} clowns were juggling balloons endlessly. One clown, named ${clownName}, ${clownAction}. It ${clownSound} and said, '${clownMessage}' Did you know 4 + 5 equals ${mathResult}? ${storyTone}, right?`;

document.getElementById("madlibs-output").textContent = story;

console.log(story);

