const dayNameClass = "dayNameElement";
const workDayClass = "workDayElement";
const weekendClass = "weekendElement";
const calendarElement = document.getElementsByClassName("calendarElement");

function createCalendar() {
    for(i = 0; i < 6; i++)
    {
        for(j = 0; j < 7; j++)
        {
            if(i == 0)
                createCalendarElement(dayNameColor);

            if(j > 5)
                createCalendarElement(workDayColor);
        }
    }
}

function createCalendarElement() {
    //create element with appropriate class
}

createCalendar();