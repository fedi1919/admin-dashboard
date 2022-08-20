import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";

import "./productList.css";
import { deleteProductById, getProducts } from "../../redux/product/apiCalls";

export default function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteProductById(id, dispatch);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "codeProduit",
      headerName: "Code Produit",
      width: 200,
    },
    { field: "idTypeProduit", headerName: "Id Type Produit", width: 200 },
    {
      field: "seuil",
      headerName: "Seuil",
      width: 120,
    },
    {
      field: "etat",
      headerName: "Etat",
      width: 120,
    },
    {
      field: "dateCreation",
      headerName: "Date Creation",
      width: 200,
    },
    {
      field: "dateMaj",
      headerName: "Date Maj",
      width: 200,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={products}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row.id}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
