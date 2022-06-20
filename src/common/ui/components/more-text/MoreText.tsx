import React, { FC } from "react";

import styles from "./MoreText.module.scss";
import { ReactComponent as ArrowRight } from "../../assets/images/arrow-right.svg";

interface Props {
  text: string;
}

const MoreText: FC<Props> = (props: Props) => {
  return (
    <span className={styles.more}>
      {props.text} <ArrowRight />
    </span>
  );
};

export default MoreText;
