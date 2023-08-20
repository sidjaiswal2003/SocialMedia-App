import { Box } from "@mui/material";
import {styled } from "@mui/material";

const WidgetWrapper=styled(Box)(({theme})=>({
    padding:"1rem 1.5rem 0.75rem 1.5rem" ,//Top right bottom left padding
    backgroundColor: theme.palette.background.alt,
    borderRadius:"0.75rem"

}))

export default WidgetWrapper