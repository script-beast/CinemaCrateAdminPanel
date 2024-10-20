import React from "react";
import { Button, Dialog, Stack, Typography } from "@mui/material";

const ConfirmDialog = ({
  open = false,
  onClose = () => {},
  title = "Are you sure?",
  message = null,
  onConfirm = () => {},
  confirmText = "Yes",
  cancelText = "No",
  ...rest
}) => {
  return (
    <Dialog variant="confirmBox" open={open} onClose={onClose} {...rest}>
      <Typography variant="h5">{title}</Typography>
      {message && <Typography>{message}</Typography>}
      <Stack spacing={2} mt={2} direction="row" justifyContent="flex-end">
        <Button variant="outlined" onClick={onClose}>
          {cancelText}
        </Button>
        <Button variant="contained" onClick={onConfirm}>
          {confirmText}
        </Button>
      </Stack>
    </Dialog>
  );
};

export { ConfirmDialog };
