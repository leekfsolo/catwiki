import React, { FC, ReactNode } from "react";
import Loading from "../../components/loading";
import Footer from "./footer";
import Header from "./header";

import styles from "./MainLayout.module.scss";

interface Props {
  children: ReactNode;
  isShowModal?: boolean;
  isOpen?: boolean;
}

const MainLayout: FC<Props> = (props: Props) => {
  const { children, isShowModal, isOpen = false } = props;

  return (
    <div className={`${styles.layout} ${isShowModal && styles.showModal}`}>
      <Loading isOpen={isOpen} />
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
