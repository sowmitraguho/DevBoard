



function taskComplete(button) {
    
    const card = button.closest('.task-card');
    const title = card.querySelector('h2').innerText;
    const historyList = document.getElementById('history-list');
    const li = document.createElement("li");
    li.classList = 'py-2';
    li.innerText = `You Have Complete The Task ${title} at time`;
    historyList.appendChild(li);
    button.disabled = true;
    button.classList.add('opacity-50');
    console.log(title);
}