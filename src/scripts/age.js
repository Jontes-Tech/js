// Defining redraw function
const draw = () => {
let ageSecs = Math.round((new Date() - new Date("2009/02/01")) / 1000);
let ageYears = ageSecs / 31556926;
let ageWholeYears = Math.floor(ageYears);
document.getElementById('content').innerHTML = `<h1>Age Of Jonte</h1><p>Jonte is bragging about basically being a toddler.<p><li>Approximate Unix Time Epoch of birth: 1233516000<li>Seconds alive: ${ageSecs}</li><li>Years alive: ${ageYears}</li><li>Whole years alive: ${ageWholeYears}</li><button onclick="draw()">Reload</button>`
}

// Init
draw();
document.getElementById('title').textContent = 'Age of Jonte'