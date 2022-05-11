import React from "react";
import { Course, createCourse } from "../../models/Course";
import courseData from "../../config/courseData.json";
import { Grid, Select, TextField, FormControl, InputLabel, MenuItem, Button } from "@mui/material";
import { getRandomNumber } from "../../util/random";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
type Props = {
    submitFn: (course: Course) => void;
}
const initialCourse: Course = createCourse(0, "",
"",0, 0, null);
const CourseForm: React.FC<Props> = ({ submitFn }) => {
    const {courses, lectors, minCost, maxCost, minHours, maxHours} = courseData;
    const [course, setCourse] = React.useState(initialCourse);

function onSubmit(event: any) {
    event.preventDefault();
    console.log(course)
     submitFn(course);
}
function handlerCourse(event: any) {
   const courseCopy = {...course};
   courseCopy.name = event.target.value;
   console.log(courseCopy.name)
   setCourse(courseCopy);
}
function handlerLecturer(event: any) {
    const courseCopy = {...course};
    courseCopy.lecturer = event.target.value;
    console.log(courseCopy.name)
    setCourse(courseCopy);
 }
function handlerHours(event: any) {
    const courseCopy = {...course};
    courseCopy.hours = +event.target.value;
    setCourse(courseCopy);
}
function handlerCost(event: any) {
    const courseCopy = {...course};
    courseCopy.cost = +event.target.value;
    setCourse(courseCopy);
}
function handlerDate(event: any) {
    const courseCopy = {...course};
    courseCopy.openingDate = event.target.value;
    setCourse(courseCopy);
}
    return <form onSubmit={onSubmit}>
        <Grid container sx={{
            marginLeft: {
                xs: 8,
                sm: 14,
                md: 20
            }
        }} xs={8}>
        <Grid container rowSpacing={{
            xs: 2
        }} columnSpacing={3}>
            <Grid item xs={12} sm={6}>
                <FormControl fullWidth required>
                    <InputLabel id="course-select-label">Course Name</InputLabel>
                    <Select
                        labelId="course-select-label"
                        id="demo-simple-select"
                        label="Course Name"
                        value={course.name}
                        onChange={handlerCourse}
                    >
                        <MenuItem value="">None</MenuItem>
                       {getCourseItems(courses)}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormControl fullWidth required>
                    <InputLabel id="course-select-label">Lecturer</InputLabel>
                    <Select
                        labelId="course-select-label"
                        id="demo-simple-select"
                        label="Lecturer"
                        value={course.lecturer}
                        onChange={handlerLecturer}
                    >
                        <MenuItem value="">None</MenuItem>
                       {getCourseItems(lectors)}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField type="number" label="Hours" fullWidth required value={course.hours || ""} 
                onChange={handlerHours}
                inputProps={{
                  
                    min: `${minHours}`,
                    max: `${maxHours}`
                  }}
                  helperText="enter hours in range [80-500]"/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField type="number" label="Cost" fullWidth required value={course.cost || ""} 
                onChange={handlerCost}
                inputProps={{
                  
                    min: `${minCost}`,
                    max: `${maxCost}`
                  }}
                  helperText="enter cost in range [5000-30000]"/>
            </Grid>
            <Grid item xs={12} sx={{
                marginLeft: {
                    xs: 2,
                    sm: 15,
                    md: 38
                }
            }}>
            <LocalizationProvider dateAdapter={AdapterDateFns} xs={8} fullWidth required>
                <DatePicker 
                label="Opening date"
                value={course.openingDate} 
                onChange={(newValue) => {
                    const courseCopy = {...course};
                    courseCopy.openingDate = newValue;
                    setCourse(courseCopy);
                  }}
                renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
            </Grid>
            <Grid item xs={4} md={2} sx={{
                marginLeft: {
                    xs: 5,
                    sm: 15,
                    md: 40
                }
            }}>
                <Button type="submit">Submit</Button>
            </Grid>
            <Grid item xs={4} md={2} sx={{
                marginLeft: {
                    xs: 1,
                    sm: 0,
                    md: 3
                }
            }}>
                <Button type="reset">Reset</Button>
            </Grid>
            </Grid>
        </Grid>
    </form>
}
export default CourseForm;

function getCourseItems(courses: string[]): React.ReactNode {
    return courses.map(c => <MenuItem value={c} key={c}>{c}</MenuItem>)
}