let input=document.querySelector("#inp");
let div=document.querySelector("#div");
let form=document.querySelector("form");
let more=document.querySelector("#more");
let accesskey="WJMixad46MNMxjj7Dme3fXwTaT7EuFqWTfmXtYcyPo8";
let page=1;
alert("hi")
async function search(){
  
  
  let key=input.value;
try{
  const url=`https://api.unsplash.com/search/photos?page=${page}&query=${key}&client_id=${accesskey}`
  
  const response=await fetch(url);

  const data=await response.json();
  const results= data.results;
  if(page==1){
    div.innerHTML="";
  }
  
  results.map((result)=>{
    const image=document.createElement("img");
    image.src=result.urls.thumb;
    const imagelink=document.createElement("a");
    imagelink.href=result.links.html;
    imagelink.target="_blank";
    imagelink.appendChild(image);
    div.appendChild(imagelink);
  });
  more.style.display ="block"
  }
  catch(e){
    alert(`Could not find ${key} pic`)
  }
}
form.addEventListener("submit", (e)=>{
  e.preventDefault();
  page=1;
  search();
})
more.addEventListener("click", ()=>{
  page++;
 search()
})
