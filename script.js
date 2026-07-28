const reminderBox = document.getElementById("reminders");

const today = new Date();

const weekday = today.toLocaleDateString("en-US", {
    weekday: "long"
});

let found = false;

reminders.forEach(reminder => {

    if (reminder.type === "weekly" && reminder.weekday === weekday) {

        reminderBox.innerHTML += `
            <div class="task">
                ${reminder.text}
            </div>
        `;

        found = true;
    }

});

if (!found) {

    reminderBox.innerHTML = `
        <div class="task">
            Nothing scheduled today
        </div>
    `;

}
