$(document).ready(function() {
    $('input').click(function(){
        $(this).addClass("active");
    });
    // ChronologieHistoire
    $(".B").hide();
    $(".C").hide();
    $(".D").hide();
    $(".E").hide();
    $(".F").hide();
    $(".G").hide();
    $(".H").hide();
    $(".I").hide();
    $(".J").hide();
    $("#etapeA").click(function(e) {
        $(".A").is(":hidden");
            $(".A").slideDown("slow");
            $(".B,.C,.D,.E,.F,.G,.H,.I,.J").hide(); 
        e.preventDefault();
    });

    $("#etapeB").click(function(e) {
        $(".B").is(":hidden");
            $(".B").slideDown("slow");
            $(".A,.C,.D,.E,.F,.G,.H,.I,.J").hide(); 
        e.preventDefault();
    });

    $("#etapeC").click(function(e) {
        $(".C").is(":hidden");
        $(".C").slideDown("slow");
        $(".B,.A,.D,.E,.F,.G,.H,.I,.J").hide(); 
        e.preventDefault();
    });

    $("#etapeD").click(function(e) {
        $(".D").is(":hidden");
            $(".D").slideDown("slow");
            $(".B,.C,.A,.E,.F,.G,.H,.I,.J").hide(); 
       
        e.preventDefault();
    });

    $("#etapeE").click(function(e) {
        $(".E").is(":hidden");
            $(".E").slideDown("slow");
            $(".B,.C,.A,.D,.F,.G,.H,.I,.J").hide(); 
        
        e.preventDefault();
    });

    $("#etapeF").click(function(e) {
        $(".F").is(":hidden");
            $(".F").slideDown("slow");
            $(".B,.C,.A,.E,.D,.G,.H,.I,.J").hide(); 
        e.preventDefault();
    });

    $("#etapeG").click(function(e) {
        $(".G").is(":hidden");
            $(".G").slideDown("slow");
            $(".B,.C,.A,.E,.F,.D,.H,.I,.J").hide(); 
        e.preventDefault();
    });

    $("#etapeH").click(function(e) {
        $(".H").is(":hidden");
            $(".H").slideDown("slow");
            $(".B,.C,.A,.E,.F,.G,.D,.I,.J").hide(); 
        e.preventDefault();
    });

    $("#etapeI").click(function(e) {
        $(".I").is(":hidden");
            $(".I").slideDown("slow");
            $(".B,.C,.A,.E,.F,.G,.D,.H,.J").hide(); 
        e.preventDefault();
    });
    $("#etapeJ").click(function(e) {
        $(".J").is(":hidden");
            $(".J").slideDown("slow");
            $(".B,.C,.A,.E,.F,.G,.D,.I,.H").hide(); 
        e.preventDefault();
    });
});

