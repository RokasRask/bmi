
const heightInput = document.querySelector(".heightInput");
const weightInput = document.querySelector(".weightInput");
const buttonCalculate = document.querySelector(".calculate");
const div = document.querySelector(".bmiCalcContainer");
const info = document.querySelector(".info");

buttonCalculate.addEventListener("click", () => {
    const heightValue = parseFloat(heightInput.value);
    const weightValue = parseFloat(weightInput.value);

    removeResetBtn();

    if (!heightInput.value && !weightInput.value) {
        info.textContent = "Enter height and weight";
        return;
    } else if (!heightInput.value) {
        info.textContent = "Enter height";
        return;
    } else if (!weightInput.value) {
        info.textContent = "Enter weight";
        return;
    } else if (heightValue <= 0 || weightValue <= 0) {
        info.textContent = "Please enter correct values";
        return;
    }

    calculateBmi(heightValue, weightValue);
    createResetBtn();
});

function calculateBmi(height, weight) {
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);

    if (bmi < 18.5) {
        info.textContent = `BMI: ${bmi.toFixed(2)}: Underweight`;
    } else if (bmi >= 18.5 && bmi < 25) {
        info.textContent = `BMI: ${bmi.toFixed(2)}: Normal`;
    } else if (bmi >= 25 && bmi < 30) {
        info.textContent = `BMI: ${bmi.toFixed(2)}: Overweight`;
    } else if (bmi >= 30 && bmi < 40) {
        info.textContent = `BMI: ${bmi.toFixed(2)}: Obese`;
    } else {
        info.textContent = `BMI: ${bmi.toFixed(2)}: Severely obese`;
    }

    if (bmi >= 18.5 && bmi < 25){
        info.style.color = "limegreen";
    } else {
        info.style.color = "red";
    }
}

function createResetBtn() {
    const buttonReset = document.createElement("button");
    buttonReset.className = "resetBtn";
    buttonReset.textContent = "Reset";
    div.appendChild(buttonReset);
    buttonReset.addEventListener("click", () => {
        heightInput.value = "";
        weightInput.value = "";
        info.textContent = "";
        buttonReset.remove();
    });
}

function removeResetBtn() {
    const buttonReset = document.querySelector(".resetBtn");
    if (buttonReset) {
        buttonReset.remove();
    }
}