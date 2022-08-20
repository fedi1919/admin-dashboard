import React from "react";

import FormAddUser from "../../components/formAddUser/FormAddUser";

import "./newUser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <FormAddUser />
    </div>
  );
}
