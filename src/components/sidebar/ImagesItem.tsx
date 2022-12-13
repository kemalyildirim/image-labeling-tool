import ImageIcon from '@mui/icons-material/Image';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from "react-router-dom";

export default function ImagesItem() {
    return (
        <ListItemButton LinkComponent={Link} href="/images">
              <ListItemIcon>
                <ImageIcon/>
              </ListItemIcon>
              <ListItemText primary="Open Images" />
        </ListItemButton>
    )
}