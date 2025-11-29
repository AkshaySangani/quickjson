"use client";
import React from "react";

interface IButtonProps {
    text: string;
    type?: "button" | "submit" | "reset";
    className?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    loading?: boolean;
    disabled?: boolean;
}
export default function Button({ text, type = "button",className, onClick, loading = false, disabled = false }: IButtonProps) {
    return <button type={type} className={`bg-gray-900 text-gray-100 dark:text-gray-100 cursor-pointer rounded-md ${className}`} onClick={onClick} disabled={loading || disabled}>
        {text}
    </button>;
}