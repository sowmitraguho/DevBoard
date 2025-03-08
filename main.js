



function taskComplete(button) {

    const card = button.closest('.task-card');
    const title = card.querySelector('h2').innerText;
    const historyList = document.getElementById('history-list');
    const totalTask = document.getElementById('total-task');
    const taskRemained = document.getElementById('task-remained');
    // Get the current time
    const time = new Date().toLocaleTimeString();

    // Adding history
    const li = document.createElement("li");
    li.classList = 'py-2';
    li.innerText = `You Have Complete The Task ${title} at ${time}`;
    historyList.appendChild(li);

    // disabling Button
    button.disabled = true;
    button.classList.add('opacity-50');

    // total tast and remained task change
    totalTask.innerText = parseInt(totalTask.innerText) + 1;
    taskRemained.innerText = '0' + (parseInt(taskRemained.innerText) - 1);

    // Show an alert
    alert("Board updated Succesfully");

    //show final alert
    if (!parseInt(taskRemained.innerText)) alert("Congratualtions!");


    console.log(title);
}

function clearHistory() {
    const historyList = document.getElementById('history-list');
    historyList.innerHTML = '';

}

function bgColorset() {
    const body = document.body;
    
    const red = Math.floor(Math.random()*100);
    const blue = Math.floor(Math.random()*100);
    const green = Math.floor(Math.random()*100);
    body.classList = `mx-auto bg-[rgb(${red},${blue},${green})]`;
    console.log(body.classList);
}

function getCurrentDate() {
    const days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "April", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    
    let currentDate = new Date();
    let day = days[currentDate.getDay()];
    let date = currentDate.getDate();
    let month = months[currentDate.getMonth()];
    let year = currentDate.getFullYear();
    document.getElementById('day').innerText = day;
    document.getElementById('date').innerText = `${month} ${date} ${year}`;
    //return `${day}, ${month} ${date} ${year}`;
}

getCurrentDate();