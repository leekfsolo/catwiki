import React, { FC, ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";

import styles from "./MainLayout.module.scss";

interface Props {
  children: ReactNode;
  isShowModal?: boolean;
}

const MainLayout: FC<Props> = (props: Props) => {
  const { children, isShowModal } = props;

  return (
    <div className={`${styles.layout} ${isShowModal && styles.showModal}`}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
