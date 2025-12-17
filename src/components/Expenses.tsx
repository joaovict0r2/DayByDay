import { MoveDownRightIcon, PlusIcon } from "lucide-react";
import NewExpenseDialogWrapper from "./NewExpenseDialogWrapper";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { userService } from "@/services";
import { useState, type FormEvent } from "react";
import type { CreateExpenseData } from "@/services/user.service";

function Expenses() {
  const queryClient = useQueryClient();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const { data: expenses } = useQuery({
    queryKey: ["expenses"],
    queryFn: userService.getAllExpenses,
  });

  const mutation = useMutation({
    mutationFn: (data: CreateExpenseData) => userService.addExpense(data),
    onSettled: () => queryClient.invalidateQueries({ queryKey: ["expenses"] }),
    onSuccess: () => setIsDialogOpen(false),
  });

  function addNewExpense(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const amount = Number(formData.get("amount"));
    const description = String(formData.get("description"));

    mutation.mutate({
      date: new Date().toISOString().split("T")[0],
      amount,
      description,
    });
  }

  return (
    <div className="mt-9 flex flex-col flex-1 min-h-0 relative">
      <p className="font-press-start text-sm">Expenses</p>

      <div className="mt-4 flex-1 min-h-0 overflow-y-auto">
        {expenses?.map((expense) => (
          <div
            key={expense.id}
            className="flex items-start h-11 border-b border-black not-first:mt-4"
          >
            <div className="flex items-center gap-2.5">
              <MoveDownRightIcon className="w-6 h-6" />
              <div>
                <p className="font-semibold text-sm">{expense.description}</p>
                <p className="font-normal text-xs">R$ {expense.amount}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <NewExpenseDialogWrapper
        onSubmit={addNewExpense}
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
      >
        <button className="absolute bottom-2 right-0 w-12 h-12 bg-[#6BB0A8] rounded-full border border-black flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 cursor-pointer">
          <PlusIcon className="w-6 h-6 text-black" />
        </button>
      </NewExpenseDialogWrapper>
    </div>
  );
}

export default Expenses;
