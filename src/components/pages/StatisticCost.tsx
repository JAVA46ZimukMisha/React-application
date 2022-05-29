import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Paper, Select, Typography } from "@mui/material";
import React from "react";
import _ from "lodash";
import { StatisticTable } from "../table/StatisticTable";
const fromToIntervals = [100, 500, 1000, 5000];
const StatisticCost: React.FC = () => {
    const [fromTo, setFromTo] = React.useState(100);
    const [flInterval, setflInterval] = React.useState(false);
    function setInterval(event: any) {
        setFromTo(event.target.value)  
    }
    function getIntervalItems(items: number[]): React.ReactNode {
        return items.map(c => <MenuItem value={c} key={c}>{c}</MenuItem>)
    }
    function showStatisticForm() {
        return <Grid item xs={10} sm={5} >
                <FormControl fullWidth required>
                    <InputLabel id="interval-select-label">Cost Interval</InputLabel>
                    <Select
                        labelId="interval-select-label"
                        id="demo-simple-select"
                        label="fromTo"
                        value={fromTo}
                        onChange={setInterval}
                    >
                        <MenuItem value="">{fromTo}</MenuItem>
                        {getIntervalItems(fromToIntervals)}
                    </Select>
                </FormControl>
            </Grid>
    }
    function whatToShaw() {
        return flInterval ? <StatisticTable fromTo={fromTo} field={"cost"} tableName={"Courses Cost Statistics"}/> : showStatisticForm()
    }
    function showMessage() {
        return flInterval ? "Do you whant to change interval?" : "show statistic table" 
    }
    function setFlag() {
        setflInterval(!flInterval)
    }
    return <div>
        <Button variant="contained" onClick={setFlag}>{showMessage()}</Button>
        <Box>{whatToShaw()}</Box>
        </div>
}
export default StatisticCost;