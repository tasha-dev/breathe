// Codes by mahdi tasha
// Importing part
import Image from "next/image";
import Link from "next/link";
import { JSX } from "react";
import LogoImage from "@/image/logo.png";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { List, SunMoon, User } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

// Creating and exporting Header page as default
export default function Header(): JSX.Element {
  // Defining hooks
  const { theme, setTheme } = useTheme();

  // Returning JSX
  return (
    <header className="flex items-center justify-between gap-3 p-3">
      <Link href="/" className="shrink-0">
        <Image
          alt="Breathe Logo"
          src={LogoImage.src}
          width={100}
          height={100}
          className="size-9"
        />
      </Link>
      <Drawer>
        <DrawerTrigger>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="icon" variant="ghost">
                <List />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Options</TooltipContent>
          </Tooltip>
        </DrawerTrigger>
        <DrawerContent>
          <div className="max-w-[600px] min-w-auto w-full mx-auto p-3">
            <div className="mb-5">
              <DrawerTitle className="mb-1">Options</DrawerTitle>
              <DrawerDescription>
                Select each item you want here !
              </DrawerDescription>
            </div>
            <div className="space-y-3">
              <Button
                variant={"default"}
                className="flex w-full items-center justify-start text-left"
                onClick={() =>
                  setTheme((val) => (val === "dark" ? "light" : "dark"))
                }
              >
                <SunMoon />
                Toggle Theme ({theme})
              </Button>
              <Button
                variant={"secondary"}
                className="flex w-full items-center justify-start text-left"
                asChild
              >
                <Link href="/auth">
                  <User />
                  Login
                </Link>
              </Button>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </header>
  );
}
