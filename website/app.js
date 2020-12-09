/* Global Variables */
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';

const key="&appid=bcab5ccf97bb4cbb4ba9a2d407d594f6";

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

const postData = async (url = '', data = {}) => {
    const postRequest = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    try {
        const data = await postRequest.json();
        return data;
    }
    catch (error) {
        console.log('Error', error);
    }
}

const GetTemp = async (url, zipcode, key)=>{
        const response = await fetch(url + zipcode + key)
        try {
            const data = await response.json();
            return data;
        }
        catch(error) {
            console.log('error', error);
        }
    }
    
const updateUI = async () => {
    const request = await fetch('/data');
    try {
        const resdata = await request.json();
        document.getElementById('temp').innerHTML = resdata.temp;
        document.getElementById('date').innerHTML = resdata.date;
        document.getElementById('content').innerHTML = resdata.content;
        console.log("done updating the UI");
    }
    catch (error) {
        console.log('error', error);
    }
}
        

document.getElementById("generate").addEventListener("click", function(e) {
    const zipcode=document.getElementById('zip').value;
    const feeling=document.getElementById('feelings').value;
    GetTemp(baseURL,zipcode,key).then(function(returndata){
        // console.log(returndata);
        postobject={};
        postobject.temp=returndata.main.temp;
        postobject.date=newDate;
        postobject.content=feeling;
        postData("/adddata",postobject).then(function(){
            UpdateUI();
        })
    })


});
  