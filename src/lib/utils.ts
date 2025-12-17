import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isLocalStorageDataValid() {
  const baseValue = localStorage.getItem("base_value");

  if (!baseValue) return false;

  const expirationMinutes = 1;
  const now = new Date().getTime();
  const expirationTime = expirationMinutes * 60 * 1000;
  const { timestamp } = JSON.parse(baseValue);

  return now - timestamp < expirationTime;
}

export function getMonthDays(filter: "15-days" | "30-days") {
  if (filter === "15-days") return 15;

  const today = new Date();
  const dayOfMonth = new Date(
    today.getFullYear(),
    today.getMonth() + 1,
    0,
  ).getDate();

  return dayOfMonth;
}
