import { PlusIcon } from "lucide-react";

function Expenses() {
  const expenses = [...Array(7).keys()];

  return (
    <div className="mt-9 flex flex-col flex-1 min-h-0 relative">
      <p className="font-press-start text-sm">Expenses</p>

      <div className="mt-4 flex-1 min-h-0 overflow-y-auto pb-16">
        {expenses.map((_, index) => (
          <div
            key={index}
            className="flex items-start h-11 border-b border-black not-first:mt-4"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 bg-amber-50 rounded-xs drop-shadow-alt drop-shadow-black border border-black"></div>
              <p className="font-semibold text-xs">Complete homework</p>
            </div>
          </div>
        ))}
      </div>

      <button
        className="absolute bottom-2 right-0 w-12 h-12 bg-[#6BB0A8] rounded-full border border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all"
        onClick={() => console.log("Add new expense")}
      >
        <PlusIcon className="w-6 h-6 text-black" />
      </button>
    </div>
  );
}

export default Expenses;
