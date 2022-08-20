import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Grid, Paper, TextField, Button, MenuItem } from "@material-ui/core";
import { addProduct } from "../../redux/product/apiCalls";

const FormAddProduct = () => {
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
    const product = { ...inputs };
    addProduct(product, dispatch);
    navigate("/products", { replace: true });
  };

  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <h2>Add a new Product</h2>
        </Grid>
        <form>
          <Grid style={gridStyle}>
            <TextField
              name="codeProduit"
              label="Code Produit"
              type="number"
              fullWidth
              required
              style={textFieldStyle}
              onChange={handleChange}
            />
            <TextField
              name="idTypeProduit"
              label="Id Type Produit"
              type="number"
              fullWidth
              required
              style={textFieldStyle}
              onChange={handleChange}
            />
          </Grid>
          <Grid style={gridStyle}>
            <TextField
              name="seuil"
              label="Seuil"
              type="number"
              fullWidth
              required
              style={textFieldStyle}
              onChange={handleChange}
            />
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
          <Grid style={gridStyle}>
            <TextField
              name="preparateur"
              label="Preparateur"
              type="text"
              fullWidth
              style={textFieldStyle}
              onChange={handleChange}
            />
            <TextField
              name="designation"
              label="Designation"
              type="text"
              fullWidth
              style={textFieldStyle}
              onChange={handleChange}
            />
          </Grid>

          <Grid style={gridStyle}>
            <TextField
              name="hostname"
              label="Hostname"
              type="text"
              style={textFieldStyle}
              fullWidth
              onChange={handleChange}
            />
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

export default FormAddProduct;
