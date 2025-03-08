



function taskComplete(button) {
    
    const card = button.closest('.task-card');
    const title = card.querySelector('h2').innerText;
    const historyList = document.getElementById('history-list');
    const totalTask = document.getElementById('total-task');
    const taskRemained = document.getElementById('task-remained');

    // Adding history
    const li = document.createElement("li");
    li.classList = 'py-2';
    li.innerText = `You Have Complete The Task ${title} at time`;
    historyList.appendChild(li);

    // disabling Button
    button.disabled = true;
    button.classList.add('opacity-50');

    // total tast and remained task change
    totalTask.innerText = parseInt(totalTask.innerText) + 1;
    taskRemained.innerText = '0' + (parseInt(taskRemained.innerText) -1);

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