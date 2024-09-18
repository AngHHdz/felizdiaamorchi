onload = () => {
  document.body.classList.remove("container");

  // Crear el objeto de audio y asignarle la URL
  const audio = new Audio('https://rr3---sn-p5qs7nzk.googlevideo.com/videoplayback?expire=1726706376&ei=aB7rZrmsG4rRp-oPlfGX2QU&ip=109.242.136.52&id=o-ADxBpaqKKqFLuqhL4RfQTQRTd7IPQxIwyk2n-u0gxZWY&itag=140&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&bui=AXLXGFSSIPJ1Zv9UHO2Z_VjPWgdwEEtv4cHt1LdzhwKbOFd6tZBF323SIQuxPdZNrOd5SAslR8aO1l53&spc=54MbxTSfrCQvNRfydzh9txBOKcerVZnHhg9SVyF7z8mWpah0bpTv&vprv=1&svpuc=1&mime=audio%2Fmp4&ns=m8o2kOUGt7kAHsenL7u04FMQ&rqh=1&gir=yes&clen=3525962&dur=217.826&lmt=1663777506410922&keepalive=yes&c=WEB_CREATOR&sefc=1&txp=5532434&n=zyHCPFpcTS6RGw&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRgIhAMAgUdCe0PtxrCV3F2l-l8yJWpReOHpRtHgt9YSUfF0IAiEA-eUww54reKjn502bitHO3JxkKmr-55lR46bQeL0IHu0%3D&rm=sn-fpoqixaa5n-5uil7l,sn-nv4ll76&rrc=79,104&fexp=24350517,24350557,24350561&req_id=db16fdd05feaa3ee&redirect_counter=2&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=8v&mip=201.175.166.210&mm=29&mn=sn-p5qs7nzk&ms=rdu&mt=1726684200&mv=u&mvi=3&pl=23&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=ABPmVW0wRAIgFvNZVike_pRNywj2--omEADh5d9l_y2A4wzqeoFP_6QCIBFpI2atjbT9G53Olia_GShC0tFZgwPnqc-HSIAv_8AY');
  
  audio.loop = true;

  // Intentar reproducir el audio al interactuar con la página
  document.addEventListener('click', () => {
    audio.play().catch(error => {
      console.log("Error al reproducir el audio: ", error);
      
const images = ['imagen1.jpg', 'imagen2.jpg', 'imagen3.jpg', 'imagen4.jpg'];
const bubbles = document.querySelectorAll('.bubble img');

// Cambia la imagen de cada burbuja aleatoriamente
function changeImage() {
  bubbles.forEach((bubble, index) => {
    setTimeout(() => {
      const randomImage = images[Math.floor(Math.random() * images.length)];
      bubble.src = randomImage;
    }, index * 2000); // Cambia la imagen cada 2 segundos
  });
}

// Inicia la animación de cambio de imágenes
setInterval(changeImage, 5000);

      
    });
  });
};
