/*window.onload=function(){
    //this.document.write("Hello JavaScript!");
};*/
$(document).ready(function(){
    $("#choose").click(function(){
        let numberOfListItem = $("#choices li").length;
        let randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        $("#random-result").text($("#choices li").eq(randomChildNumber).text());
        if(randomChildNumber>3){
            $("#random-pic").attr("src",pictures[4]);
        }else{
            $("#random-pic").attr("src",pictures[randomChildNumber]);
        }
    });
    $("#submit").click(function(){
        let foodStr = document.getElementById('food').value;
        console.log( foodStr);
        $("#choices").append("<li>"+foodStr+"</li>");
    });
});
