import "./list.css";
import { useState } from "react";
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@mui/icons-material";

const List = () => {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);

  return (
    <div className="list">
      <span className="listTitle">Continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
         className ="slideArrow left"
         style={{display: !isMoved && "none"}}
        />

        <ArrowForwardIosOutlined
         className="slideArrow right"
        />
      </div>
    </div>
  )
}

export default List