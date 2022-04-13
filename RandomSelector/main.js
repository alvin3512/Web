

$(function(){
    $("input").on("click",function(){
    //alert("Hi");
    //$("h1").text("Hello");//標題文字變成hello
    //$("h1").text($("li:first").text());
    
    var numberOfListItem = $("#choices li").length;
    var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
    var imgSrc=["ramen.jpg"]
    $("h1").text($("#choices li").eq(randomChildNumber).text());
    /*switch(randomChildNumber){
        case 0:
        
    }*/
    });
});