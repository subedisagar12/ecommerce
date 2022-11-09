import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";

function Homepage() {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    axios({
      url: "https://nepaligardencms.creatudevelopers.com.np/api/v1/product/get",
      method: "GET",
    }).then((res) => {
      // console.log(res.data.products.data);
      setAllProducts(res.data.products.data);
    });
  }, []);

  return (
    <>
      <div className="row">
        {allProducts.map(function (product) {
          return (
            <div className="col-3">
              <ProductCard
                image={product.image}
                name={product.name}
                slug={product.slug}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Homepage;
