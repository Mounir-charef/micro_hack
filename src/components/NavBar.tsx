import { CodeIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import ThemeToggle from "./ThemeToggle";

const NavBar = () => {
  return (
    <header className="fixed inset-x-0 top-4 bg-transparent">
      <div className="max-w-4xl mx-auto h-10 z-50 bg-transparent flex gap-4 items-center">
        <Link
          title="home"
          href="/"
          className={buttonVariants({
            variant: "ghost",
            size: "icon",
            className: "h-full w-auto aspect-square",
          })}
        >
          <CodeIcon className="text-primary h-7 w-7" />
        </Link>
        <nav className="flex-1 bg-slate-50/20 h-full rounded-full flex items-center justify-around">
          <div>Lorem.</div>
          <div>Cupiditate.</div>
          <div>Maxime?</div>
          <div>Voluptatem?</div>
        </nav>
        <div className="flex gap-2">
          <ThemeToggle />
          <Link href="#" className={buttonVariants()}>
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
