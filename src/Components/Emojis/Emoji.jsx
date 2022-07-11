import React, {useRef} from "react";
import EmojiPicker from "./EmojiPicker";
import './Emoji.css'

function Emoji() {

  const refInput = useRef(null);

  function handleClick() {
    refInput.current.focus();
  }

  return (
    <div className="Emoji">
      <input type="text" ref={refInput}/>
      <button onClick={handleClick}>Da click</button>
      <EmojiPicker />
    </div>
  )
}

export default Emoji;