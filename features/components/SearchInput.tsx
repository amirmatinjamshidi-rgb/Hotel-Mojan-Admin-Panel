"use client";
import { FormControl } from "@mui/material";
import React, { useState, useEffect } from "react";
import { OutlinedInput } from "@mui/material";
import { Search } from "lucide-react";
import { InputAdornment } from "@mui/material";
interface CustomSearchInputProps {
  items: string[];
}

export default function CustomSearchInput({ items }: CustomSearchInputProps) {
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (items.length <= 1) return;

    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % items.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [items]);

  return (
    <FormControl
      sx={{
        maxWidth: 499,
        width: "60%",
        height: 40,
        background: "#FFFFFF",
        borderRadius: "8px",
        "& .MuiOutlinedInput-root": {
          height: 40,
          borderRadius: "8px",
          paddingLeft: "12px",
          gap: "8px",
          transition: "border-color 0.2s",
          "& fieldset": {
            borderColor: "primaryBorder",
            borderWidth: "1px",
          },
          "&:hover fieldset": {
            borderColor: "primary.main",
          },
          "&.Mui-focused fieldset": {
            borderColor: "primary.main",
          },
        },
      }}
    >
      <OutlinedInput
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder={items[placeholderIndex] || "جستجو..."}
        startAdornment={
          <InputAdornment position="start">
            <Search size={20} className="text-primary" strokeWidth={1.5} />
          </InputAdornment>
        }
        sx={{
          fontSize: "14px",
          fontFamily: "inherit",
          "& .MuiOutlinedInput-input": {
            padding: "8px 0",
          },
        }}
      />
    </FormControl>
  );
}
