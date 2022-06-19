import React, { FC, ReactNode } from "react";
import Header from "./header";

import styles from "./MainLayout.module.scss";

interface Props {
  children: ReactNode;
}

const MainLayout: FC<Props> = (props: Props) => {
  return (
    <div className={styles.layout}>
      <Header />
      {props.children}
    </div>
  );
};

export default MainLayout;
