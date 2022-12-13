import LabelIcon from '@mui/icons-material/Label';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

export default function LabelsItem() {
    return (
        <ListItemButton>
              <ListItemIcon>
                <LabelIcon/>
              </ListItemIcon>
              <ListItemText primary="Labels" />
        </ListItemButton>
    )
}