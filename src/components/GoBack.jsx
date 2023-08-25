import { Box, Typography } from "@material-ui/core";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import { useNavigate } from "react-router-dom";
const GoBack = () => {
  const navigate = useNavigate();
  return (
    <Box onClick={() => navigate("/")} display="flex" alignItems="center" position='absolute' bottom='4%' right='10%' style={{zoom: '120%', cursor: 'pointer'}}>
      <ArrowLeftIcon />
      <Typography variant="caption">Back to Roles search</Typography>
    </Box>
  );
};

export default GoBack;
