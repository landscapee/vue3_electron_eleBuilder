 document.getElementById('jsonButton').addEventListener('click', async () => {
     let path= require('path')
     let fs= require('fs')
     let json;
    let url= path.resolve(__dirname,'./package.json')
     fs.readFile("./package.json",'utf-8',(e,d)=>{
         console.log(e,d);
         if(e){

         }else{
             document.getElementById('text').innerHTML = JSON.stringify(d)
             // document.getElementById('text').innerHTML = JSON.stringify('qqqqq')

         }

     })
 })


