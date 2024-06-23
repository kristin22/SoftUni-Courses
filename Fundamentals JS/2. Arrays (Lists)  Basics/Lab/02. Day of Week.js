function dayOfWeek(dayNum) {
    arrDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    if (dayNum > arrDays.length) {
        console.log('Invalid day!');
    }  else {
        console.log(arrDays[dayNum - 1]);
    }
}

dayOfWeek(3);
dayOfWeek(6);
dayOfWeek(11);