fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=5a8ab37aa4a344b09794784a4b4b3868').then((response)=>{
    return response.json();
}).then((data)=>{
    let arr = data["articles"];
    console.log(arr);
    populate(arr);
}).catch((error)=>{
    console.error("Some Error has occured")
    console.log(error);
})
function populate(result){
    let index = 0;let str = "";
    for(element of result)
      {
        str += `
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-heading${index}">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse${index}" aria-expanded="true" aria-controls="panelsStayOpen-collapse${index}">
              <strong>Breaking News -- ${index+1} ---</strong>${element["title"]}
            </button>
          </h2>
          <div id="panelsStayOpen-collapse${index}" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-heading${index}">
            <div class="accordion-body">
              <strong>${element["description"]}</strong>
              <br>
              <a href = '${element["url"]}' target = "_blank">Follow To read More</a>
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