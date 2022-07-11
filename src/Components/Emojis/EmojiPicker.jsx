import React, {forwardRef, useState} from "react";
import EmojiSearch from "./EmojiSearch.jsx";
import data from './data.js';

function EmojiPicker(props, inputRef) {

  const [open, setOpen] = useState()
  const [emojis, setEmojis] = useState(data)

  function handleClick() {
    setOpen(!open)
  }

  function handleSearch(e) {
    const value = e.target.value.toLowerCase();
    if(value) {
      const search = emojis.filter(e => {
        return e.name.toLowerCase().includes(value) || e.keywords.toLowerCase().includes(value)
      })
      setEmojis(search)
    } else setEmojis(data)
  }

  // function EmojiPickerContainer(){
  //   return (
  //     <div>
  //       <EmojiSearch onSearch={handleSearch} />
  //       <div>
  //         {emojis.map((e, i) => (
  //           <div key={i}>{e.symbol}</div>
  //         ))}
  //       </div>
  //     </div>
  //   )
  // }

  return (
    <div>
      <button onClick={handleClick}>😊</button>
      {open ? (<div>
        <EmojiSearch onSearch={handleSearch} />
        <div>
          {emojis.map((e, i) => (
            <div key={i}>{e.symbol}</div>
          ))}
        </div>
      </div>) : ""}
    </div>
  )
}

export default forwardRef(EmojiPicker);