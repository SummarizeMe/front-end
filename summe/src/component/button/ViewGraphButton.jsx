import { useNavigate } from "react-router";

export default function ViewGraphButton({ formRef, setData }) {
  
  const onClick = () => {
    const formData = new FormData(formRef.current);

    let link = formData.getAll("link");
    let linkType = formData.getAll("link_type");

    let data = link
      .map((e, i) => {
        return { link: e, type: linkType[i] };
      })
      .filter(e => e.link.trim() !== '');

    if (!data.reduce((acc, cur) => acc && cur.type !== "", true))
      return alert("link type을 선택해주세요");

    setData(data);
  };

  return (
    <>
      <button type="button" onClick={onClick}>
        View Graph
      </button>
    </>
  );
}
