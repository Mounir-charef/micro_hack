import { Card } from "@/components/ui/card";
import Image from "next/image";

interface ServiceProps {
  image: string;
  title: string;
  description: string;
}

const Service = ({ description, image, title }: ServiceProps) => {
  return (
    <Card className="w-80 h-96 flex flex-col items-center justify-between p-5 text-center">
      <Image src={image} alt={title} width={300} height={300} />
      <h4 className="text-lg font-medium">{title}</h4>
      <p className="text-sm">{description}</p>
    </Card>
  );
};

export default Service;
