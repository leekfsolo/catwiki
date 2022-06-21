import React, { FC, ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";

import styles from "./MainLayout.module.scss";

interface Props {
  children: ReactNode;
  isShowModal?: boolean;
  setIsShowModal?: (isShowModal: boolean) => void;
}

const MainLayout: FC<Props> = (props: Props) => {
  const { children, isShowModal, setIsShowModal } = props;

  return (
    <div
      className={`${styles.layout} ${isShowModal && styles.showModal}`}
      onClick={() => {
        if (setIsShowModal) setIsShowModal(false);
      }}
    >
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
