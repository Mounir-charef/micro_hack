import ServicesMenu from "./ServicesMenu";

const Home = () => {
  return (
    <section id="home" className="flex flex-col items-center py-12 text-center">
      <h1 className="text-4xl font-bold sm:text-6xl sm:leading-tight">
        Your digital ally for lightning-speed{" "}
        <span className="text-primary">Data Access</span>.
      </h1>
      <p className="mt-6 max-w-prose text-lg text-muted-foreground">
        Grow smarter, grow faster as we need Solutions at the right place and at
        Ariane we are empowering all your needs
      </p>
      <div className="mt-12 flex flex-col gap-4 sm:flex-row">
        <ServicesMenu />
      </div>
    </section>
  );
};

export default Home;
