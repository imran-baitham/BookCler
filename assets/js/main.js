// ==================  LOADER  =========================
let loader = document.querySelector(".loader")
let welcomeAlt = document.querySelector(".simple-alert");

window.addEventListener("load", vanish);

function vanish() {
  setTimeout(() => {
    loader.classList.add("disppear");
  }, 2000)

  // setTimeout(() => {
  //   welcomeAlt.style.display = "block"
  //   document.getElementById("audio").play();
  // }, 8000)

}

// ===================  notifaction  ===================

let muFun = () => {
  setInterval(() => {
  }, 125000)
  setInterval(() => {
    welcomeAlt.style.display = "none"
  }, 130000)
}
// muFun()

function closeNotfi() {
  welcomeAlt.style.display = "none"
}

// ==================  input search book ===============
let search = document.querySelector(".bx-search-alt")
let searchFilter = document.getElementById("search")
let list = []
search.addEventListener("click", () => {
  if (searchFilter.value == "") {
    alert("plz Search book input box 👇👇👇")
  }
  if (searchFilter.value) {
    list.push(searchFilter.value)
    searchFilter.value = ""
    alert("Soory,😭😭😭 some thing want rong...")
  } else {

  }
})

// ===============  Cart Counter  =======================

let counter = document.querySelector(".badge")
let cartCount = document.querySelector(".cart__prices-item")
let a = 3

let addCart = document.querySelectorAll(".new__button")
addCart.forEach((element) => {
  element.addEventListener("click", () => {
    a++;
    if (a > 9) {
      welcomeAlt.style.display = "block"
      document.querySelector(".alert__text").innerHTML = "Soory Cart is full - Shop Now"
      document.querySelector(".alert__text").style.color = "#b32f2d"
      document.querySelector(".notifaction__icons").style.display = "none"
      document.querySelector(".alert").style.background = "#ecc8c5"
      document.querySelector("#close__btn").style.color = "black"
      document.getElementById("audiotwo").play();
    } else {
      counter.innerText = a
      cartCount.innerText = a + " " + "items"
    }
  })
})

// ================  notifaction Two ===================

const letterData = document.querySelector(".newsletter__input")
const button = document.getElementById("buttones"),
  toast = document.querySelector(".toast")
closeIcon = document.querySelector(".close_letter"),
  progress = document.querySelector(".progress");

let timer1, timer2;

button.addEventListener("click", () => {
  toast.classList.add("active");
  progress.classList.add("active");

  if (letterData.value) {
    list.push(letterData.value)
    document.getElementById("audiotwo").play();
    letterData.value = ""
    document.querySelector(".email_pro").style.display = "none"
  } else {
    toast.classList.remove("active");
    if (letterData.value != "@") {
      welcomeAlt.style.display = "block"
      document.querySelector(".alert__text").innerHTML = "Plz Input valid Email Address."
      document.querySelector(".alert__text").style.color = "#b32f2d"
      document.querySelector(".notifaction__icons").style.display = "none"
      document.querySelector(".alert").style.background = "#ecc8c5"
      document.querySelector("#close__btn").style.color = "black"
      // document.getElementById("audiotwo").play();
    }
  }
  // form validation

  timer1 = setTimeout(() => {
    toast.classList.remove("active");
  }, 5000); //1s = 1000 milliseconds

  timer2 = setTimeout(() => {
    progress.classList.remove("active");
  }, 5300);
});

function notfiLetter() {
  toast.classList.remove("active");
  setTimeout(() => {
    progress.classList.remove("active");
  }, 300);
  clearTimeout(timer1);
  clearTimeout(timer2);
}

// ===================  mobile search box ===========================
function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}

// ========== When the user scrolls the page, execute myFunction =============
window.onscroll = function () { myFunction() };

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

// ========== theme__color ==========================
const themeChangerColor = document.getElementById("theme__color");
themeChangerColor.addEventListener("click", () => {
  document.querySelector(".theme__model").style.display = "block";
});

const closetheme = document.querySelector(".theme_close");
closetheme.addEventListener("click", () => {
  document.querySelector(".theme__model").style.display = "none";
});

function cloaseColors(params) {
  document.querySelector(".theme__model").style.display = "none";
}

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  if (this.scrollY >= 50) {
    header.classList.add("scrool__header");
  } else {
    header.classList.remove("scrool__header");
  }
};
window.addEventListener("scroll", scrollHeader);

/*=============== SIDENAV ===============*/

let sideNav = document.getElementById("nav-toggle")
sideNav.addEventListener("click", () => {
  document.getElementById("outer_sidenav").style.left = "0px"
})

let sideClose = document.querySelectorAll("#sidenav_close")
sideClose.forEach((close) => {
  close.addEventListener("click", () => {
    document.getElementById("outer_sidenav").style.left = "-100%"
  })
})

let outerNone = document.getElementById("outer_sidenav")
outerNone.addEventListener("click", () => {
  document.getElementById("outer_sidenav").style.left = "-100%"
})

let innerShow = document.querySelector(".sidenav")
innerShow.addEventListener("click", (e) => {
  e.stopPropagation()
})

