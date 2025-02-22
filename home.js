const btns = document.querySelectorAll(".btn");
const content_type = document.querySelectorAll(".content-type");

btns.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    btns.forEach((btn) => {
      btn.classList.remove('active');
    });
    btn.classList.add('active');
    content_type.forEach(content => {
      content.classList.remove('active');
    });
    content_type[index].classList.add('active');
  });
});

// Initialize Google Map
function initMap() {
  const mapOptions = {
    center: { lat: 17.385044, lng: 78.486671 },  // Coordinates for Hyderabad, India
    zoom: 12,  // Zoom level for a more focused view
  };
  
  const map = new google.maps.Map(document.getElementById("map"), mapOptions);

  // Add a marker for Hyderabad
  new google.maps.Marker({
    position: { lat: 17.385044, lng: 78.486671 },
    map: map,
    title: "Hyderabad"
  });
}

// Load the Google Maps API
function loadMapScript() {
  const script = document.createElement("script");
  script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDA6I3eoXOpbFVdi68nwCfYFnQWXwUukqo&callback=initMap`;  // Replace with your Google API Key
  script.async = true;
  script.defer = true;
  document.body.appendChild(script);
}

// Call the function to load the script
loadMapScript();

function scrollToSection(event, sectionId) {
  event.preventDefault(); // Prevent default anchor behavior

  const targetSection = document.getElementById(sectionId);
  targetSection.scrollIntoView({
    behavior: 'smooth', // Smooth scroll behavior
    block: 'start'      // Scroll to the start of the section
  });
}

let icon = document.querySelector("#icon-menu");
icon.addEventListener("click",()=>{
  let dis = document.querySelector(".display3");
  if(dis.style.display === "block"){
    dis.style.display ="none";
  }else{
    dis.style.display ="block";
  }
 
})

