import { Course } from "../models/Course";
import CoursesService from "./CoursesService";
export default class CoursesServicesRest implements CoursesService {
    private url: string = 'http://localhost:3500/courses';
    async add(course: Course): Promise<void> {
        const response = await fetch(this.url, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(course)
        });
        return await response.json();
    }
    async update(id: number, course: Course) {
       await fetch(this.getUrlById(id),{
           method: 'PUT',
           headers: {
               'Content-Type':'application/json'
           },
           body: JSON.stringify(course)
       }) 
    }
    async get() {
        const response = await fetch(this.url);
        return await response.json();
    }
    async remove(id: number) {
        const res = this.getCourse(id);
        await fetch(this.getUrlById(id), {
            method: 'DELETE'
        })
        return res;


    }
    private getUrlById(id: number) {
        return `${this.url}/${id}`;
    }

    async getCourse(id: number) {
        const response = await fetch(this.getUrlById(id));
        return await response.json();
    }
    async exists(id: number) {
        let res;
        try {
            await fetch(this.getUrlById(id));
            res = true;
        } catch (err) {
            console.log(err);
            res = false;
        }
        return res;
    }
}