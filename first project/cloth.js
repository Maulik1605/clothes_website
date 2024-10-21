

function shops(){
    document.querySelector("#home1").style.color="black";
    document.querySelector("#shop").style.color="darkturquoise";
    document.querySelector("#blog").style.color="black";
    // document.querySelector("#trends").style.color="black";
    document.querySelector("#contact").style.color="black"; 
}
function homes(){
    document.querySelector("#home1").style.color="darkturquoise";
    document.querySelector("#shop").style.color="black";
    document.querySelector("#blog").style.color="black";
    // document.querySelector("#trends").style.color="black";
    document.querySelector("#contact").style.color="black"; 
}
function blogs1(){
    document.querySelector("#home1").style.color="black";
    document.querySelector("#shop").style.color="black";
    document.querySelector("#blog").style.color="darkturquoise";
    // document.querySelector("#trends").style.color="black";
    document.querySelector("#contact").style.color="black"; 
}
function contacts(){
    document.querySelector("#home1").style.color="black";
    document.querySelector("#shop").style.color="black";
    document.querySelector("#blog").style.color="black";
    // document.querySelector("#trends").style.color="black";
    document.querySelector("#contact").style.color="darkturquoise"; 
}




function log(){
    document.querySelector(".loginpage").style.display="block";
}
function logedbtn(){

    let email = document.getElementById("names");
    let pass= document.getElementById("passwords");
   
    at_position = email.value.indexOf("@");
    dot_position = email.value.lastIndexOf(".");

    if(email.value =="" || pass.value=="")
    {
        alert("please enter email password");
    }
    else{
        if((at_position<1)||((dot_position-at_position)<2))
        {
                alert("please enter correct email id");
                // return false;
        }
        else{
        
        alert("you loged it");
        document.querySelector(".loginpage").style.display="none";
        }
    }

}



// function homes(){
//     mainPage.style.display="flex";
//     card.style.display="block";
//     card2.style.display="block";
//     card3.style.display="block";
//     blog1.style.display="block";
//    about.style.display="none";
    

// document.getElementById("blog").style.color="black";
// document.getElementById("home").style.color="rgb(2, 173, 173)";
// document.getElementById("shop").style.color="black";
// document.getElementById("contact").style.color="black";
// document.getElementById("about").style.color="black";
// }
// function shops(){
// mainPage.style.display="none";
// blog1.style.display="block";
// about.style.display="none";
// card.style.display="block";
// card2.style.display="block";
// card3.style.display="block";

 
// // document.getElementById("blog").style.color="black";
// // document.getElementById("home").style.color="black";
// // document.getElementById("shop").style.color="rgb(2, 173, 173)";
// // document.getElementById("contact").style.color="black";
// // document.getElementById("about").style.color="black";
// }
// function blogs1(){
//     mainPage.style.display="none";
//     blog1.style.display="block";
//     about.style.display="none";
//     card.style.display="none";
//     card2.style.display="block";
//     card3.style.display="block";

    
     
//     // document.getElementById("blog").style.color="black";
//     // document.getElementById("home").style.color="black";
//     // document.getElementById("shop").style.color="rgb(2, 173, 173)";
//     // document.getElementById("contact").style.color="black";
//     // document.getElementById("about").style.color="black";
// }
// // function blogs1(){
// //     mainPage.style.display="none";
// //     blog1.style.display="block";
// //     about.style.display="none";
// //     card.style.display="none";
// //     card2.style.display="none";
// //     card3.style.display="none";
    
     
// //     document.getElementById("blog").style.color="black";
// //     document.getElementById("home").style.color="black";
// //     document.getElementById("shop").style.color="rgb(2, 173, 173)";
// //     document.getElementById("contact").style.color="black";
// //     document.getElementById("about").style.color="black";
// //     }



// // function abouts(){
// //     mainPage.style.display="none";
// //     card.style.display="none";
// //     card2.style.display="none";
// //     card3.style.display="none";
// //     blog.style.display="none";
// //     about.style.display="block";

// // document.getElementById("blog").style.color="black";
// // document.getElementById("home").style.color="black";
// // document.getElementById("shop").style.color="black";
// // document.getElementById("contact").style.color="black";
// // document.getElementById("about").style.color="rgb(2, 173, 173)";

// // }


// let card = document.getElementById("trend");
// console.dir(trend);
// let card2 = document.getElementById("trendSec2");
// console.dir(trendSec2);
// let card3 = document.getElementById("trendSec3");
// console.dir(trendSec3);

// let about = document.getElementById("about");
// console.dir(about);
// //let contact = document.(".contact");
// //console.dir(contact);

// // console.log(card);
// let blog1 = document.getElementById("trends");
// console.dir(trends);
// let mainPage = document.getElementById("main");
// console.dir(main);


 // const at= email.value.indexof("@");
    //  const dot=email.value.lastindex(".");
    // console.log(dot_position);
    // console.dir(names);
    // console.dir(passwords);