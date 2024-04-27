import ContactUs from "./_component/ContactUs";
import Home from "./_component/Home";

const Page = () => {
  return (
    <div className="mx-auto max-w-4xl space-y-28 py-4">
      <Home />
      <ContactUs />
    </div>
  );
};

export default Page;
