// Codes by mahdi tasha
// Importing part
import { Button } from "@/components/ui/button";
import { JSX } from "react";

// Creating and exporting Home page as default
export default function HomePage(): JSX.Element {
  // Returning JSX
  return (
    <div className="h-dvh overflow-hidden flex items-center gap-5 justify-center p-5 flex-wrap">
      <Button variant={"default"}>CLICK HERE</Button>
      <Button variant={"destructive"}>CLICK HERE</Button>
      <Button variant={"link"}>CLICK HERE</Button>
      <Button variant={"outline"}>CLICK HERE</Button>
      <Button variant={"secondary"}>CLICK HERE</Button>
      <Button variant={"ghost"}>CLICK HERE</Button>
    </div>
  );
}
