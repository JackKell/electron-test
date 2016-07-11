// const remote = require('electron').remote
// const main = remote.require('./main.js');
/*
const jsonfile = require('jsonfile');

const dataFile = '${__dirname}/app/data.json';

let count = document.getElementById('count');

jsonfile.readFile(dataFile, function (err, obj) {
	count.textContent = obj.count;
});

function addCount(delta) {
  count.textContent = Number(count.textContent) + delta;
	let object = {count: count.textContent};
	jsonfile.writeFile(dataFile, object, function (err) {
		console.error(err);
	});
};

let incButton = document.createElement('button');
incButton.textContent = 'Increment';

incButton.addEventListener('click', () => {
	addCount(1);
	console.log(count);
}, false);

let decButton = document.createElement('button')
decButton.textContent = 'Decrement';

decButton.addEventListener('click', () => {
	addCount(-1);
	console.log(count);
}, false);

document.body.appendChild(incButton);
document.body.appendChild(decButton);
*/
