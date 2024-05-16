const cds = require('@sap/cds');
const { Student } = cds.entities('myNamespace');


const handlers = (srv) => {

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
    
    let result = await cds.tx(req)

    .run([
      await UPDATE(Student).set({first_name:req.data.first_name}).where({ id: req.data.id }),
      await UPDATE(Student).set({last_name:req.data.last_name}).where({id:req.data.id})
    ])
    .then((resolve,reject) => {
      console.log("resolve",resolve);
      console.log("reject",reject);
      if(typeof resolve !== "undefined"){
        return req.data;
      }else{
        req.error(409,"Record Not Found");
      }
    });

    return req.data;

  })


srv.on("CREATE","InsertStudentSRV",async (req,res)=>{

  console.log(req.data.first_name);
  
  let result = await cds.tx(req)
  .run(
    INSERT.into(Student).entries({
     email:req.data.email,
     first_name:req.data.first_name,
     last_name:req.data.last_name
    })
    )
  .then((resolve,reject) => {
    console.log("resolve",resolve);
    console.log("reject",reject);
    if(typeof resolve !== "undefined"){
      return req.data;
    }else{
      req.error(409,"Record Not Found");
    }
  });

  return req.data;

})


srv.on("CREATE","DeleteStudentSRV",async (req,res)=>{

  console.log(req.data.first_name);
  
  let result = await cds.tx(req)
  .run(
    DELETE.from(Student).where({
     id: req.data.id
    })
    )
  .then((resolve,reject) => {
    console.log("resolve",resolve);
    console.log("reject",reject);
    if(typeof resolve !== "undefined"){
      return req.data;
    }else{
      req.error(409,"Record Not Found");
    }
  });

  return req.data;

})

srv.before("CREATE","InsertStudentSRV",async (req,res)=>{
  console.log("hello");
   //checks email are not personal
       if(typeof req.data.email === "undefined"){
           req.error(500,"Email Missing");
       }
       if(req.data.email.indexOf("gmail") !== -1){
           req.error(500,"Personal Email Id Not allowed");
       }

   })

};


 module.exports = handlers;

