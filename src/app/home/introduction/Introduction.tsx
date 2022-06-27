import React, { FC } from "react";

import MoreText from "../../../common/ui/components/more-text";

import { Link } from "react-router-dom";
import { Breed } from "../model";
import { Masonry } from "@mui/lab";
import styles from "./Introduction.module.scss";
import { Paper } from "@mui/material";

interface Props {
  mostSearchedBreeds: Array<Breed>;
}

const Introduction: FC<Props> = (props: Props) => {
  const { mostSearchedBreeds } = props;

  const masonryItems = [
    {
      src: "https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&q=80&width=273",
      height: 167,
    },
    {
      src: "https://images.unsplash.com/photo-1607242792481-37f27e1d74e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&q=80&width=238",
      height: 385,
    },
    {
      src: "https://images.unsplash.com/photo-1618826411640-d6df44dd3f7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&q=80&width=195",
      height: 293,
    },
  ];
  let firstBreedId = "";
  if (mostSearchedBreeds && mostSearchedBreeds[0] && mostSearchedBreeds[0].id)
    firstBreedId = mostSearchedBreeds[0].id;

  return (
    <section className={styles.introduction}>
      <div className={styles.content}>
        <h2>Why should you have a cat?</h2>
        <p>
          Having a cat around you can actually trigger the release of calming
          chemicals in your body which lower your stress and anxiety leves
        </p>
        <Link to={firstBreedId}>
          <MoreText text="read more" />
        </Link>
      </div>
      <Masonry columns={2} spacing={2} className={styles.masonry}>
        {masonryItems.map((item, idx) => (
          <Paper sx={{ height: item.height, boxShadow: "none" }} key={idx}>
            <img src={item.src} alt="" />
          </Paper>
        ))}
      </Masonry>
    </section>
  );
};

export default Introduction;
