import React from "react";
import { coursesService } from "../../config/service-config";
import CoursesServiceArray from "../../service/CoursesServiceArray";
import { courses } from "../../config/service-config";
const Courses: React.FC = () =>
{ 
    return <label style={{fontSize: 20}}>
        <ul>
            {coursesService.get().map(c=><li>{JSON.stringify(c)}</li>)}
        </ul>
    </label>
}
export default Courses;