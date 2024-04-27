"use client";

import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Summary } from "./types";
import ScoreCard from "./ScoreCard";
import { getFileName } from "@/lib/utils";

const SummaryView = ({ created_at, scores, summary, text }: Summary) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.3,
      }}
      className="flex flex-col gap-8 items-center"
    >
      <Card>
        <CardHeader>
          <CardTitle>{getFileName(text)?.split(".")[0]}</CardTitle>
          <CardDescription>
            {new Date(created_at).toLocaleDateString()}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-start gap-4">
          <Link
            className={buttonVariants({
              variant: "link",
            })}
            href={text}
            download
            target="_blank"
          >
            {getFileName(text)}
          </Link>

          <p className="font-semibold">{summary}</p>
        </CardContent>
      </Card>

      <div className="flex flex-wrap gap-8 max-w-xl justify-center">
        {Object.entries(scores).map(([key, value]) => (
          <ScoreCard title={key} value={value} key={key} />
        ))}
      </div>
    </motion.div>
  );
};

export default SummaryView;
