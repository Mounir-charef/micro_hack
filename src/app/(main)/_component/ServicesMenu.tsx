"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowDownIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const ServicesMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="animate-pulse rounded-full font-semibold text-lg">
          TRY IT NOW <ArrowDownIcon className="ml-4" strokeWidth={3} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href="/summarize">Summarize your text</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/err-detection">Detect errors in your text</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ServicesMenu;
