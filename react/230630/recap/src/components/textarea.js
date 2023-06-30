import React, { useEffect } from "react";
import { useState } from "react";

const TextMemo = () => {
  const [text, setText] =  useState("");
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    setCharCount(text.length);
  },[text]);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return(
    <div>
      <textarea value={text} onChange={handleTextChange} />
      <p>Character Count : {charCount}</p>
    </div>
  );

}

export default TextMemo;