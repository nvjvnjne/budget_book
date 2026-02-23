export type entry = "収入" | "支出";

export type Data = {
  id: string;
  title: string;
  amount: number;
  type: entry;
  date: string;
};
