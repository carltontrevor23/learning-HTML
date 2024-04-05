let index=0;
let images=["Images/image7.jpeg","Images/familybreakfast.jpg","Images/family6.jpeg","Images/background.jpg"];
function changeImage(){
    let imgElement=document.getElementById("slider")
    if(imgElement){
        imgElement.src=images[index];
        index=(index+1)%images.length;
    }
    else{
        console.error('Image not found');
    }
    
}
setInterval(changeImage,3000);
