//REMINDER: finish wthout codepen because it limits images
import React from 'react';
import $ from 'jquery';

//TODO:add cookies for any extra box keys/currency
//TODO:larger inventory upgrade with fire sale multipliers appearing randomly/as a random box item
//TODO:Use p5.js to have all won items stack up at the bottom and sold items to explode out of the bag, all in a background canvas
//TODO:add upgrade icons under money - recycler/quickroller
//TODO:add leaderboard
//TODO:for the reaper box make you choose out of 5 people, the box is filled with only 1 person at a time, and it switches LIVES or DIES and you have to collect all 5 souls to win
//TODO:Reaper box cost a lot because it disappears after each roll and you have to buy it again


//SomeReact.js
class script extends React.Component {
//enable shop tooltips 
   $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });
componentDidMount() {


  
  //check if gold cookie exists from a previous visit
  //if gold cookie was created then all other cookies should exist too
  if(getCookie("gold") !=""){
    //gets cookies from cookie list
    var totalGold = parseInt(getCookie("gold"));
    var totalKeys = parseInt(getCookie("keys"));
    var unlockedBoxes = getCookie("unlockedBoxes");
    var unlockedUpgrades = getCookie("unlockedUpgrades"); //used around line 625
    notify("Welcome Back!");
    notify("Bag Items will appear when a new item is won");
    //if gold cookie gets bugged and set to a non number this will reset it
    if(isNaN(totalGold)){
      var totalGold = 0;
      var totalKeys = 5;
      updateGold();
      document.cookie = "unlockedBoxes=default; expires=Thu, 18 Dec 2019 12:00:00 UTC; path=/";
      notify("Refresh Page");
    }
    //sets counter to match cookie
    updateGold();
    
  }
  else{
    //if no cookie is found then variable is initialized normally
    var totalGold = 0;
    var totalKeys = 5;
    document.cookie = "gold="+totalGold+"; expires=Thu, 18 Dec 2019 12:00:00 UTC; path=/";
    document.cookie = "keys="+totalKeys+"; expires=Thu, 18 Dec 2019 12:00:00 UTC; path=/";
    document.cookie = "unlockedBoxes=; expires=Thu, 18 Dec 2019 12:00:00 UTC; path=/";
    document.cookie = "unlockedUpgrades=; expires=Thu, 18 Dec 2019 12:00:00 UTC; path=/";
    document.cookie = "bagItems=; expires=Thu, 18 Dec 2019 12:00:00 UTC; path=/";
    document.cookie = "volume=0.37; expires=Thu, 18 Dec 2019 12:00:00 UTC; path=/";
    var unlockedUpgrades = getCookie("unlockedUpgrades");
    var unlockedBoxes = getCookie("unlockedBoxes");
    var bagItems = getCookie("bagItems");
  }

  
  //test cookies
  // notify("Gold:"+getCookie("gold"));
  // notify("Keys:"+getCookie("keys"));

  // notify("Boxes unlocked:"+unlockedBoxes)
  // notify(unlockedBoxArray[1]);  
    //refresh key Counter
    $(".keyCounter").html('');
    $(".keyCounter").html("Keys: "+ totalKeys);
    //gold counter
    // var totalGold = 0; 
    //var totalGold = 0;
  
  
  //function from W3schools.com to parse cookie list easily by just passing the cookie name as a parameter
  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
  }
  
    //WonItems array 
    var wonItems = new Array();
    //wonItemCounter
    var x = 0;
    //total unique items
    var uniqueItemCount = 10;
    
    //box opening speed
    var boxSpeedMultiplier = 1;
    
    //sell value multiplier
    var sellValueMultiplier = 1;
    //link to assets folder
    var assets = "https://christianlong.design/assets/codepen/lootboxgame/";
    //menu upgrade background images
    //to add new backgrounds just upload image and add name to menuBackgrounds
    var menuBackgrounds = ['Wood','Stone','Metal','Marble'];
    var menuBackgroundSrc = [];
    for (i = 1; i < menuBackgrounds.length + 1; i++) { 
      //get all image sources from file hosting
      menuBackgroundSrc[i] = assets + "menuBg" + i +".jpg";
      //notify(menuBackgroundSrc[i]);
    }
    //set default menu Background
    $('.menu').css("background-image", "url("+menuBackgroundSrc[1]+")");
  //default/first lootbox variables
    //list of item names
    var items = ['Coins','Amethyst','Piamond','Opal','Amber','Globium','Rubhee','Orfin&nbsp;Tear','Gold&nbsp;Star','Gren\'s&nbsp;Orb',''];
    //link to each items picture
    var itemPng = [];
    var itemMultiplier = 1;
    //fill first lootbox itemPng array with links to item pngs
    for (i = 0; i < items.length; i++) { 
      itemPng[i] = assets + i +".png";
      // alert(itemPng[i]);
    }
  
  //dog lootbox variables
    //dog names
    var dogs =['Pitty','Wolf','Good&nbsp;Boy','Corgi','Pitbull','100%&nbsp;a&nbsp;dog','Roscoe','Doggy','Doge','Two&nbsp;Chains',''];
    //dog value multipliers
    var dogsMultiplier = 1.5;
    //array to store src/link to all dog.pngs
    var dogPng = [];
    //fill dog lootbox array with links to item pngs
    for (i = 0; i < dogs.length; i++) { 
      dogPng[i] = assets + "dogs/" + "dog" + i +".png";
      // alert(dogPng[i]);
    }
 //gods lootbox variables
    //gods names
    var gods =['Ao&nbsp;Kuang','Bacchus','Cabraken','Geb','Geb','Hou&nbsp;yi','Khepri','Medusa','Mercury','Ra','Scylla','Sobek','Sylvanus','Vulcan','Thanatos','Ymir','Zeus','Zhong&nbsp;Kui','Weak3n',''];
    //dog value multipliers
    var godsMultiplier = 2.8;
    //array to store src/link to all dog.pngs
    var godPng = [];
    //fill dog lootbox array with links to item pngs
    for (i = 0; i < gods.length; i++) { 
      godPng[i] = assets + "gods/" + "god" + i +".png";
      // alert(dogPng[i]);
    }
  
  
  //csgo lootbox variables
    var skins = ['CZ75','Neon&nbsp;AK','Shotty','Deagle','Neon&nbsp;Mac','High&nbsp;Roller','Swag-7','Primal&nbsp;UMP','Asiimov','Oni&nbsp;Taiji','Code&nbsp;Red','P90','Two&nbsp;Things','Falchion','Talon&nbsp;Fade','Gamma','Emerald','Huntsman'];
    var skinsMultiplier = 1.9;
    //array to store src/link to all skins .pngs
    var skinsPng = [];
    //fill csgo lootbox array with links to item pngs
    for (i = 0; i < skins.length; i++) { 
      skinsPng[i] = assets + "csgo/" + i +".png";
      // alert(dogPng[i]);
    }
  //food lootbox variables
    var food = ['Nugs','McChicken','Big&nbsp;Mac','Fries','Chiky&nbsp;Leg','Whopper','ChocoTaco','Heaven','GRLC&nbsp;Bread','Ravioli','Wings',''];
    var foodMultiplier = 2.35;
    //array to store src/link to all food. pngs
    var foodPng = [];
    //fill food lootbox array with links to item pngs
    for (i = 0; i < food.length; i++) { 
      foodPng[i] = assets + "food/" + i +".png";
    }
  //vehicles lootbox variables
    var vehicles = ['Lambo','Rolls','Mom\'s&nbsp;Truck','Speedster','McQueen','Hotrod','Birkin','Porsche','Dip','BMW','Harley','Ferrari','Cachiga','LAMBO','Atom','The&nbsp;Bat','Jet',''];
    var vehiclesMultiplier = 3.45;
    //array to store src/link to all food. pngs
    var vehiclesPng = [];
    //fill food lootbox array with links to item pngs
    for (i = 0; i < food.length; i++) { 
      vehiclesPng[i] = assets + "vehicles/" + i +".png";
    }
  
    //total items in box
    var maxItemCount = 140;
    var types = ['Garbage','Heavily Worn','A few scratches','Good Condition','Fresh Out of the Box'];
    var typeCodes = ['F','D','C','B','A'];
    var typeCount = types.length;
    
    //Fills Loot box with items and spacer
    var divsToAppend = "";
    
        divsToAppend += '<div class="tickerSlider" id="slider1"></div>';    
        
    var rollBox = function() {
      
      var wonItem =   parseInt(Math.floor(Math.random() * (maxItemCount-9)) + 5);

      return wonItem;
    };
    //fill shop with upgrades
    //list of shop upgrades
    var upgrades = ['Box Key','Menu&nbsp;Upgrade&nbsp;I','Recycler','Barter&nbsp;Lessons','Quick Roller','Menu&nbsp;Upgrade&nbsp;II','Shop&nbsp;Upgrade','Box&nbsp;Key&nbsp;x5','Quick&nbsp;Roller II','Immortal&nbsp;Upgrades','Fafnir\'s&nbsp;Tongue', 'Mercury\'s&nbsp;Treads','Worship&nbsp;Bacchus','Kaldr','King&nbsp;Kappa','Demon&nbsp;Bag','Reaper Box','Barter&nbsp;Lessons&nbsp;II','Key&nbsp;Former'];
    for(i=0;i<upgrades.length;i++){
      notify(upgrades[i]);
    };
    var upgradesCost = [10,750,300,650,500,1850,2500,50,2950,'???',6666,17500,150,12700,9001,25000,20000,3150,800];
    var upgradesHidden = [false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,true,true];
    //tooltips for shop items
    var upgradesInfo = [
      'Opens lootbox',
      'Unlock new lootboxes',
      'Chance of turning garbage into keys!',
      'Sell items for 15% more',
      '25% faster rolls',
      'Unlocks new Lootbox',
      'Unlocks new Shop Items',
      'Bundle of Keys',
      '50% faster rolls',
      'O̧th̶͝èrwo̵r̵ĺ͢d̨̢ly̵͟ ̀P̢͟o͟͠w͡e͞͞r̸͡͞s̵̛͘ &nbsp;&nbsp;&nbsp; &nbsp;Requires great sacrifice&nbsp;&nbsp;&nbsp;&nbsp; (20 Legendary items in Bag)',
      'Sell items for a devilish price..&nbsp;+66.6%',
      '𝘌𝘷𝘦𝘯 𝘧𝘢𝘴𝘵𝘦𝘳 rolls',
      'Enjoy a special drink',
      'Hunts for keys in the wilderness',
      'Refunds 20% of shop upgrade purchases',
      'Converts items into gold for 1000g',
      'Collect mortal souls',
      'Flea market apprenticeship +30% item value',
      'Hydraulic press garbage into keys'
    ];
    //Upgrade variables
    //recycler
    var recyclerEnabled = false;
    var keyFormerEnabled = false;
    var dataDelay = "data-delay='{\"show\":\"850\", \"hide\":\"50\"}'";
    //loop through store items and create HTML code
    function insertShopUpgrades(upgrades,upgradesCost,upgradesInfo,upgradesHidden,totalGold,dataDelay){
      for (i = 0; i < upgrades.length + 1; i++) {
        $('#shopList').append(lisToAppend);
        var hideUpgrade = "";
        var lisToAppend = "";
        if(upgradesHidden[i]){
          hideUpgrade = "hideUpgrade";
        }
            lisToAppend += '<div class="shopItem '+hideUpgrade+'" id="upgrade'+i+'" data-toggle="tooltip"  data-trigger="hover" " '+dataDelay+' " data-placement="auto" title="'+upgradesInfo[i]+'"><li>' + upgrades[i] + '<br><h6 class="costLabel" id="costLabel'+i+'">'+upgradesCost[i]+'</h6> <i class="fas fa-coins yellow"></i><br></li></div>';   

      }
    }
    insertShopUpgrades(upgrades,upgradesCost,upgradesInfo,upgradesHidden,totalGold,dataDelay);
 
      //shop upgrades when clicked
  
      $('.shopItem').click(function(){
        
        //reads id of button that was clicked
        var upgradeName = $(this).attr('id');
        //alert(upgradeName);
        //gets id number of clicked button by taking the last character
        if(upgradeName.length < 9){
          var upgradeID = parseInt(upgradeName.slice(-1));
        }
        else{
          //double digit upgrade numbers
          var upgradeID = parseInt(upgradeName.slice(-2));
        }
        // alert('clicked button: ' +upgradeID);
        switch(upgradeID) {
         case 0:
            if(totalKeys <100){
              if(checkGold(0)){
              //upgrade 1 code here - Box Key
                updateKeys(true);
                $(this).tooltip('hide');
                
              }
            }
            else{
                notify("Max Keys!");
            }
            
         break;
         case 1:
            if(checkGold(1)){
              //upgrade 2 code here - Menu Upgrade I
              //change menu background image
              $('.menu').css("background-image", "url("+menuBackgroundSrc[2]+")");
              $('.menu').css("color", "#00ff4c");
              $('.menu').css("text-shadow", "-1px 2px 4px #00ff4c");
              
              //add super car lootbox
              //unhide smite gods lootbox
              $('#boxGods').parent('.row').removeClass('hidden');
              $('#boxFood').parent('.row').removeClass('hidden');
              //reduce menu upgrade 2 cost
              upgradesCost[5] -= 750;
              $('#costLabel5').html(upgradesCost[5]);
              
              //cookie to save shop upgrade
              document.cookie = "unlockedUpgrades="+getCookie("unlockedUpgrades")+","+'1'+"; expires=Thu, 18 Dec 2019 12:00:00 UTC; path=/";
              
              $(this).tooltip('hide');
              $(this).remove();
            }
         break;
         case 2:
            if(checkGold(2)){
              //upgrade 3 code here - Recycler
              recyclerEnabled = true;
              
              //cookie to save shop upgrade
              document.cookie = "unlockedUpgrades="+getCookie("unlockedUpgrades")+","+'2'+"; expires=Thu, 18 Dec 2019 12:00:00 UTC; path=/";
              
              $(this).tooltip('hide');
              $(this).remove();
            };
            
            
         break;
         case 3:
            if(checkGold(3)){
              //upgrade 2 code here - Barter lessons Upgrade
              //increase gold recieved from selling items
              sellValueMultiplier = 1.15;
              bagUpdate();
              //cookie to save shop upgrade
              document.cookie = "unlockedUpgrades="+getCookie("unlockedUpgrades")+","+'3'+"; expires=Thu, 18 Dec 2019 12:00:00 UTC; path=/";
              
              $(this).tooltip('hide');
              $(this).remove();
            }
         break;
         case 4:
            if(checkGold(4)){
              //upgrade 4 code here - Quick roller
              //faster animation
              $('.tickerSlider').addClass('quickRollerAnimation');
              //faster sound and timeout delays
              boxSpeedMultiplier = 1.28;
              
              //reduce cost of tier II upgrade
              upgradesCost[8] -= upgradesCost[4];
              $('#costLabel8').html(upgradesCost[8]);
              
              //cookie to save shop upgrade
              document.cookie = "unlockedUpgrades="+getCookie("unlockedUpgrades")+","+'4'+"; expires=Thu, 18 Dec 2019 12:00:00 UTC; path=/";
              
              $(this).tooltip('hide');
              $(this).remove();
            }
         break;
         case 5:
            if(checkGold(5)){
              //upgrade 6 code here - Menu Upgrade II
              $('.menu').css("background-image", "url("+menuBackgroundSrc[3]+")");
              $('.menu').css("color", "#00ffff");
              $('.menu').css("text-shadow", "-1px 2px 4px #00ffff");
              //change menu background image
              
              //add menu upgrade 1 lootboxes
              //add super car lootbox
              
              $('#boxVehicles').parent('.row').removeClass('hidden');
              //unhide smite gods lootbox
              $('#boxGods').parent('.row').removeClass('hidden');
              $('#boxFood').parent('.row').removeClass('hidden');
              //add 2 more new lootboxes
              //remove menu upgrade I from shop
              $('#upgrade1').tooltip('hide');
              $('#upgrade1').remove();
              
              //cookie to save shop upgrade
              document.cookie = "unlockedUpgrades="+getCookie("unlockedUpgrades")+","+'5'+"; expires=Thu, 18 Dec 2019 12:00:00 UTC; path=/";
              
              $(this).tooltip('hide');
              $(this).remove();
            }
         break;
         case 6:
            if(checkGold(6)){
              //upgrade 7 code here - Shop Upgrade
              //makes new shop upgrades visible with a shiny color
              upgradesHidden[7]=false;
              $('#upgrade7').removeClass('hideUpgrade').addClass('tier2Upgrade');
              upgradesHidden[8]=false;
              $('#upgrade8').removeClass('hideUpgrade').addClass('tier2Upgrade');
              upgradesHidden[17]=false;
              $('#upgrade17').removeClass('hideUpgrade').addClass('tier2Upgrade');
              upgradesHidden[14]=false;
              $('#upgrade18').removeClass('hideUpgrade').addClass('tier2Upgrade');
              upgradesHidden[9]=false;
              $('#upgrade9').removeClass('hideUpgrade');
              //cookie to save shop upgrade
              document.cookie = "unlockedUpgrades="+getCookie("unlockedUpgrades")+","+'6'+"; expires=Thu, 18 Dec 2019 12:00:00 UTC; path=/";
              
              $(this).tooltip('hide');
              $(this).remove();
            }
         break;
         case 7:
            if(totalKeys < 96){
              if(checkGold(7)){
              //upgrade 1 code here - Box Key
                updateKeys(true);
                updateKeys(true);
                updateKeys(true);
                updateKeys(true);
                updateKeys(true);
                $(this).tooltip('hide');
                
              }
            }
            else{
                notify("Max Keys!");
            }
         break;
         case 8:
            if(checkGold(8)){
              //upgrade 8 code here - Quick roller II
              //faster animation
              $('.tickerSlider').addClass('quickRollerIIAnimation');
              //faster sound and timeout delays
              boxSpeedMultiplier = 1.62;
              
              //cookie to save shop upgrade
              document.cookie = "unlockedUpgrades="+getCookie("unlockedUpgrades")+","+'8'+"; expires=Thu, 18 Dec 2019 12:00:00 UTC; path=/";
              
              //remove tier I upgrade from shop
              $('#upgrade4').tooltip('hide');
              $('#upgrade4').remove();
              //remove tier II upgrade from shop
              $(this).tooltip('hide');
              $(this).remove();
            }
         break;
         case 9:
          //Unlocks immortal upgrades
            //check if there are 20 or more legendary items in bag
            var legendaryCount = 0
         
            for(i = 0; i < wonItems.length; i++){
              if(wonItems[i].typeCode == 'A'){
                 legendaryCount++;
              }
            };
            
            //alert(legendaryCount);
            //unlock immortal upgrades
            if(legendaryCount >= 20){
              notify('Use this power wisely..');
              localStorage.clear();
              $('.inventory').empty();
              //makes new shop upgrades visible with a shiny color
              upgradesHidden[10]=false;
              $('#upgrade10').removeClass('hideUpgrade').addClass('immortalUpgrade').addClass('tier3Upgrade');
              upgradesHidden[11]=false;
              $('#upgrade11').removeClass('hideUpgrade').addClass('immortalUpgrade').addClass('tier3Upgrade');
              upgradesHidden[12]=false;
              $('#upgrade12').removeClass('hideUpgrade').addClass('immortalUpgrade').addClass('tier3Upgrade');
              upgradesHidden[13]=false;
              $('#upgrade13').removeClass('hideUpgrade').addClass('immortalUpgrade').addClass('tier3Upgrade');
              upgradesHidden[14]=false;
              $('#upgrade14').removeClass('hideUpgrade').addClass('immortalUpgrade').addClass('tier3Upgrade');
              upgradesHidden[15]=false;
              $('#upgrade15').removeClass('hideUpgrade').addClass('immortalUpgrade').addClass('tier3Upgrade');
              upgradesHidden[16]=false;
              $('#upgrade16').removeClass('hideUpgrade').addClass('immortalUpgrade').addClass('tier3Upgrade');
              
              //change backgrounds of immortal upgrade button and menu
              $(this).css('background','url(https://i.makeagif.com/media/6-08-2017/c1zeCy.gif)');
              {$('.menu').css('background','url(https://orig00.deviantart.net/982d/f/2015/126/a/7/celestia_and_sun6ex_by_equumamici-d8sf8uv.gif)').css('background-size','cover').css('background-repeat','no-repeat')};
              
              //change background of body and fade into new red-orange gradient
              $('#bgOverlay').css('background','linear-gradient(-45deg,white,#fbff87,pink)');
              $('#bgOverlay').fadeTo( "slow" , 0);
              $('body').css('background','linear-gradient(-45deg,white,#ffb12b,#f44242)');
              
              //cookie to save shop upgrade
              document.cookie = "unlockedUpgrades="+getCookie("unlockedUpgrades")+","+'9'+"; expires=Thu, 18 Dec 2019 12:00:00 UTC; path=/";
              
              //fade button away, recolor menu text
              var fade = function(){
                $('#upgrade9').fadeTo( "slow" , 0)
                $('.menu').css("color", "#FDD500");
                $('.menu').css("text-shadow", "-1px 2px 4px #FDD500");
              };
             setTimeout(fade, 1900);
              
             var deleteit = function(){
               $('#upgrade9').tooltip('hide');
               $('#upgrade9').remove();
             };
             setTimeout(deleteit, 2400);
             }
            else{
              notify('The gods are not yet pleased');
            };
         break;
         case 10:
         //fafnirs tongue upgrade
            if(checkGold(10)){
              //further increase gold recieved from selling items
              sellValueMultiplier = 1.666;
              bagUpdate();
              //cookie to save shop upgrade
              document.cookie = "unlockedUpgrades="+getCookie("unlockedUpgrades")+","+'10'+"; expires=Thu, 18 Dec 2019 12:00:00 UTC; path=/";
              
              $(this).tooltip('hide');
              $(this).remove();
              
            };
         break;
         case 11:
         //mercury's treads upgrade
            if(checkGold(11)){
              //faster animation
              $('.tickerSlider').addClass('mercurysTreadsAnimation');
              //faster sound and timeout delays
              boxSpeedMultiplier = 2.72;
              
              //cookie to save shop upgrade
              document.cookie = "unlockedUpgrades="+getCookie("unlockedUpgrades")+","+'11'+"; expires=Thu, 18 Dec 2019 12:00:00 UTC; path=/";
              
              //remove tier I upgrade from shop
              $('#upgrade4').tooltip('hide');
              $('#upgrade4').remove();
              //remove tier II upgrade from shop
              $('#upgrade8').tooltip('hide');
              $('#upgrade8').remove();
              //remove this upgrade from shop
              $(this).tooltip('hide');
              $(this).remove();
              
            };
         break;   
         case 12:
         //upgrade Worship bacchus   
            if(checkGold(12)){
              //add drunk effect to these items
              $('.shopItem, .tickerItems, .bagItems').addClass('drunk');
              for(i=0;i<upgrades.length;i++){
                //creates different delays for different items in shop and menu
                var delay = i*0.5;
                notify(i);
                $('#upgrade'+i).css('animation-delay',delay + 's');
                $('.A').css('animation-delay',delay+1 + 's');
                $('.B').css('animation-delay',delay+2 + 's');
                $('.C').css('animation-delay',delay+3 + 's');
                $('.D').css('animation-delay',delay+4 + 's');
                $('.F').css('animation-delay',delay+5 + 's');
              };
              //creates delays for bag items
              for(i=0;i<wonItems.length;i++){
                var delay = i*0.2;
                $('#wonItem'+i).css('animation-delay',delay + 's');
              };
            };
         break;
         case 13:
         //kaldr upgrade
            if(checkGold(13)){
              //generate keys overtime
              setTimeout(updateKeys(true), 1000);
              
              document.cookie = "unlockedUpgrades="+getCookie("unlockedUpgrades")+","+'13'+"; expires=Thu, 18 Dec 2019 12:00:00 UTC; path=/";
              
              $(this).tooltip('hide');
              $(this).remove();
              
            };
         break;  
         case 14:
         //king kappa upgrade
            if(checkGold(14)){
              //discount 20% of shop upgrade costs
              for(var i=0;i<upgradesCost.length;i++){
              upgradesCost[i] *= 0.8;
              $('#costLabel5').html(upgradesCost[5]);
              }
            };
         break;  
         case 15:
         //demon bag upgrade
            if(checkGold(15)){
              //sells all items in bag for cost of 1000g
              
            };
         break; 
         case 16:
         //reaper box upgrade
            if(checkGold(16)){
              //unlocks reaper lootbox
              
            };
         break;  
         case 17:
         //barter lessons II upgrade
            if(checkGold(17)){
              //further increase gold recieved from selling items
              sellValueMultiplier = 1.30;
              bagUpdate();
              //cookie to save shop upgrade
              document.cookie = "unlockedUpgrades="+getCookie("unlockedUpgrades")+","+'17'+"; expires=Thu, 18 Dec 2019 12:00:00 UTC; path=/";
              
              $(this).tooltip('hide');
              $(this).remove();
              
            };
         break;  
         case 18:
         //key former upgrade
            if(recyclerEnabled){
            if(checkGold(18)){
              //gaurentees key when selling garbage
              keyFormerEnabled = true;
              //cookie to save shop upgrade
              document.cookie = "unlockedUpgrades="+getCookie("unlockedUpgrades")+","+'18'+"; expires=Thu, 18 Dec 2019 12:00:00 UTC; path=/";
              
              //removes upgrade from shop
              $('#upgrade18').tooltip('hide');
              $('#upgrade18').remove();
            };}
            else{
              notify('Need recycler to upgrade');
            };
         break;  
         default:
          // code to be executed if n is different from case 1 and 2
          //alert('default');
        }         
      });
      //free shopUpgrade function so cookies can function
      function unlockShopUpgradeFree(upgradeID){
        switch(upgradeID) {
         
         case 1:
           
              //upgrade 2 code here - Menu Upgrade I
              //change menu background image
              $('.menu').css("background-image", "url("+menuBackgroundSrc[2]+")");
              $('.menu').css("color", "#00ff4c");
              $('.menu').css("text-shadow", "-1px 2px 4px #00ff4c");
              
              //add super car lootbox
              //unhide smite gods lootbox
              $('#boxGods').parent('.row').removeClass('hidden');
              $('#boxFood').parent('.row').removeClass('hidden');
              //reduce menu upgrade 2 cost
              upgradesCost[5] -= 750;
              $('#costLabel5').html(upgradesCost[5]);
              
              $('#upgrade1').tooltip('hide');
              $('#upgrade1').remove();
            
         break;
         case 2:
            
              //upgrade 3 code here - Recycler
              recyclerEnabled = true;
              
              $('#upgrade2').tooltip('hide');
              $('#upgrade2').remove();
            
            
            
         break;
         case 3:
            
              //upgrade 2 code here - Bag Upgrade
              //add sell all button
              //7.5% chance of doubling items
              
              $('#upgrade3').tooltip('hide');
              $('#upgrade3').remove();
            
         break;
         case 4:
            
              //upgrade 2 code here - Quick roller
              //faster animation
              $('.tickerSlider').addClass('quickRollerAnimation');
              //faster sound and timeout delays
              boxSpeedMultiplier = 1.28;
              
              $('#upgrade4').tooltip('hide');
              $('#upgrade4').remove();
            
         break;
         case 5:
            
              //upgrade 6 code here - Menu Upgrade II
              //change menu background image
              $('.menu').css("background-image", "url("+menuBackgroundSrc[3]+")");
              $('.menu').css("color", "#00ffff");
              $('.menu').css("text-shadow", "-1px 2px 4px #00ffff");
              
              //add menu upgrade 1 lootboxes
              $('#boxGods').parent('.row').removeClass('hidden');
              $('#boxFood').parent('.row').removeClass('hidden');
            
              //unhide super car lootbox
              $('#boxVehicles').parent('.row').removeClass('hidden');
              //add 2 more new lootboxes
            
              //remove menu upgrade I from shop
              $('#upgrade1').tooltip('hide');
              $('#upgrade1').remove();
              
              $('#upgrade5').tooltip('hide');
              $('#upgrade5').remove();
            
         break;
         case 6:
              //upgrade 7 code here - Shop Upgrade
              
              upgradesHidden[7]=false;
              $('#upgrade7').removeClass('hideUpgrade').addClass('tier2Upgrade');
              upgradesHidden[8]=false;
              $('#upgrade8').removeClass('hideUpgrade').addClass('tier2Upgrade');
              upgradesHidden[17]=false;
              $('#upgrade17').removeClass('hideUpgrade').addClass('tier2Upgrade');
              upgradesHidden[14]=false;
              $('#upgrade18').removeClass('hideUpgrade').addClass('tier2Upgrade');
              upgradesHidden[9]=false;
              $('#upgrade9').removeClass('hideUpgrade');
            
              $('#upgrade6').tooltip('hide');
              $('#upgrade6').remove();
            
         break;
         case 8:
            //Quick Roller II Upgrade
              //faster css animation
              $('.tickerSlider').addClass('quickRollerIIAnimation');
              //faster sound and timeout delays
              boxSpeedMultiplier = 1.62;
            
              //remove tier I upgrade from shop
              $('#upgrade4').tooltip('hide');
              $('#upgrade4').remove();
              //remove tier II upgrade from shop
              $('#upgrade8').tooltip('hide');
              $('#upgrade8').remove();
         break;
         case 9:
            //makes new shop upgrades visible with a shiny color
              upgradesHidden[10]=false;
              $('#upgrade10').removeClass('hideUpgrade').addClass('immortalUpgrade').addClass('tier3Upgrade');
              upgradesHidden[11]=false;
              $('#upgrade11').removeClass('hideUpgrade').addClass('immortalUpgrade').addClass('tier3Upgrade');
              upgradesHidden[12]=false;
              $('#upgrade12').removeClass('hideUpgrade').addClass('immortalUpgrade').addClass('tier3Upgrade');
              upgradesHidden[13]=false;
              $('#upgrade13').removeClass('hideUpgrade').addClass('immortalUpgrade').addClass('tier3Upgrade');
              upgradesHidden[14]=false;
              $('#upgrade14').removeClass('hideUpgrade').addClass('immortalUpgrade').addClass('tier3Upgrade');
              upgradesHidden[15]=false;
              $('#upgrade15').removeClass('hideUpgrade').addClass('immortalUpgrade').addClass('tier3Upgrade');
              upgradesHidden[16]=false;
              $('#upgrade16').removeClass('hideUpgrade').addClass('immortalUpgrade').addClass('tier3Upgrade');
              
              $(this).css('background','url(https://i.makeagif.com/media/6-08-2017/c1zeCy.gif)');
              {$('.menu').css('background','url(https://orig00.deviantart.net/982d/f/2015/126/a/7/celestia_and_sun6ex_by_equumamici-d8sf8uv.gif)').css('background-size','cover').css('background-repeat','no-repeat')};
                            
              $('body').css('background','linear-gradient(-45deg,white,#ffb12b,#f44242)');
              $('.menu').css("color", "#FDD500");
              $('.menu').css("text-shadow", "-1px 2px 4px #FDD500");
              var deleteit = function(){
              $('#upgrade9').tooltip('hide');
              $('#upgrade9').remove();
              }; 
              deleteit();

         break;
         default:
          // code to be executed if n is different from case 1 and 2
          //alert('default');
        }         
      }
      
     
  
    //fill box with items
    for (i = 0; i < maxItemCount; i++) {    
      var randomItem = Math.floor(Math.random() * uniqueItemCount);
      var randomType = Math.floor(Math.random() * typeCount); 
      var randomValue = Math.floor(((randomType *10) + (3*randomItem*randomType))*0.4);
      var item = {name:"", src:"", type:"", value:""};

      item.name = items[randomItem];
      item.src = itemPng[randomItem];
      item.type = types[randomType]; 
      item.value = randomValue;
      
      
      // alert(item.name + " " + item.src + " " + item.type + " " + item.value);
      $('.ticker').append(divsToAppend);

      var divsToAppend = "";
          //fill box with items
          divsToAppend += '<div class="tickerItems ' + typeCodes[randomType] +'" id="item' + i + '"><p>' + item.name +'</p><img src="'+ item.src +'"></img><span style="display:none;">'+ types[randomType] +'</span><h1 style="display:none;">'+ item.value +'</h1></span><h2 style="display:none;">'+ typeCodes[randomType] +'</h2></div>';    
    } 

  function createLootbox(itemNames,itemSrcs,valueMultiplier,boxName,enabledByDefault,price,hiddenByDefault){
    //itemNames = lootbox item names array
    //itemSrcs = lootbox item png srcs array
    //valueMultiplier = multiplier int
    if(hiddenByDefault){
      var hiddenClass = 'hidden';
    }
    else{
      var hiddenClass = '';
    }
    if(enabledByDefault){
      var disabledOverlay = "";
    }
    else{
      var disabledOverlay = "<div class='row lootboxes' style='position:absolute;width:100%;margin-left:-8.35%;'><div class='col-sm-1'></div><div class='disabled col-sm-10' id='disabled"+boxName+"' data-price='"+price+"' data-name='"+boxName+"'><h2 class='boxPrice' >Unlock&nbsp;for&nbsp;$"+price+"</h2></div><div class='col-sm-1'></div></div>";
    }
    
    //create lootbox container
    var lootboxToAppend = "";
    lootboxToAppend= "<div class='row lootboxes "+hiddenClass+"'>"+disabledOverlay+" <button class='col-sm-2' id='box"+boxName+"'>Open Box</button><div class='ticker col-sm-9'><div class='tickerSlider animation' id='slider"+boxName+"' data-isRolling='false'></div><span class='tickerArrow'>hi</span></div></div>";
    $('.menu').append(lootboxToAppend);
    
  
    //fill newly generated lootbox with items 
    for (i = 0; i < maxItemCount; i++) {   
      var randomItem = Math.floor(Math.random() * (itemNames.length-1));
      var randomType = Math.floor(Math.random() * typeCount); 
      var randomValue = Math.floor(((randomType *10) + (3*randomItem*randomType))*valueMultiplier);
      var item = {name:"", src:"", type:"", value:""};

      item.name = itemNames[randomItem];
      item.src = itemSrcs[randomItem];
      item.type = types[randomType]; 
      item.value = randomValue;
      $('.ticker').append(divsToAppend);

      var divsToAppend = "";
          //fill box with items
          divsToAppend += '<div class="tickerItems ' + typeCodes[randomType] +'" id="item' + boxName + i + '"><p>' + item.name +'</p><img src="'+ item.src +'"></img><span style="display:none;">'+ types[randomType] +'</span><h1 style="display:none;">'+ item.value +'</h1></span><h2 style="display:none;">'+ typeCodes[randomType] +'</h2></div>';        
      
    } 
   
  }
   
  
    //loads and sets variables for all audio files
    var audio = {};
    audio["tick"] = new Audio();
    audio["tick"].src = "https://christianlong.design/assets/codepen/lootboxgame/piano-ticker.mp3"
    audio["win"] = new Audio();
    audio["win"].src = "https://christianlong.design/assets/codepen/lootboxgame/win.mp3"
    audio["coin"] = new Audio();
    audio["coin"].src = "https://christianlong.design/assets/codepen/lootboxgame/coinSFX.mp3"
    
  
   //to create a new lootbox make sure you call the createLootbox function, create a click event, and add #sliderBoxName to the css on line 86
   createLootbox(items,itemPng,itemMultiplier,'Items',true,0,false);
   createLootbox(dogs,dogPng,dogsMultiplier,'Dogs',false,200,false);
   createLootbox(skins,skinsPng,skinsMultiplier,'CSGO',false,800,false);
   createLootbox(food,foodPng,foodMultiplier,'Food',false,1400,true);
   createLootbox(gods,godPng,godsMultiplier,'Gods',false,2900,true);
   createLootbox(vehicles,vehiclesPng,vehiclesMultiplier,'Vehicles',false,5999,true);
    
    //unlocks box that is clicked on
    $('.disabled').click(function(){
      var cost = $(this).attr('data-price');
      var name = $(this).attr('data-name');

      //checks if there is enough money for this purchase
      if(checkGoldRaw(cost,name)){
        
        //create cookie to store which boxes are unlocked
        document.cookie = "unlockedBoxes="+getCookie("unlockedBoxes")+","+name+"; expires=Thu, 18 Dec 2019 12:00:00 UTC; path=/";
        //notify(getCookie("unlockedBoxes"));
        $(this).addClass('invisible');
      }
    });
    //unlocks boxes that were previously unlocked
    //splits unlockedBoxes cookie into an array
    var unlockedBoxArray = unlockedBoxes.split(',');
    //loops through unlocked boxes
    for(i = 0; i < unlockedBoxArray.length; i++){
      //generates HTML id for each unlocked box from name in cookie
      var name = '#disabled'+unlockedBoxArray[i];
      //hides lock overlay so the box is now unlocked
      $(name).addClass('invisible');
    }
    $('#boxItems').click(function(){
      openBox('Items');
    });
    //open dog lootbox when button is clicked
    $('#boxDogs').click(function(){
      openBox('Dogs');
    });
    $('#boxCSGO').click(function(){
      openBox('CSGO');
    });
    $('#boxGods').click(function(){
      openBox('Gods');
    });
  $('#boxFood').click(function(){
      openBox('Food');
    });
  $('#boxVehicles').click(function(){
      openBox('Vehicles');
    });
    //open box function, gets called by the corresponding button
    function openBox(boxID){
      
      //check if this box animation play state is paused
      //prevents from rolling multiple times before animation finishes
      if($('#slider'+boxID).data('isrolling') == false){
        //subtract 1 key and do nothing if you have no keys
        if(updateKeys(false)){
          //randomly pick which item is won
          var wonItem = rollBox(); 
          $('#slider'+boxID).data('isrolling',true);

          //calculates new width for slider so it lands on right item
           
           var sliderWidth1 = ((wonItem) * ($('.tickerItems').width() + 2))-202;
           // var sliderOffset = $('.tickerItems').offset();
           // alert(sliderWidth);

           $('#slider'+boxID).css('width',sliderWidth1);
           $('#slider'+boxID).css('margin-left',(-1*sliderWidth1));

           //reset css animation on slider
           $('#slider'+boxID).css('animation-play-state','running');
           $('#slider'+boxID).css('animation','none');
           setTimeout(
              function a() 
              {
                $('#slider'+boxID).css('animation','');
                
              }, 50);
           // alert(wonItem);
           audio["tick"].playbackRate = 3*boxSpeedMultiplier;
           audio["tick"].loop = true;
           audio["tick"].play();

           setTimeout(
              function a() 
              {
                audio["tick"].playbackRate = 2*boxSpeedMultiplier;
              }, 3400/boxSpeedMultiplier);
           setTimeout(
              function a() 
              {
                audio["tick"].playbackRate = 1*boxSpeedMultiplier;
              }, 4600/boxSpeedMultiplier);
           setTimeout(
              function c() 
              {
                audio["tick"].pause();
                audio["win"].play();
                $('#slider'+boxID).data('isrolling',false);
                // alert("You Won Item #" + wonItem)
                // alert('#item'+wonItem +'> p');
                //picks up wonItem info from divs in the lootbox
                var wonItem1 = {name:"", src:"", type:"",typeCode:"", value:""};
                wonItem1.name = $('#item'+boxID+wonItem +'> p').html();
                wonItem1.src = $('#item'+boxID+wonItem +'> img').attr('src');
                wonItem1.type = $('#item'+boxID+wonItem +'> span').html();
                wonItem1.value = $('#item'+boxID+wonItem +'> h1').html();
                wonItem1.typeCode = $('#item'+boxID+wonItem +'> h2').html();

                // alert(item.name + " " + item.src + " " + item.type + " " + item.value);
                //adds all wonItem info to a wonItems array, an array of objects
                wonItems = JSON.parse(localStorage.getItem("inventory") || "[]");
                wonItems.push(wonItem1);
                function preload(src){
                  img = loadImage(src);
                }
                var wonItemSrc = preload(wonItem1.src);
                var newItemPic = new Items(mouseX,mouseY,wonItemSrc,-5,-5);
  images.push(newItemPic);
                localStorage.setItem("inventory", JSON.stringify(wonItems));
                
                bagUpdate();
              }, 6300/boxSpeedMultiplier);
        }
      }
    }
  
  //splits unlockedUpgrades cookie into an array
  var unlockedUpgradeArray = unlockedUpgrades.split(',');
  //loops through unlocked upgrades
  for(i = 0; i < unlockedUpgradeArray.length; i++){
    //calls function to unlock each of the previously unlocked upgrades
    unlockShopUpgradeFree(parseInt(unlockedUpgradeArray[i]));
  }
    function bagUpdate(){
        wonItems = JSON.parse(localStorage.getItem("inventory") || "[]");
       $('.inventory').empty();
      for (i = 0; i < wonItems.length; i++) {    
        
        //checks if wonItem exists by checking if name is blank
        if(wonItems[i].name!==""){
          
        var divsToAppend = "";

        divsToAppend += '<div class="tickerItems ' + wonItems[i].typeCode +' bagItems" id="wonItem' + i + '" ><p>' + wonItems[i].name +'</p><img src="'+ wonItems[i].src +'"></img><span style="display:none;">'+ wonItems[i].type +'</span><h6 class="white">Sells for </h6><h3 class="white">'+ Math.round(wonItems[i].value * sellValueMultiplier) +'</h3><button class="sellButton button" data-value="'+ Math.round(wonItems[i].value  * sellValueMultiplier)+'" data-index="'+i+'">SELL</button></div>';       
        $('.inventory').append(divsToAppend);

        //rotates the last won item
        $("#wonItem"+(wonItems.length - 1)).animateRotate(360);

        }
    } 

 
   //sell bag item when sell button is clicked
   $( ".sellButton" ).on( "click", function() {

     //get value attached to item
     var value = parseInt($(this).attr("data-value")) ;
     var index = parseInt($(this).attr("data-index"));
     
     //special case for the meme himself, weak3n
     if($(this).parent().find("p:first").text() == 'Weak3n'){
       notify('What a meme - Bonus 667g');
       value += 667;
     };
     
     //get wonitems into array
     wonItems = JSON.parse(localStorage.getItem("inventory") || "[]");
     //remove wonItems[index] item
     wonItems.splice(index, 1);
     //save inventory
     localStorage.setItem("inventory", JSON.stringify(wonItems));
     
     //shop upgrades that enable random chance of getting a key when selling garbage
     if(recyclerEnabled){
       var keyBoolean = Math.random() >= 0.5;
       if(keyFormerEnabled){
         keyBoolean = true;
       };
       if(keyBoolean && $(this).parents('.F').length){
         updateKeys(true);
         notify("+1 Box Key");
       }
     }
     //remove item from bag when sold
     $(this).parent().detach();
     // alert(value);
     totalGold += value;
     updateGold();

     //sell item sound effect
     audio["coin"].play();
     
     //update goldcounting cookie to save your progress
     document.cookie = "gold="+totalGold+"; expires=Thu, 18 Dec 2019 12:00:00 UTC; path=/";

  });
  /*Onlick of openBox button animate the things moving
  randomly generate items(picture+rarity) for box
  remove won item from box
  copy item into bag
  */
      
}

  //jquery function to make rotateY animation easy 
  $.fn.animateRotate = function(angle, duration, easing, complete) {
    return this.each(function() {
      var $elem = $(this);

      $({deg: 0}).animate({deg: angle}, {
        duration: duration,
        easing: easing,
        step: function(now) {
          $elem.css({
             transform: 'rotateY(' + now + 'deg)'
           });
        },
        complete: complete || $.noop
      });
    });
  };
  
  //check if there is enough gold for this action
  function checkGold(upgradeNum){
    if(totalGold >= upgradesCost[upgradeNum]){
      //gold is spent
      totalGold -= upgradesCost[upgradeNum];
      updateGold();
      notify(upgrades[upgradeNum] + " Purchased");
      return true;
    }
    else{
      notify('Not rich enough!');
      return false;
    }
  }
  //check if there is enough gold for this action
  function checkGoldRaw(price,name){
    if(totalGold > price){
      //gold is spent
      totalGold -= price;
      updateGold();
      notify(name + " Purchased");
      return true;
    }
    else{
      notify('Not rich enough!');
      return false;
    }
  }
  
  //updates gold counter and cookie
  function updateGold(){
    //update gold counter
    $(".cashCounter").html('');
    $(".cashCounter").html("$"+totalGold);
    //update goldcounting cookie to save your progress   
    document.cookie = "gold="+totalGold+"; expires=Thu, 18 Dec 2019 12:00:00 UTC; path=/";
  }
  
  //function to update keys. parameter set to true will add a key to total count, false will subtract a key
  function updateKeys(addKey){
    var keyCount = parseInt(totalKeys);
    
      if(addKey == true){
        keyCount += 1;
        //notify("+1 Box Key");
        // alert(keyCount);
   
      }
      else{
        if(keyCount<1){    
          notify("Need a key!");
          return false;
        }
        else{
          keyCount -= 1;
          totalKeys=keyCount;
          notify("-1 Box Key")
          $(".keyCounter").html('');
          $(".keyCounter").html("Keys: "+ totalKeys);
          //create cookie to store number of keys owned
          document.cookie = "keys="+parseInt(totalKeys)+"; expires=Thu, 18 Dec 2019 12:00:00 UTC; path=/";
          return true;
        }
      }
      totalKeys=keyCount;
      $(".keyCounter").html('');
      $(".keyCounter").html("Keys: "+ totalKeys);
      //create cookie to store number of keys owned
      document.cookie = "keys="+parseInt(totalKeys)+"; expires=Thu, 18 Dec 2019 12:00:00 UTC; path=/";
      // notify("cookie made");
    
  }
  
  //create notification with string input
  function notify(notification){
    $('.notificationBox').append('<div class="notification">'+notification+'</div>');
  }
  
  //reset gold manually with a button
  $(".resetGoldBtn" ).on( "click", function(){
    totalGold = parseInt(prompt("Set gold to:","100000"));
    
    updateGold();
    // alert("Gold reset successful!");
  });
  //reset keys manually with a button
  $(".resetKeysBtn" ).on( "click", function(){
    totalKeys = parseInt(prompt("Set Keys to:","100"));
    
    updateKeys(true);
    // alert("Gold reset successful!");
  });

  $(".resetCookiesBtn" ).on( "click", function(){
    document.cookie.split(";").forEach(function(c) {
      document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); 
    });
    localStorage.clear();
    notify("Game Reset");
    notify("Please Refresh Page(F5)");
  });
  
  var savedVolume = getCookie("volume");
  setVolume(savedVolume);
  //notify(savedVolume);
  //volume slider js
  $("#volume").slider({
  	min: 0,
  	max: 100,
  	value: savedVolume*100,
		range: "min",
  	slide: function(event, ui) {
    	setVolume(ui.value / 100);
  	}
	});
	
	var winSFX = audio["win"];
	$('#player').append(winSFX);
  
	function setVolume(myVolume) {
    document.cookie = "volume="+myVolume+"; expires=Thu, 18 Dec 2019 12:00:00 UTC; path=/";
    $('#percent').html("Volume:"+parseInt(getCookie('volume')*100)+"%");
    
    // notify("Volume:"+parseInt(getCookie('volume')*100)+"%");
    audio["coin"].volume = myVolume;
    audio["win"].volume = myVolume;
    audio["tick"].volume = myVolume;
    audio["win"].play();
	}
  
  
  
});

}
}
export default script
//          Credits:
//
//volume slider UI from:
//thanks to https://codepen.io/emilcarlsson/pen/PPNLPy
//
//jquery rotate bag item function:
//thanks to https://stackoverflow.com/a/15191130
//
//Sound effects:
//thanks to https://freesound.org/
//           
//textures:
//thanks to Template.net