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
  }, 1000);
}

//cookiesbanner försvinner vid knapptryck
let cookiesButton = document.getElementById("cookiesButton");
cookiesButton.addEventListener("click", removeCookiesBanner);

function removeCookiesBanner() {
  let asideBanner = document.getElementById("asideBanner");
  asideBanner.style.display = "none";
}

//animation
let customEaseIMade = CustomEase.create(
  "custom",
  "M0,0,C0.063,0.191,0.076,0.216,0.142,0.31,0.206,0.403,0.194,0.408,0.282,0.44,0.366,0.47,0.434,0.279,0.51,0.18,0.56,0.114,0.57,0.059,0.652,-0.016,0.688,-0.05,0.792,0.147,0.84,0.162,0.912,0.184,0.992,0.043,1,0"
);
let timeDuration = 0.4;
let timeDelay = 0.3;
gsap.from("#logo-f", { duration: 0.7, ease: "bounce.out", y: -60 });
gsap.from("#logo-f", { opacity: 0.2, duration: 1, delay: 0.7 });
gsap.to("#logo-ae", {
  duration: timeDuration,
  ease: customEaseIMade,
  delay: timeDelay,
  y: 10,
});
gsap.from("#logo-ae", { opacity: 0.2, duration: 1, delay: 0.8 });
gsap.to("#logo-r", {
  duration: timeDuration,
  ease: customEaseIMade,
  delay: timeDelay + 0.1,
  y: 10,
});
gsap.from("#logo-r", { opacity: 0.2, duration: 1, delay: 0.9 });
gsap.to("#logo-g", {
  duration: timeDuration,
  ease: customEaseIMade,
  delay: timeDelay + 0.2,
  y: 10,
});
gsap.from("#logo-g", { opacity: 0.2, duration: 1, delay: 1 });
gsap.to("#logo-h", {
  duration: timeDuration,
  ease: customEaseIMade,
  delay: timeDelay + 0.3,
  y: 10,
});
gsap.from("#logo-h", { opacity: 0.2, duration: 1, delay: 1.1 });
gsap.to("#logo-u", {
  duration: timeDuration,
  ease: customEaseIMade,
  delay: timeDelay + 0.4,
  y: 10,
});
gsap.from("#logo-u", { opacity: 0.2, duration: 1, delay: 1.2 });
gsap.to("#logo-s", {
  duration: timeDuration,
  ease: customEaseIMade,
  delay: timeDelay + 0.5,
  y: 10,
});
gsap.from("#logo-s", { opacity: 0.2, duration: 1, delay: 1.3 });
gsap.to("#logo-e", {
  duration: timeDuration,
  ease: customEaseIMade,
  delay: timeDelay + 0.6,
  y: 10,
});
gsap.from("#logo-e", { opacity: 0.2, duration: 1, delay: 1.4 });
gsap.to("#logo-t", {
  duration: timeDuration,
  ease: customEaseIMade,
  delay: timeDelay + 0.7,
  y: 10,
});
gsap.from("#logo-t", { opacity: 0.2, duration: 1, delay: 1.5 });
