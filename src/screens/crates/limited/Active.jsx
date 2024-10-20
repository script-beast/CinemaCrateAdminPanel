import React from "react";
import { Box, Button, IconButton, Stack } from "@mui/material";
import { MdDeleteForever } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";

import { MyDataGridServer, MyDataSearch } from "../../../components/templates";
import { ViewSanCrates } from "../../../components/ui";
import {
  allActiveLimitedCrates,
  singleLimitedCrate,
  deleteLimitedCrate,
} from "../../../services";
import { useDebounce } from "../../../hooks";
import { myToast } from "../../../utils";
import { showSmallLoader, hideSmallLoader } from "../../../helper";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";

const Active = () => {
  const navigate = useNavigate();

  const [searchText, setSearchText] = React.useState(null);
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [total, setTotal] = React.useState(0);
  const [pagination, setPagination] = React.useState({
    page: 0,
    pageSize: 10,
  });

  const [viewDetails, setViewDetails] = React.useState(false);
  const [selectedData, setSelectedData] = React.useState({});

  const selData = React.useRef(null);

  const handleOpen = (id) => {
    if (!id) myToast.basic("Invalid Crate ID", "error");

    if (selData.current && selData.current._id === id) {
      setSelectedData(selData.current);
      setViewDetails(true);
      return;
    }

    showSmallLoader();
    singleLimitedCrate(id)
      .then((res) => {
        setSelectedData(res.result);
        selData.current = res.result;
        setViewDetails(true);
      })
      .catch((err) => {
        console.error(err);
        if (!err) return;
        myToast.basic(err, "error");
      })
      .finally(() => {
        hideSmallLoader();
      });
  };

  const handleClose = () => {
    setViewDetails(false);
    setSelectedData({});
  };

  const searchSignal = React.useRef(null);

  const loadData = (cus = true) => {
    if (searchText === null && cus) return;

    if (searchSignal.current) searchSignal.current.abort();

    searchSignal.current = new AbortController();
    setLoading(true);

    allActiveLimitedCrates({
      page: pagination.page + 1,
      limit: pagination.pageSize,
      search: searchText ?? "",
      signal: searchSignal.current.signal,
    })
      .then((res) => {
        setData(res.result);
        setTotal(res.total);
        setLoading(false);
      })
      .catch((err) => {
        if (!err) return;
        setLoading(false);
        myToast.basic(err, "error");
      })
      .finally(() => {});
  };

  const handleDelete = (id) => {
    if (!id) return myToast.basic("Invalid Crate ID", "error");

    showSmallLoader();
    deleteLimitedCrate(id)
      .then((res) => {
        myToast.basic(res.msg, "success");
        loadData(false);
      })
      .catch((err) => {
        if (!err) return;
        myToast.basic(err, "error");
      })
      .finally(() => {
        hideSmallLoader();
      });
  };

  React.useEffect(() => {
    loadData(false);
    return () => searchSignal.current?.abort();
  }, [pagination.pageSize, pagination.page]);

  useDebounce(loadData, [searchText], 500);

  const columns = [
    { field: "name", headerName: "Name", minWidth: 200, flex: 1 },
    {
      field: "price",
      headerName: "Price",
      minWidth: 150,
      flex: 1,
      renderCell: (params) => <span>&#8377; {params.value}</span>,
    },
    {
      field: "discountPrice",
      headerName: "Discount Price",
      minWidth: 150,
      flex: 1,
      renderCell: (params) => <span>&#8377; {params.value}</span>,
    },
    {
      field: "endTime",
      headerName: "End Time",
      minWidth: 150,
      flex: 1,
      renderCell: (params) => dayjs(params.value).format("DD MMM, YYYY"),
    },
    { field: "pageCount", headerName: "Page Count", minWidth: 150, flex: 1 },
    {
      field: "details",
      headerName: "Details",
      minWidth: 150,
      flex: 1,
      renderCell: (params) => (
        <Button
          variant="text"
          size="small"
          onClick={handleOpen.bind(this, params.row._id)}
        >
          View Details
        </Button>
      ),
    },
    {
      field: "action",
      headerName: "Action",
      minWidth: 150,
      flex: 1,
      renderCell: (params) => (
        <>
          <IconButton
            variant="text"
            color="primary"
            onClick={() => navigate(`/crates/limited/edit/${params.row._id}`)}
          >
            <AiFillEdit />
          </IconButton>
          <IconButton
            variant="text"
            color="error"
            onClick={() => handleDelete(params.row._id)}
          >
            <MdDeleteForever />
          </IconButton>
        </>
      ),
    },
  ];

  return (
    <>
      <Stack spacing={2} mt={2}>
        <Stack direction={"row"}>
          <MyDataSearch
            value={searchText ?? ""}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search for crates"
          />
        </Stack>
        <Box sx={{ height: 400, width: "100%" }}>
          <MyDataGridServer
            rows={data}
            loading={loading}
            rowCount={total}
            columns={columns}
            paginationModel={pagination}
            onPaginationModelChange={setPagination}
          />
        </Box>
      </Stack>
      {viewDetails && (
        <ViewSanCrates
          open={viewDetails}
          onClose={handleClose}
          data={selectedData}
        />
      )}
    </>
  );
};

export default Active;
