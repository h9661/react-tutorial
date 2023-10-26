import React from "react";

function User({ user }) {
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
    { name: "Taro", age: 10 },
    { name: "Hanako", age: 5 },
    { name: "Jiro", age: 15 },
  ];

  const render = () => {
    return (
      <div>
        {users.map((user, index) => (
          <User user={user} key={index} />
        ))}
      </div>
    );
  };

  return render();
}

export default UserList;
