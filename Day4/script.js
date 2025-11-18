var inc = document.querySelector('.inc');
var dec = document.querySelector('.dec');
var num = document.querySelector('.one');

let count = 0;

inc.addEventListener("click", () => {
    count++;
    num.innerText = count;
});

dec.addEventListener("click", () => {
    count--;
    num.innerText = count;
});
