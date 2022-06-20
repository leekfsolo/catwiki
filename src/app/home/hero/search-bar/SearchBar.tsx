import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Search } from "../../../../common/ui/assets/images/search.svg";
import { doGetBreeds } from "../../../api";
import { Breed } from "../../model";

import styles from "./SearchBar.module.scss";

const SearchBar = () => {
  const [catList, setCatList] = useState<Array<Breed>>([]);
  const [filteredValue, setFilteredValue] = useState<string>("");
  const catInputRef = useRef<HTMLInputElement>(null);

  const catInputHandler = () => {
    if (catInputRef.current) {
      setFilteredValue(catInputRef.current.value);
    }
  };

  useEffect(() => {
    if (filteredValue.length > 1) {
      const fetchData = async () => {
        const response = await doGetBreeds(filteredValue);
        const data = response.data;

        setCatList(
          data.sort((a: Breed, b: Breed) => {
            if (a.name && b.name) return a.name?.localeCompare(b.name);
            else return 1;
          })
        );
      };

      fetchData();
    } else setCatList([]);
  }, [filteredValue]);

  return (
    <form className={styles.form}>
      <input
        type="text"
        placeholder="Enter your breed"
        ref={catInputRef}
        onInput={catInputHandler}
      />
      <Search />
      {catList.length > 0 && (
        <div className={styles.list}>
          <ul>
            {catList.map((item, idx) => (
              <li key={idx}>
                <Link to={item.id || idx.toString()}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </form>
  );
};

export default SearchBar;
