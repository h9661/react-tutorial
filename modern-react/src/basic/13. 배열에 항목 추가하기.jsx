import React, { useRef } from "react";

function CreateUser(props) {
  const { username, email, onChange, onCreate } = props;

  const render = () => {
    return (
      <div>
        <input type="text" name="username" placeholder="계정명" value={username} onChange={onChange} />
        <input type="text" name="email" placeholder="이메일" value={email} onChange={onChange} />
        <button onClick={onCreate}>등록</button>
      </div>
    );
  };

  return render();
}

function App() {
  const [inputs, setInputs] = React.useState({
    username: "",
    email: "",
  });
  const { username, email } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value, // name 키를 가진 값을 value로 설정
    });
  };

  const [users, setUsers] = React.useState([
    {
      id: 1,
      username: "velopert",
      email: "123",
    },
    {
      id: 2,
      username: "tester",
      email: "123",
    },
    {
      id: 3,
      username: "liz",
      email: "123",
    },
  ]);

  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };

    setUsers([...users, user]);

    setInputs({
      username: "",
      email: "",
    });

    nextId.current += 1;
  };

  const render = () => {
    return (
      <div>
        <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.username} ({user.email})
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return render();
}

export default App;
