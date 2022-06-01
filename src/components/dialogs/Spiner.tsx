import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Spinner: React.FC = () => {
  return <Box sx={{textAlign: "center"}}>
             <CircularProgress />
        </Box>
}
export default Spinner;