import { toast, ToastContainerProps } from "react-toastify";
import { getErrorDescription } from "../network/error";

// eslint-disable-next-line import/prefer-default-export
export const toastOptions: ToastContainerProps = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnFocusLoss: false,
};

export const ErrorToast = (e: unknown) => toast.error(getErrorDescription(e));
export const SuccessToast = (msg: string) => toast.success(msg);
