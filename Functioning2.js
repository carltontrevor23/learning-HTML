let index=0;
let images=["Images/image6.jpg","Images/presidentialsuite.jpg","Images/banner3.jpg","Images/background.jpg"];
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
