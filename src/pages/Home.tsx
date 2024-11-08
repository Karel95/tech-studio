import * as React from "react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";
import { AlertTitle, Button, Stack } from "@mui/material";
import { VariantType, useSnackbar } from "notistack";

const Home = () => {
  //alerts
  const [openSuccess, setOpenSuccess] = React.useState(true);
  const [openInfo, setOpenInfo] = React.useState(true);
  const [openWarning, setOpenWarning] = React.useState(true);
  const [openError, setOpenError] = React.useState(true);

  //snacbars
  const { enqueueSnackbar } = useSnackbar();

  const handleClick = () => {
    enqueueSnackbar("I love snacks.");
  };

  const handleClickVariant = (variant: VariantType) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar("This is a success message!", { variant });
  };

  return (
    <>
      <Box
        sx={{
          marginTop: "64px", // 64px cada barra
        }}
      >
        <Stack sx={{ width: "100%", alignItems: "flex-end" }} spacing={2}>
          <Collapse in={openSuccess}>
            <Alert
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpenSuccess(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              variant="filled"
              severity="success"
              sx={{ width: "520px" }}
            >
              This is a filled success Alert.
            </Alert>
          </Collapse>
          <Collapse in={openInfo}>
            <Alert
              action={
                <>
                  <Button
                    color="inherit"
                    onClick={handleClickVariant("success")}
                  >
                    Snackbar
                  </Button>
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setOpenInfo(false);
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                </>
              }
              variant="outlined"
              severity="info"
              sx={{ width: "520px" }}
            >
              This is a outlined info Alert.
            </Alert>
          </Collapse>
          <Collapse in={openWarning}>
            <Alert
              action={
                <>
                  <Button color="inherit" onClick={handleClick}>
                    Snackbar
                  </Button>
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setOpenWarning(false);
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                </>
              }
              variant="filled"
              severity="warning"
              sx={{ width: "520px" }}
            >
              <AlertTitle>Warning</AlertTitle>
              This is a filled warning Alert with a cautious title.
            </Alert>
          </Collapse>
          <Collapse in={openError}>
            <Alert
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpenError(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              severity="error"
              sx={{ width: "520px" }}
            >
              <AlertTitle>Error</AlertTitle>
              This is a basic error Alert with a scary title.
            </Alert>
          </Collapse>
        </Stack>
      </Box>
    </>
  );
};

export default Home;
