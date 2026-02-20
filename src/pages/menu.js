import "../styles/menu.css";
import dish1 from "../images/pexels-mali-65175.jpg";
let menu=function(){
   let content = document.querySelector("#content");
   content.innerHTML = ""
   let mainCourse = document.createElement("div");
   let sideDish = document.createElement("div");
   let drinks = document.createElement("div");
   let dessert = document.createElement("div");
   mainCourse.id = "main"
   sideDish.id = "side";
   drinks.id = "drinks";
   dessert.id = "dessert";

   // MAIN COURSE DISHES
   let mainDish1 = document.createElement("div");
   let mainDish1Txt = document.createElement("div");
   mainDish1Txt.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;The Watcher's Haunch<p><p>venison from the old doe who stands longest at the tree line, braised in juniper and shadow";
   let mainDish1Img = document.createElement("img");
   mainDish1Img.src=dish1;
   mainDish1.appendChild(mainDish1Txt);
   mainDish1.appendChild(mainDish1Img);
    
   let mainDish2 = document.createElement("div");
   let mainDish2Txt = document.createElement("div");
   mainDish2Txt.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;What She Forgot<p><p>slow-roasted shoulder of a matriarch, served with mushrooms that taste of damp wool and cellars";
   let mainDish2Img = document.createElement("img");
   mainDish2.appendChild(mainDish2Txt);
   mainDish2.appendChild(mainDish2Img);
    
   let mainDish3 = document.createElement("div");
   let mainDish3Txt = document.createElement("div");
   mainDish3Txt.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;The Quiet One<p><p>a young buck who never learned to run, seared and rested in its own stillness";
   let mainDish3Img = document.createElement("img");
   mainDish3.appendChild(mainDish3Txt);
   mainDish3.appendChild(mainDish3Img);
    
   let mainDish4 = document.createElement("div");
   let mainDish4Txt = document.createElement("div");
   mainDish4Txt.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;Her Last Morning<p><p>rabbit that fed on wild thyme and dew, roasted whole with herbs from the clearing's edge";
   let mainDish4Img = document.createElement("img");
   mainDish4.appendChild(mainDish4Txt);
   mainDish4.appendChild(mainDish4Img);
    
   let mainDish5 = document.createElement("div");
   let mainDish5Txt = document.createElement("div");
   mainDish5Txt.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;The Traveler<p><p>pheasant stuffed with chestnuts and the faint smell of cigarette smoke";
   let mainDish5Img = document.createElement("img");
   mainDish5.appendChild(mainDish5Txt);
   mainDish5.appendChild(mainDish5Img);
    
   let mainDish6 = document.createElement("div");
   let mainDish6Txt = document.createElement("div");
   mainDish6Txt.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;Understone<p><p>trout from the black creek, tasting of cold and things that hide from light";
   let mainDish6Img = document.createElement("img");
   mainDish6.appendChild(mainDish6Txt);
   mainDish6.appendChild(mainDish6Img);

   mainCourse.appendChild(mainDish1);
   mainCourse.appendChild(mainDish2);
   mainCourse.appendChild(mainDish3);
   mainCourse.appendChild(mainDish4);
   mainCourse.appendChild(mainDish5);
   mainCourse.appendChild(mainDish6);

   // SIDE DISHES
   let sideDish1 = document.createElement("div");
   let sideDish1Txt = document.createElement("div");
   sideDish1Txt.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;Roots That Remember<p><p>carrots and parsnips pulled from gravesoil, roasted with honey from bees that never sleep";
   let sideDish1Img = document.createElement("img");
   sideDish1.appendChild(sideDish1Txt);
   sideDish1.appendChild(sideDish1Img);

   let sideDish2 = document.createElement("div");
   let sideDish2Txt = document.createElement("div");
   sideDish2Txt.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;Fingers of Earth<p><p>potatoes boiled in water from the iron spring, crushed with butter from the last cow";
   let sideDish2Img = document.createElement("img");
   sideDish2.appendChild(sideDish2Txt);
   sideDish2.appendChild(sideDish2Img);

  let sideDish3 = document.createElement("div");
  let sideDish3Txt = document.createElement("div");
  sideDish3Txt.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;The Widow's Harvest<p><p>braised leeks and onions, soft as secrets, stained with beet juice like old blood";
  let sideDish3Img = document.createElement("img");
  sideDish3.appendChild(sideDish3Txt);
  sideDish3.appendChild(sideDish3Img);

  let sideDish4 = document.createElement("div");
  let sideDish4Txt = document.createElement("div");
  sideDish4Txt.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;Gatherer's Remorse<p><p>wild greens that grow where the boundary fence used to stand, wilted in bacon fat and regret";
  let sideDish4Img = document.createElement("img");
  sideDish4.appendChild(sideDish4Txt);
  sideDish4.appendChild(sideDish4Img);

  let sideDish5 = document.createElement("div");
  let sideDish5Txt = document.createElement("div");
  sideDish5Txt.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;Bone Nest<p><p>morels stuffed with breadcrumbs and herbs, foraged from the clearing where the fire was";
  let sideDish5Img = document.createElement("img");
  sideDish5.appendChild(sideDish5Txt);
  sideDish5.appendChild(sideDish5Img);

  let sideDish6 = document.createElement("div");
  let sideDish6Txt = document.createElement("div");
  sideDish6Txt.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;Last Year's Cabbage<p><p>fermented slowly through the long dark, sharp with the taste of waiting";
  let sideDish6Img = document.createElement("img");
  sideDish6.appendChild(sideDish6Txt);
  sideDish6.appendChild(sideDish6Img);

  sideDish.appendChild(sideDish1);
  sideDish.appendChild(sideDish2);
  sideDish.appendChild(sideDish3);
  sideDish.appendChild(sideDish4);
  sideDish.appendChild(sideDish5);
  sideDish.appendChild(sideDish6);

  // DRINKS
  let drink1 = document.createElement("div");
  let drink1Txt = document.createElement("div");
  drink1Txt.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;What She Whispered<p><p>mead from honey gathered at dusk, when the bees speak in tongues";
  let drink1Img = document.createElement("img");
  drink1.appendChild(drink1Txt);
  drink1.appendChild(drink1Img);

  let drink2 = document.createElement("div");
  let drink2Txt = document.createElement("div");
  drink2Txt.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;The Drowner's Share<p><p>clear spirits that taste of riverweed and the bubbles from a sunken lung";
  let drink2Img = document.createElement("img");
  drink2.appendChild(drink2Txt);
  drink2.appendChild(drink2Img);

  let drink3 = document.createElement("div");
  let drink3Txt = document.createElement("div");
  drink3Txt.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;Stillness<p><p>water from the deep well, where the surface never moves and wishes are returned unanswered";
  let drink3Img = document.createElement("img");
  drink3.appendChild(drink3Txt);
  drink3.appendChild(drink3Img);

  let drink4 = document.createElement("div");
  let drink4Txt = document.createElement("div");
  drink4Txt.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;Red Memory<p><p>wine from grapes grown on the hill where they buried the strangers, bold and unsettled";
  let drink4Img = document.createElement("img");
drink4.appendChild(drink4Txt);
drink4.appendChild(drink4Img);

let drink5 = document.createElement("div");
let drink5Txt = document.createElement("div");
drink5Txt.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;The Last Toast<p><p>dark ale brewed with heather and something that crunched between the stones";
let drink5Img = document.createElement("img");
drink5.appendChild(drink5Txt);
drink5.appendChild(drink5Img);

let drink6 = document.createElement("div");
let drink6Txt = document.createElement("div");
drink6Txt.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;Her Milk<p><p>warm and thick, from the nanny goat with the knowing eye";
let drink6Img = document.createElement("img");
drink6.appendChild(drink6Txt);
drink6.appendChild(drink6Img);

drinks.appendChild(drink1);
drinks.appendChild(drink2);
drinks.appendChild(drink3);
drinks.appendChild(drink4);
drinks.appendChild(drink5);
drinks.appendChild(drink6);

// DESSERTS
let dessert1 = document.createElement("div");
let dessert1Txt = document.createElement("div");
dessert1Txt.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;The Hive's Lament<p><p>honey cake soaked in something dark, sweet with the grief of a thousand workers";
let dessert1Img = document.createElement("img");
dessert1.appendChild(dessert1Txt);
dessert1.appendChild(dessert1Img);

let dessert2 = document.createElement("div");
let dessert2Txt = document.createElement("div");
dessert2Txt.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;Buried Berries<p><p>blackberries picked where the soil is richest, baked into a pie that weeps when cut";
let dessert2Img = document.createElement("img");
dessert2.appendChild(dessert2Txt);
dessert2.appendChild(dessert2Img);

let dessert3 = document.createElement("div");
let dessert3Txt = document.createElement("div");
dessert3Txt.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;What the Moth Knows<p><p>panna cotta with cream from the restless herd, topped with preserves the color of old linen";
let dessert3Img = document.createElement("img");
dessert3.appendChild(dessert3Txt);
dessert3.appendChild(dessert3Img);

let dessert4 = document.createElement("div");
let dessert4Txt = document.createElement("div");
dessert4Txt.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;The Last Apple<p><p>poached in wine from the year the sun forgot us, served with the skin still on";
let dessert4Img = document.createElement("img");
dessert4.appendChild(dessert4Txt);
dessert4.appendChild(dessert4Img);

let dessert5 = document.createElement("div");
let dessert5Txt = document.createElement("div");
dessert5Txt.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;Fallen Leaves<p><p>crisp pastries folded like shed skin, filled with chestnut paste and the taste of bonfire smoke";
let dessert5Img = document.createElement("img");
dessert5.appendChild(dessert5Txt);
dessert5.appendChild(dessert5Img);

let dessert6 = document.createElement("div");
let dessert6Txt = document.createElement("div");
dessert6Txt.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;Her Teeth<p><p>small white meringues that crack between the teeth, sweet as lies and just as hollow";
let dessert6Img = document.createElement("img");
dessert6.appendChild(dessert6Txt);
dessert6.appendChild(dessert6Img);

dessert.appendChild(dessert1);
dessert.appendChild(dessert2);
dessert.appendChild(dessert3);
dessert.appendChild(dessert4);
dessert.appendChild(dessert5);
dessert.appendChild(dessert6);

content.appendChild(mainCourse);
content.appendChild(sideDish);
content.appendChild(drinks);
content.appendChild(dessert);
let footer=document.createElement("div");
footer.id="footer";
footer.innerHTML=`Made by  <a href="https://github.com/dawit-kibatu">Dawit Kibatu</a>`
footer.style.cssText=`
    #footer{
    grid-column:1/13 ;
    grid-row:11/13;
    border-top:solid gray;
     }`
content.appendChild(footer)
}
export default menu