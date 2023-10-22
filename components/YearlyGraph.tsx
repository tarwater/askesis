import subDays from "date-fns/subDays";

// dates from the first sunday that was at least a year ago until today
function buildDates(): Date[] {
  let dates = [];

  let pointer = new Date();
  let i = 0;

  while (i <= 365 || pointer.getDay() !== 0) {
    pointer = subDays(pointer, 1);
    dates.push(pointer);
    i++;
  }

  return dates.reverse();
}

const YearlyGraph = () => {
  const dates = buildDates();

  // can be done faster
  const dayRows = [0, 1, 2, 3, 4, 5, 6].map((n) =>
    dates.filter((d) => d.getDay() === n),
  );

  return (
    <div className="w-min">
      {dayRows.map((dayRow, i) => (
        <div key={i}>
          {dayRow.map((d) => (
            <span key={d.toString()}>*</span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default YearlyGraph;
