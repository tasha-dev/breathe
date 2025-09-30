// Codes by mahdi tasha
// Forcing next.js to render this component as client side component
"use client";

// Importing part
import PageLayout from "@/components/layout/pageLayout";
import { JSX } from "react";

// Creating and exporting Home page as default
export default function HomePage(): JSX.Element {
  // Returning JSX
  return <PageLayout>HELLO WORLD</PageLayout>;
}
