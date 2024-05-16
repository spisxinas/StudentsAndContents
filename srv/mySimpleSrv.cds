using myNamespace from '../db/Students';


service mysrvdemo @(path: '/hello/myPath',impl:'/srv/mySimpleSrv.js') {

    @readonly entity StudentsSRV as projection on myNamespace.Student
    entity UpdateStudentsSRV as projection on myNamespace.Student
    entity InsertStudentSRV as projection on myNamespace.Student
    entity DeleteStudentSRV as projection on myNamespace.Student

    function myfoobar(msg:String) returns String;

}

// extend service mysrvdemo with {
//     entity CustomGetStudent as select from myNamespace.Student{
//         *,
//         first_name || ' ' || last_name  as full_name: String
//     }excluding{
//         email
//     }
// }