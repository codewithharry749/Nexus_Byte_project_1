const submit = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById('city_name');
const temp = document.getElementById("temp");
const temp_status = document.getElementById("temp_status");
const API_KEY = '3265874a2c77ae4a04bb96236a642d2f';

{/* <i class="fa-solid fa-cloud"></i>
<i class="fa-solid fa-cloud-sun-rain"></i>
<i class="fa fa-sun-o" aria-hidden="true"></i> */}

const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    if (cityVal === '') {
        city_name.innerHTML = 'Plz write the name before search'
    }
    else {
        try {
            let url =`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=${API_KEY}&units=metric`;

            const response = await fetch(url);
            const data = await response.json();
            console.log(data)
        city_name.innerHTML = data.name;
        temp.innerHTML = `${data.main.temp}<sup>o</sup>C` ;
        
        }catch (err) {
            city_name.innerHTML = 'Plz Enter the city name Properly';

        }
    }

}
submit.addEventListener("click", getInfo)

// ------------------- time and date -------------
{/* <div class="top_layer">
<p id="day"> tuseday</p>
<p id="today_data">13Oct</p>
</div> */}
const days = document.getElementById("day");
const today_data = document.getElementById("today_data");
const getCurrDay = () =>{

    const getCurrDay = ['Sunday','Monday',"Tuesday","Wed",'Thursday','Friday','Saturday']

    let currTime = new Date();
    let day = getCurrDay[currTime.getDay()];
    days.innerHTML = day;
    console.log(day)
    

}
getCurrDay();

const getCurrTime = () =>{
    var Months = ['Jan' ,'Feb','Mar','Apr','May','June','July','Aug','Sept','Nov','Dec'];
    let currTime = new Date();
    let day = currTime.getDay();
    let month = currTime.getMonth();
    today_data.innerHTML = `${currTime.getDate()} ${Months[month]}`
}
getCurrTime();