"use client";
import { useState, useRef, useEffect } from "react";
import Button from "@/components/common/Button";
interface IFileUploadBoxProps {
    handleUploadFile: (file: any) => void;
    uploadedFile?: File | null;
}
export default function FileUploadBox({ handleUploadFile, uploadedFile }: IFileUploadBoxProps) {
    const [file, setFile] = useState<File | null>(null);
    const [uploadProgress, setUploadProgress] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    useEffect(() => {
        if (uploadedFile) {
            setFile(null);
            setUploadProgress(0);
            if (inputRef.current) {
                inputRef.current.value = "";
            }
        }
    }, [uploadedFile]);
    const handleFileSelect = async (file: File) => {
        const allowedTypes = ["application/json"];

        if (!allowedTypes.includes(file.type)) {
            return;
        }

        setFile(file);

        // 🔥 Wait for progress to reach 100
        await simulateUpload();

        // 🔥 Now call handleUploadFile
        handleUploadFile(file);
    };

    const simulateUpload = () => {
        return new Promise<void>((resolve) => {
            setUploadProgress(0);
            const interval = setInterval(() => {
                setUploadProgress((prev) => {
                    if (prev >= 100) {
                        clearInterval(interval);
                        resolve(); // 🔥 Resolve when progress reaches 100
                        return 100;
                    }
                    return prev + 10;
                });
            }, 300);
        });
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
        const droppedFile = e.dataTransfer.files[0];
        if (droppedFile) handleFileSelect(droppedFile);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) handleFileSelect(selectedFile);
    };

    return (
        <div className="w-full mx-auto">
            <div
                className={`border-2 border-dashed p-6 rounded-lg text-center cursor-pointer bg-gray-50 ${isDragging ? "border-blue bg-blue opacity-50" : "border-gray-300"
                    }`}
                onClick={() => inputRef.current?.click()}
                onDragOver={(e) => {
                    e.preventDefault();
                    setIsDragging(true);
                }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={handleDrop}
            >
                <input
                    ref={inputRef}
                    type="file"
                    capture={false}
                    accept=".json,application/json"
                    className="hidden"
                    onChange={handleFileChange}
                />
                <div className="text-gray-500">
                    {/* <div className="flex justify-center mb-2"><BookText /></div> */}
                    <p className="font-medium">{"Drag and drop file(s) to upload"}</p>
                    <p className="my-2">{"or"}</p>
                    <Button
                        type="button"
                        className="px-4 py-2 "
                        onClick={(e: any) => {
                            e.stopPropagation();
                            inputRef.current?.click();
                        }}
                        text={"Browse files"}
                    />
                </div>
            </div>

            {(file) && (
                <div className="mt-6 bg-white text-gray-700 border rounded-md p-4 shadow-sm flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        {/* <div className="text-red-600"><BookText /></div> */}
                        <div>
                            <p className="text-sm font-medium">{file?.name}</p>
                            {/* <p className="text-xs text-gray-500">
                                Uploading... {((file?.size??0) / (1024 * 1024)).toFixed(1)}MB
                            </p> */}
                        </div>
                    </div>
                    <Button
                        onClick={() => {
                            setFile(null);
                            handleUploadFile(null);
                            setUploadProgress(0);
                            if (inputRef.current) {
                                inputRef.current.value = "";
                            }
                        }}
                        className="w-10 p-0 text-gray-400 hover:text-gray-600 bg-white"
                        text="❌"
                    />
                </div>
            )}

            {file && (uploadProgress > 0 && uploadProgress < 110) && (
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                    <div
                        className="bg-green-500 opacity-50 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${uploadProgress}%` }}
                    ></div>
                </div>
            )}
        </div>
    );
}
