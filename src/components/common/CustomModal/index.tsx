import { Modal, ModalFuncProps } from "antd";
import { PropsWithChildren } from "react";
import STRING from "../../../constants/strings";

interface CustomModalProps extends ModalFuncProps {
  okButtonDisable?: boolean;
}

export default function CustomModal({
  children,
  okButtonProps,
  okText = STRING.CONFIRM,
  okButtonDisable = false,
  width = 800,
  ...rest
}: PropsWithChildren<CustomModalProps>): JSX.Element {
  return (
    <Modal
      okText={okText}
      cancelText={STRING.CANCEL}
      okButtonProps={{
        ...okButtonProps,
        disabled: okButtonDisable,
      }}
      width={width}
      {...rest}
    >
      {children}
    </Modal>
  );
}
