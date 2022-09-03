// Created a news website by using NEWS API which display the headlines by clicking on that particular link you can get more information about that particular headline.

// https://gnews.io/api/v4/search?q=headlines&lang=en&token=1ac1bcb982a05b4845f261e59e184548


// Initialize the news api parameters
const apikey="1ac1bcb982a05b4845f261e59e184548";


// Grab the news container
let newsaccordion =document.getElementById("newsaccordion");

// Create an ajax get request
const xhr= new XMLHttpRequest();

xhr.open('GET',`https://gnews.io/api/v4/search?q=headlines&lang=en&country=in&token=${apikey}`,true);

xhr.onload=function(){
    if(this.status=== 200){
       let json =JSON.parse(this.responseText);
       let articles = json.articles;
       console.log(articles);
       
       let newshtml="";

       articles.forEach((element,index) => {
        let news = `<div class="card" style="border:none">
                <div class="card-header my-2" id="heading${index}"  style="background-color: #0f1418;border: solid 8px #007bff;>
                <h2 class="mb-0">
                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                        aria-expanded="true" aria-controls="collapse${index}">
                      <b>BREAKING NEWS:${index+1} </b> ${element["title"]}
                    </button>
                </h2>
                </div>

                <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsaccordion">
                    <div class="card-body">
                    ${element["content"]}
                    ..<a href="${element['url']} "target="_blank">Read More</a>
                    </div>
                </div>
            </div>`
        newshtml+= news;
       });
       newsaccordion.innerHTML=newshtml; 

    }
    else{
    console.log("some error occur");
    }
}

// What to do when response is ready
xhr.send();


