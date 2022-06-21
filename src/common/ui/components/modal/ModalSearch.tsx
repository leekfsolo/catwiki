import React, { FC, ReactNode } from "react";
import { createPortal } from "react-dom";
import { ReactComponent as Close } from "../../assets/images/close.svg";

import styles from "./ModalSearch.module.scss";

interface Props {
  children: ReactNode;
  setIsShowModal: (isShowModal: boolean) => void;
  setFilteredValue: (filteredValue: string) => void;
}

const ModalSearch: FC<Props> = (props: Props) => {
  const { children, setIsShowModal, setFilteredValue } = props;
  const modalRoot = document.getElementById("modal");

  return (
    <>
      {modalRoot ? (
        createPortal(
          <div className={styles.modal}>
            <div
              className={styles["nav-toggle"]}
              onClick={() => {
                setIsShowModal(false);
                setFilteredValue("");
              }}
            >
              <Close />
            </div>
            {children}
          </div>,
          modalRoot
        )
      ) : (
        <div></div>
      )}
    </>
  );
};

export default ModalSearch;
