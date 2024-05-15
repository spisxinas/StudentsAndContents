using myNamespace from '../db/Students';

@path: '/hello/myPath'
service mysrvdemo {

    @readonly entity StudentsSRV as projection on myNamespace.Student
    entity UpdateStudentsSRV as projection on myNamespace.Student
    function myfoobar(msg:String) returns String;

}