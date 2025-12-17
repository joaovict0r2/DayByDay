import DropShadowCard from "@/components/DropShadowCard";
import BlackCat from "@/assets/images/cart-black-cat.jpg";
import DayCarousel from "@/components/DayCarousel";
import Progress from "@/components/Progress";
import Expenses from "@/components/Expenses";
import { PlusIcon } from "lucide-react";
import { userService } from "@/services";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { isLocalStorageDataValid } from "@/lib/utils";

function Home() {
  const queryClient = useQueryClient();

  const { data: baseValue } = useQuery({
    queryKey: ["base-value"],
    queryFn: handleBaseAmountValue,
  });

  const mutation = useMutation({
    mutationFn: () => {
      localStorage.setItem(
        "base_value",
        JSON.stringify({
          base_value: 2000,
          timestamp: new Date().getTime(),
        }),
      );
      return userService.saveBaseAmountValue(2000);
    },
    onSettled: () =>
      queryClient.invalidateQueries({ queryKey: ["base-value"] }),
  });

  async function handleBaseAmountValue() {
    if (isLocalStorageDataValid()) {
      const baseValue = localStorage.getItem("base_value");
      if (!baseValue) return;

      const { base_value } = JSON.parse(baseValue);
      return base_value;
    }

    return await userService.getBaseAmountValue();
  }

  return (
    <div className="px-6 py-4 flex flex-col h-screen overflow-hidden">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <DropShadowCard>
            <img
              src={BlackCat}
              className="w-full h-full rounded-sm border-black border"
            />
          </DropShadowCard>
          <p className="font-press-start">João</p>
        </div>

        {/*TODO: Adicionar skeleton loading ao inves desse switch entre button e texto*/}
        {baseValue ? (
          <div>
            <p className="flex gap-1 font-press-start">
              {baseValue} <span className="font-press-start">R$</span>
            </p>
          </div>
        ) : (
          <DropShadowCard
            className="bg-[#6BB0A8] flex items-center justify-center border border-black"
            onClick={mutation.mutate}
          >
            <PlusIcon className="w-6 h-6 text-black" />
          </DropShadowCard>
        )}
      </div>

      <DayCarousel />
      <Progress baseValue={baseValue} />
      <Expenses />
    </div>
  );
}

export default Home;
