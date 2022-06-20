import React, { FC } from "react";

import styles from "./Logo.module.scss";

interface Props {
  size?: "sm" | "md" | "lg";
  variant?: "black" | "white";
}

const Logo: FC<Props> = (props: Props) => {
  const { size = "sm", variant = "black" } = props;

  return (
    <p className={`${styles.logo} ${styles[size]} ${styles[variant]}`}>
      CatWiki{" "}
      <span>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/60/Cat_silhouette.svg"
          alt=""
        />
      </span>
    </p>
  );
};

export default Logo;
