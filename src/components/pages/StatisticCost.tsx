import React from "react";
import { coursesService } from "../../config/service-config";
import _ from 'lodash';
const StatisticCost: React.FC = () =>
{
    const cost = coursesService.get().map(c=>c.cost);
    const maxCost = _.max(cost);
    const minCost = _.min(cost);
    const aveCost = _.mean(cost);
    return <>
    <label style={{fontSize: 40}}>
        Maximal Cost = {maxCost}
    </label><br/>
    <label style={{fontSize: 40}}>
        Minimal Cost = {minCost}
    </label><br/>
    <label style={{fontSize: 40}}>
        Average Cost = {aveCost}
    </label>
    </>
}
export default StatisticCost;