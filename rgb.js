window.onload = function(){

    var canvas = document.getElementById('mycanvas');
    var ctx = canvas.getContext('2d');


    var img = new Image();

    img.onload = function(){
    ctx.drawImage(img,0,0);
    var imageData = ctx.getImageData(0,0,canvas.width,canvas.height);
    imageData.getRGBA = function(m,n,i){
        return this.data[this.width*4*n+4*m+i];
    };
    var rgb = document.getElementById('rgb');
    canvas.onclick = function(event){

        var colorbox = document.getElementById('colorbox');
        var x = event.offsetX;
        var y = event.offsetY;
        var R = to3digit(imageData.getRGBA(x,y,0));
        var G = to3digit(imageData.getRGBA(x,y,1));
        var B = to3digit(imageData.getRGBA(x,y,2));

       document.body.style.backgroundColor = 'rgb('+R+','+G+','+B+')';
    };
};
img.src ="image/picture1-original.jpg";
};

function to3digit(n){
return("000"+n).slice(-3);
}