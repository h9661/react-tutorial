import React, { useRef } from "react";

function InputsSample() {
  const [inputs, setInputs] = React.useState({
    name: "",
    nickname: "",
  });

  const { name, nickname } = inputs;

  const nameInput = useRef();
  const nicknameInput = useRef();

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs, // copy all the existing values
      [name]: value, // overwrite the value of the changed field
    });
  };
  const onReset = () => {
    setInputs({
      name: "",
      nickname: "",
    });
    nameInput.current.value = "";
    nicknameInput.current.value = "";
  };

  const render = () => {
    return (
      <div>
        <input name="name" onChange={onChange} type="text" placeholder="name" ref={nameInput} />
        <input name="nickname" onChange={onChange} type="text" placeholder="nickname" ref={nicknameInput} />
        <button onClick={onReset}>reset</button>
        <div>
          <b>value: </b>
          {name} {nickname}
        </div>
      </div>
    );
  };

  return render();
}

export default InputsSample;
