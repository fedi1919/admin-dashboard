import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";

import FormControlLabel from "@material-ui/core/FormControlLabel";

import Checkbox from "@material-ui/core/Checkbox";

const FormSignup = () => {
  const paperStyle = {
    padding: 20,
    width: 300,
    margin: "0 auto",
    border: "1px solid",
  };

  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const marginTop = { marginTop: "5px" };
  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlinedIcon />
          </Avatar>
          <h2 style={marginTop}>Sign Up</h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an account !
          </Typography>
        </Grid>
        <form>
          <TextField
            fullWidth
            label="Email"
            placeholder="Enter your email"
            style={marginTop}
          />
          <TextField
            fullWidth
            label="Password"
            placeholder="Enter your password"
            type="password"
            style={marginTop}
          />
          <TextField
            fullWidth
            label="Confirm Password"
            placeholder="Confirm your password"
            type="password"
            style={marginTop}
          />
          <TextField
            fullWidth
            label="Matricule"
            placeholder="Enter Matricule"
            style={marginTop}
          />

          <FormControlLabel
            control={<Checkbox name="isAdmin" />}
            label="isAdmin"
            style={marginTop}
          />
          <FormControlLabel
            control={<Checkbox name="checkedA" />}
            label="I accept the terms and conditions."
            style={marginTop}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={marginTop}
            fullWidth
          >
            Sign up
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default FormSignup;
