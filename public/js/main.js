window.onscroll = function (ev) {
    var B = document.body; //IE 'quirks'
    var D = document.documentElement; //IE with doctype
    D = (D.clientHeight) ? D : B;

    if (D.scrollTop == 0) {
        console.log("SCROLL TOP");
        //  document.getElementById("navbar1").setAttribute("class", "navbar navbar-light bg-light fixed-top navbar-bg");
    //   $(".navbar-fixed-top").addClass("navbar-bg");
    //    $('.navbar-fixed-top').removeClass("navbar-bg-trans");

        //  document.getElementById("appnamenav").setAttribute("class", "header-text app-name-style");




    } else {
//      $('.navbar-fixed-top').removeClass("navbar-bg");
 //  $(".navbar-fixed-top").addClass("navbar-bg-trans");

        //  document.getElementById("appnamenav").setAttribute("class", "header-text");

    }


};

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
   // nav: true,
  //  navigation : true, // Show next and prev buttons
    //    navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    autoplay:true,
    autoplayTimeout:2000,
   // autoplayHoverPause:false,
    responsive: {
        0: {
            items: 3
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})


function hoverIcon(id) {
    var title;
    var desc;
    var link;

    console.log("Mouse hover" + id)
    if(id=="smsdrive"){
        title="SMS Drive";
        desc="Powerful Message Backup ,Restore & Sync Solution";
        link="";
    }else if(id=="qrlite"){
        title="QR Lite";
        desc="Lightweight QR Code Generator & Scanner";
        link="";
    }
    else if(id=="gpat"){
        title="GPAT #1";
        desc=" ";
        link="";
    }
    
    else if(id=="PharmaHub"){
        title="Pharma Hub";
        desc="Study Notes, Books, Knowledge";
        link="";
    }
    else if(id=="BitVedas"){
        title="BitVedas ";
        desc="E-Book library of Vedic Knowledge";
        link="";
    }
    else if(id=="DreamJournal"){
        title="Dream Journal";
        desc="Record your Dreams & write it down";
        link="";
    }
    else if(id=="ep"){
        title="Ephrine Apps Family";
        desc="";
        link="";
    }

    if(id=="appsinfo"){
        document.getElementById("appsinfo").setAttribute("style", "visibility: visible;");

    }else{

        document.getElementById("appsinfo").setAttribute("style", "visibility: visible;");

        

        document.getElementById("appinfotext").innerHTML=title;
        document.getElementById("appdesctext").innerHTML=desc;
        
    }

}


function hoverIconOut(id) {
    console.log("Mouse hover out" + id)
    document.getElementById("appsinfo").setAttribute("style", "visibility: collapse;");

}