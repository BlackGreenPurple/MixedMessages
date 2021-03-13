//arrays filled with strings used for message generation
const _astroSign = ["Aries ", "Taurus ", "Gemini ", "Cancer ", "Leo ", "Virgo ", "Libra ", "Scorpio ", "Sagittarius ", "Capricornus ", "Aquarius ", "Pisces "];
const _badOrGood = ["can expect good luck ", "can expect bad luck "];
const _areaOfEffect = ["in personal life.", "in family affairs.", "in job affairs.", "in studies."];

//function to generate a message
function randomize(){
    const sign = _astroSign[Math.floor(Math.random()*_astroSign.length)];
    const luck = _badOrGood[Math.floor(Math.random()*_badOrGood.length)];
    const area = _areaOfEffect[Math.floor(Math.random()*_areaOfEffect.length)];
    return sign+luck+area;
}
console.log(randomize());