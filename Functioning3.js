let index=0;
let images=["Images/amedimetes.jpeg","Images/bridalsuit4.jpeg","Images/bridalsuit3.jpeg","Images/background.jpg"];
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