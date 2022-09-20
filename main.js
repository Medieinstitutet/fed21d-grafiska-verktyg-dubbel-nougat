//animation för att bilder ska fadea fram

window.addEventListener("load", animationImage);

let image1 = document.getElementById("image1");
let image2 = document.getElementById("image2");

function animationImage() {
  image1.style.display = "block";
  image1.className = "imgFrontPage";
  setTimeout(() => {
    image2.style.display = "block";
    image2.className = "imgFrontPage";
  }, 2000);
}

//cookiesbanner försvinner vid knapptryck
let cookiesButton = document.getElementById("cookiesButton");
cookiesButton.addEventListener("click", removeCookiesBanner);

function removeCookiesBanner() {
  let asideBanner = document.getElementById("asideBanner");
  asideBanner.style.display = "none";
}
