import React, { FC } from "react";

import styles from "./ImageWrapper.module.scss";

interface Props {
  url?: string;
  alt?: string;
  highlight?: boolean;
}

const ImageWrapper: FC<Props> = (props: Props) => {
  const { url = "#", alt = "deadImg", highlight = false } = props;

  return (
    <div className={`${styles.wrapper} ${highlight && styles.highlight}`}>
      <img src={url} alt={alt} />
    </div>
  );
};

export default ImageWrapper;
