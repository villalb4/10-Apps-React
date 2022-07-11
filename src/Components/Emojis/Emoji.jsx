import React, {useRef} from "react";
import EmojiPicker from "./EmojiPicker";
import './Emoji.css'

function Emoji() {

  const refInput = useRef(null);

  return (
    <div className="Emoji">
      <input type="text" ref={refInput}/>
      <EmojiPicker ref={refInput} />
    </div>
  )
}

export default Emoji;