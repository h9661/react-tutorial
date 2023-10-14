import React, { useRef } from "react";

function User({ user }: { user: { name: string; age: number; id: number } }) {
  const render = () => {
    return (
      <div>
        <b>{user.name}</b> <span>{user.age}</span>
      </div>
    );
  };

  return render();
}

function UserList() {
  const users = [
    { name: "Taro", age: 10, id: 1 },
    { name: "Hanako", age: 5, id: 2 },
    { name: "Jiro", age: 15, id: 3 },
  ];

  const nextId = useRef(4);
  const onCreate = () => {
    // 나중에 구현 할 배열에 항목 추가하는 로직
    // ...

    nextId.current += 1;
  };

  const render = () => {
    return (
      <div>
        {users.map((user) => (
          <User user={user} key={user.id} />
        ))}
      </div>
    );
  };

  return render();
}
