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
    forestText.id="forestTxt";
    forestText.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our Forest<br><br>The restaurant exists at the end of a long, unlit road. No sign marks its entrance, only a single lantern hung from a low-hanging branch, swaying slightly even when the air is still. Inside, the tables are rough-hewn wood, polished smooth by countless hands and countless meals.<br><br>Our signature dish is the venison. We don't print it on the menu. We don't need to. The ones who come here, they know to ask.<br><br>\"It's the forest's own offering,\" our server might say, leaning in slightly too close, her voice barely above a whisper. \"Ethically sourced. Naturally.\"<br><br>When the plate arrives, the meat rests in a pool of shadow-dark jus, surrounded by foraged mushrooms and tiny, bitter herbs you won't find in any market. The first bite carries the taste of damp autumn leaves, of cold streams running over ancient stones, of something green and growing and utterly wild.<br><br>Some diners pause mid-chew, a strange stillness settling over them. They look toward the tall windows that line one wall, windows that open directly onto the woods. Sometimes, if the timing is right, they'll see the eyes. Just beyond the glass, reflecting the candlelight back at them. Watching. Waiting.<br><br>The deer come right up to the edge of the clearing, you see. They stand in perfect stillness, their breath misting in the cold air, their heads bowed slightly as if in prayer. Or as if they're waiting for something. Someone.<br><br>Our hunters don't use guns. They don't use bows. They simply walk out among them, hands open and empty, and choose. The deer never run. They never startle. They only watch with those deep, liquid eyes, and wait to be selected.<br><br>The chef prefers the older ones. The matriarchs, with their grey-flecked muzzles and patient eyes. Their meat has more story in it, he says. More memory. More forest.<br><br>After service, when the last diner has driven back down that unlit road, the staff gathers in the kitchen. We share a small plate of the venison among ourselves. It's tradition. A reminder of what we owe to the darkness outside, to the soft-footed ones who give themselves so willingly.<br><br>\"To the forest,\" we toast, raising our glasses.<br><br>And from beyond the windows, in the absolute blackness between the trees, a soft answering sound drifts back. A low, collective exhale. A hundred warm bodies, pressing closer to the light.";
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
    let resturantName=document.createElement("div");
    resturantName.id="name"
    resturantName.textContent="Resturant's Name";
    bigImage.appendChild(resturantName);
    content.appendChild(bigImage);
    content.appendChild(infoDiv)
    content.appendChild(forest);
    content.appendChild(deers);
    content.appendChild(inn);
    content.appendChild(footer);
}
export default home