/*==================== LINK ACTIVE ====================*/
const linkColor = document.querySelectorAll('.nav__link')

function colorLink() {
  linkColor.forEach(l => l.classList.remove('active'))
  this.classList.add('active')
}

linkColor.forEach(l => l.addEventListener('click', colorLink))

/*=============== CHANGE CHILD HEADER ===============*/

// const childHeader = () => {
//   const childHeader = document.getElementById("child__header");
//   if (this.scrollY >= 50) {
//     childHeader.style.display = "none"
//   } else {
//     childHeader.style.display = "block"
//   }
// };
// window.addEventListener("scroll", childHeader);

// window.onscroll = function () { scrollFunction() };
// function scrollFunction() {
//   if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
//     document.getElementById("child__header").style.top = "-58px";
//   } else {
//     document.getElementById("child__header").style.top = "30px";
//   }
// }

/*=============== THEME MODAL ===============*/

let themeButtons = document.querySelectorAll(".theme__buttons");

themeButtons.forEach((colors) => {
  colors.addEventListener("click", () => {
    let dataColor = colors.getAttribute("data-color");
    document.querySelector(":root").style.setProperty("--first-hue", dataColor);
  });
});

/*=============== SERVICES MODAL ===============*/

const modelViews = document.querySelectorAll(".services__model"),
  modelBtns = document.querySelectorAll(".services__button"),
  modelClose = document.querySelectorAll(".services__modal-close");

let model = (modelClick) => {
  modelViews[modelClick].classList.add("active-modal");
};

modelBtns.forEach((mb, i) => {
  mb.addEventListener("click", () => {
    model(i);
  });
});

modelClose.forEach((mc) => {
  mc.addEventListener("click", () => {
    modelViews.forEach((mv) => {
      mv.classList.remove("active-modal");
    });
  });
});

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
// let mixerPortfolio = mixitup(".work__container", {
//   selectors: {
//     target: ".work__card",
//   },
//   animation: {
//     duration: 300,
//   },
// });

// const linkWork = document.querySelectorAll(".work__item");

// function activeWork() {
//   linkWork.forEach((l) => l.classList.remove("active-work"));
//   this.classList.add("active-work");
// }

/* Link active work */

// linkWork.forEach((l) => l.addEventListener("click", activeWork));

