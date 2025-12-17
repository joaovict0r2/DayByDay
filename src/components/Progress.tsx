function Progress() {
  return (
    <div className="mt-9">
      <p className="font-press-start text-sm">Streak</p>

      <div className="flex justify-between mt-4">
        <div className="w-49.5 h-19.75 bg-[#8EA99F] rounded-sm drop-shadow-alt drop-shadow-black border border-black p-4 flex flex-col justify-between">
          <p className="font-semibold text-xs">Daily goal</p>
          <p className="font-press-start text-[14px] h-4 self-end">
            24
            <span className="text-[12px] opacity-80">/66</span>
            <span className="text-[12px] opacity-80 ml-1">R$</span>
          </p>
        </div>
        <div className="w-28.25 h-19.75 bg-[#9DB772] rounded-sm drop-shadow-alt drop-shadow-black border border-black p-4 flex flex-col justify-between">
          <p className="font-semibold text-xs">Savings</p>
          <p className="font-press-start text-[14px] h-4">
            0<span className="text-[12px] opacity-80 ml-1">R$</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Progress;
