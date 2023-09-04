"use client";

import TablePagination from "@mui/material/TablePagination";
import { useState } from "react";
import SubscriptionItemList from "../SubscriptionItemList";
import { Container } from "@mui/material";
import subscribers from "../../generated/subscribers.json";

export default function SubscriptionsPagination() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Container sx={{ p: 2 }}>
      <SubscriptionItemList page={page} rowsPerPage={rowsPerPage} />
      <TablePagination
        component="div"
        count={subscribers.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Container>
  );
}
