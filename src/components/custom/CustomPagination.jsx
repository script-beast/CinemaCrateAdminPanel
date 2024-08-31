import React from "react";
import { Pagination } from "@mui/material";
import {
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
  GridFooterContainer,
  GridPagination,
  selectedGridRowsSelector,
  gridPaginationSelector,
} from "@mui/x-data-grid";

const CustomPagination = () => {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);
  const selectedRows = useGridSelector(apiRef, selectedGridRowsSelector);
  const pagination = useGridSelector(apiRef, gridPaginationSelector);

  return (
    <GridFooterContainer>
      <GridPagination>
        <Pagination
          count={pageCount}
          page={page + 1}
          onChange={(event, value) => apiRef.current.setPage(value - 1)}
          size="small"
          siblingCount={0}
          boundaryCount={1}
          showFirstButton={pagination.page !== 0}
          showLastButton={pagination.page !== pagination.pageCount - 1}
        />
      </GridPagination>
    </GridFooterContainer>
  );
};

export default CustomPagination;
