import { graphqlOperation } from "aws-amplify";
import { LogLevel, LogTypes } from "../enums/LogTypes";
import { listCourses } from "../graphql/queries";
import { createCourse } from "../graphql/mutations";
import { Course } from "../models";
import { Course as PlatformCourse } from "../platform-models/Course";
import DateTimeUtils from "../utils/DateTimeUtils";
import Logger from "../utils/Logger";
import GraphQLService from "./GraphQLService";

class CourseService {
  public fetchCourses = async () => {
    try {
      const models = await GraphQLService.graphQL<any>(
        graphqlOperation(listCourses)
      );
      return (models?.data?.listCourses.items as Course[]) || [];
    } catch (e) {
      Logger.log(
        LogLevel.ERROR,
        LogTypes.CourseService,
        "Error when fetching courses",
        e
      );
    }
  };

  deleteCourse = async () => {};

  public createCourse = async (courseCreation: PlatformCourse) => {
    const scheduleStartTime = DateTimeUtils.formateHour(
      courseCreation.scheduleStartTime
    );
    const scheduleEndTime = DateTimeUtils.formateHour(
      courseCreation.scheduleEndTime
    );
    const scheduleDates = Array.from(courseCreation.scheduleDates.values());

    const course = new Course({
      name: courseCreation.name,
      scheduleDates,
      scheduleStartTime,
      scheduleEndTime,
      isVirtual: courseCreation.isVirtual,
    });

    return await GraphQLService.graphQL(
      graphqlOperation(createCourse, { input: course })
    );
  };

  public fetchCoursesByIds = async (courseIds: string[]) => {
    try {
      const courses = await GraphQLService.graphQL<any>(
        graphqlOperation(listCourses, { id: courseIds })
      );
      return courses?.data?.listCourses.items || [];
    } catch (error) {
      Logger.log(
        LogLevel.ERROR,
        LogTypes.CourseService,
        "Error when fetching courses by ids",
        error
      );
    }
  };
}

export default new CourseService();