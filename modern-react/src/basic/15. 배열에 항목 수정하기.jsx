import React, { useRef } from "react";

function User({ username, email, id, onRemove, onClick, active }) {
  const render = () => {
    if (active) {
      return (
        <div onClick={() => onClick(id)}>
          <b style={{ color: "green" }}>{username}</b> <span>({email})</span>
          <button onClick={() => onRemove(id)}>삭제</button>
        </div>
      );
    } else {
      return (
        <div onClick={() => onClick(id)}>
          <b>{username}</b> <span>({email})</span>
          <button onClick={() => onRemove(id)}>삭제</button>
        </div>
      );
    }
  };

  return render();
}

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

  const onRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));

    console.log(id);
  };

  const onClick = (id) => {
    setUsers(
      users.map((user) => {
        if (user.id === id) {
          return { ...user, active: !user.active };
        }
        return user;
      })
    );
  };

  const [users, setUsers] = React.useState([
    {
      id: 1,
      username: "velopert",
      email: "123",
      active: false,
    },
    {
      id: 2,
      username: "tester",
      email: "123",
      active: false,
    },
    {
      id: 3,
      username: "liz",
      email: "123",
      active: false,
    },
  ]);

  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
      active: false,
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
              <User username={user.username} email={user.email} id={user.id} active={user.active} onRemove={onRemove} onClick={onClick} />
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return render();
}

export default App;
