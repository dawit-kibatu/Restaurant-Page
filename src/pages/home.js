import "../styles/style.css";
let home=function(){
    let content=document.querySelector("#content");
    let forest=document.createElement("div");
    let bigImage=document.createElement("div");
    bigImage.id="bigImage";
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
    let inn=document.createElement("div");
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