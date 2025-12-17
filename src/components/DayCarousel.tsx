import { useState } from "react";

interface WeekDays {
  day: number;
  weekDay: string;
  fullDate: Date;
}

function DayCarousel() {
  const WEEK_DAYS_AMOUNT = 5;

  const [weekDays, _] = useState<WeekDays[]>(getWeekDays());
  const [selectedDay, setSelectedDay] = useState(4);

  function getWeekDays(): WeekDays[] {
    return Array.from({ length: WEEK_DAYS_AMOUNT }, (_, i: number) => {
      const currentDay = new Date();
      currentDay.setDate(currentDay.getDate() - (4 - i));

      return {
        day: currentDay.getDate(),
        weekDay: currentDay.toDateString().split(" ")[0],
        fullDate: currentDay,
      };
    });
  }

  return (
    <div className="mt-9">
      <div className="w-full flex justify-between">
        {weekDays.map(({ day, weekDay }, i: any) => (
          <button
            key={day}
            className="group w-14 h-19.75 rounded-sm bg-amber-50 shadow-[3px_3px_0px_0px_#e45613] data-[active=true]:border data-[active=true]:border-black data-[active=true]:bg-[#e45613] data-[active=true]:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] cursor-pointer transition-all active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#e45613] data-[active=true]:active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"
            data-active={day === selectedDay || i === selectedDay}
            onClick={() => setSelectedDay(day)}
          >
            <div className="flex flex-col h-full items-center justify-center gap-3 group-data-[active=true]:text-black group-data-[active=false]:text-[#e45613]">
              <p className="font-bold text-[13px]">{weekDay}</p>
              <p className="font-press-start">{day}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default DayCarousel;
