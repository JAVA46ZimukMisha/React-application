import { Course } from "../models/Course";
import CoursesService from "./CoursesService";
import { courses } from "../config/service-config";
import { getRandomNumber } from "../util/random";
export default class CoursesServiceArray implements CoursesService {
    add(course: Course): void {
        const id = getRandomNumber(100000, 999999);
        course.id = id;
        courses.push(course);
    }
    remove(id: number): void {
        const iRemove = courses.findIndex(c=>c.id==id);
        courses.splice(iRemove, 1);
    }
    update(id: number, course: Course): void {
        const iUpdate = courses.findIndex(c=>c.id==id);
        courses[iUpdate]=course;
    }
    get(): Course[] {
        return courses;
    }
    
}