import { Component } from "react";
export default class Activity extends Component {
  constructor(Activity) {
    super();
    this.Activity = Activity;
  }
  async GetactivityName(path) {
    // const req = await fetch("./hi.csv");
    // const DataText = await req.text();

    const activitiesNames = [];

    const titre = await path.split("\n").slice(0, 1);
    for (var k = 0; k < titre.length; k++) {
      const til = titre[0].split(",");
      til.forEach((ele) => {
        // if(ele !=="Day" &&  ele !=="yearMounthday" && ele!=="TimeOnPhone" && ele !=="Sleep 7h" )
        activitiesNames.push(ele);
      });
    }
    const filtedArray = activitiesNames.filter(
      (e) => e !== "date" && e !== "Day" && e !== "numbers" && e !== "Sleep 7h",
    );
    // console.log(filtedArray);
    //to rows S!:
    const rows = path.split("\n").slice(1, path.length);
    const Array_data = [];
    for (var i = 0; i < rows.length; i++) {
      const row = rows[i].split(",");
      Array_data.push(row);
    }
    //To obejects S!:
    const Object_SEQ = [];
    const ActivityForDay = {};
    const lengh_dat = Array_data.length - 1;
    for (let index = 0; index < lengh_dat; index++) {
      const row = Array_data[index];
      for (let dex = 0; dex < row.length - 1; dex++) {
        const value = row[dex];
        const key = activitiesNames[dex];
        // eslint-disable-next-line no-unused-vars
        const some_test = Object.assign(ActivityForDay, { [key]: value });
      }
      const All_Activities = { ...ActivityForDay };

      Object_SEQ.push(All_Activities);
    }
    //Set data types S!:
    for (let index = 0; index < Object_SEQ.length; index++) {
      const Object_Activity = Object_SEQ[index];
      const key = Object.keys(Object_Activity);
      const valux = Object.values(Object_Activity);
      for (let lndex = 0; lndex < valux.length; lndex++) {
        if (valux[lndex] === "Yes") {
          const setKey = key[lndex];
          Object_Activity[setKey] = true;
        }
        if (valux[lndex] === "No") {
          const setKey = key[lndex];
          Object_Activity[setKey] = false;
        }
      }
    }
    //Return Infos  S!:
    Object_SEQ.map((e) => {
      return e.Day;
    });
    let subArrayCollection = [];
    for (let element of Object_SEQ) {
      const lastSubArray = subArrayCollection[subArrayCollection.length - 1];
      if (!lastSubArray || lastSubArray.length === 7) {
        subArrayCollection.push([element]);
      } else {
        lastSubArray.push(element);
      }
    }

    return { subArrayCollection, filtedArray };
  }
}
