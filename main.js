let today = new Date();
let propose_date = new Date('02/08/2024');

let months = ['January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October', 'November', 'December'];

let dd = today.getDate();
let mm = today.getMonth();
let yyyy = today.getFullYear();

let full_date = `${dd} ${months[mm]}, ${yyyy}`;

let today_date = document.getElementById('today_date');
today_date.innerText = full_date;

function calculateDays(){
    let diff = propose_date.getTime() - today.getTime();

    let msInDay = 1000 * 3600 * 24;

    let total_days = Math.floor(diff/msInDay)*-1;
    //console.log(total_days);

    document.getElementById('total-days').innerText = total_days-1;
}

calculateDays();

// console.log(dd);
// console.log(mm);
// console.log(yyyy);


// console.log(full_date);


