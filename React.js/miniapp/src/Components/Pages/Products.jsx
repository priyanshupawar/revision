import { Grid, GridItem, Heading } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function Products() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      //   console.log(res.data);
      setData(res.data);
    });
  }, []);
  //   console.log(data);

  return (
    <>
      <Heading textAlign={"center"} m={"5px"}>
        Products Page
      </Heading>
      <Grid templateColumns="repeat(4, 1fr)" gap={8}>
        {data?.length > 0 &&
          data.map((ele) => {
            return (
              <GridItem key={ele.id}>
                <ProductCard
                  id={ele.id}
                  title={ele.title}
                  image={ele.image}
                  category={ele.category}
                  description={ele.description}
                  price={ele.price}
                />
              </GridItem>
            );
          })}
      </Grid>
    </>
  );
}

export default Products;
