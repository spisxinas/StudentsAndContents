using myNamespace from '../db/Schema';

service mysrvdemoapp{
    entity GetContent as projection on myNamespace.Content
    entity GetCourse as projection on myNamespace.Course
    entity GetEnrollment as projection on myNamespace.Enrollment
    entity GetStudents as projection on myNamespace.Student
}



   