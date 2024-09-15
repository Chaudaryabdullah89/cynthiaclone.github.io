function circlemousefollower(xscale,yscale) {
    window.addEventListener("mousemove", function(dets) {

        let minicircle = document.getElementsByClassName('minicircle')[0];
        if (minicircle) { 
            minicircle.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale},${yscale})`;
            minicircle.style.display = 'Unset' 
        }
    });
}
function mousemoving(){

}
circlemousefollower();

function imagesanimation(){


    document.querySelectorAll('.elem').forEach(function(elem){
    var rotate = 0
    var differ = 0 

        elem.addEventListener('mousemove',function(dets){
          var diff = dets.clientY - elem.getBoundingClientRect().top;
            differ = dets.clientX - rotate
            rotate = dets.clientX
          
            gsap.to(elem.querySelector('img'),{
                opacity:1,
                // top : diff,
                 ease :Power1,
                left :dets.clientX ,
                rotate :   gsap.utils.clamp(-20,20,differ*.8)
            })
        })
  
        
    })
}

function imagesanimationleave(){

    document.querySelectorAll('.elem').forEach(function(elem){
    var rotate = 0
    var differ = 0 

        elem.addEventListener('mouseleave',function(dets){
        
          
            gsap.to(elem.querySelector('img'),{
                opacity:0,
                // top : diff,
                 ease :Power1,
              
            })
        })
  
        
    })
}

    imagesanimationleave()
imagesanimation()