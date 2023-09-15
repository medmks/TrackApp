import { Component } from "react";
export default class Activity extends Component{
   constructor(Activity){
          super()
          this.Activity=Activity; 
   } 
   async GetactivityName(){ 
const req = await fetch('../../public/hi.csv')
const data= await req.text();
const activities=[]
        
          const titre = await data.split('\n').slice(0, 1);
          for(var k = 0 ; k < titre.length  ; k++ ){
                    const til=titre[0].split(',');
                    til.forEach(ele => {      
                      activities.push(ele)
                    });
                  }        
//to rows S!:
                const rows  = data.split('\n').slice(1,data.length );
                const Array_data =[]                  
                        for(var i=0 ; i < rows.length ; i++){       
                          const row= rows[i].split(',');
                            Array_data.push(row) 
                            }
//To obejects S!:
      const Object_SEQ=[];
        const ActivityForDay={}
        const lengh_dat= Array_data.length-1
        for (let index = 0; index <lengh_dat ; index++) {
          const  row=Array_data[index]  
          for(let dex = 0; dex < row.length -1; dex++){
            const value = row[dex]
            const key = activities[dex]  
            // eslint-disable-next-line no-unused-vars
            const some_test= Object.assign(ActivityForDay,{[key]:value}) 
      
          }
                const All_Activities={...ActivityForDay}
                Object_SEQ.push(All_Activities)
      }
//Set data types S!:
          for(let index = 0; index < Object_SEQ.length; index++){
            const Object_Activity =Object_SEQ[index]
            const key = Object.keys(Object_Activity)
            const valux = Object.values(Object_Activity)
            for (let lndex = 0; lndex < valux.length; lndex++) {
              if (valux[lndex]==='Yes') {
                  const setKey = key[lndex];
                  Object_Activity[setKey]=true
              }
                      if (valux[lndex]==='No') {
                  const setKey = key[lndex];
                  Object_Activity[setKey]=false
              }
            }
          }
//Return Infos  S!:
      Object_SEQ.map((e)=>{return (e.Day);})
        let subArrayCollection =[];
        for (let element of Object_SEQ)
        {const lastSubArray = subArrayCollection[subArrayCollection.length-1];
          if (!lastSubArray || lastSubArray.length===7)
          {subArrayCollection.push([element])
          }
       else {lastSubArray.push(element)}}
      
       const Weeks = subArrayCollection.map((e)=> e.map((el)=>el.yearMounthday))
       const TimeOn=subArrayCollection.map((e)=> e.map((el)=>parseInt( el.TimeOnPhone)))
          return {TimeOn , Weeks,Object_SEQ}
  
        } 
 
}

        