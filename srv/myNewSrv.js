const cds = require('@sap/cds');
const { Student } = cds.entities('myNamespace')

const handlers = (srv) => {
    

    srv.before("CREATE","CustomGetStudent",async (req,res)=>{
   console.log("hello");
    //checks email are not personal
        if(typeof req.data.email === "undefined"){
            req.error(500,"Email Missing");
        }
        if(req.data.email.indexof("gmail") !== -1){
            req.error(500,"Personal Email Id Not allowed");
        }

    })

    srv.on("READ","CustomGetStudent",async ()=>{
        console.log("hello");       
         })


}

module.exports = handlers;