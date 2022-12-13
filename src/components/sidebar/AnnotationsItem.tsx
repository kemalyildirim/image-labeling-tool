import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { NavLink } from "react-router-dom";

export default function AnnotationsItem() {
  return (
    <ListItemButton LinkComponent={NavLink} href="/annotating">
      <ListItemIcon>
        <AutoFixHighIcon />
      </ListItemIcon>
      <ListItemText primary="Start Annotating" />
    </ListItemButton>
  );
}
