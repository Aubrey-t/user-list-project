import React from "react";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const UserList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} {user.age} years old
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;

//map tranforms user data to JSX element, returns an array of JSX
//map is used on arrays
