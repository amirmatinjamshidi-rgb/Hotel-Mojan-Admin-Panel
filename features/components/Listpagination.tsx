"use client";

import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { formatFaNumber } from "@/utils/formatFaNumber";

export default function ListPagination() {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      dir="rtl"
      sx={{
        width: "100%",
        maxWidth: 1016,
        mx: "auto",
        py: 4,
        px: { xs: 2, md: 4, lg: 0 },
      }}
    >
      <Pagination
        count={5}
        renderItem={(item) => (
          <PaginationItem
            {...item}
            slots={{
              next: () => (
                <Stack direction="row" alignItems="center" gap="8px">
                  بعدی
                  <ArrowBackIosNewIcon sx={{ fontSize: 12 }} />
                </Stack>
              ),
              previous: () => (
                <Stack direction="row" alignItems="center" gap="8px">
                  <ArrowForwardIosIcon sx={{ fontSize: 12 }} />
                  قبلی
                </Stack>
              ),
            }}
            sx={{
              height: 40,
              borderRadius: "8px",
              fontWeight: 500,
              transition: "all 0.2s",

              ...(item.type === "previous" && {
                minWidth: { xs: 75, sm: 83 },
                border: "1px solid #D8E3E7",
                px: "16px",
                color: "#627377",
                "&.Mui-disabled": {
                  opacity: 0.5,
                },
              }),

              ...(item.type === "next" && {
                minWidth: { xs: 80, sm: 87 },
                bgcolor: "#1A6F8E",
                color: "#fff",
                px: "16px",
                "&:hover": { bgcolor: "#145a75" },
                "&.Mui-disabled": {
                  bgcolor: "#D8E3E7",
                  opacity: 1,
                  color: "#fff",
                },
              }),

              ...(item.type === "page" && {
                minWidth: 40,
                color: "#1A6F8E",
                padding: "12px 14px",
                "&.Mui-selected": {
                  bgcolor: "#E6F4F7CC",
                  color: "#1A6F8E",
                  "&:hover": { bgcolor: "#D8E3E7" },
                },
              }),
            }}
          >
            {item.type === "page" ? formatFaNumber(item.page!) : null}
          </PaginationItem>
        )}
        sx={{
          width: "100%",
          "& .MuiPagination-ul": {
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            flexWrap: "nowrap",
          },
        }}
      />
    </Stack>
  );
}
