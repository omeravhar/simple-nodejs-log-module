const fs = require('fs');


module.exports = class logModule{
    constructor(){
        //create "log" folder if not exist 
        this.checkDir();
    }

    checkDir(){
        if (!fs.existsSync("log")){
            fs.mkdirSync("log");
        }
    }

    createLog(logData,nameLogFile = ""){

        //add "-" to given log file name
        if(nameLogFile){
            nameLogFile = "-"+nameLogFile;
        }

        //add file name with date and log the data
        const fileName = new Date().toISOString().split('T')[0]+nameLogFile+".txt";
        const dateForLog = new Date().toISOString().replace("T"," ");
        fs.appendFile("log/"+fileName , logData+" "+dateForLog+" \n",{ flag: 'a+' },(err)=>{
            if (err) throw err;  
        });
        
    }


}