import _ from "lodash";
import { useSelector } from "react-redux";
import { Course } from "../models/Course";
import { RouteType } from "../models/RouteType";
import { StateType } from "../redux/store";
import { getRandomNumber } from "./random";

export function range (minInclusive: number, maxExclusive: number): number[] {
 const res: number[] = [];
 for (let i = minInclusive; i < maxExclusive; i++) {
     res.push(i);
 }
 return res;
}
export function getMinMaxAvgByField(array: any[], field: string): {min: number, max: number, avg: number} {
    if (!array || array.length === 0 || !array[0][field] || typeof (array[0][field]) !== 'number') {
        return {min: 0, max:0, avg:0};
    }
   const resObj: {min: number, max: number, avg: number} =  array.reduce((res, cur) => ({min: res.min > cur[field] ? cur[field] : res.min,
max: res.max < cur[field] ? cur[field] : res.max, avg: res.avg + cur[field]}), {min: array[0][field],
     max: array[0][field], avg: 0});
   resObj.avg = Math.round(resObj.avg / array.length) ;
   return resObj; 

}
export function getRouteIndex(items: RouteType[], pathname: string): number {
    let index =  items.findIndex(item => item.path === pathname);
    if (index < 0) {
        index = 0;
    }
    return index;
}
export function getStatistics(fromTo: number, field: string): any[] {
    const courses: Course[] = useSelector<StateType, Course[]>(state => state.courses);
    const objStat =  _.countBy(courses, (e: Course) => {   
        return field === "cost" ? Math.floor(e.cost/fromTo) : Math.floor(e.hours/fromTo);
     });
     return Object.keys(objStat).map(s => {
         return {id: getRandomNumber(1, 1000000),
             from: +s * fromTo,
             to: +s * fromTo + fromTo -1,
            amount: objStat[s]}
     })
}