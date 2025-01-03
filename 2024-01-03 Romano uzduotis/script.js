function updateButtonsAndColor() {
    let value = parseInt(digitDisplay.textContent, 10);
    if (value < 2) {
        minusButton.setAttribute('disabled', true);
    } else {
        minusButton.removeAttribute('disabled');
    };

    if (value > 9) {
        plusButton.setAttribute('disabled', true);
    } else {
        plusButton.removeAttribute('disabled');
    };

    if (value < 3) {
        minus2Button.setAttribute('disabled', true);
    } else {
        minus2Button.removeAttribute('disabled');
    };

    if (value > 8) {
        plus2Button.setAttribute('disabled', true);
    } else {
        plus2Button.removeAttribute('disabled');
    };

    if (value <= 5) {
        minus5Button.setAttribute('disabled', true);
    } else {
        minus5Button.removeAttribute('disabled');
    };

    if (value > 5) {
        plus5Button.setAttribute('disabled', true);
    } else {
        plus5Button.removeAttribute('disabled');
    };

    if (value >= 5) {
        digitDisplay.style.color = 'green';
        input.style.color = 'green';
    } else {
        digitDisplay.style.color = 'red';
        input.style.color = 'red';
    };
};


const defaultValue = 5;

let counter = document.querySelector('#numbers');

let digitDisplay = document.createElement('h3');
digitDisplay.classList.add('digitOutputDisplay');
digitDisplay.textContent = '5';
digitDisplay.style.fontSize = '50px';
digitDisplay.style.margin = '10px';

let gradesDisplay = document.createElement('h4');
gradesDisplay.textContent = 'Grades:';

let gradesList = document.createElement('ul');

//---------BUTTONS/INPUT--------------------------------------------

let resetButton = document.createElement('button');
resetButton.textContent = 'RESET';

let registerGradeButton = document.createElement('button');
registerGradeButton.textContent = 'Įrašyti balą';

let removeAllGradesButton = document.createElement('button');
removeAllGradesButton.textContent = 'Ištrinti visus balus'

let plusButton = document.createElement('button');
plusButton.textContent = '+';
let minusButton = document.createElement('button');
minusButton.textContent = '-';

let plus2Button = document.createElement('button');
plus2Button.textContent = '+2';
let minus2Button = document.createElement('button');
minus2Button.textContent = '-2';

let plus5Button = document.createElement('button');
plus5Button.textContent = '+5';
let minus5Button = document.createElement('button');
minus5Button.textContent = '-5';

counter.append(digitDisplay, minus5Button, minus2Button, minusButton, plusButton, plus2Button, plus5Button, resetButton, registerGradeButton, gradesDisplay, removeAllGradesButton, gradesList);

let input = document.createElement("input");
input.type = "number";
input.min = 1;
input.placeholder = 5;
input.max = 10;
counter.before(input);

//----------EVENTS LISTENERS----------------------------

plusButton.addEventListener('click', () => {
    let currentDigit = parseInt(digitDisplay.textContent, 10);
    digitDisplay.textContent = currentDigit + 1;
    input.value = digitDisplay.textContent;
    updateButtonsAndColor();
});
minusButton.addEventListener('click', () => {
    let currentDigit = parseInt(digitDisplay.textContent, 10);
    digitDisplay.textContent = currentDigit - 1;
    input.value = digitDisplay.textContent;
    updateButtonsAndColor();
});

plus2Button.addEventListener('click', () => {
    let currentDigit = parseInt(digitDisplay.textContent, 10);
    digitDisplay.textContent = currentDigit + 2;
    input.value = digitDisplay.textContent;
    updateButtonsAndColor();
});
minus2Button.addEventListener('click', () => {
    let currentDigit = parseInt(digitDisplay.textContent, 10);
    digitDisplay.textContent = currentDigit - 2;
    input.value = digitDisplay.textContent;
    updateButtonsAndColor();    
});

