import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import { login } from "../../redux/user/apiCalls";

const FormLogin = () => {
  //Styles
  const paperStyle = {
    padding: 20,
    height: "60vh",
    width: 300,
    margin: "0 auto",
    border: "1px solid",
  };

  const textFieldStyle = {
    marginTop: "10px",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "15px 0" };

  //Logic
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { email, password });
  };

  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>
        <form>
          <TextField
            label="Email"
            placeholder="Enter Email"
            type="email"
            fullWidth
            required
            onChange={(e) => setEmail(e.target.value)}
            style={textFieldStyle}
          />
          <TextField
            label="Password"
            placeholder="Enter password"
            type="password"
            fullWidth
            required
            onChange={(e) => setPassword(e.target.value)}
            style={textFieldStyle}
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            onClick={handleClick}
            disabled={isFetching}
            style={btnstyle}
            fullWidth
          >
            Sign in
          </Button>
          {error && (
            <Typography color="secondary" style={{ fontWeight: "bold" }}>
              An Error occured. Please try again later
            </Typography>
          )}
        </form>
      </Paper>
    </Grid>
  );
};

export default FormLogin;
