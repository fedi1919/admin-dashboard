import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import "./product.css";

import FormUpdateProduct from "../../components/FormUpdateProduct/FormUpdateProduct";

export default function Product() {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];

  const user = useSelector((state) => state.user.currentUser);
  let products = useSelector((state) => state.product.products);
  let product = products.find((element) => element.id == productId);

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>

      <div className="productTop">
        <div className="productTopRight">
          <div>
            <div className="productInfoTop">
              <h2 className="productName">All Details</h2>
            </div>
          </div>

          <div className="productInfoBottomContainer">
            <div className="productInfoBottom">
              <div className="productInfoItem">
                <span className="productInfoKey">id:</span>
                <span className="productInfoValue">{productId}</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">code produit:</span>
                <span className="productInfoValue">{product.codeProduit}</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">id type produit:</span>
                <span className="productInfoValue">
                  {product.idTypeProduit}
                </span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">seuil:</span>
                <span className="productInfoValue">{product.seuil}</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">etat:</span>
                <span className="productInfoValue">true</span>
              </div>
            </div>

            <div className="productInfoBottom">
              <div className="productInfoItem">
                <span className="productInfoKey">designation:</span>
                <span className="productInfoValue">{product.designation}</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">preparateur:</span>
                <span className="productInfoValue">{product.preparateur}</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">hostname:</span>
                <span className="productInfoValue">{product.hostname}</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">date creation:</span>
                <span className="productInfoValue">{product.dateCreation}</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">date maj:</span>
                <span className="productInfoValue">{product.dateMaj}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="productBottom">
        <FormUpdateProduct product={product} />
      </div>
    </div>
  );
}
