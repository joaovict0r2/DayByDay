import { supabase } from "@/lib/supabase";

export interface Expense {
  id: string;
  date: string; // YYYY-MM-DD
  amount: number;
  description: string;
  created_at: string;
}

export interface CreateExpenseData {
  date: string;
  amount: number;
  description: string;
}

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
  addExpense: async (data: CreateExpenseData) => {
    const { data: expense, error } = await supabase
      .from("expenses")
      .insert([data])
      .select()
      .single();

    if (error) {
      console.error("Erro ao adicionar expense:", error);
      throw error;
    }

    return expense as Expense;
  },
  getAllExpenses: async () => {
    const { data: expenses, error } = await supabase
      .from("expenses")
      .select("*")
      .order("date", { ascending: false });

    if (error) {
      console.error("Erro ao buscar expenses:", error);
      throw error;
    }

    return expenses as Expense[];
  },
  deleteExpense: async (id: string) => {
    const { error } = await supabase.from("expenses").delete().eq("id", id);

    if (error) {
      console.error("Erro ao deletar expense:", error);
      throw error;
    }

    return true;
  },
  updateExpense: async (id: string, data: Partial<CreateExpenseData>) => {
    const { data: expense, error } = await supabase
      .from("expenses")
      .update(data)
      .eq("id", id)
      .select()
      .single();

    if (error) {
      console.error("Erro ao atualizar expense:", error);
      throw error;
    }

    return expense as Expense;
  },
};
