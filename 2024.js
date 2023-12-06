const options = { timeZone: "Australia/Sydney" };
const sydneyDate = new Intl.DateTimeFormat("en-US", options).format(new Date());
const currentDate = new Date(sydneyDate);
const dayNumber = currentDate.getDay();

// Change semester start dates here
const semester1 = new Date("2024-02-19T00:00:00+11:00");
const semester2 = new Date("2024-07-29T00:00:00+10:00");

// Check which semester it is
if (currentDate < semester2) { // If current date is before start of Semester 2
    var semester = "Semester One";
    var semesterStartDate = semester1;
    var weekStartDates = [
        new Date("2024-02-19T00:00:00+11:00"), // S1 Week 1
        new Date("2024-02-26T00:00:00+11:00"), // S1 Week 2
        new Date("2024-03-04T00:00:00+11:00"), // S1 Week 3
        new Date("2024-03-11T00:00:00+11:00"), // S1 Week 4
        new Date("2024-03-18T00:00:00+11:00"), // S1 Week 5
        new Date("2024-03-25T00:00:00+11:00"), // S1 Week 6
        new Date("2024-04-01T00:00:00+11:00"), // Mid-semester break
        new Date("2024-04-08T00:00:00+10:00"), // S1 Week 7 (and end of AEDT)
        new Date("2024-04-15T00:00:00+10:00"), // S1 Week 8
        new Date("2024-04-22T00:00:00+10:00"), // S1 Week 9
        new Date("2024-04-29T00:00:00+10:00"), // S1 Week 10
        new Date("2024-05-06T00:00:00+10:00"), // S1 Week 11
        new Date("2024-05-13T00:00:00+10:00"), // S1 Week 12
        new Date("2024-05-20T00:00:00+10:00"), // S1 Week 13
        new Date("2024-05-27T00:00:00+10:00"), // S1 STUVAC
        new Date("2024-06-03T00:00:00+10:00"), // S1 Exam Period, Week 1
        new Date("2024-06-10T00:00:00+10:00"), // S1 Exam Period, Week 2
        new Date("2024-06-17T00:00:00+10:00"), // End of Semester 1
    ];
} else { // Else if current date is after start of Semester 2
    var semester = "Semester Two";
    var semesterStartDate = semester2;
    var weekStartDates = [
        new Date("2024-07-29T00:00:00+10:00"), // S2 Week 1
        new Date("2024-08-05T00:00:00+10:00"), // S2 Week 2
        new Date("2024-08-12T00:00:00+10:00"), // S2 Week 3
        new Date("2024-08-19T00:00:00+10:00"), // S2 Week 4
        new Date("2024-08-26T00:00:00+10:00"), // S2 Week 5
        new Date("2024-09-02T00:00:00+10:00"), // S2 Week 6
        new Date("2024-09-09T00:00:00+10:00"), // S2 Week 7
        new Date("2024-09-16T00:00:00+10:00"), // S2 Week 8
        new Date("2024-09-23T00:00:00+10:00"), // S2 Week 9
        new Date("2024-09-30T00:00:00+10:00"), // Semester 2 Mid-semester break
        new Date("2024-10-07T00:00:00+11:00"), // S2 Week 10 (and start of AEDT)
        new Date("2024-10-14T00:00:00+11:00"), // S2 Week 11
        new Date("2024-10-21T00:00:00+11:00"), // S2 Week 12
        new Date("2024-10-28T00:00:00+11:00"), // S2 Week 13
        new Date("2024-11-04T00:00:00+11:00"), // S2 STUVAC
        new Date("2024-11-11T00:00:00+11:00"), // S2 Exam Period, Week 1
        new Date("2024-11-18T00:00:00+11:00"), // S2 Exam Period, Week 2
        new Date("2024-11-25T00:00:00+11:00"), // End of Semester 2
    ];
}

const getWeekNumber = (date) => {
    let weekNumber;

    if (date < weekStartDates[0]) {
        weekNumber = -1;
    } else if (date >= weekStartDates[17]) {
        weekNumber = 18;
    } else {
        // Iterate through weekStartDates to find the week number
        for (let i = 0; i < 17; i++) {
            if (date >= weekStartDates[i] && date < weekStartDates[i + 1]) {
                weekNumber = i + 1;
                break; // Exit the loop once the week is found
            }
        }
    }

    return weekNumber;
};


const getDayName = (dayNumber) => { // [N.B: in HTML format, the first day in the array is Sunday, but the counter will still name it correctly]
    switch (dayNumber) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
    }
}

