import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";

import axiosConfig from "../../config/axiosConfig";
import AlertBanner from "./common/AlertBanner";
import ScoopOption from "./ScoopOption";
import ToppingOptions from "./ToppingOptions";

const Options = ({ optionsType }) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    const getScoops = async () => {
      try {
        const { data } = await axiosConfig.get(`/${optionsType}`);
        console.log(data);
        setItems(data);
      } catch (error) {
        setError(true);
      }
    };
    getScoops();
  }, [optionsType]);

  if (error) {
    return <AlertBanner />;
  }

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
