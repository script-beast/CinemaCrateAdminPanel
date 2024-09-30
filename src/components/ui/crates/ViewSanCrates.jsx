import React from "react";
import { Dialog, Stack, Typography, Chip, Link } from "@mui/material";

const ViewSanCrates = ({ open, onClose, data = {} }) => {
  return (
    <Dialog variant="viewDetails" open={open} onClose={onClose}>
      <Stack justifyContent="space-between" direction="row" alignItems="center">
        <Typography variant="h5">{data.name}</Typography>
        <Chip
          label={data.isDeleted ? "Deleted" : "Active"}
          color={data.isDeleted ? "error" : "success"}
          size="small"
        />
      </Stack>
      <Stack spacing={2} mt={2}>
        <Stack
          justifyContent="space-between"
          direction="row"
          alignItems="center"
          spacing={3}
        >
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography variant="subtitle1" sx={{ textWrap: "nowrap" }}>
              Price :
            </Typography>
            <Typography>&#8377; {data.price}</Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography variant="subtitle1" sx={{ textWrap: "nowrap" }}>
              Page Count :
            </Typography>
            <Typography>{data.pageCount}</Typography>
          </Stack>
        </Stack>
        <Stack
          justifyContent="space-between"
          direction="row"
          alignItems="center"
          spacing={3}
        >
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography variant="subtitle1" sx={{ textWrap: "nowrap" }}>
              Genre :
            </Typography>
            <Typography>{data.genre}</Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography variant="subtitle1" sx={{ textWrap: "nowrap" }}>
              Category :
            </Typography>
            <Typography>{data.category}</Typography>
          </Stack>
        </Stack>
        <Stack direction="row" alignItems={"baseline"} spacing={1}>
          <Typography variant="subtitle1" sx={{ textWrap: "nowrap" }}>
            Plot :
          </Typography>
          <Typography>{data.plot}</Typography>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Typography variant="subtitle1" sx={{ textWrap: "nowrap" }}>
            Casts :
          </Typography>
          <Typography>{data.casts.join(", ")}</Typography>
        </Stack>
        <Stack
          justifyContent="space-between"
          direction="row"
          alignItems="center"
          spacing={3}
        >
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography variant="subtitle1" sx={{ textWrap: "nowrap" }}>
              Trailer :
            </Typography>
            <Typography>
              <Link href={data.trailer} target="_blank" underline="none">
                Watch Trailer
              </Link>
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography variant="subtitle1" sx={{ textWrap: "nowrap" }}>
              Link :
            </Typography>
            <Typography>
              <Link href={data.link} target="_blank" underline="none">
                Watch Now
              </Link>
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default ViewSanCrates;
