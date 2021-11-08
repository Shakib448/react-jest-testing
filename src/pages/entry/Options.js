import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";

import axiosConfig from "../../config/axiosConfig";
import ScoopOption from "./ScoopOption";
import ToppingOptions from "./ToppingOptions";

const Options = ({ optionsType }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getScoops = async () => {
      try {
        const { data } = await axiosConfig.get(`/${optionsType}`);
        console.log(data);
        setItems(data);
      } catch (error) {
        console.log(error);
      }
    };
    getScoops();
  }, [optionsType]);

  const ItemComponent = optionsType === "scoops" ? ScoopOption : ToppingOptions;

  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));
  return <Row>{optionItems}</Row>;
};

export default Options;
