let currentStep = 1;

function goToNextStep() {
    if (currentStep < 5) { 
        currentStep++;
        document.getElementById(`step-${currentStep}`).checked = true;
        updateNextButtonVisibility();
    }
}
function updateNextButtonVisibility() {
    const nextBtn = document.getElementById("nextBtn");
    if (currentStep === 5) {
        nextBtn.style.display = "none";
    } else {
        nextBtn.style.display = "inline-block";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    updateNextButtonVisibility();
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
    let total = (adu * 500) + (enf * 100);
    tt.innerHTML = "TOTAL: " + total + " DH";
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





