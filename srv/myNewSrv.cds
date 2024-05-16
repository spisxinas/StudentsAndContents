using myNamespace from '../db/Students';
using mysrvdemo as mysrvdemo from './mySimpleSrv';


extend service mysrvdemo  with @(path: '/hello/myPath'){
    entity CustomGetStudent as select from myNamespace.Student{
        *,
        first_name || ' ' || last_name  as full_name: String
    }
    }