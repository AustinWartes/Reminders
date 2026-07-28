const reminderBox = document.getElementById("reminders");
const dateTitle = document.getElementById("date");

const today = new Date();

const weekday = today.toLocaleDateString("en-US",{
    weekday:"long"
});

const fullDate = today.toLocaleDateString("en-US",{
    weekday:"long",
    month:"long",
    day:"numeric"
});

dateTitle.textContent = fullDate;

let found = false;

reminders.forEach(reminder=>{

    if(reminder.type==="weekly" && reminder.weekday===weekday){

        reminderBox.innerHTML += `
            <div class="task">
                ${reminder.text}
            </div>
        `;

        found = true;

    }

});

if(!found){

    reminderBox.innerHTML=`
        <div class="task">
            ✅ Nothing scheduled today.
        </div>
    `;

}
