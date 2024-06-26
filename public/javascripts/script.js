const Latitude=document.getElementById('Latitude');
const Longitude=document.getElementById('Longitude');
const Housing_median_age=document.getElementById('Housing-median-age');
const Total_rooms=document.getElementById('Total-rooms');
const Total_bedrooms=document.getElementById('Total-bedrooms');
const Population=document.getElementById('Population');
const Households=document.getElementById('Households');
const Median_income=document.getElementById('Median-income');
const Ocean_proximity=document.getElementById('Ocean-proximity');
const button=document.querySelector('.btn');
const predict=document.querySelector('.predict');

async function submit(){
    try{
        const response=await fetch('/submit',{
            method:'post',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                Longitude:Longitude.value,
                Latitude:Latitude.value,
                Housing_median_age:Housing_median_age.value,
                Total_rooms:Total_rooms.value,
                Total_bedrooms:Total_bedrooms.value,
                Population:Population.value,
                Households:Households.value,
                Median_income:Median_income.value,
                Ocean_proximity:Ocean_proximity.value
            })
        });
        if(response.status===200){
            const data=await response.json();
            // console.log(data.predictedValue);
            predict.innerHTML=`<h2>Predicted House Price: ${data.predictedValue}$</h2>`
            predict.style.visibility='visible';
            predict.style.animationName='popUp';
            setTimeout(()=>{
                predict.style.animationName='moveBack';
            },5000)
        }
        else{
            console.log('Error: Server responded with status',response.status);
        }
    }
    catch(error){
        console.log('Error: ',error);
    }
}