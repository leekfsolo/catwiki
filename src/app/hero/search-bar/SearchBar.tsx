import React, { useEffect, useRef, useState } from "react";

import { ReactComponent as Search } from "../../../common/ui/assets/images/search.svg";
import { doGetBreeds } from "../../api";

import styles from "./SearchBar.module.scss";

const SearchBar = () => {
  const [catList, setCatList] = useState<Array<string>>([]);
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

        setCatList(data.map((item: any) => item.name).sort());
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
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </form>
  );
};

export default SearchBar;
