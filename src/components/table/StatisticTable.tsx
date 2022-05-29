import { Box, Paper, Typography } from "@mui/material";
import { DataGrid, GridColumns } from "@mui/x-data-grid";
import _ from "lodash";
import React from "react";
import { getStatistics } from "../../util/functions";
function getStatisticColumns(): GridColumns {
    const columns: GridColumns = [
        {field: "from", type: "number", headerName: "From", align: "center", headerAlign: "center", flex:0.5},
    { field: "to", type: "number", headerName: "To", align: "center", headerAlign: "center", flex:1 },
    { field: "amount", type: "number", headerName: "Amount", align: "center", headerAlign: "center", flex: 0.7 },
    ]

return columns;
}
type Props = {
    fromTo: number;
    field: string;
    tableName: string
}
export const StatisticTable: React.FC<Props> = ({fromTo, field, tableName}) => {
    const columns = getStatisticColumns();
return <Box>
<Typography gutterBottom variant={'h4'}
 sx={{fontSize: {xs: "1.3em", sm: "1em", md:"2em"}, textAlign: 'center', fontWeight: 'bold'}}>
     {tableName}</Typography>
     <Paper sx={{height: {xs: '90vh', sm: '85vh', md: '80vh'}, width: {xs: '100%', md: '80%'}}}>
     <DataGrid rows={getStatistics(fromTo, field)} columns={columns} />
</Paper>
</Box>
}