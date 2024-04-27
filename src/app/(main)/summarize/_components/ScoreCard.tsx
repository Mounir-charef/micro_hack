import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface ScoreCardProps {
  title: string;
  value: number;
}

const ScoreCard = ({ title, value }: ScoreCardProps) => {
  return (
    <Card>
      <CardHeader className="aspect-square grid place-items-center">
        <CardDescription>{title}</CardDescription>
        <CardTitle className="text-4xl">{value.toFixed(2)}</CardTitle>
      </CardHeader>
      <CardContent>
        <Progress value={value * 100} />
      </CardContent>
    </Card>
  );
};

export default ScoreCard;
