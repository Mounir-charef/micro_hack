"use client";

import DropZone from "@/components/DropZone";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

const SummarizePage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [data, setData] = useState<any>(null);

  const { mutate: summarize, isPending } = useMutation({
    mutationKey: ["summarize", file],
    onMutate: async (file: File) => {
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
      setData(data);
      return data;
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
        onClick={async () => {
          if (file) {
            await summarize(file);
          }
        }}
        disabled={!file || isPending}
      >
        Summurize
      </Button>

      {data && (
        <>
          <div className="w-full p-4 rounded-lg shadow-md">{data.summary}</div>
          {/* loop throught data.scores object */}
          {Object.entries(data.scores).map(([key, value]) => (
            <div key={key}>{`${key}: ${value}`}</div>
          ))}
        </>
      )}
    </div>
  );
};

export default SummarizePage;
