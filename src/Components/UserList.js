import React, { useState, useEffect } from "react";
import axios from "axios";
import UserCard from "./UserCard/UserCard.js";

const UserList = () => {
  const [listOfUSer, setListOfUser] = useState([]);

  const listStyle = {
    display: "flex",
    flexWrap: "wrapflex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const fetchUsers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setListOfUser(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div style={listStyle}>
      {listOfUSer.map((el, i) => (
        <UserCard user={el} key={i} />
      ))}
    </div>
  );
};

export default UserList;
