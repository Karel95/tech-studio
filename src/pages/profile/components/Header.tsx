// import GlobalStyles from "@mui/joy/GlobalStyles";
import IconButton from '@mui/material/IconButton';
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { toggleSidebar } from "../utils";
import Stack from "@mui/material/Stack";
import Search from '../../../components/Search';
import CustomDatePicker from '../../../components/CustomDatePicker';
import MenuButton from '../../../components/MenuButton';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import ColorModeIconDropdown from '../../shared-theme/ColorModeIconDropdown';
import UserMenu from '../../../components/header';
import NavbarBreadcrumbs from "../../dashboard/components/NavbarBreadcrumbs";

export default function Header() {
  return (
    <Stack
      direction="row"
      sx={{
        display: { xs: "none", md: "flex" },
        width: "100%",
        alignItems: { xs: "flex-start", md: "center" },
        justifyContent: "space-between",
        maxWidth: { sm: "100%", md: "1700px" },
        pt: 1.5,
      }}
      spacing={2}
    >
      {/* <GlobalStyles
        styles={(theme) => ({
          ":root": {
            "--Header-height": "52px",
            [theme.breakpoints.up("md")]: {
              "--Header-height": "0px",
            },
          },
        })}
      /> */}
      <IconButton
        onClick={() => toggleSidebar()}
        variant="outlined"
        color="primary"
        size="small"
      >
        <MenuRoundedIcon />
      </IconButton>
      <NavbarBreadcrumbs />
      <Stack direction="row" sx={{ gap: 1 }}>
        <Search />
        <CustomDatePicker />
        <MenuButton showBadge aria-label="Open notifications">
          <NotificationsRoundedIcon />
        </MenuButton>
        <ColorModeIconDropdown />
        <UserMenu />
      </Stack>
    </Stack>
  );
}
