import { type FormEvent, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Input from "@/components/Input";

interface INewExpenseDialogWrapper {
  children: ReactNode;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function NewExpenseDialogWrapper({
  children,
  onSubmit,
  open,
  onOpenChange,
}: INewExpenseDialogWrapper) {

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md bg-[#ffedc9] border-none rounded-xs drop-shadow-dialog">
        <DialogTitle className="font-press-start text-sm font-normal">
          Add expense
        </DialogTitle>

        <form
          id="form"
          onSubmit={onSubmit}
          className="flex flex-col gap-4 mb-3"
        >
          <Input
            name="amount"
            label="Amount"
            type="number"
            placeholder="$ 4.23"
          />
          <Input
            name="description"
            label="Description"
            placeholder="Ice cream"
          />
        </form>

        <DialogFooter className="w-full items-end">
          <div className="w-full max-w-18">
            <Button
              type="submit"
              variant="outline"
              form="form"
              className="rounded-xs border border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              Add
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default NewExpenseDialogWrapper;
