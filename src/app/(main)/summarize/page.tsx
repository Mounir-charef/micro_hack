"use client";

import DropZone from "@/components/DropZone";
import { Button, buttonVariants } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Summary } from "./_components/types";
import ScoreCard from "./_components/ScoreCard";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";
import { toast } from "sonner";
import axios from "axios";

const SummarizePage = () => {
  const [file, setFile] = useState<File>();

  const {
    isPending,
    mutate: summarize,
    data,
    isError,
  } = useMutation({
    mutationKey: ["summarize", file],
    mutationFn: async (file: File) => {
      const formData = new FormData();
      formData.append("text", file);

      const res = await axios.post(
        process.env.NEXT_PUBLIC_API_URL + "/summary/",
        formData
      );

      return res.data as Summary;
    },

    onError: (error) => {
      toast.error(error.message);
    },

    onSuccess: () => {
      toast.success("Summary generated successfully!");
    },
  });

  return (
    <div className="flex flex-col items-center gap-4 py-12">
      <DropZone
        disabled={isPending}
        file={file}
        setFile={setFile}
        accept="text/plain"
      />

      <Button
        onClick={() => {
          if (file) {
            summarize(file);
          }
        }}
        disabled={!file || isPending}
        className="flex items-center gap-2"
      >
        Summarize
      </Button>

      {data && !isError && (
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
              <CardTitle>Summary</CardTitle>
              <CardDescription>
                {new Date(data.created_at).toLocaleDateString()}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-start gap-4">
              <Link
                className={buttonVariants({
                  variant: "link",
                })}
                href={data.text}
                download
                target="_blank"
              >
                {data.text.split("/").pop()}
              </Link>

              <p className="font-semibold">{data.summary}</p>
            </CardContent>
          </Card>

          {/* {JSON.stringify(data.scores, null, 2)} */}
          <div className="flex flex-wrap gap-8 max-w-xl justify-center">
            {Object.entries(data.scores).map(([key, value]) => (
              <ScoreCard title={key} value={value} key={key} />
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default SummarizePage;
