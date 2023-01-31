import "./InputLink.css";

export default function InputLink() {
  return (
    <div>
      <input
        className="inputLink"
        type="text"
        placeholder="Input Your Link"
        name="link"
      />

      <select name="link_type">
        <option value="">Link type</option>
        <option value="github">github</option>
        <option value="tistory">tistory</option>
        <option value="velog">velog</option>
        <option value="notion">notion</option>
      </select>
    </div>
  );
}
