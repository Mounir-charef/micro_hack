"use client";

import DropZone from "@/components/DropZone";
import { Button } from "@/components/ui/button";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { toast } from "sonner";
import SummaryView from "./_components/SummaryView";
import { Summary } from "./_components/types";
import SummaryHistory from "./_components/SummaryHistory";

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
      <SummaryHistory />
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

      {data && !isError && <SummaryView {...data} />}
    </div>
  );
};

export default SummarizePage;
