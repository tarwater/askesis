import classNames from "classnames";
import { buildCalendarDates } from "../utils/buildCalendarDates";

const YearlyGraph = () => {
  const dates = buildCalendarDates();

  // can be done faster
  const dayRows = [0, 1, 2, 3, 4, 5, 6].map((n) =>
    dates.filter((d) => d.getDay() === n),
  );

  const active = true;

  return (
    <div className="w-min">
      {dayRows.map((dayRow, i) => (
        <div className="flex" key={i}>
          {dayRow.map((d) => (
            <div
              className={classNames(
                "h-2 m-0.5 w-2",
                Math.round(Math.random()) === 1
                  ? "bg-green-500"
                  : "bg-zinc-500",
              )}
              key={d.toString()}
              style={{ borderRadius: "1px" }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default YearlyGraph;
