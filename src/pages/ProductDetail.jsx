import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const params = useParams();
  const [singleProduct, setSingleProduct] = useState({});

  useEffect(() => {
    axios({
      method: "GET",
      url:
        "https://nepaligardencms.creatudevelopers.com.np/api/v1/product/get/" +
        params.slug,
    }).then((res) => {
      console.log(res.data.data.product);
      setSingleProduct(res.data.data.product);
    });
  }, []);

  return (
    <>
      <img src={singleProduct.image} />

      <table border="1">
        <tr>
          <td>Name</td>
          <td>{singleProduct.name}</td>
        </tr>

        <tr>
          <td>Price</td>
          <td>{singleProduct.price}</td>
        </tr>
      </table>

      <h4>Descriptions</h4>
      <p>{singleProduct.detail}</p>
    </>
  );
}

export default ProductDetail;
