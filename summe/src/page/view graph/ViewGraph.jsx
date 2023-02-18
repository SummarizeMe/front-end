import { useState } from "react";
import { useLocation } from "react-router";
import MostLanguage from "../../component/graph/MostLanguage";
import Time from "../../component/graph/Time";

export default function ViewGraph() {
  // const { state } = useLocation();
  console.log("View Graph props");

  return (
    <>
      <h1>view graph page</h1>
      <Time/>
      <MostLanguage/>
    </>
  );
}
