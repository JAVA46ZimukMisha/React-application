import React from "react";
import { coursesService } from "../../config/service-config";
import { getRandomCourse } from "../../util/randomCourse";
import courseData from "../../config/courseData.json"
const AddCourse: React.FC = () =>
{   
    const evenClick = ()=>{coursesService.add(getRandomCourse(courseData))}
    return <label style={{fontSize: 40}}>
        <button onClick={evenClick}>Add Course</button>
    </label>
}
export default AddCourse;