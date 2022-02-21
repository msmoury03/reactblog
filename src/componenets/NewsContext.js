import axios from "axios";
import react, { createContext, useEffect, useState } from "react";

export const Newscontext = createContext();

export const NewsProvide = (props) => {
  const [news, setnews] = useState([]);

  
  useEffect(async () => {
    const response = await axios.get("https://reactbackendd.herokuapp.com/v1/blogs");
    const data = response.data;
    await setnews(data)
  }, [Newscontext]);

  return (
    <Newscontext.Provider value={[news, setnews]}>
      {props.children}
    </Newscontext.Provider>
  );
};












