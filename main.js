let currentStep = 1;
const totalSteps = 5;

function showStep(step) {
    document.querySelectorAll('.tab').forEach((tab) => {
        tab.style.display = 'none';
    });
    document.querySelector(`.tab-${step - 1}`).style.display = 'block';
    document.querySelector(`#step-${step}`).checked = true;
}
function ajouter() {
    let date = document.getElementById("datee").value;
    let arriVVer = document.getElementById("arriver").value;
    let dePPart = document.getElementById("depart").value;
    let spanDepart = document.querySelectorAll("#spanDepart");
    let daatee = document.getElementById("daatee");
    let spanArrivee = document.querySelectorAll("#spanArrivee");
    daatee.textContent = date
    spanDepart.forEach(span => {
        span.textContent = dePPart;
    });

    spanArrivee.forEach(span => {
        span.textContent = arriVVer;
    });
}

function goToNextStep() {
    if (currentStep < totalSteps) {
        currentStep++;
        showStep(currentStep);
    }

    ajouter();
}

function goToPreviousStep() {
    if (currentStep > 1) {
        currentStep--;
        showStep(currentStep);
    }
}
document.addEventListener('DOMContentLoaded', () => {
    showStep(currentStep);
});

let num1 = document.getElementById("nr0");
let number1 = Number(num1.textContent);
let num2 = document.getElementById("nr1");
let number2 = Number(num2.textContent);

function augmentation(){
    let maxcont = number1 + number2;
    if (maxcont < 12) {
        number1++;
        num1.innerHTML = number1;
    }
    Total();
}

function augmentation1(){
    let maxcont = number1 + number2;
    if (maxcont < 12) {
        number2++;
        num2.innerHTML = number2;
    }
    Total();
}

function diminution(){
    if (number1 > 0) {
        number1--;
        num1.innerHTML = number1;
    }
    Total();
}

function diminution1(){
    if (number2 > 0) {
        number2--;
        num2.innerHTML = number2;
    }
    Total();
}

function Total(){
    let adu = Number(document.getElementById("nr0").textContent);
    let enf = Number(document.getElementById("nr1").textContent);
    let tt = document.getElementById("total");
    let Ttotal = document.getElementById("PrixTotal")
    var total = (adu * 500) + (enf * 100);
    tt.innerHTML = "TOTAL: " + total + " DH";
    Ttotal.textContent = total
}

let cont = 0;
function sect(event) {
    let btn = event.target;
    let selectedColor = "rgb(57, 122, 157)";  
    let deselectedColor = "rgb(166, 205, 226)";

    if (cont < number1+number2) {

        if (btn.style.backgroundColor === deselectedColor) {
            cont++;
            btn.style.backgroundColor = selectedColor;
        } else {
            cont--;
            btn.style.backgroundColor = deselectedColor;
        }

    } else {
        if (cont > 0 && btn.style.backgroundColor === selectedColor) {
            cont--;
            btn.style.backgroundColor = deselectedColor;
        }
    }
}