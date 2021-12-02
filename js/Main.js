let input = document.getElementById('input_review');
let btn1 = document.getElementById('button_review');
let input1 = document.getElementById('emaile_review');
let li = document.getElementById('ol');


let arr = [];
let arrname = [];
let i = 0;

const refresh = () =>{
    input.value = ''
    input1.value = ''
}

btn1.onclick = () => {
    arr.push(input.value);
    arrname.push(input1.value)
    li.innerHTML += `<li>
    <div class='review-card'>
    <div class='review-top'>
    <h2>
    ${arrname[i]}
    </h2>
    </div>
    <p>${arr[i]}</p>
    <hr>
    </div></li>`
    i++;
    refresh()
}

