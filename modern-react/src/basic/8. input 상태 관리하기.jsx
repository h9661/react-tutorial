import react from "react";

function InputSample() {
  const [text, setText] = react.useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onReset = () => {
    setText("");
  };

  const render = () => {
    return (
      <div>
        <input onChange={onChange} type="text" />
        <button onClick={onReset}>초기화</button>
        <div>
          <b>값: {text}</b>
        </div>
      </div>
    );
  };

  return render();
}

export default InputSample;
