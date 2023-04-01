import MostLanguage from "../../component/graph/MostLanguage";
import Time from "../../component/graph/Time";
import MonthlyCommit from "../../component/graph/MonthlyCommit";
import TeamContribute from "../../component/graph/TeamContribute";
import Blog from "../../component/graph/Blog";

export default function ViewGraph({ state }) {
  console.log(state);
  const github = state.filter((e) => e.type === "github").map((e) => e.link);
  const blog = state.filter((e) => e.type === "tistory"||e.type === "velog" );
  return (
    <>
      {github.length > 0 &&
      <>
        <Time state={github} />
        <MostLanguage state={github} />
        <MonthlyCommit state={github} />
        <TeamContribute state={github} />
      </>
      }
      {blog.length > 0 && <Blog state={blog} />}
    </>
  );
}
