import { Button, Modal, ModalVariant } from "@patternfly/react-core";
import { useGlobalModalContext } from "../../context/ModalContext";

export const CreateModal = () => {
  const { hideModal, store } = useGlobalModalContext();

  const { modalProps } = store || {};

  const { title, confirmBtn } = modalProps || {};

  const handleModalToggle = () => {
    hideModal();
  };

  return (
    <Modal
      variant={ModalVariant.medium}
      title={title || "Create Modal"}
      isOpen={true}
      onClose={handleModalToggle}
      actions={[
        <Button key="confirm" variant="primary" onClick={handleModalToggle}>
          {confirmBtn || "Confirm button"}
        </Button>,
        <Button key="cancel" variant="link" onClick={handleModalToggle}>
          Cancel
        </Button>,
      ]}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Modal>
  );
};
