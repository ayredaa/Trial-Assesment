let timers = {
    section1: 30,
    section2: 45,
    section3: 60
};

function startTimer(section) {
    const timerElement = document.getElementById(`time${section}`);
    let timeLeft = timers[`section${section}`];

    const timerInterval = setInterval(() => {
        timeLeft--;
        timerElement.innerText = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert(`Time is up for Section ${section}!`);
            if (section < 3) {
                nextSection(section);
            } else {
                document.getElementById('assessment-form').submit();
            }
        }
    }, 1000);
}

function nextSection(currentSection) {
    document.getElementById(`section${currentSection}`).style.display = 'none';

    // Show the next section
    const nextSection = currentSection + 1;
    document.getElementById(`section${nextSection}`).style.display = 'block';

    // Start timer for the next section
    startTimer(nextSection);
}

// Start the timer for the first section when the page loads
window.onload = () => {
    startTimer(1);
};
