import React, { FC, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Search } from "../../../../common/ui/assets/images/search.svg";
import ModalSearch from "../../../../common/ui/components/modal/ModalSearch";
import useWindowSize from "../../../../common/utils/hooks/useWindowSize";
import { doGetBreeds } from "../../../api";
import { Breed } from "../../model";

import styles from "./SearchBar.module.scss";

interface Props {
  isShowModal: boolean;
  setIsShowModal: (isShowModal: boolean) => void;
}

const SearchBar: FC<Props> = (props: Props) => {
  const { isShowModal, setIsShowModal } = props;
  const [catList, setCatList] = useState<Array<Breed>>([]);
  const [filteredValue, setFilteredValue] = useState<string>("");
  const catInputRef = useRef<HTMLInputElement>(null);
  const { width } = useWindowSize();

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

  const form = (
    <form className={`${styles.form} ${isShowModal && styles.showModal}`}>
      <input
        type="text"
        placeholder="Enter your breed"
        ref={catInputRef}
        onInput={catInputHandler}
        onFocus={() => setIsShowModal(true)}
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

  return (
    <>
      {width <= 375 && isShowModal ? (
        <ModalSearch setIsShowModal={setIsShowModal}>{form}</ModalSearch>
      ) : (
        form
      )}
    </>
  );
};

export default SearchBar;
