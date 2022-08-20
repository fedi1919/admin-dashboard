import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Paper, TextField, Button, MenuItem } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import { updateProduct } from "../../redux/product/apiCalls";

const FormUpdateProduct = () => {
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
  const location = useLocation();
  const productId = location.pathname.split("/")[2];

  const products = useSelector((state) => state.product.products);
  const product = products.find((element) => element.id == productId);

  const [inputs, setInputs] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const updateHandler = (e) => {
    e.preventDefault();
    let product = { ...inputs };
    console.log(product);
    updateProduct(productId, product, dispatch);
    navigate("/products", { replace: true });
  };

  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <h2>Update The Product</h2>
        </Grid>
        <form>
          <Grid style={gridStyle}>
            <TextField
              name="codeProduit"
              label="Code Produit"
              placeholder={product.codeProduit}
              type="number"
              fullWidth
              required
              style={textFieldStyle}
              onChange={handleChange}
            />
            <TextField
              name="idTypeProduit"
              label="Id Type Produit"
              placeholder={product.idTypeProduit}
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
              placeholder={product.seuil}
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
              placeholder={product.preparateur}
              type="text"
              fullWidth
              style={textFieldStyle}
              onChange={handleChange}
            />
            <TextField
              name="designation"
              label="Designation"
              placeholder={product.designation}
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
              placeholder={product.hostname}
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
              onClick={updateHandler}
            >
              Update Product
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

export default FormUpdateProduct;
