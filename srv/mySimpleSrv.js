const cds = require('@sap/cds');
const { Student } = cds.entities('myNamespace');


const mysrvdemo = (srv) => {

    //srv.on("myfoobar",function(req,res){ return "Hello World!" + req.data.msg ;});  
    
  //    srv.on("READ", "StudentsSRV", async (req) => {
  // //    let students
  // //   //   if(req.data.id){students = await cds.tx(req).run(SELECT.from(Student).where({id:req.data.id}));}
  // //     //  students= await cds.tx(req).run(SELECT.from(Student))
    
  // //     //   if (req._queryOptions && req._queryOptions.$filter) {
  // //     //     const filter = req._queryOptions.$filter;
  // //     //     console.log(`$filter: ${filter}`);
          
  // //     //     // Example parsing the $filter query manually (simple case)
  // //     //     if (filter.includes('email eq')) {
  // //     //       const myemail = filter.match(/email eq '([^']+)'/)[1];  // Extract the email value
            
  // //     //       students = await cds.tx(req).run(SELECT.from(Student).where({email:myemail}))
  // //     //     }
  // //     //   }

  // //   return students;
  // console.log("hello world");
  //  });

  srv.on("CREATE","UpdateStudentsSRV",async (req,res)=>{

    console.log(req.data.first_name);
    

    const result = await cds.tx(req).run(UPDATE(Student).set({first_name:req.data.first_name}).where({ id: req.data.id }))

    return req.data;

  })

};




 module.exports = mysrvdemo;

