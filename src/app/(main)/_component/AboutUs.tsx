import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="space-y-16">
      <div className="flex gap-4 flex-col md:flex-row items-center justify-between">
        <div className="flex-1 grid items-center">
          <Image
            src="/cloud-img.png"
            width={612}
            height={491}
            alt="cloud-img"
            className="object-cover object-center"
            quality={100}
          />
        </div>
        <div className="flex-1 flex flex-col max-md:text-center gap-2">
          <h5 className="text-primary text-sm font-medium">ABOUT US</h5>
          <h3 className="text-2xl font-medium">
            Ariane is a AI Technology Solutions company focused on
          </h3>
          <ul className="text-primary text-start list-disc list-inside ml-2 font-medium">
            <li>Effortlessly convert images into editable text.</li>
            <li>Ensure data accuracy with advanced error detection.</li>
            <li>Summarize lengthy documents for quick insights.</li>
          </ul>
          <p className="text-sm">
            We help businesses to lead the charge to digital innovation and tap
            into the power of the AI, by transforming and creating a competitive
            advantage that will scale.
          </p>
        </div>
      </div>

      <div className="flex gap-4 max-md:text-center flex-col-reverse md:flex-row items-center justify-between">
        <div className="flex-1 flex flex-col gap-16">
          <h3 className="text-3xl font-medium">
            Redefine the way you do business with Ariane
          </h3>

          <p className="text-sm">
            Designed for scalability and reliability, our production-ready API
            offers seamless integration with your existing systems, enabling you
            to enhance productivity and extract actionable insights from your
            documents with unparalleled efficiency
          </p>
        </div>

        <div className="flex-1 grid items-center">
          <Image
            src="/frame.png"
            width={702}
            height={433}
            alt="cloud-img"
            className="object-cover object-center"
            quality={100}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
