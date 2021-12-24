export interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  afterOk?: () => void;
}
