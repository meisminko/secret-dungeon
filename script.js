function goTo(page) {
    window.location.href = page;
}

function checkInputAnswer(correct, nextPage) {
    const input = document.getElementById("answer").value.trim();
    const msg = document.getElementById("message");

    if (input === correct) {
        goTo(nextPage);
    } else {
        msg.innerText = "❌ 오답!";
    }
}

function checkChoiceAnswer(choice, correct, nextPage, msgId) {
    const msg = document.getElementById(msgId);

    if (choice === correct) {
        goTo(nextPage);
    } else {
        msg.innerText = "❌ 오답!";
    }
}
