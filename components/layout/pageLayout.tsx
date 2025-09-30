// Codes by mahdi tasha
// Importing part
import { cn } from "@/lib/utils";
import { PageLayoutProps } from "@/type/component";
import { JSX } from "react";
import Header from "../header";

// Creating and exporting PageLayout page as default
export default function PageLayout({
  children,
  className,
}: PageLayoutProps): JSX.Element {
  // Returning JSX
  return (
    <div className={cn("max-w-[600px] bg-theme-400 mx-auto", className)}>
      <Header />
      <div className="p-3">{children}</div>
    </div>
  );
}
