const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const table = document.getElementById("calendar");
const dayNameClass = "dayNameElement";
const workDayClass = "workDayElement";
const weekendClass = "weekendElement";

const daysCount = 31;

function createCalendar() {
    let counter = 1;
    for(i = 0; i < 6; i++)
    {
        const row = table.insertRow(i);

        for(j = 0; j < 7; j++)
        {
            if(i == 0) {
                createCalendarElement(row, dayNameClass, days[j]);
                continue;
            }

            if(counter > daysCount)
                break;

            createCalendarElement(row, j < 5 ? workDayClass : weekendClass, counter);
            counter++;
        }
    }
}

function createCalendarElement(row, className, text) {
    const cell = row.insertCell();
    const element = document.createElement("div");
    element.className = className;
    element.textContent = text;
    cell.appendChild(element);
}

createCalendar();