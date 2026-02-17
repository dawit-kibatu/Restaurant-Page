import "../styles/style.css";
let home=function(){
    let content=document.querySelector("#content");
    let forest=document.createElement("div");
    let bigImage=document.createElement("div");
    bigImage.id="bigImage";
    let slideContainer=document.createElement("div");
    let slide1=document.createElement("div");
    let slide2=document.createElement("div");
    let slide3=document.createElement("div");
    let slide4=document.createElement("div");
    slide1.classList.add("slide","slide1")
    slide2.classList.add("slide","slide2")
    slide3.classList.add("slide","slide3")
    slide4.classList.add("slide","slide4")
    slideContainer.appendChild(slide1);
    slideContainer.appendChild(slide2);
    slideContainer.appendChild(slide3);
    slideContainer.appendChild(slide4);
    bigImage.appendChild(slideContainer);
    let forestText=document.createElement("div");
    let forestImg=document.createElement("div");
    forestText.id="forestTxt"
    forestImg.id="forestImg";
    forest.appendChild(forestText);
    forest.appendChild(forestImg);
    let infoDiv=document.createElement("div")
    let location=document.createElement("div");
    let hours=document.createElement("div");
    let contact=document.createElement("div");
    location.id="location";
    hours.id="hours"
    contact.id="contact"
    infoDiv.appendChild(location)
    infoDiv.appendChild(hours);
    infoDiv.appendChild(contact);
    infoDiv.id="infoDiv";
    let deers=document.createElement("div");
    let deersText=document.createElement("div");
    let deersImg=document.createElement("div");
    deersText.id="deersTxt"
    deersImg.id="deersImg";
    deers.appendChild(deersText);
    deers.appendChild(deersImg);
    let inn=document.createElement("div");
    let innText=document.createElement("div");
    let innImg=document.createElement("div");
    innText.id="innTxt"
    innImg.id="innImg";
    inn.appendChild(innText);
    inn.appendChild(innImg);
    forest.id="forest";
    deers.id="deers";
    inn.id="inn";
    let footer=document.createElement("div");
    footer.id="footer";
    content.appendChild(bigImage);
    content.appendChild(infoDiv)
    content.appendChild(forest);
    content.appendChild(deers);
    content.appendChild(inn);
    content.appendChild(footer);
}
export default home