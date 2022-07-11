import React, {useState} from "react";

export default function EmojiSearch({onSearch}) {
  const [value, setValue] = useState('');
  function handleChange(e){
    setValue(e.target.value)
    onSearch(e)
  }
  return<div><input type="text" onChange={handleChange} value={value}/></div>;
}
