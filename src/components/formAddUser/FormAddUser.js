import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Grid, Paper, TextField, Button, MenuItem } from "@material-ui/core";
import { addUser } from "../../redux/users/apiCalls";

const FormAddUser = () => {
  //Styles
  const paperStyle = {
    padding: 20,
    height: "65vh",
    width: 700,
    margin: "0 auto",
    border: "1px solid",
  };

  const textFieldStyle = {
    margin: "10px",
  };
  const gridStyle = {
    display: "flex",
  };
  const btnstyle = { margin: "15px", fontWeight: "600" };

  //Logic
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const addHandler = (e) => {
    e.preventDefault();
    const user = { ...inputs };
    addUser(user, dispatch);
    navigate("/users", { replace: true });
  };

  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <h2>Add a new User</h2>
        </Grid>
        <form>
          <Grid style={gridStyle}>
            <TextField
              name="matricule"
              label="Matricule"
              type="text"
              fullWidth
              required
              style={textFieldStyle}
              onChange={handleChange}
            />
            <TextField
              name="email"
              label="Email"
              type="email"
              fullWidth
              required
              style={textFieldStyle}
              onChange={handleChange}
            />
          </Grid>
          <Grid style={gridStyle}>
            <TextField
              name="password"
              label="Password"
              type="password"
              fullWidth
              required
              style={textFieldStyle}
              onChange={handleChange}
            />
            <TextField
              name="isAdmin"
              label="Is Admin"
              select
              style={textFieldStyle}
              fullWidth
              onChange={handleChange}
            >
              <MenuItem value={true}>true</MenuItem>
              <MenuItem value={false}>false</MenuItem>
            </TextField>
          </Grid>
          <Grid style={gridStyle}>
            <TextField
              name="etat"
              label="Etat"
              select
              style={textFieldStyle}
              fullWidth
              onChange={handleChange}
            >
              <MenuItem value={true}>true</MenuItem>
              <MenuItem value={false}>false</MenuItem>
            </TextField>
          </Grid>

          <Grid
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              type="submit"
              color="primary"
              variant="contained"
              style={btnstyle}
              onClick={addHandler}
            >
              Add Product
            </Button>
            <Button
              type="reset"
              color="secondary"
              variant="contained"
              style={btnstyle}
            >
              Reset
            </Button>
          </Grid>
        </form>
      </Paper>
    </Grid>
  );
};

export default FormAddUser;
