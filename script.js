// document.addEventListener("click", changeColor, false);

//       function changeColor() {
//         document.body.style.backgroundColor = "#d8aaf6";
//       }

// --------------------------------------------------------------------------------

let bestButton = document.querySelector('button')

bestButton.addEventListener('click', function() {           //su paprasta funkcija
    alert('Rytinis kavos puodukas')
})

// bestButton.addEventListener('click', () => {           //su arrow funkcija
//     alert('Rytinis kavos puodukas')
// })

// --------------------------------------------------------------------------------

// Padaryti, kad paspaudus ant mygtuko, po apačia atsirastų paragrafe tekstas apie jus.
let yetAnotherButton = document.createElement('button')
yetAnotherButton.classList.add('info-button')
yetAnotherButton.textContent = 'Info about me'
document.body.append(yetAnotherButton)

let paragraph = document.createElement('p')
paragraph.classList.add('info-about-me')
document.body.append(paragraph)

yetAnotherButton.addEventListener('click', () => {
    paragraph.textContent = '404 info not found!'
    paragraph.style.color = 'red'
    paragraph.style.fontSize = '20px'
    paragraph.style.fontWeight = 'bold'
})

// CAO pavyzdys: 
// document.querySelector('button').addEventListener('click', () => {
//   document.querySelector('p').innerText = 'Some text about me';
// });

// --------------------------------------------------------------------------------


// Sukurkite programą, kurioje bus h1 tekstas su skaičiumi ir mygtukas. Paspaudus ant mygtuko, skaičius padidėja +1.

let increaseButton = document.createElement('button')
increaseButton.textContent = '+1'
document.body.append(increaseButton)

let heading = document.createElement('h1')
heading.classList.add('increasing-digit')
heading.style.border = '1px, solid'
heading.textContent = 'Digit: '

document.body.append(heading)

let increasingNumberElement = document.createElement('span')
heading.append(increasingNumberElement)

let increasingNumber = 0

increaseButton.addEventListener('click', () => {
    increasingNumber++
    increasingNumberElement.innerText = increasingNumber
})

// CAO pavyzdys:

// let counter = 0;

// document.querySelector('button').addEventListener('click', () => {
//   counter++;
//   document.querySelector('h1').innerText = counter;
// });


// --------------------------------------------------------------------------------

// Sukurkite programą, kurioje ilgas paragrafas. Bandant kopijuoti kodą – išmeta, kad negalima kopijuoti.

let longTale = document.createElement('p')
longTale.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus autem aperiam sunt esse minus voluptate provident rem, ratione doloribus ullam ea alias laborum, corporis laudantium sint magni. Delectus, sit incidunt?'

document.body.append(longTale)

longTale.addEventListener('copy', () => {
    event.preventDefault()                      //veikia, stabdo copy veiksma, bet 'event' yra deprecated!
    alert(`Can't copy this text!`)
})

// CAO pavyzdys:

// document.querySelector('p').addEventListener('copy', () => {
//     event.preventDefault();
//     alert("Can't copy this")
//   });


// --------------------------------------------------------------------------------

// Sukurkite programą, kur paspaudus ant mygtuko – sugeneruoja random skaičių nuo 1 iki 100 ir jį išveda kaip h1 tekstą.

let rngGenerator = document.createElement('button')
rngGenerator.textContent = 'Randomiser'
document.body.append(rngGenerator)

let randomNumber = document.createElement('h1')
document.body.append(randomNumber)

function generateRandomNumber() {
    return Math.floor(Math.random() * 1000) +1
}

rngGenerator.addEventListener('click', () => {
    let randomisedNumber = generateRandomNumber()
    randomNumber.innerText = randomisedNumber
})


// CAO pavyzdys:

// function generateRandomNumber() {
//     return Math.floor(Math.random() * 100) + 1;
//   }
  
//   document.querySelector('button').addEventListener('click', () => {
//     const randomNumber = generateRandomNumber();
//     document.querySelector('h1').innerText = randomNumber;
//   });


// --------------------------------------------------------------------------------

// Sukurkite programą, kurioje du mygtukai – Turiu bent 18 metų ir Mažiau nei 18 metų. Jei paspaudžia ant pirmo mygtuko – išmeta h1 tekstą Alus. Jei antrą paspaudžia – išmeta alert su nepilnametis - nieko neturim.

