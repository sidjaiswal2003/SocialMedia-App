import { Box } from "@mui/material";
import  {styled}from "@mui/material";

const FlexBetween=styled(Box)({
    display:"flex",
    justifyContent:"space-between",//We use like this so that we can use this file many times as components
    alignItems:"center"

})
export default FlexBetween
