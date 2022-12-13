import LabelIcon from '@mui/icons-material/Label';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from "react-router-dom";

export default function LabelsItem() {
    return (
        <ListItemButton LinkComponent={Link} href="/labeling">
              <ListItemIcon>
                <LabelIcon/>
              </ListItemIcon>
              <ListItemText primary="Labels" />
        </ListItemButton>
    )
}