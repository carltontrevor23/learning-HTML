let index=0;
let images=["Images/image1.jpeg","Images/image2.jpeg","Images/image3.jpeg","Images/image4.jpeg","Images/image5.jpg","Images/image6.jpg"];
function changeImage(){
    let imgElement=document.getElementById("slider");
    if(imgElement){
        imgElement.src=images[index];
        index=(index+1)%images.length;
    }
    else{
        console.error('Image not found');
    }
    
}
setInterval(changeImage,3000);