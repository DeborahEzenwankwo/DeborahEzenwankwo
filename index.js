// const nav = document.getElementsByTagName("nav");
// const navItem = document.querySelector(".nav-item");
// const list = document.querySelector(".nav-list");
// var hamburger = document.getElementById("ham");

// function myHamburger() {
//     // nav.style.display="inline-block";
//     // navItem.style.display="block";
//     hamburger.style.border="20px";

// }

function blueColor () {
    if(document.getElementById("blue").style.color == "black") {
        document.getElementById("blue").style.color = "blue";
        document.getElementById("red").style.color = "black"
    } else{
        document.getElementById("blue").style.color = "black";
        
    }
}

function redColor () {
    if (document.getElementById("red").style.color == "black"){
        document.getElementById("red").style.color = "red";
        document.getElementById("blue").style.color = "black"; 
    } else {
        document.getElementById("red").style.color = "black";
    }
}

function seeComment (){
    var today = new Date();
    var time = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() +' '+ today.getHours()+':'+ today.getMinutes();
    document.getElementById("date").innerHTML= time;
    document.getElementById("date").style.fontSize="12px";
    var flexmin = window.matchMedia("(max-width:550px)")
    if (flexmin.matches){
        document.getElementById("text").style.display="flex";
    }else{
            document.getElementById("text").style.display="block";
        }
}



  function getComment () {
      if(document.getElementById("myComment").value == null){
          document.getElementById("error-msg").innerHTML="Type message";
      }else{
        document.getElementById("comments").style.display="block";
        const newComment = document.getElementById("myComment").value;

        document.getElementById("commented").innerHTML = newComment;
        

      }
}

      function deleteComment (){
        
        const checkComment = document.getElementById("commented");
          var firstChild = checkComment.firstElementChild

          firstChild.remove();
      }
   
