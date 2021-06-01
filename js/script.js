let closeWelcomeContainer=document.querySelector(".close");
let wallpaperImage=document.querySelector(".wallpaper");



// Remove Welcome Container From Screen Once Close Button Is Clicked
closeWelcomeContainer.addEventListener("click",function(){
    let parentElement=closeWelcomeContainer.parentElement;
    wallpaperImage.setAttribute("src","./Image/new wallpaper.png");
    parentElement.style.display="none";
});


function JSalert(){
	swal("Please fill the form before visiting the website \n\n\n Form option is present in the top right corner. ");
}