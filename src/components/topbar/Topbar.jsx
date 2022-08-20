import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Typography } from "@material-ui/core";

import "./topbar.css";
import { logout } from "../../redux/user/apiCalls";

export default function Topbar() {
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const handleLogout = () => {
    logout(dispatch);
  };
  return (
    <div className="wrapper">
      <div className="left">Dashboard</div>
      <div className="center">SagemCom</div>
      <div className="right">
        {user ? (
          <div className="user">
            {/* <Typography variant="h6" color="primary">
              Matricule: <b>{user.existingUser.matricule}</b>
            </Typography> */}
            <Button
              variant="contained"
              color="secondary"
              onClick={handleLogout}
              style={{ marginLeft: "15px", fontWeight: "bold" }}
            >
              LOGOUT
            </Button>
          </div>
        ) : (
          <div>
            <Link to="/login">
              <Button
                color="primary"
                variant="contained"
                style={{ fontWeight: "bold" }}
              >
                LOGIN
              </Button>
            </Link>
            <Link to="/signup">
              <Button
                variant="contained"
                color="primary"
                style={{ marginLeft: "5px", fontWeight: "bold" }}
              >
                REGISTER
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
