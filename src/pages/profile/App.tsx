import { alpha } from '@mui/material/styles';
import AppTheme from "../shared-theme/AppTheme";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
// import Sidebar from "./components/Sidebar";
// import Header from "./components/Header";
// import MyProfile from "./components/MyProfile";
import {
  chartsCustomizations,
  dataGridCustomizations,
  datePickersCustomizations,
  treeViewCustomizations,
} from "../../theme/customizations";
import SideMenu from '../dashboard/components/SideMenu';
import AppNavbar from '../dashboard/components/AppNavbar';

const xThemeComponents = {
  ...chartsCustomizations,
  ...dataGridCustomizations,
  ...datePickersCustomizations,
  ...treeViewCustomizations,
};

export default function JoyOrderDashboardTemplate(props: {
  disableCustomTheme?: boolean;
}) {
  return (
    <AppTheme {...props} themeComponents={xThemeComponents}>
      <CssBaseline enableColorScheme />
      <Box sx={{ display: "flex", minHeight: "100dvh" }}>
        {/* <Sidebar />
        <Header /> */}

        <SideMenu />
        <AppNavbar />

        {/* Main content */}
        <Box
          component="main"
          sx={(theme) => ({
            flexGrow: 1,
            backgroundColor: theme.vars
              ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
              : alpha(theme.palette.background.default, 1),
            overflow: 'auto',
          })}
        >
          {/* <MyProfile /> */}
        </Box>
      </Box>
    </AppTheme>
  );
}
