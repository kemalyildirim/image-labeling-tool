import LabelIcon from "@mui/icons-material/Label";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { NavLink } from "react-router-dom";

export default function LabelsItem() {
  return (
    <ListItemButton LinkComponent={NavLink} href="/labeling">
      <ListItemIcon>
        <LabelIcon />
      </ListItemIcon>
      <ListItemText primary="Labels" />
    </ListItemButton>
  );
}
