import axios from "axios";

export default function ViewGraphButton({form}) {
  const onClick = async () => {
    const formData = new FormData(form.current);
    let link =formData.getAll('link');
    let linkType = formData.getAll("link type");
    let data = [];
    link.map((e,i) => data.push({link:e,type:linkType[i]}));
    console.log(data);

    //let response = await axios.get("url",{params:{data:data}});
    let respose = {status:200, data: {
      github_repos:[
        {addr:"레포주소", used_tech:["react","spring",], used_lang:["javascript","python"]},
        {},
      ],
      blog:[
        {addr:"블로그 글 주소", title:"제목", keyword:[" ","",],},
      ],
      calender: [
        {date:"2022-01-11", works:[{type:"github", addr:"레포주소"}]},
        {date:"2022-01-12", works:[{type:"github", addr:"레포주소"}, {},]},
      ]
    }}

  }

  return (
      <button type="button" onClick={onClick}>
        View Graph
      </button>
  );
}
