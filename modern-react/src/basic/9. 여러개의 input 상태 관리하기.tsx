import React from "react";

function InputsSample() {
  const [inputs, setInputs] = React.useState({
    name: "",
    nickname: "",
  });

  const { name, nickname } = inputs;

  const onChange = (e: any) => {
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
  };

  const render = () => {
    return (
      <div>
        <input name="name" onChange={onChange} type="text" placeholder="name" />
        <input name="nickname" onChange={onChange} type="text" placeholder="nickname" />
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
