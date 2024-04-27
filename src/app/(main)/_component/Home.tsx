import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const Home = () => {
  return (
    <section id="home" className="flex flex-col items-center py-20 text-center">
      <h1 className="text-4xl font-bold sm:text-6xl sm:leading-tight">
        Your digital ally for lightning-speed{" "}
        <span className="text-primary">Data Access</span>.
      </h1>
      <p className="mt-6 max-w-prose text-lg text-muted-foreground">
        Grow smarter, grow faster as we need Solutions at the right place and at
        Ariane we are empowering all your needs
      </p>
      <div className="mt-12 flex flex-col gap-4 sm:flex-row">
        <Link
          href="/products"
          className={cn(
            buttonVariants(),
            "group hover:animate-none px-8 rounded-full"
          )}
        >
          Start a demo{" "}
          <ArrowRightIcon className="ml-4 group-hover:translate-x-2 transition-transform" />
        </Link>
      </div>
    </section>
  );
};

export default Home;
