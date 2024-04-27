import AboutUs from "./_component/AboutUs";
import Home from "./_component/Home";
import Services from "./_component/Services";

const Page = () => {
  return (
    <div className="mx-auto max-w-4xl space-y-36 py-4">
      <Home />
      <AboutUs />
      <Services />
    </div>
  );
};

export default Page;
