import { MouseEventHandler, useRef, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { UploadIcon } from "@radix-ui/react-icons";

interface DropZoneProps {
  file: File | null | undefined;
  setFile: (file: File) => void;
  accept?: string;
  disabled?: boolean;
}

const MAX_FILE_SIZE = 1024 * 1024 * 5; // 5mb idk does not matter

const checkFile = (file: File, accept?: string) => {
  const allowedTypes = accept?.split(",").map((type) => type.trim()) || [];
  if (file.size > MAX_FILE_SIZE) {
    toast.error(`"File size is too large, max size is 5MB."`);
    return false;
  }

  if (allowedTypes.length > 0 && !allowedTypes.includes(file.type)) {
    toast.error(`File type is not allowed, allowed types are (${accept})."`);
    return false;
  }

  return true;
};

const DropZone = ({ file, setFile, ...inputProps }: DropZoneProps) => {
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const hiddenDesc = useRef<HTMLDivElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFile = event.target.files?.[0];
    if (newFile && checkFile(newFile, inputProps.accept)) {
      setFile(newFile);
    }
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleDragEnter = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(false);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(false);
    const file = event.dataTransfer.files[0];
    if (file && checkFile(file, inputProps.accept)) {
      setFile(file);
    }
  };
  return (
    <div
      className={cn(
        "relative flex flex-col items-center bg-transparent justify-center h-60 aspect-video border-2 border-dashed rounded-lg",
        {
          "border-primary border-solid": dragging,
          "border-gray-300 bg-accent": !dragging,
        }
      )}
      aria-label="Drop your file here"
      aria-describedby={hiddenDesc.current?.id}
      about="Drop your file here"
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <Input
        ref={inputRef}
        {...inputProps}
        type="file"
        className="hidden"
        onChange={handleFileChange}
      />
      <UploadIcon className="w-6 h-6 text-primary" />
      <p className="mt-2 text-sm text-gray-500">
        {dragging ? "Drop your file here" : "Drag and drop your file here"}
      </p>

      <p className="mt-2 text-sm text-gray-500">Or</p>
      <p className="mt-2 text-sm text-gray-500">Click to select file</p>

      <Button
        type="button"
        onClick={handleClick}
        className="rounded-2xl"
        disabled={inputProps.disabled}
      >
        {/* Select File {file && `: ${file.name}`} */}
        {file ? "Selected File : " + file.name : "Select File"}
      </Button>
      <div ref={hiddenDesc} id="dropzone-desc" className="sr-only">
        This dropzone accepts files of the following types: {inputProps.accept}
      </div>
    </div>
  );
};

export default DropZone;
