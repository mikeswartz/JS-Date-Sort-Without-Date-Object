let dates = [
  "20 Oct 2052",
  "25 May 1912",
  "06 Jun 1933",
  "19 Feb 2050",
  "03 Jun 1933",
  "03 Jan 1933",
  "18 Oct 2052",
  "20 Jan 1912",
];

// Define dictionary lookup for month digit conversion
const months = {
  Jan: "01",
  Feb: "02",
  Mar: "03",
  Apr: "04",
  May: "05",
  Jun: "06",
  Jul: "07",
  Aug: "08",
  Sep: "09",
  Oct: "10",
  Nov: "11",
  Dec: "12",
};

function sortDates(dates) {
  for (let i = 0; i < dates.length; i++) {
    const curDate = dates[i];
    const nextDate = dates[i + 1];

    // If no next date, we're done.  Return dates
    if (!nextDate) {
      return dates;
    }

    const curYearDate = Number(curDate.substring(7, 11));
    const nextYearDate = Number(nextDate.substring(7, 11));

    const curMonthDate = curDate.substring(3, 6);
    const nextMonthDate = nextDate.substring(3, 6);

    const curDayDate = Number(curDate.substring(0, 2));
    const nextDayDate = Number(nextDate.substring(0, 2));

    // If we know the current year is greater than the next in the array, swap them
    if (nextYearDate && curYearDate > nextYearDate) {
      dates[i] = nextDate;
      dates[i + 1] = curDate;
      // When done, recursively call sort again
      sortDates(dates);
    }

    // Else if years are equal we start looking at the current date month,
    // if greater than the next date month, we swap them
    else if (nextYearDate && curYearDate === nextYearDate) {
      if (
        nextMonthDate &&
        Number(months[curMonthDate]) > Number(months[nextMonthDate])
      ) {
        dates[i] = nextDate;
        dates[i + 1] = curDate;
        // When done, recursively call sort again
        sortDates(dates);
      } else if (
        nextMonthDate &&
        Number(months[curMonthDate]) === Number(months[nextMonthDate])
      ) {
        // Else if months are equal we start looking at the current date day,
        // if greater than the next date day date, we swap them
        if (nextDayDate && curDayDate > nextDayDate) {
          dates[i] = nextDate;
          dates[i + 1] = curDate;
          // When done, recursively call sort again
          sortDates(dates);
        }
      }
    }
  }
}

console.log("dates", sortDates(dates));
