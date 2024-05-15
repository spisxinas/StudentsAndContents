const cds = require('@sap/cds');
const { Student } = cds.entities('myNamespace');


const mysrvdemo = (srv) => {

    //srv.on("myfoobar",function(req,res){ return "Hello World!" + req.data.msg ;});  
    
    srv.on("READ", "StudentsSRV", async (req) => {
      const students = await cds.tx(req).run(SELECT.from(Student));//where({email:"firstmail@gmail.com"}));
      console.log(students)
      return students;
  });

};


 module.exports = mysrvdemo;

