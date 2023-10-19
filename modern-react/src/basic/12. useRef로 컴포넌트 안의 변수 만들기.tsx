import React, { useRef } from "react";

function UseRef() {
  const [inputs, setInputs] = React.useState({
    name: "",
    nickname: "",
  });

  const { name, nickname } = inputs;

  const nameInput = useRef<HTMLInputElement>(null);

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
    if (nameInput.current) {
      nameInput.current.focus();
    }
  };

  const render = () => {
    return (
      <div>
        <input name="name" onChange={onChange} type="text" placeholder="name" value={name} ref={nameInput} />
        <input name="nickname" onChange={onChange} type="text" placeholder="nickname" value={nickname} />
        <button onClick={onReset}>reset</button>
        <div>
          <b>value: </b>
          {name} {nickname}
        </div>
      </div>
    );
  };
}
