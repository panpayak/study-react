import { useEffect } from "react";

export const useBg = () => {
  useEffect(() => {
    // マウント
    document.body.style.backgroundColor = "lightblue";
    // アンマウント
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
};
