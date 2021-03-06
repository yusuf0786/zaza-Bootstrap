// navigation hover for about-us
$("#navigation ul .item-2").hover(function(){
    $("#navigation ul li .about-us").animate({"border-width":"4px"},0000);
    $("#navigation ul li .home").animate({"border-width":"0"},0000);
},
function(){
    $("#navigation ul li .about-us").animate({"border-width":"0px"},0000);
    $("#navigation ul li .home").animate({"border-width":"4px"},0000);
});
// navigation hover for services
$("#navigation ul .item-3").hover(function(){
    $("#navigation ul li .services").animate({"border-width":"4px"},0000);
    $("#navigation ul li .home").animate({"border-width":"0"},0000);
    $("#navigation ul li .hover-dropdown").slideDown(0100);
},
function(){
    $("#navigation ul li .services").animate({"border-width":"0px"},0000);
    $("#navigation ul li .home").animate({"border-width":"4px"},0000);
    $("#navigation ul li .hover-dropdown").hide();
});
// navigation hover for projects
$("#navigation ul .item-4").hover(function(){
    $("#navigation ul li .projects").animate({"border-width":"4px"},0000);
    $("#navigation ul li .home").animate({"border-width":"0"},0000);
},
function(){
    $("#navigation ul li .projects").animate({"border-width":"0px"},0000);
    $("#navigation ul li .home").animate({"border-width":"4px"},0000);
});
// navigation hover for contact-us
$("#navigation ul .item-5").hover(function(){
    $("#navigation ul li .contact-us").animate({"border-width":"4px"},0000);
    $("#navigation ul li .home").animate({"border-width":"0"},0000);
},
function(){
    $("#navigation ul li .contact-us").animate({"border-width":"0px"},0000);
    $("#navigation ul li .home").animate({"border-width":"4px"},0000);
});

$(".navbar-toggle").click(function(){

    $("#navigation").fadeToggle();
});