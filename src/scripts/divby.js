document.getElementById('title').textContent = 'DivBy'
document.getElementById('content').innerHTML = '<h1>DivBy - A simple tool by Jonte</h1> <p>This tool checks if the first input can be divided by the second one and produce a whole number (an integer)</p><input type="number" id="number" value="14"><br><input type="number" id="divby" value="7"><br><br><button onclick="divby();">Submit</button><br></br>'
function divby() {
    numberint = document.getElementById("number").value
    divbyint = document.getElementById("divby").value
    if ((numberint % divbyint == 0)) {
        alert("Your number is dividable by "+divbyint+"!")
    }
    else {
        alert("Your number is not dividable by "+divbyint+".")
    }
}