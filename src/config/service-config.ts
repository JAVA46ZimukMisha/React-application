import AuthServiceClient from "../service/AuthServiceClient";
import CoursesServiceArray from "../service/CoursesServiceArray";
import CoursesServicesRest from "../service/courses_rest";

export const coursesService = new CoursesServicesRest();
export const authService = new AuthServiceClient();