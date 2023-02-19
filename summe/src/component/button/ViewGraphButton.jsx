import { useNavigate } from "react-router";

export default function ViewGraphButton({ form }) {
  // useNavigate사용: 버튼을 누르면 '/ViewGraph' 페이지로 이동 & props함께 전달
  const Navigate = useNavigate();

  // [1]View Graph 버튼을 클릭하면 data라는 배열에 input값을 저장 & [2]data 값 ViewGraph페이지에 전달 & View Graph 페이지로 이동
  const onClick = () => {
    // [1]data라는 베열에 input값에 있는 모든 값들을 저장
    const formData = new FormData(form.current);
    let link = formData.getAll("link");
    let linkType = formData.getAll("link_type");
    let data = [];
    link.map((e, i) => {
      data.push({ link: e, type: linkType[i] });
    });
    console.log("this is your link and link type data");

    // user's input
    //console.log(data);
    //console.log(JSON.stringify(data));

    Navigate("/viewgraph", { state: data });
  };

  return (
    <>
      <button type="button" onClick={onClick}>
        View Graph
      </button>
    </>
  );
}