/*=============== HOME SWIPER ===============*/
let homeSwiper = new Swiper(".home-swiper", {
  spaceBetween: 30,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  grabCursor: true,

  rewind: true,

  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
/*=============== NEW SWIPER ===============*/

let newSwiper = new Swiper(".new-swiper", {
  spaceBetween: 24,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".bx-left-arrow-alt",
    prevEl: ".bx-right-arrow-alt",
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
})

/*==================== SWIPER DISCOVER ====================*/
let swiper = new Swiper(".discover__container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 32,
  coverflowEffect: {
    rotate: 0,
  },
  autoplay: {
    delay: 6500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".bx-left-arrow-alt",
    prevEl: ".bx-right-arrow-alt",
  },
  breakpoints: {
    576: {
      spaceBetween: 20,
    },
  },
})

/*=============== QUESTIONS ACCORDION ===============*/
const accordionItems = document.querySelectorAll('.questions__item')

accordionItems.forEach((item) => {
  const accordionHeader = item.querySelector('.questions__header')

  accordionHeader.addEventListener('click', () => {
    const openItem = document.querySelector('.accordion-open')

    toggleItem(item)

    if (openItem && openItem !== item) {
      toggleItem(openItem)
    }
  })
})

const toggleItem = (item) => {
  const accordionContent = item.querySelector('.questions__content')

  if (item.classList.contains('accordion-open')) {
    accordionContent.removeAttribute('style')
    item.classList.remove('accordion-open')
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + 'px'
    item.classList.add('accordion-open')
  }

}


/*=============== LIGHT THEME ===============*/
const themeButton = document.getElementById("theme-button");

const lightTheme = "light-theme";
const iconTheme = "bx-sun";

const selectTheme = localStorage.getItem("selected-theme");
const selectIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(lightTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";

if (selectTheme) {
  document.body.classList[selectTheme === "dark" ? "add" : "remove"](
    lightTheme
  );
  themeButton.classList[selectTheme === "bx bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(lightTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
/*=============== SCROLL REVEAL ANIMATION ===============*/

// const sr = scrollReveal({
//   origin: "top",
//   distance: "60px",
//   duration: 2500,
//   delay: 400,
// });

// sr.reveal(`.home__data`);
// sr.reveal(`.home__handle`, { delay: 700 });
// sr.reveal(`.home__social , .home__scrool`, { delay: 900, origin: "bottom" });

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 350) scrollUp.classList.add('show-scroll');
  else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SHOW CART ===============*/
const cart = document.getElementById('cart'),
  cartShop = document.getElementById('cart-shop'),
  cartClose = document.getElementById('cart-close')

/*===== CART SHOW =====*/
/* Validate if constant exists */
if (cartShop) {
  cartShop.addEventListener('click', () => {
    cart.classList.add('show-cart')
  })
}

/*===== CART HIDDEN =====*/
/* Validate if constant exists */
if (cartClose) {
  cartClose.addEventListener('click', () => {
    cart.classList.remove('show-cart')
  })
}

// ===================== cookies =================================

let setCookie = (cName, cValue, expDay) => {
  let date = new Date();
  date.setTime(date.getTime() + (expDay * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = cName + "=" + cValue + "; " + expires + "; path=/"
}

let getCookies = (cName) => {
  const name = cName + "=";
  const cDecoded = decodeURIComponent(document.cookie);
  const cArr = cDecoded.split("; ");
  let value;
  cArr.forEach((val) => {
    if (val.indexOf(name) === 0) value = val.substring(name.length)
  })
  // console.log(value)
  return value;
}

let cookieBtn = document.querySelector(".Cookie_btn")

cookieBtn.addEventListener("click", () => {
  document.querySelector(".Cookies").style.display = "none"
  setCookie("cookie", true, 30)
})

let cookieMessage = () => {
  if (!getCookies("cookie")) {
    document.querySelector(".Cookies").style.display = "block"
  }
}

window.addEventListener("load", cookieMessage)

let closeCookie = () => {
  document.querySelector(".Cookies").style.display = "none"
}
// =====================================================
const booktore = {
  state: {
    posts: [
      {
        id: 1,
        bookName: "Jazzmaster",
        url: "assets/img/bookimg/img-06.jpg",
        prise: "$100",
        number: "5",
        caption: "mybecome ineer.",
        like: 0,
        islike: false,
      },
      {
        id: 2,
        bookName: "Rose Gold",
        url: "assets/img/bookimg/img-07.jpg",
        prise: "$50",
        number: "1",
        caption: "mybecome ineer.",
        like: 0,
        islike: false,
      },
      {
        id: 3,
        bookName: "Longines Rose",
        url: "assets/img/bookimg/img-08.jpg",
        prise: "$10",
        caption: "mybecome ineer.",
        number: "2",
        like: 0,
        islike: false,
      },
    ],
  },
  handleAddLike(id) {
    const { state: { posts } } = booktore
    let books = posts.find((x) => {
      return x.id === id
    })
    posts.splice(books, 1)
    document.querySelector(".cart__card").style.display = "none"

    // displayNone.forEach((x) => {
    //     // const item = x.firstChild.textContent;
    //     if (posts.indexOf(books) != -1) {
    //         x.parentElement.style.display = "none"
    //     } else {
    //         x.parentElement.style.display = "none"
    //     }
    // })

  },
  increse(e) {
    let number = Math.floor(Math.random() * 10)
    document.querySelector(".cart__amount-number").innerHTML = number
  },
  decrese() {
    let number = Math.floor(Math.random() * 10 - 10)
    document.querySelector(".cart__amount-number").innerHTML = number
  },

  randerPost(x) {
    return `
    <article class="cart__card">
      <div class="cart__box">
            <img src="${x.url}" alt="" class="cart__img">
      </div>
      
     <div class="cart__details">
       <h3 class="cart__title">${x.bookName}</h3>
       <span class="cart__price">${x.prise}</span>

       <div class="cart__amount">
       <div class="cart__amount-content">
       <span class="cart__amount-box" onclick="booktore.decrese()">
                   <i class='bx bx-minus'></i>
               </span>

               <span class="cart__amount-number">${x.number}</span>

               <span class="cart__amount-box" onclick="booktore.increse(event)">
                   <i class='bx bx-plus'></i>
               </span>
           </div>

           <i class='bx bx-trash-alt cart__amount-trash' onclick="booktore.handleAddLike(${x.id})"></i>
       </div>
   </div>
   </article>`
  },

  rander() {
    const { state: { posts }, randerPost } = booktore
    let root = document.querySelector(".cart__container")
    root.innerHTML = posts.map((x) => randerPost(x)).join("")
  },
}

booktore.rander()


// ==================  card page ==========================

let cards = document.querySelectorAll(".footer__card")

cards.forEach((card) => {
  card.addEventListener("click", () => {
    alert("working on page coming soon")
  })
})

let sponsor = document.querySelectorAll(".sponsor__content")

sponsor.forEach((link) => {
  link.addEventListener("click", () => {
    alert("working on page coming soon")
  })
})

let delivery = document.querySelectorAll(".featured__card")

delivery.forEach((develr) => {
  develr.addEventListener("click", () => {
    alert("working on page coming soon")
  })
})

// =====================================================

let article = document.querySelectorAll(".button--link")

article.forEach((artel) => {
  artel.addEventListener("click", () => {
    alert("working on page coming soon")
  })
})

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
  distance: '60px',
  duration: 3100,
  // reset: true
})


sr.reveal(`.nav , .about, .questions`, {
  origin: 'top',
  interval: 100,
})

sr.reveal(`.header_child, .featured, .services, .footer`, {
  origin: 'left',
})

sr.reveal(`.home, .discover, .new , .sponsor`, {
  origin: 'right',
  interval: 100,
})

sr.reveal(`.discover, .newsletter,`, {
  origin: 'bottom',
  interval: 100,
})

// ==========================================