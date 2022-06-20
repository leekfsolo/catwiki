import React, { FC } from "react";

import styles from "./ImageWrapper.module.scss";

interface Props {
  url?: string;
  alt?: string;
  highlight?: boolean;
  size: "xs" | "sm" | "md" | "lg";
}

const ImageWrapper: FC<Props> = (props: Props) => {
  const { url = "#", alt = "deadImg", highlight = false, size = "sm" } = props;

  return (
    <div
      className={`${styles.wrapper} ${highlight && styles.highlight} ${
        styles[size]
      }`}
    >
      <img src={url} alt={alt} />
    </div>
  );
};

export default ImageWrapper;
