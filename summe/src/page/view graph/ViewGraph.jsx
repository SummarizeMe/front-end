import { useState } from "react";
import { useLocation } from "react-router";
import MonthlyCommit from "../../component/graph/MonthlyCommit";
import TeamContribute from "../../component/graph/TeamContribute";

export default function ViewGraph() {
  // const { state } = useLocation();
  console.log("View Graph props");

  return (
    <>
      <h1>view graph page</h1>
      <MonthlyCommit />
      <TeamContribute />
    </>
  );
}
