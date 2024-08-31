import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { CustomPagination, CustomToolbar } from "../custom";

const MyDataGridServer = ({ ...props }) => {
  return (
    <DataGrid
      rows={[]}
      columns={[]}
      rowsPerPageOptions={[10, 25, 50]}
      getRowId={(row) => row._id}
      slots={{
        pagination: CustomPagination,
        toolbar: CustomToolbar,
      }}
      paginationMode="server"
      initialState={{
        pagination: { paginationModel: { pageSize: 25, page: 1 } },
      }}
      {...props}
    />
  );
};

export default MyDataGridServer;
