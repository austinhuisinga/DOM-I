const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// selectors
  // nav
  let nav = document.getElementsByTagName('a');
  nav[0].textContent = siteContent['nav']['nav-item-1'];
  nav[1].textContent = siteContent['nav']['nav-item-2'];
  nav[2].textContent = siteContent['nav']['nav-item-3'];
  nav[3].textContent = siteContent['nav']['nav-item-4'];
  nav[4].textContent = siteContent['nav']['nav-item-5'];
  nav[5].textContent = siteContent['nav']['nav-item-6'];

  // cta
  let headline = document.querySelector('h1').textContent = siteContent['cta']['h1'];

  let butt = document.querySelector('button').textContent = siteContent['cta']['button'];

  let headImg = document.getElementById('cta-img').src = siteContent['cta']['img-src'];

  // main-content
  let textContentH4 = document.querySelectorAll('.text-content h4');
  textContentH4[0].textContent = siteContent['main-content']['features-h4'];
  textContentH4[1].textContent = siteContent['main-content']['about-h4'];
  textContentH4[2].textContent = siteContent['main-content']['services-h4'];
  textContentH4[3].textContent = siteContent['main-content']['product-h4'];
  textContentH4[4].textContent = siteContent['main-content']['vision-h4'];

  let textContentP = document.querySelectorAll('.text-content p');
  textContentP[0].textContent = siteContent['main-content']['features-content'];
  textContentP[1].textContent = siteContent['main-content']['about-content'];
  textContentP[2].textContent = siteContent['main-content']['services-content'];
  textContentP[3].textContent = siteContent['main-content']['product-content'];
  textContentP[4].textContent = siteContent['main-content']['vision-content'];

  // mid-img
  let midImg = document.getElementById('middle-img');
  midImg.src = siteContent['main-content']['middle-img-src'];

  // contact
  let contactH4 = document.querySelector('.contact h4').textContent = siteContent['contact']['contact-h4'];
  let contactP = document.querySelectorAll('.contact p');
  contactP[0].textContent = siteContent['contact']['address'];
  contactP[1].textContent = siteContent['contact']['phone'];
  contactP[2].textContent = siteContent['contact']['email'];

  // footer
  let foot = document.querySelector('footer p').textContent = siteContent['footer']['copyright'];

// Task 3: Add new content
  const home = document.createElement('a');
  home.textContent = "Home";
  document.querySelector('nav').prepend(home);
  
  const more = document.createElement('a');
  more.textContent = "More";
  document.querySelector('nav').append(more);

  let navLinks = document.querySelectorAll('a');
  navLinks.forEach(element => {
    element.style.color = 'green';
  });

//Stretch
  textContentH4.forEach(e => {
    e.style.fontSize = '1.5rem';
  })