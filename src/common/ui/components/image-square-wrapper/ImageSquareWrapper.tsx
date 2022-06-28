import React, { FC } from "react";

import styles from "./ImageSquareWrapper.module.scss";

interface Props {
  url?: string;
  alt?: string;
  highlight?: boolean;
}

const ImageSquareWrapper: FC<Props> = (props: Props) => {
  const { url = "#", alt = "deadImg", highlight = false } = props;

  return (
    <div className={`${styles.wrapper} ${highlight && styles.highlight}`}>
      <img src={url} alt={alt} />
    </div>
  );
};

export default ImageSquareWrapper;
