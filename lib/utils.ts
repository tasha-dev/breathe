// Codes by mahdi tasha
// Importing part
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Creating and exporting infamous cn function which takes list of passed class values and merges them to gether
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