// Get week names for Semesters One and Two
const getWeekName = (weekNumber) => {
    if (weekNumber < 0) {
        return "before " + semester + " has started.";
    } else if (weekNumber >= 18) {
        return "after " + semester + " has finished.";
    } else if (semesterStartDate == semester1) {
        switch (weekNumber) {
            case 1:
                return dayName + " of Week One.";
            case 2:
                return dayName + " of Week Two.";
            case 3:
                return dayName + " of Week Three.";
            case 4:
                return dayName + " of Week Four.";
            case 5:
                return dayName + " of Week Five.";
            case 6:
                return dayName + " of Week Six.";
            case 7:
                return dayName + " of the Semester Recess.";
            case 8:
                return dayName + " of Week Seven.";
            case 9:
                return dayName + " of Week Eight.";
            case 10:
                return dayName + " of Week Nine.";
            case 11:
                return dayName + " of Week Ten.";
            case 12:
                return dayName + " of Week Eleven.";
            case 13:
                return dayName + " of Week Twelve.";
            case 14:
                return dayName + " of Week Thirteen.";
            case 15:
                return dayName + " of STUVAC.";
            case 16:
                return dayName + " of Week One of the Exam Period.";
            case 17:
                return dayName + " of Week Two of the Exam Period.";
        }
    } else if (semesterStartDate == semester2) {
        switch (weekNumber) {
            case 1:
                return dayName + " of Week One.";
            case 2:
                return dayName + " of Week Two.";
            case 3:
                return dayName + " of Week Three.";
            case 4:
                return dayName + " of Week Four.";
            case 5:
                return dayName + " of Week Five.";
            case 6:
                return dayName + " of Week Six.";
            case 7:
                return dayName + " of Week Seven.";
            case 8:
                return dayName + " of Week Eight.";
            case 9:
                return dayName + " of Week Nine.";
            case 10:
                return dayName + " of the Semester Recess.";
            case 11:
                return dayName + " of Week Ten.";
            case 12:
                return dayName + " of Week Eleven.";
            case 13:
                return dayName + " of Week Twelve.";
            case 14:
                return dayName + " of Week Thirteen.";
            case 15:
                return dayName + " of STUVAC.";
            case 16:
                return dayName + " of Week One of the Exam Period.";
            case 17:
                return dayName + " of Week Two of the Exam Period.";
        }
    }
};

const dayName = getDayName(dayNumber);
const weekNumber = getWeekNumber(currentDate);
const weekName = getWeekName(weekNumber);
document.getElementById("week-display").innerHTML = weekName; // [N.B: if you want to change the text preceding the counter, do so here]

// Optionally display message
let message;

if (weekName.includes("Week One")) {
    message = "Every single person you meet knows something you don’t.";
} else if (weekName.includes("Week Two")) {
    message = "You're not bad at something, you're just new to it.";
} else if (weekName.includes("Week Three")) {
    message = "Read to find new ideas, write to understand them, implement to learn from them.";
} else if (weekName.includes("Week Four")) {
    message = "Your brain doesn’t fill up with more information, it expands along with it.";
} else if (weekName.includes("Week Five")) {
    message = "Being great is just being consistently good.";
} else if (weekName.includes("Week Six")) {
    message = "Consuming information won't make you smart, applying it will.";
} else if (weekName.includes("Week Seven")) {
    message = "Motivation more often comes after starting, not before.";
} else if (weekName.includes("Week Eight")) {
    message = "A question opens the mind, a statement keeps it closed.";
} else if (weekName.includes("Week Nine")) {
    message = "Continuous improvement is better than delayed perfection.";
} else if (weekName.includes("Week Ten")) {
    message = "Get comfortable with changing your mind after learning new information.";
} else if (weekName.includes("Week Eleven")) {
    message = "Discipline is choosing between what you want now and what you want most.";
} else if (weekName.includes("Week Twelve")) {
    message = "If it doesn't feel like work, no one can compete with you.";
} else if (weekName.includes("Week Thirteen")) {
    message = "The gap between where you are and where you want to be is closer than you think.";
} else if (weekName.includes("Recess")) {
    message = "Luck favours those in motion.";
} else if (weekName.includes("STUVAC")) {
    message = "Choose consistency over intensity, because consistency compounds.";
} else if (weekName.includes("Week One of the Exam Period")) {
    message = "Your biggest competitor in life is yourself.";
} else if (weekName.includes("Week Two of the Exam Period")) {
    message = "The dots only connect in retrospect.";
} else {
    message = "If you never get bored of learning, you'll never get tired of living.";
}

document.getElementById("message-display").innerHTML = message;

// Optionally display/update progress bar
const updateProgressBar = () => {
    const progressCircle = document.getElementById('progress-circle');
    const percentage = document.getElementById('percentage');

    // Calculate progress percentage, treating NaN as 100% and negative numbers as 0%
    const progressPercentage = isNaN(weekNumber) ? 100 : Math.max((weekNumber / 18) * 100, 0);

    const dashArray = Math.PI * 2 * 45;
    const dashOffset = dashArray - (dashArray * progressPercentage) / 100;

    progressCircle.style.strokeDasharray = dashArray;
    progressCircle.style.strokeDashoffset = dashOffset;
    percentage.textContent = `${progressPercentage.toFixed(0)}%`;
};

updateProgressBar(); // Update the progress bar on page load