import { toast } from "react-toastify";

const basic = (message, type = "info") => toast[type](message, {});

const error = (message) => toast.error(message, {});

const success = (message) => toast.success(message, {});

const warning = (message) => toast.warning(message, {});

const info = (message) => toast.info(message, {});

const promise = (
  promise,
  pendingMessage = "Loading...",
  successMessage = "Success",
  errorMessage = "Error"
) => {
  toast.promise(promise, {
    pending: pendingMessage,
    success: successMessage,
    error: errorMessage,
  });
};

export { basic, error, success, warning, info, promise };
