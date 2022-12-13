import { ReactElement, FC } from "react";
import { Box, Typography } from "@mui/material";
import Canvas from "../components/canvas/Canvas";

const Images: FC<any> = (): ReactElement => {
  return (
    <Box
      sx={{
        // flexGrow: 1,
        backgroundColor: "whitesmoke",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h3">Images</Typography>
      <Canvas
        width={1024}
        height={1024}
        src={
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/1200px-Picture_icon_BLACK.svg.png"
        }
      />
    </Box>
  );
};

export default Images;
