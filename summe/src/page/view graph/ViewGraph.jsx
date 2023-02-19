import { useLocation } from "react-router";
import MostLanguage from "../../component/graph/MostLanguage";
import Time from "../../component/graph/Time";
import MonthlyCommit from "../../component/graph/MonthlyCommit";
import TeamContribute from "../../component/graph/TeamContribute";
import Blog from "../../component/graph/Blog";

export default function ViewGraph() {
  const { state } = useLocation();
  //console.log("View Graph props", state);

  return (
    <>
      <h1>view graph page</h1>
      <Time state={state} />
      <MostLanguage state={state} />
      <MonthlyCommit state={state} />
      <TeamContribute state={state} />
      <Blog state={state} />
    </>
  );
}