plus5Button.addEventListener('click', () => {
    let currentDigit = parseInt(digitDisplay.textContent, 10);
    digitDisplay.textContent = currentDigit + 5;
    input.value = digitDisplay.textContent;
    updateButtonsAndColor();
});
minus5Button.addEventListener('click', () => {
    let currentDigit = parseInt(digitDisplay.textContent, 10);
    digitDisplay.textContent = currentDigit - 5;
    input.value = digitDisplay.textContent;
    updateButtonsAndColor();
});

resetButton.addEventListener('click', () => {
    digitDisplay.textContent = defaultValue;
    input.value = defaultValue;
    updateButtonsAndColor();
});

input.addEventListener("input", () => {
    digitDisplay.textContent = input.value;
    updateButtonsAndColor();
});

registerGradeButton.addEventListener('click', () => {
    let listedGrade = document.createElement('li');
    listedGrade.textContent = digitDisplay.textContent;
    listedGrade.style.color = digitDisplay.style.color;
    gradesList.prepend(listedGrade);

    let removeGradeButton = document.createElement('button');
    removeGradeButton.textContent = 'X';
    listedGrade.append(removeGradeButton);

    removeGradeButton.addEventListener('click', () => {
        listedGrade.remove();
    });
});

removeAllGradesButton.addEventListener('click', () => {
    gradesList.textContent = ''
});

// Užduotis:
// 1. Sukurti HTML elementą, kurio id „numbers"
// 2. JavaScript pagalba šio elemento viduje sukurti: h3 elementą ir du mygtukų elementus
// 4. Mygtukų tekstas turėtų būti „+" ir „-"
// 5. Sukurti „click" (paspaudimo) event listener'ius abiems mygtukams.
// 6. „-" mygtuko event listeneris turėtų iškviesti funkciją, kuri sumažina skaičių h3 elemente, o „+" mygtuko paspaudimas turėtų skaičių padidinti 
// 7. Jeigu skaitmuo h3 komponente yra mažesnis už du, tai „-" mygtukas turėtų patapti neveiksnus (disabled)- element.setAttribute('disabled', true) / element.removeAttribute
// ('disabled')
// 8. Jeigu skaitmuo h3 komponente yra didesnis už 9, tai „+" mygtukas turėtų patapti neveiksnus (disabled) 
// 9. Jeigu skaitmuo yra 5 arba daugiau, tai jo spalva turėtų būti žalia. Kitu atveju - raudona. 
// 10. Sukurti naują mygtuką „Reset". Jį paspaudus viskas atstatoma į pradinę padėtį. 
// 11. Sukurti du naujus mygtukus, kurie:
// 11.1. Prideda dvejetą prie esamos h3 elemento reikšmės.
// 11.2. Atima dvejetą iš esamos h3 elemento reikšmės. 
// 12. Sukurti du naujus mygtukus, kurie:
// 12.1. Prideda 5 prie esamos h3 elemento reikšmės.
// 12.2. Atima 5 iš esamos h3 elemento reikšmės. 
// 13. Sukurti input elementą (number tipo) ir jame įrašytą skaičių pridėti kaip h3 elemento tekstą. 
// 14. Sukurti naują elementą (h4) ir jį pridėti į „numbers" elemento pabaigą.
// 14.1. Šio elemento tekstas turėtų būti „Balai:" 
// 15. Sukurti naują elementą (ul) ir jį pridėti į „numbers" elemento pabaigą.
// 15.1. Sukurti naują mygtuką, kurio tekstas būtų „Įrašyti balą".
// 15.2. Paspaudus šį mygtuką, reikia paimti reikšmę iš h3 elemento ir sukurti naują li elementą bei jį prepend'inti prie ul elemento. 
// 16. Į li elementą įrašytas balas turi būti tos pačios spalvos kaip ir h3 elemente. 
// 17.1. Sukurti mygtuką ir jį įdėti į li elementą.
// 17.2. Paspaudus šį mygtuką, li elementas su balu turi būti ištrintas. 
// 18. Po h4 elementu pridėti mygtuką, kurio tekstas būtų „Ištrinti visus balus". Paspaudus šį mygtuką, ištrinami visi li elementai.