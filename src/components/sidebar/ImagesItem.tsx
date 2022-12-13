import ImageIcon from '@mui/icons-material/Image';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

export default function ImagesItem() {
    return (
        <ListItemButton>
              <ListItemIcon>
                <ImageIcon/>
              </ListItemIcon>
              <ListItemText primary="Open Images" />
        </ListItemButton>
    )
}