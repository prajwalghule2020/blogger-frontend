import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import * as React from "react";

export interface GetStartedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function GetStartedButton(props: GetStartedButtonProps) {
  return (
    <Button className={`group relative overflow-hidden rounded-full bg-white text-black hover:bg-gray-100 ${props.className || ''}`} size="lg" {...props}>
      <span className="mr-8 transition-opacity duration-500 group-hover:opacity-0 text-sm font-semibold">
        Get Started Free
      </span>
      <i className="absolute right-1 top-1 bottom-1 rounded-full z-10 grid w-1/4 place-items-center transition-all duration-500 bg-black/10 group-hover:w-[calc(100%-0.5rem)] group-active:scale-95 text-black">
        <ChevronRight size={16} strokeWidth={2} aria-hidden="true" />
      </i>
    </Button>
  );
}
