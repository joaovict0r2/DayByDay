function DayCarousel() {
  const days = [...Array(5).keys()];

  return (
    <div className="mt-9">
      <div className="w-full flex justify-between">
        {days.map((day: number) => (
          <button
            key={day}
            className="group w-14 h-19.75 rounded-sm bg-amber-50 shadow-[3px_3px_0px_0px_#e45613] data-[active=true]:border data-[active=true]:border-black data-[active=true]:bg-[#e45613] data-[active=true]:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] cursor-pointer transition-all active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#e45613] data-[active=true]:active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"
            data-active={day === 0}
            onClick={() => console.log(`Day ${day} clicked`)}
          >
            <div className="flex flex-col h-full items-center justify-center gap-3 group-data-[active=true]:text-black group-data-[active=false]:text-[#e45613]">
              <p className="font-bold text-[13px]">Thur</p>
              <p className="font-press-start">18</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default DayCarousel;
