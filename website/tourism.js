var disappear = document.querySelector(".disappear");

var kpcta = document.getElementById("kpcta");

kpcta.addEventListener("mouseenter",function(){
    disappear.style.display="block";

    setTimeout(() => {
        if(!disappear.matches(":hover"))
            disappear.style.display="none";
    },800);
    
});

disappear.addEventListener("mouseleave",function(){
    disappear.style.display="none";
});

var nave = document.querySelector(".navee");

var bars = document.querySelector(".bars")

window.addEventListener("scroll",function(){

    if(window.scrollY > 100){
        nave.classList.add("new-nave");
    }else{
        nave.classList.remove("new-nave");
    }
    var  ulist = document.querySelector(".ulist");

    if(window.scrollY > 100){

        ulist.classList.add("new-clr");

    }else{
        ulist.classList.remove("new-clr");
    }

    if(window.scrollY > 100){
        bars.classList.add("bars-clr")
    }else{
        bars.classList.remove("bars-clr")

    }

});

// 3D carousel Images

const items = document.querySelectorAll('.Dcarousel-item');
let currentIndex = 0;

function updateCarousel() {
  items.forEach((item, index) => {
    item.classList.remove('active', 'left', 'right');

    if (index === currentIndex) {
      item.classList.add('active');
    } else if (index === (currentIndex - 1 + items.length) % items.length) {
      item.classList.add('left');
    } else if (index === (currentIndex + 1) % items.length) {
      item.classList.add('right');
    }
  });
}

function rotateCarousel() {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
}

updateCarousel();
setInterval(rotateCarousel, 3000);

 
document.addEventListener("DOMContentLoaded", function () {
    const map = L.map("map").setView([35.2002, 72.4258], 10);
  
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
    }).addTo(map);
  
    const locations = [
      { name: "Mingora", coords: [35.2002, 72.4258] },
      { name: "Swat", coords: [35.2226, 72.4258] },
      { name: "Kalam", coords: [35.4930, 72.5882] },
      { name: "Kaghan", coords: [34.7809, 73.6311] },
    ];
  
    locations.forEach((location) => {
      L.circleMarker(location.coords, {
        color: "green",
        radius: 8,
        fillColor: "green",
        fillOpacity: 0.7,
      })
        .addTo(map)
        .bindPopup(`<b>${location.name}</b>`);
    });
  
    let currentIndex = 0;
    setInterval(() => {
      currentIndex = (currentIndex + 1) % locations.length;
      const { coords, name } = locations[currentIndex];
      map.setView(coords, 10, { animate: true });
  
      L.popup().setLatLng(coords).setContent(`<b>${name}</b>`).openOn(map);
    }, 3000);
  });
 
  document.querySelector(".call").addEventListener("mouseover", function () {
    document.querySelector(".line_").style.display = "block";
  });
  
  document.querySelector(".call").addEventListener("mouseout", function () {
    document.querySelector(".line_").style.display = "none";
  });

  var msg = document.querySelector(".main-");

  window.addEventListener("scroll",function(){
      if(window.scrollY > 600){
        msg.classList.add("maain");
      }else{
        msg.classList.remove("maain")
      }
  });


  

  