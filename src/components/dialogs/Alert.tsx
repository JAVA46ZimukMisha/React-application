import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Spinner from './Spiner';
import { StateType } from '../../redux/store';
import { OperationCode } from '../../models/OperationCode';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';

const  Alerts: React.FC = () => {
    const operationCode: OperationCode = useSelector<StateType, OperationCode> (state=>state.operationCode);
    const message = getMessage();
    function getMessage() {
        if(operationCode == OperationCode.SERVER_UNAVAILABLE) {
            return "Error! Server Unavailable!"
          }
          if(operationCode == OperationCode.UNKNOWN) {
           return "Unknown error"
          }
    }
  return <Box><Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="error">{message}</Alert>
      <Spinner/>
    </Stack></Box>;
}
export default Alerts;