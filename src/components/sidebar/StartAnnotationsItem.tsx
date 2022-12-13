import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

export default function StartAnnotationsItem() {
    return (
        <ListItemButton>
              <ListItemIcon>
                <AutoFixHighIcon/>
              </ListItemIcon>
              <ListItemText primary="Start Annotating" />
        </ListItemButton>
    )
}