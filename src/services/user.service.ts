import { supabase } from "@/lib/supabase";

export default {
  getBaseAmountValue: async () => {
    const { data, error } = await supabase
      .from("base_value")
      .select("*")
      .single();

    if (error) console.error(error);
    return data?.amount || 0;
  },
  saveBaseAmountValue: async (value: number) => {
    const { data, error } = await supabase.from("base_value").upsert({
      amount: value,
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear(),
    });

    if (error) console.error(error);
    return data;
  },
};
