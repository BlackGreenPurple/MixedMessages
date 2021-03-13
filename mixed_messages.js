//function for randon number generation
function randomNumberGen(length){
    return Math.floor(Math.random()*length);
}

//object filled with strings used for message generation
const zodiac = {
astroSign: ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricornus", "Aquarius", "Pisces"],
badOrGood: ["can expect good luck", "can expect bad luck"],
areaOfEffect: ["in personal life.", "in family affairs.", "in job affairs.", "in studies."]
};

//Array for the final message
let forecast = [];

//function to generate a message
function generateMessage(){
    for (let property in zodiac) {
        let indexOfProp = randomNumberGen(zodiac[property].length);
        forecast.push(zodiac[property][indexOfProp]);
    }
}
generateMessage();
console.log(forecast.join(' '));