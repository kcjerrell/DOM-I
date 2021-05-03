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
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


/* nav and header*/
let etc = document.createElement('a');
etc.href = "#";
siteContent.nav['nav-item-7'] = 'Etc.';
let other = document.createElement('a');
other.href = "#";
siteContent.nav['nav-item-8'] = 'Other';

let nav = document.querySelector('nav');
nav.appendChild(etc);
nav.appendChild(other);

let navLinks = document.querySelectorAll('nav a');
for (let i = 0; i < navLinks.length; i++) {
  const a = navLinks[i];
  a.innerHTML = siteContent.nav[`nav-item-${i + 1}`];
  a.style.color = "green";
}



document.querySelector('.cta-text h1').innerHTML = siteContent.cta.h1;
document.querySelector('.cta-text button').innerHTML = siteContent.cta.button;

document.getElementById('cta-img').src = siteContent.cta['img-src'];

/* top content */
let topcontent = document.querySelectorAll('.top-content .text-content');
topcontent[0].querySelector('h4').innerHTML = siteContent["main-content"]["features-h4"];
topcontent[0].querySelector('p').innerHTML = siteContent['main-content']["features-content"];

topcontent[1].querySelector('h4').innerHTML = siteContent["main-content"]["about-h4"];
topcontent[1].querySelector('p').innerHTML = siteContent["main-content"]["about-content"];

document.getElementById('middle-img').src = siteContent["main-content"]["middle-img-src"];

/* bottom content */
let bottomcontent = document.querySelectorAll('.bottom-content .text-content');
bottomcontent[0].querySelector('h4').innerHTML = siteContent["main-content"]["services-h4"];
bottomcontent[0].querySelector('p').innerHTML = siteContent['main-content']["services-content"];

bottomcontent[1].querySelector('h4').innerHTML = siteContent["main-content"]["product-h4"];
bottomcontent[1].querySelector('p').innerHTML = siteContent["main-content"]["product-content"];

bottomcontent[2].querySelector('h4').innerHTML = siteContent["main-content"]["vision-h4"];
bottomcontent[2].querySelector('p').innerHTML = siteContent["main-content"]["vision-content"];

/* footer */
let contact = document.querySelector('.contact');
contact.querySelector('h4').innerHTML = siteContent.contact["contact-h4"];
contact.querySelectorAll('p')[0].innerHTML = siteContent.contact["address"];
contact.querySelectorAll('p')[1].innerHTML = siteContent.contact["phone"];
contact.querySelectorAll('p')[2].innerHTML = siteContent.contact["email"];

document.querySelector('footer p').innerHTML = siteContent.footer.copyright;