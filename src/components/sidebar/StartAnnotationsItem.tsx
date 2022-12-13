import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";

export default function StartAnnotationsItem() {
  return (
    <ListItemButton LinkComponent={Link} href="/annotating">
      <ListItemIcon>
        <AutoFixHighIcon />
      </ListItemIcon>
      <ListItemText primary="Start Annotating" />
    </ListItemButton>
  );
}
