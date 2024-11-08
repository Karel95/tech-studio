import { Box, Button, Paper, styled, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

// Definimos el tipo para la función que se pasa al Hijo
type ProductInfo = {
  productName: string;
  productDescription: string;
  productPrice: number;
  productImg: string;
};

type ProductProps = {
  productInfo: ProductInfo;
};

export const Products: React.FC<ProductProps> = ({ productInfo }) => {
  //styled(elemento)(estilo): nos permite crear un elemento y asignarle estilos.
  const Img = styled("img")({
    width: "100px",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
    borderRadius: 25,
    cursor: "pointer",
  });
  return (
    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
      <Paper
        sx={{
          display: "flex",
          padding: 1,
          borderRadius: "10px",
          alignItems: "center",
          gap: 1,
          overflow: "hidden",
          mt: 3,
        }}
      >
        <Img src={productInfo.productImg} alt="product image" />
        <Box sx={{ flexGrow: 1, display: "grid", gap: 1 }}>
          <Typography variant="h5">{productInfo.productName}</Typography>
          <Typography variant="body1">
            {productInfo.productDescription}
          </Typography>
        </Box>
        <Box sx={{ mr: 1 }}>
          <h3>${productInfo.productPrice}</h3>
          <Button variant="contained">Add</Button>
        </Box>
      </Paper>
    </Grid>
  );
};
