export type Course = {
    id: number;
    name: string;
    lecturer: string;
    hours: number;
    cost: number;
    openingDate: Date | null
}
export function createCourse(id: number, name:string, lecturer: string,
     hours: number, cost: number, openingDate: Date | null): Course {
         return {cost, id, name, lecturer, hours, openingDate};
     }