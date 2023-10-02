let day = document.querySelector('.day').children[0];
let hour = document.querySelector('.hour').children[0];
let minute = document.querySelector('.minute').children[0];
let seconds = document.querySelector('.seconds').children[0];

const newYear = '01 jan 2024';

function countdown(){
    const newYearDate = new Date(newYear);
    const thisYear = new Date();

    console.log(newYearDate - thisYear);
    let net = (newYearDate - thisYear);
    console.log(net / 86400000)  
    let gun = Math.floor(net / 86400000);
    let saat = Math.floor((net % 86400000)/3600000);
    let daka = Math.floor(((net % 86400000)%3600000)/60000);
    let saniye = Math.floor((((net % 86400000)%3600000)%60000)/1000)

    day.innerHTML = gun;
    hour.innerHTML = saat;
    minute.innerHTML = daka;
    seconds.innerHTML = saniye;

    console.log(`gun: ${gun} saat: ${saat}  dak: ${daka}  saniye: ${saniye}`)
}
countdown()
setInterval(countdown, 1000);
