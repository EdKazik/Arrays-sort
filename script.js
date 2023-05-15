
let a = prompt('what is the length of the array?');
const d = [];

for (let i = 0; i < a; i++) {
		d[i] = prompt(`${i+1}`);
}
function compare (a, b){
    if (typeof a === 'number' && typeof b === 'number') {
        return a - b;
    } else if (typeof a === 'number' && typeof b === 'string') {
    return -1;
    } else if (typeof a === 'string' && typeof b === 'number') {
    return 1;
  } else if (typeof a === 'string' && typeof b === 'string') {
        if (a < b) {
            return -1;
        } else {
            return 1;
        }
  }
}
d.sort(compare);
console.log(d)
if(d.length >= 4) {
    d.splice(1, 3)
}
 console.log(d)  


