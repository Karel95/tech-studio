import Grid from "@mui/material/Grid2";
import { Products } from "./products";
import { Services } from "./services";

// Destructuring de objetos en JavaScript
const serviceInfo = (serviceNr: number) => {
  return {
    serviceDescription: "unknown" + serviceNr,
    servicePrice: 9.99,
    serviceImg: `/images/proyecto${serviceNr}.jpg`,
    add: false,
  };
};

// Destructuring de objetos en JavaScript
const productInfo = (productNr: number) => {
  return {
    productName: "unknown" + productNr,
    productDescription: "unknown" + productNr,
    productPrice: 9.99,
    productImg: `/images/proyecto${productNr}.png`,
  };
};

//Objeto para pasar como prop (no es buena practica)
const productInfo8 = {
  productName: "unknown8",
  productDescription: "unknown8",
  productPrice: 9.99,
  productImg: `/images/proyecto8.png`,
};

//Array para pasar como prop
const productInfos = [
  {
    productName: "unknown5",
    productDescription: "unknown5",
    productPrice: 9.99,
    productImg: `/images/proyecto5.png`,
  },
  {
    productName: "unknown6",
    productDescription: "unknown6",
    productPrice: 9.99,
    productImg: `/images/proyecto6.png`,
  },
  {
    productName: "unknown7",
    productDescription: "unknown7",
    productPrice: 9.99,
    productImg: `/images/proyecto7.png`,
  },
];

const Main = () => {
  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{
          marginTop: "64px", // 64px cada barra
        }}
      >
        <Grid container>
          <Services serviceInfo={serviceInfo(1)}>unknownA</Services>
          <Services serviceInfo={serviceInfo(2)}>unknownB</Services>
        </Grid>
        <Grid container sx={{ gap: 1 }}>
          <Products productInfo={productInfo(3)} />
          <Products productInfo={productInfo(4)} />
          {productInfos.map((product) => {
            const {
              productName,
              productDescription,
              productPrice,
              productImg,
            } = product;
            return (
              <Products
                key={productName}
                productInfo={{
                  productName,
                  productDescription,
                  productPrice,
                  productImg,
                }}
              />
            );
          })}
          <Products productInfo={{ ...productInfo8 }} />
        </Grid>
      </Grid>
    </>
  );
};

export default Main;
