console.log("page loaded...");

function editProfile() {
    document.querySelector(`.changeName`).innerText = `Sarah Kastama`;
}

function requestRemove(ans) {
    document.querySelector(`.hide`).remove();
    count = document.querySelector(`.requestNum`).innerText;
    count--;
    document.querySelector(`.requestNum`).innerText = `${count}`;
    if (ans == 'accept') {
        count1 = document.querySelector(`.connectionsNum`).innerText;
        count1++;
        document.querySelector(`.connectionsNum`).innerText = `${count1}`;
    }
}

