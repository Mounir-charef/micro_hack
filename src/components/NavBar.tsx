import { CodeIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { buttonVariants } from "./ui/button";

const NavBar = () => {
  return (
    <header className="bg-transparent py-8">
      <div className="max-w-4xl mx-auto z-50 bg-transparent justify-between px-4 flex gap-4 items-center">
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
        <nav className="flex-1 bg-muted hidden md:flex py-1 rounded-full items-center justify-around">
          <Link
            href="/#"
            className={buttonVariants({
              variant: "link",
              className: "dark:text-white",
            })}
          >
            Home
          </Link>
          <Link
            href="/#about-us"
            className={buttonVariants({
              variant: "link",
              className: "dark:text-white",
            })}
          >
            About us
          </Link>
          <Link
            href="/#services"
            className={buttonVariants({
              variant: "link",
              className: "dark:text-white",
            })}
          >
            Services
          </Link>
        </nav>
        <div className="flex gap-2">
          <ThemeToggle />
          {/* {user ? (
            <UserButton />
          ) : (
            <SignInButton mode="modal">
              <Button>Sign in</Button>
            </SignInButton>
          )} */}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
