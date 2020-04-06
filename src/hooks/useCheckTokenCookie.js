import { useState, useEffect } from "react";
import Cookies from "js-cookie";

export default () => {
  const [cookie, setCookie] = useState(Cookies.get("token"));

  useEffect(() => {
    const interval = setInterval(() => {
      setCookie(Cookies.get("token"));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });
  console.log(cookie);
  return cookie;
};
