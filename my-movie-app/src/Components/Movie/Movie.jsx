import React from "react";
import Card from "../Card/Card";
import { useSelector } from "react-redux";

export default function Movie() {
  let storeData = useSelector((data) => {
    return data.searchedMovie;
  });
  console.log(storeData);
  return (
    <div>
      {storeData.length != 0 ? (
        <>
          {storeData.map((item) => {
            console.log(item) ; 
            return (
              <Card item={{...item}} />
            );
          })}
        </>
      ) : null}
    </div>
  );
}
