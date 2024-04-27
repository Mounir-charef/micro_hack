"use client";

import { buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { getFileName } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { Summary } from "./types";
import SummaryView from "./SummaryView";

const SummaryHistory = () => {
  const [open, setOpen] = useState(false);
  const { data: history, isLoading } = useQuery({
    queryKey: ["summary"],
    queryFn: async () => {
      const res = await axios.get(
        process.env.NEXT_PUBLIC_API_URL + "/summary/"
      );

      return res.data as Summary[];
    },
  });

  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selectedSummary = useMemo(() => {
    return history?.find((item) => item.id === selectedId);
  }, [history, selectedId]);

  useEffect(() => {
    if (!selectedSummary) {
      setSelectedId(null);
    }
    setOpen(true);
  }, [selectedSummary]);

  useEffect(() => {
    if (!open) {
      setSelectedId(null);
    }
  }, [open]);

  return (
    <Dialog>
      <DialogTrigger
        className={buttonVariants({
          variant: "ghost",
        })}
      >
        Check previous summaries
      </DialogTrigger>
      <DialogContent className="top-40">
        <DialogHeader>
          <DialogTitle>Summaries</DialogTitle>
        </DialogHeader>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="flex flex-col items-center gap-4">
            <Select
              onValueChange={(value) => {
                setSelectedId(parseInt(value));
              }}
            >
              <SelectTrigger className={buttonVariants({ variant: "outline" })}>
                <SelectValue placeholder="Select a file" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Summaries</SelectLabel>
                  {history?.map((item) => (
                    <SelectItem key={item.id} value={item.id.toString()}>
                      {getFileName(item.text)}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            {!!selectedSummary && (
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetContent className="overflow-y-auto">
                  <SheetHeader>
                    <SheetTitle>{getFileName(selectedSummary.text)}</SheetTitle>
                    <SheetDescription>
                      {selectedSummary.created_at}
                    </SheetDescription>
                  </SheetHeader>
                  <SummaryView {...selectedSummary} />
                </SheetContent>
              </Sheet>
            )}
            <DialogDescription>Select a summary to view</DialogDescription>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default SummaryHistory;
