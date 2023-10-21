import React, { useEffect, useRef } from "react";

function User({ username, email, id, onRemove, onClick, active }: any) {
  // useEffect(() => {
  //   // 마운트 될 때
  //   console.log("컴포넌트가 화면에 나타남");

  //   // 언마운트 될 때
  //   return () => {
  //     console.log("컴포넌트가 화면에서 사라짐");
  //   };
  // }, []); // deps가 비어있는 경우(마운트, 언마운트)

  // useEffect(() => {
  //   console.log("user 값이 설정됨");
  //   console.log(username);

  //   return () => {
  //     console.log("user 값이 바뀌기 전");
  //     console.log(username);
  //   };
  // }, [username]); // deps가 비어있지 않은 경우(마운트, 언마운트, 업데이트)

  // useEffect(() => {
  //   console.log(username);
  // }); // deps가 없는 경우(리렌더링)

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

function CreateUser(props: {
  username: string;
  email: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCreate: () => void;
}): React.ReactNode {
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
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value, // name 키를 가진 값을 value로 설정
    });
  };

  const onRemove = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));

    console.log(id);
  };

  const onClick = (id: number) => {
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
