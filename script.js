

var veryHappy=["https://cdn.myanimelist.net/s/common/uploaded_files/1446100305-f70ac8ca2653428e5117e1d26ebf067d.jpeg","http://orig09.deviantart.net/fa70/f/2012/051/d/4/narusaku_gif_so_sweeet_____by_angie988-d4qchei.gif"];

var verySad=["http://cdn.lowgif.com/small/a6aa09419872c17a-a-perfect-family-anime-amino.gif","https://thumbs.gfycat.com/IdleImpassionedBarasinga-small.gif"];
var veryAngry=["https://i0.wp.com/www.nerdycreator.com/wp-content/uploads/2015/11/1103-Anger-Feeling-Angry.jpg","https://media.giphy.com/media/11On6xCGyBrAA0/giphy.gif"];
var veryExcited=["https://66.media.tumblr.com/5e264d072ce1407573cd696558bb9344/tumblr_oghps3TdVy1v6fzefo1_400.gif","https://media0.giphy.com/media/rjGSvBzTXTIVG/giphy.gif"];

$('button').click(function(){
    var input = $('input').val();
    $(".images").html("");
    if(input === "happy"){
        happyMood();
    } else if(input==="sad"){
        sadMood();
    }else if(input==="angry"){
        angryMood();  
    }else if(input==="excited"){
        excitedMood();    
    }else{
        alert("boy type something up!!!!!!!!");
    }
    
});
function happyMood(){
    changeBackground("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8z7Sa1lCwR6fdVxfek-eLbKfOMvE2DpQ7B3AmJov0G3ircVRK");
    changeTextColor("blue");
    veryHappy.forEach(function(url){
        displayImage(url);
    });
    
}
function sadMood(){
changeBackground("http://www.buffalo.edu/content/www/brand/creative/color/color-palette/_jcr_content/par/image.img.292.auto.jpg/1458595285128.jpg");
    changeTextColor("purple");
 verySad.forEach(function(url){
        displayImage(url);
    });    
}
function angryMood(){
changeBackground("https://image.slidesharecdn.com/hren-110614075225-phpapp02/95/hren-1-728.jpg");
    changeTextColor("grey");
   veryAngry.forEach(function(url){
        displayImage(url);
    });    
}
function excitedMood(){
  changeBackground("https://www.solidbackgrounds.com/images/2560x1440/2560x1440-pastel-yellow-solid-color-background.jpg");
    changeTextColor("pink");
   veryExcited.forEach(function(url){
        displayImage(url);
    });      
}


function changeBackground(backgroundImage){
    $('body').css('background-image', "url("+backgroundImage+")");
}
function changeTextColor(color){
    $('body').css('color', color);
    
}function displayImage(image){
    $('.images').append('<img src ='+ image + '>');

}