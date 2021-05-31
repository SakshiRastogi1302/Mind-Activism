let closeWelcomeContainer=document.querySelector(".close");
let wallpaperImage=document.querySelector(".wallpaper");



// Remove Welcome Container From Screen Once Close Button Is Clicked
closeWelcomeContainer.addEventListener("click",function(){
    let parentElement=closeWelcomeContainer.parentElement;
    wallpaperImage.setAttribute("src","./Image/new wallpaper.png");
    parentElement.style.display="none";
});