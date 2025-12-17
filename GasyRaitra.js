
 document.querySelector('#open').addEventListener('click', ()=>{
    document.querySelector('.container').style.visibility = "visible"})

    closeModale=()=> {document.querySelector('.container').style.visibility = "hidden"}

   // Slide
   const slide1=["pomme_sec3.jpg", "pomme_sec2.jpg", "pomme_sec1.jpg"]
   const slide2=["logo2.jpg", "harona2.jpg", "harona1.jpg"]
   const slide3=["produit_raitra.jpg", "nature.jpg", "vin1.jpg"]
  let num1=0
  let num2=0
  let num3=0
 
  function changeSlide(sens){
     num1=num1+sens
     num2=num2+sens
     num3=num3+sens
     if(num1 >(slide1.length-1)){
         num1=0
         }
         if(num2 >(slide2.length-1)){
            num2=0
            }
               if(num3 >(slide3.length-1)){
                  num3=0
               }
     if(num1<0){
         num2=(slide1.length-1)
     }
         if(num2<0){
            num2=(slide2.length-1)
         }
            if(num3<0){
               num3=(slide3.length-1)
            }
     document.querySelector('.animer1').src="./image_prod/"+slide1[num1];
     document.querySelector('.animer2').src="./image_prod/"+slide2[num2];
     document.querySelector('.animer3').src="./image_prod/"+slide3[num3];
 }
 setInterval('changeSlide(1)', 2000)
 