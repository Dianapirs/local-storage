/*let name1;

if(!localStorage.getItem('name')) {
    name1 = prompt('What is your name?');
    localStorage.setItem('name', name1);
} 

console.log(localStorage.getItem('name'));*/

/*let isCookieAgree;
if(!localStorage.getItem('agree') || localStorage.getItem('agree') === 'false') {
    isCookieAgree = confirm('Do you agree?');

    localStorage.setItem('agree', isCookieAgree);
} 

setTimeout(() => {
    localStorage.removeItem('agree');
}, 3000);*/
//localStorage.clear();

const human = {
    name: 'Bob',
    age: 26,
    country: 'Belarus'
}

if(!localStorage.getItem('human')) {
    let stringifyHuman = JSON.stringify(human);
    localStorage.setItem('human', stringifyHuman);
}

const btnChangeAge = document.createElement('button');
btnChangeAge.innerText = '+ increase age';
document.body.appendChild(btnChangeAge);
btnChangeAge.addEventListener('click', () => {
    human.age++
    console.log(human);
});
const parseJsonHuman = localStorage.getItem('human');
console.log(JSON.parse(parseJsonHuman));


const btnSave = document.createElement('button');
btnSave.innerText = 'Save human age';
document.body.appendChild(btnSave);

btnSave.addEventListener('click', () => {
    stringifyHuman = JSON.stringify(human);
    localStorage.setItem('human', stringifyHuman);
});