let adult = document.createElement('button')
adult.textContent = "I'm already 18"
let youngling = document.createElement('button')
youngling.textContent = "I don't have 18 yet"

document.body.append(adult, youngling)

let possibleDrink = document.createElement('h1')
document.body.append(possibleDrink)

adult.addEventListener('click', () => {
    possibleDrink.textContent = 'Beer is your drink, can you bear it?!'
})

youngling.addEventListener('click', () => {
    alert('Honey, here is your milk with honey :)')
})


// CAO pavyzdys:
// document.getElementById('adult').addEventListener('click', () => document.getElementById('output').innerText = 'Alus');
// document.getElementById('child').addEventListener('click', () => alert('nepilnametis - nieko neturim'));

// --------------------------------------------------------------------------------

// Sukurkite programą, kuri sugeneruoja random skaičių nuo 1 iki 3, kai tik užsikrauna puslapis. Vartotojas skaičiaus nemato (bet jūs pasiconsole’inkite). Ekrane – trys mygtukai (1, 2, 3). Vartotojas turi spėti koks random skaičius susigeneravo. Jei atspėja – iššoka alert("Yay"), jei ne – alert("Nay").

function generateRandomNumber1() {
    return Math.floor(Math.random() * 3) +1
}
let randomNumber1 = generateRandomNumber1()
console.log(randomNumber1)

let first = document.createElement('button')
first.textContent = '1'
let second = document.createElement('button')
second.textContent = '2'
let third = document.createElement('button')
third.textContent = '3'

document.body.append(first, second, third)

first.addEventListener('click', () => {
    if(randomNumber1 === 1) {
        alert('Yay!')
    } else alert('Nay!')
})

second.addEventListener('click', () => {
    if(randomNumber1 === 2) {
        alert('Yay!')
    } else alert('Nay!')
})

third.addEventListener('click', () => {
    if(randomNumber1 === 3) {
        alert('Yay!')
    } else alert('Nay!')
})

// CAO pavyzdys:

// function generateRandomNumber() {
//     return Math.floor(Math.random() * 3) + 1;
//   }
//   const randomNumber = generateRandomNumber();
//   console.log(randomNumber);
  
//   document.getElementById('one').addEventListener('click', () => randomNumber === 1 ? alert('Yay') : alert('Nay'));
//   document.getElementById('two').addEventListener('click', () => randomNumber === 2 ? alert('Yay') : alert('Nay'));
//   document.getElementById('three').addEventListener('click', () => randomNumber === 3 ? alert('Yay') : alert('Nay'));

// --------------------------------------------------------------------------------

// Parašykite programą, kurioje būtų tekstas Nespauskite mygtuko. Vartotojui paspaudus bet kokį mygtuką turi pasikeisti tekstas į Neklausote manęs.

let restriction = document.createElement('h1')
restriction.textContent = "Don't push any buttons!!"
restriction.style.color = 'black'
restriction.style.fontSize = '40px'
restriction.style.fontWeight = 'bold'

document.body.append(restriction)

document.body.addEventListener('click', () => {
    let clickedThing = event.target.nodeName === 'BUTTON'                       //sita vieta pasiaiskinti daugiau!!
    if (clickedThing) {
        restriction.innerText = "Why you don't listen to me??!"
        restriction.style.color = 'red'
    }
})

// CAO pavyzdys:
// document.body.addEventListener('click', () => {
//     const isButton = event.target.nodeName === 'BUTTON';
//     if (isButton) {
//       document.getElementById('output').innerText = 'Neklausote manęs';
//     }
//   });


// --------------------------------------------------------------------------------

// Sukurkite h1, jam duokite 150vh aukštį ir 150vh line-height. Jame įrašykite Nejudinkite pelytės. Jeigu vartotojas pajudins pelytę – pakeiskite tekstą į Kiek galima neklausyti?!.

let warningHeading = document.createElement('h1')
warningHeading.textContent = 'Do not move the mouse pointer!'
warningHeading.style.height = '150vh'
warningHeading.style.lineHeight = '150vh'
warningHeading.style.textAlign = 'center'

document.body.append(warningHeading)

document.body.addEventListener('mousemove', () => {
    warningHeading.textContent = "I asked you to stay still! Why you don't listen to me?"
    warningHeading.style.color = 'red'
    warningHeading.style.fontSize = '50px'
})

// CAO pavyzdys:
// document.body.addEventListener('mousemove', () => document.getElementById('output').innerText = 'Kiek galima neklausyti?!');