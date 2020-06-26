
//Activates Modal and hides "Explore" title

const fadeout = () => {
    $("#Explore").removeClass("inactive");
    $("#modal").addClass("inactive");
    $("#modal").removeClass("scale-out-ver-bottom");
}

$('#details-btn').click(function (){
    $("#Explore").addClass("inactive");
    $("#modal").removeClass("inactive");
});

//Deactivates modal and reveals "Explore" title
$(".close").click(function (e){
    e.preventDefault();
    $("#modal").addClass("scale-out-ver-bottom");
    setTimeout(fadeout, 1000);
})
