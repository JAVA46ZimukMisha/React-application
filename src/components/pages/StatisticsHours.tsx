import React from "react";
import { coursesService } from "../../config/service-config";
import _ from 'lodash';
const StatisticHours: React.FC = () =>
{
    const hours = coursesService.get().map(c=>c.hours);
    const maxHours = _.max(hours);
    const minHours = _.min(hours);
    const aveHours = _.mean(hours);
    return <>
    <label style={{fontSize: 40}}>
        Maximal Hours = {maxHours}
    </label><br/>
    <label style={{fontSize: 40}}>
        Minimal Hours = {minHours}
    </label><br/>
    <label style={{fontSize: 40}}>
        Average Hours = {aveHours}
    </label>
    </>
}
export default StatisticHours;