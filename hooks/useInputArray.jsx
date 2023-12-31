import { useCallback, useState } from "react";

export const useInputArray = () => {
  const [text, setText] = useState("");
  const [array, setArray] = useState([]);

  const handleChange = useCallback((e) => {
    if (e.target.value.length > 5) {
      alert("５文字以内にしてください");
      return;
    }
    setText(e.target.value.trim().toLowerCase());
  }, []);

  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      // if (prevArray.some((item) => item === text)) {
      if (prevArray.includes(text)) {
        alert("同じものがすでに存在します");
        return prevArray;
      }
      return [...prevArray, text];
    });
  }, [text]);

  return { text, array, handleChange, handleAdd };
};
