//arrays//
var happyimg =[
    "https://thumbs.gfycat.com/TenderQuestionableAnt-size_restricted.gif"
    ,"https://www.yourfamily.co.za/wp-content/uploads/2017/09/Meet-your-happy-hormones.jpg"
    ];
    
var sadimg =[
    "https://i.ytimg.com/vi/fNPSNTAVG3M/maxresdefault.jpg"
    ,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxx6sy9d5lHc5m6BZQhFw3sMtlEKE8sAupq7NWjIauy0aufsN-"
    ];

var madimg =[
    "https://coubsecure-s.akamaihd.net/get/b201/p/coub/simple/cw_timeline_pic/bd808a334fb/08a06d4b1684d88ad24f7/big_1535728937_image.jpg"
    ,"https://media1.tenor.com/images/5c1dbca567bed56b8c5b97058faeae8f/tenor.gif?itemid=5303966"
    ];    
    
var traumatizedimg =[
    "https://data.whicdn.com/images/101978743/original.gif"
    ,"https://i.pinimg.com/originals/3c/f3/26/3cf32689fe6e19885b8ebad0eba858c9.jpg"
    ];





















//handlers//
$("button").click(function() {
    var mood = $(".enter").val();
    
if(mood === "happy"){
    happy();
    happyimg.forEach(function(happi){
        $(".image").append("<img src=" + happi + ">");
    });
} else if (mood === "sad"){
    sad();
    sadimg.forEach(function(sadi){
        $(".image").append("<img src=" + sadi + ">");
    });
} else if (mood === "mad"){
    mad();
    madimg.forEach(function(madi){
        $(".image").append("<img src=" + madi + ">");
});
} else if (mood === "traumatized"){
    traumatized();
    traumatizedimg.forEach(function(trauma){
        $(".image").append("<img src=" + trauma + ">");
    });
} else {
    wrong();
}

});



















//functions//

function happy(){
    $(".image").empty();
    $(".message").empty();
    color("black");
    $(".message").html("You're happy huh? I wish I was happy too. But I'm stuck in this mood board.");
    $("body").css("background-color","yellow");
    $(".enter").val('');
}

function sad(){
    $(".image").empty();
    $(".message").empty();
    color("white");
    $(".message").html("I feel the same way bud");
    $("body").css("background-color","blue");   
    $(".enter").val('');
}

function mad(){
    $(".image").empty();
    $(".message").empty();
    color("white");
    $(".message").html("I'd tell you to calm down, but I'm too lazy");
    $("body").css("background-color","red");
    $(".enter").val('');
}

function traumatized(){
    $(".image").empty();
    $(".message").empty();
    color("white");
    $(".message").html("Well I can't help you with THAT");
    $("body").css("background-color","darkblue");
    $(".enter").val('');
}

function wrong(){
    $(".image").empty();
    $(".message").empty();
    $(".message").html("Type happy,sad,mad,traumatized please");   
    $("body").css("background-color","hotpink");
}

function color(fontColor){
    $("h1").css("color", fontColor );
}