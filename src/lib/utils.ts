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
