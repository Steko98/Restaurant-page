const content = document.getElementById("content");

let loadAbout = function () {
  const about = document.createElement("div");
  about.setAttribute("id", "about");





  const locate = document.createElement("div");

  const locateHeading = document.createElement("h2");
  locateHeading.textContent = "Find us";
  locate.appendChild(locateHeading);

  const locateInfo = document.createElement("p");
  locateInfo.textContent =
    "Isaiah Bevel 1000 E Genesee St, Ste 403 Syracuse, NY 13210 United States";
  locate.appendChild(locateInfo);
  
  about.appendChild(locate);




  const hours = document.createElement("div");

  const hoursHeading = document.createElement("h2")
  hoursHeading.textContent = "Working hours";
  hours.appendChild(hoursHeading);

  const hoursList = document.createElement("ul");
  let days = ["Monday: 9AM - 9PM","Tuesday: 9AM - 9PM",
            "Wednesday: 9AM - 9PM","Thursday: 9AM - 9PM",
            "Friday: 9AM - 10PM","Saturday: 9AM - 10PM",
            "Sunday: 9AM - 10PM",];
  days.forEach(item => {
    const dayHours = document.createElement("li")
    dayHours.textContent = item
    hoursList.appendChild(dayHours)
  });
  hours.appendChild(hoursList);

  about.appendChild(hours);




  const contact = document.createElement("div");
  
  const contactHeading = document.createElement("h2")
  contactHeading.textContent = "Contact us"
  contact.appendChild(contactHeading)

  const phone = document.createElement("p")
  phone.textContent = "234-654-2345"
  contact.appendChild(phone)

  const email = document.createElement("p");
  email.textContent = "restaurant-name@email.com"
  contact.appendChild(email);

  about.appendChild(contact);




  content.appendChild(about);

  return;
};

export { loadAbout };
