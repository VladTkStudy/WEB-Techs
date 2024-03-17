const positions =
    [
        [0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
        [0, 0, 0, 1, 0, 0, 0, 1, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
        [1, 0, 1, 0, 0, 1, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    ];
const table = document.getElementById("battlefield");
const cellClass = "cell";
const shipClass = "ship";

function createBattlefield() {
    for (i = 0; i < 10; i++) {
        const row = table.insertRow(i);
        for (j = 0; j < 10; j++) {
            createCalendarElement(row, !positions[i][j] ? cellClass : shipClass);
        }
    }
}

function createCalendarElement(row, className) {
    const cell = row.insertCell();
    const element = document.createElement("div");
    element.className = className;
    cell.appendChild(element);
}

createBattlefield();