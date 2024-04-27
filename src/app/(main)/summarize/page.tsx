"use client";

import DropZone from "@/components/DropZone";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

const SummarizePage = () => {
  const [file, setFile] = useState<File>();
  const [data, setData] = useState<any>(null);

  const { isPending, mutate: summarize } = useMutation({
    mutationKey: ["summarize", file],
    mutationFn: async (file: File) => {
      const formData = new FormData();
      formData.append("text", file);
      const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/summary/",
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      return data;
    },

    onSuccess: (data) => {
      setData(data);
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

      {data && (
        <>
          <div className="w-full p-4 rounded-lg shadow-md">{data.summary}</div>

          {JSON.stringify(data.scores, null, 2)}
        </>
      )}
    </div>
  );
};

export default SummarizePage;
