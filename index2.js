console.log("Welcome To my News Channel ")
let API_KEY = "04e45c30721b3ba81b9d381ad8dca978";
let xhr = new XMLHttpRequest();
// 04e45c30721b3ba81b9d381ad8dca978
// "https://newsapi.org/v2/top-headlines?country=in&apiKey=5a8ab37aa4a344b09794784a4b4b3868"
xhr.open('GET' ,'https://newsdata.io/api/1/news?apikey=pub_14741e6e81001deef2e4af7d9dcec91ba6d76&country=in,us&language=en,hi' ,true);
xhr.send();


xhr.onload = function(){
    let str = "";
    let data = JSON.parse(this.responseText);
    console.log(data);
    let result = data["results"];
    let index = 0;
    for(element of result)
      {
        str += `<hr id="line">
        <div class="accordion-item ">
          <h2 class="accordion-header " id="panelsStayOpen-heading${index}">
            <button class="accordion-button newslist" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse${index}" aria-expanded="true" aria-controls="panelsStayOpen-collapse${index}" style = "color:black; border:2px solid black; font-size:1.1rem;">
              <strong>Breaking News --  ${index+1} --  </strong>${element["title"]}
            </button>
          </h2>
          <div id="panelsStayOpen-collapse${index}" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-heading${index}">
            <div class="accordion-body">
              <strong>${element["description"]}</strong>
              <br>
              <a href = '${element["link"]}' target = "_blank">Follow To read More</a>
            </div>
          </div>
        </div>`
        index++;
      }
      document.getElementById("tobeinserted").innerHTML = str;
}
setInterval(() => {
  let date = new Date();
  let str = "";let hour = 0;
  if(date.getHours() <= 12)
  {
    str = " AM";
    hour = date.getHours();
  }
  else
  {
    str =  " PM"
    hour = Math.abs(12 - date.getHours());
  }
  document.getElementById("datetobe").innerHTML = hour + " : " + date.getMinutes() + " : " + date.getSeconds() + str;
}, 1000);
function myfirst() {
  setTimeout(() => {
    console.log("First");
  }, 1002);
}
function mysecond(){
  setTimeout(() => {
    console.log("Second");
  }, 1000);
}
