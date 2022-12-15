const w = parseInt(prompt("Hur mycket väger din bro i gram * 10? ex: 1264"))
const h = parseInt(prompt("Hur mycket höll den i KG * 10? ex: 45kg"))

document.getElementById('title').textContent = 'Bridgecalc'
document.getElementById('content').innerText = "Din bro håller: "+h/w
