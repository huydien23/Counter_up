var listCounter = document.querySelectorAll('.counter')

function count(el){
    var numberEL = el.querySelector('.number')
    var to = parseInt(numberEL.innerText)
    var count = 0
    var time = 244;
    var step = to / time;

    var counting = setInterval(() => {
        count += step;
        if(count > to) {
            clearInterval(counting)
            numberEL.innerText = to
       }else {
            numberEL.innerText = Math.round(count)
       }
    },1);
}

listCounter.forEach(item => {
    count(item)
})