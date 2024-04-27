import { CodeIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { buttonVariants } from "./ui/button";

const NavBar = () => {
  return (
    <header className="bg-transparent py-8">
      <div className="max-w-4xl mx-auto z-50 bg-transparent flex gap-4 items-center">
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
        <nav className="flex-1 bg-muted py-1 rounded-full flex items-center justify-around">
          <Link
            href="#"
            className={buttonVariants({
              variant: "link",
            })}
          >
            Home
          </Link>
          <Link
            href="#"
            className={buttonVariants({
              variant: "link",
            })}
          >
            About us
          </Link>
          <Link
            href="#"
            className={buttonVariants({
              variant: "link",
            })}
          >
            Solutions
          </Link>
          <Link
            href="#"
            className={buttonVariants({
              variant: "link",
            })}
          >
            Contact Us
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
