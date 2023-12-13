// src/index.js
document.addEventListener("DOMContentLoaded", function () {
    // DOM elements
    const mainEl = document.querySelector("main");
    const topMenuEl = document.querySelector("#top-menu");
  
    // Styling and content for mainEl
    mainEl.style.backgroundColor = 'var(--main-bg)';
    mainEl.innerHTML = '<h1>DOM Manipulation</h1>';
    mainEl.classList.add('flex-ctr');
  
    // Styling for topMenuEl
    topMenuEl.style.cssText = 'height: 100%; background-color: var(--top-menu-bg)';
    topMenuEl.classList.add('flex-around');
  
    // Menu data structure
    var menuLinks = [
      { text: 'about', href: '/about' },
      { text: 'catalog', href: '/catalog' },
      { text: 'orders', href: '/orders' },
      { text: 'account', href: '/account' },
    ];
  
    // Create and append menu links
    menuLinks.forEach(function (link) {
      const linkElement = document.createElement("a");
      linkElement.href = link.href;
      linkElement.textContent = link.text;
      topMenuEl.appendChild(linkElement);
    });
  });
