export default function AddInputButton({ setInputCnt }) {
  const addComponent = () => {
    setInputCnt((e) => e + 1);
  };
  return (
    <>
      <button onClick={addComponent}>Add Input Link</button>
    </>
  );
}
