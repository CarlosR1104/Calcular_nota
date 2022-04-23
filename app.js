const btncalculate = document.getElementById("calculate");
const body = document.getElementById("body")
const color = document.getElementById("color")
let number_one = document.getElementById("note_one");
let number_two = document.getElementById("note_two");
let name = document.getElementById("name");
let text = document.getElementById("text")



function calculate (){
    let not_one = parseFloat(number_one.value);
    let not_two = parseFloat(number_two.value);
    let note1 = not_one * 0.3;
    let not_final1 = not_one - note1;
    let note2 = not_two * 0.3;
    let not_final2 = not_two - note2;
    let not_three = (not_final1 + not_final2)/2;
    let note3 = not_three * 0.4;
    let not_final3 = not_three - note3;
    let note = (note1 + note2 + note3)
    body.style.background = color.value
    if (not_one >= 1 && not_two >= 1) {
        if (not_one <=5 && not_two <=5) {
            if (note >= 4) {
                text.textContent = "Cuadro de Honor, nota: "+note.toFixed(2);
                text.style.background = "blue"
                setTimeout(function(){
                    (text.textContent = "")
                },5000);
            }else if (note >=2 && note <= 3.4) {
                text.textContent ="puede recuperar, nota: "+note.toFixed(2);
                text.style.background = "green"
                setTimeout(function(){
                    (text.textContent = "")
                },5000);
            }else if (note < 2) {
                text.textContent ="friki, nota: "+note.toFixed(2);
                text.style.background = "red"
                setTimeout(function(){
                    (text.textContent = "")
                },5000);
            }
        }else{
            text.textContent = "Error el numero maximo es 5"
        }
    }else{
        text.textContent = "Error el numero minimo es 1"
    }
}
btncalculate.addEventListener("click", calculate)
/*
function validation(){

}
function convert_data(){

}
*/

