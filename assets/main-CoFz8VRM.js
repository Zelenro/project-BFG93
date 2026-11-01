import{i as de,g as pe,a as ge,G as me,s as fe,c as he,u as Q,b as ke,d as be,e as J,f as ye,h as Le,o as ve}from"./vendor-Cpj98N_H.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function o(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(n){if(n.ep)return;n.ep=!0;const i=o(n);fetch(n.href,i)}})();function h(){return{authForm:document.querySelector(".auth-form"),authSubmitBtn:document.querySelector(".submit-sign-up"),authSwitchSignInBtn:document.querySelector(".switch-sign-in"),authSwitchSignUpBtn:document.querySelector(".switch-sign-up"),authInputName:document.querySelector(".txtUsername"),authInputEmail:document.querySelector(".txtEmail"),authInputPassword:document.querySelector(".txtPassword"),authCloseBtn:document.querySelector(".auth-modal__close-btn"),authBackdrop:document.querySelector(".auth-backdrop"),headerSignUpBtn:document.querySelector(".header-signup-btn"),logoutBtn:document.querySelector(".logout-btn"),jsLogoutBtn:document.querySelector(".js-logout-btn"),fullscreenMenuLogoutBtn:document.querySelector(".fullscreen-menu__logout-btn"),userMenu:document.querySelector(".user-menu"),userBar:document.querySelector(".user-bar"),userDropdown:document.querySelector(".user-dropdown"),userName:document.querySelector(".user-bar__name"),navLinks:document.querySelectorAll(".nav-link, .nav-btn-link"),navList:document.querySelector(".nav-list"),menuUserName:document.querySelector(".menu__user-name"),menuToggle:document.querySelector(".menu-toggle"),menu:document.querySelector(".menu"),homePage:document.querySelector(".js-home"),shoppingListPage:document.querySelector(".js-shoppig-list"),categoriesList:document.querySelector(".categories__list"),booksList:document.querySelector(".books__list"),backgroundListBook:document.querySelector(".background-list-book"),booksListTitle:document.querySelector(".books__list__title"),listCharitableFoundation:document.querySelector(".foundations__list"),supportSliderBtn:document.querySelector(".support__slider-btn"),bookModal:document.querySelector(".modal"),bookModalBtn:document.querySelector(".js-modal-btn"),bookModalNotification:document.querySelector(".js-modal-notification"),shoppingListContainer:document.querySelector("#dynamic-book-list"),paginationBlock:document.querySelector(".js-pagination"),pageLoader:document.querySelector("#page-loader"),googleBtn:document.querySelector(".btn-google")}}const we={apiKey:"AIzaSyBkW0BAlPxPPdDWzJX-G3zTVZxbnLR71Uc",authDomain:"bfg93-5764f.firebaseapp.com",projectId:"bfg93-5764f",storageBucket:"bfg93-5764f.firebasestorage.app",messagingSenderId:"973743450422",appId:"1:973743450422:web:dd15f931f56f5c3bc12b97",measurementId:"G-ZEZXM3MV58"},X=de(we),L=pe(X),Y=ge(X),Be=new me;async function _e(e,t,o){try{const s=await he(L,e,t);return await Q(s.user,{displayName:o}),s.user}catch(s){const n=s.code;return alert(n==="auth/email-already-in-use"?"Email already in use":n==="auth/invalid-email"?"Invalid email":n==="auth/invalid-credential"?"Неверный email или пароль":s.message),console.error(n,s.message),null}}async function Se(){try{return(await ke(L,Be)).user}catch(e){throw e}}async function Ce(e,t){try{return(await be(L,e,t)).user}catch(o){throw console.error("Ошибка входа:",o.code,o.message),o}}async function ee(){await fe(L)}async function te(e,t){if(!e)return;const o=J(Y,"user",e);await Le(o,{books:t},{merge:!0})}async function $e(e){if(!e)return;const t=J(Y,"user",e),o=await ye(t);return o.exists()?o.data().books||[]:[]}const T="https://books-backend.p.goit.global/",I={category:"books/category-list",topBooks:"books/top-books",certainCategory:"books/category",byId:e=>`books/${e}`},D={method:"GET",headers:{"Content-Type":"application/json"}},C={async getCategories(){const e=await fetch(`${T}${I.category}`,D);if(!e.ok)throw new Error("Failed to fetch Category");return e.json()},async topBooks(){const e=await fetch(`${T}${I.topBooks}`,D);if(!e.ok)throw new Error("Failed to fetch Top books");return e.json()},async certainCategory(e){if(e==="All Categories")return this.topBooks();const o=`category=${encodeURIComponent(e)}`,s=await fetch(`${T}${I.certainCategory}?${o}`);if(!s.ok)throw new Error("Failed to fetch Certain category");return s.json()},async byId(e){const t=await fetch(`${T}${I.byId(e)}`);if(!t.ok)throw new Error("Failed to fetch By id");return t.json()}};async function Me(){const e=h();if(!(!e.backgroundListBook||e.backgroundListBook.children.length>0))try{const o=(await C.topBooks()).filter(({list_name:n,books:i})=>n!==""&&i&&i.length>0).slice(0,12).map(({books:n})=>{const i=n[0];return i?`<li class="menu-background-item"><img src="${i.book_image}" alt="${i.title}" class="menu-img-background" loading="lazy"/></li>`:""}).join("");e.backgroundListBook.innerHTML=o,e.backgroundListBook.querySelectorAll(".menu-background-item").forEach((n,i)=>{setTimeout(()=>{n.classList.add("is-visible")},i*40)})}catch(t){console.error("Error render books to background:",t)}finally{}}let O=!1;function j(e){document.body.style.overflow=e?"hidden":""}const oe=e=>{var s,n,i,r,c,m,d;const t=h();if(!t)return;e?(t.headerSignUpBtn.classList.add("is-hidden"),t.userMenu.classList.remove("is-hidden"),t.userName&&(t.userName.textContent=e),t.menuUserName&&(t.menuUserName.textContent=e),t.navList.classList.remove("is-hidden"),t.menuToggle.classList.remove("is-hidden")):(t.headerSignUpBtn.classList.remove("is-hidden"),t.authBackdrop.classList.add("is-hidden"),t.userMenu.classList.add("is-hidden"),t.menuToggle.classList.add("is-hidden"),t.menuUserName&&(t.menuUserName.textContent=""),t.navList.classList.add("is-hidden")),(s=t.menu)!=null&&s.classList.contains("is-open")&&(t.menu.classList.remove("is-open"),(n=t.menuToggle)==null||n.classList.remove("is-open"),j(!1));const o=window.location.pathname;if((i=t.navLinks)==null||i.forEach(l=>{l.classList.toggle("is-active",o===l.pathname)}),!O){let l=function(){t.authBackdrop.classList.remove("is-hidden")},f=function(){var p,b,y,_;(p=t.userDropdown)==null||p.classList.toggle("is-open"),(b=t.userBar)==null||b.classList.toggle("is-active"),(y=t.userDropdown)!=null&&y.classList.contains("is-open")&&t.menu&&(t.menu.classList.remove("is-open"),(_=t.menuToggle)==null||_.classList.remove("is-open"),j(!1))},v=function(){var b,y,_;(b=t.menuToggle)==null||b.classList.toggle("is-open"),(y=t.menu)==null||y.classList.toggle("is-open");const p=(_=t.menu)==null?void 0:_.classList.contains("is-open");j(p),p&&Me()},w=function(p){t.userBar&&t.userDropdown&&!t.userBar.contains(p.target)&&!t.userDropdown.contains(p.target)&&(t.userDropdown.classList.remove("is-open"),t.userBar.classList.remove("is-active"))};async function B(){var p,b,y;(p=t.menu)!=null&&p.classList.contains("is-open")&&v(),(b=t.userDropdown)==null||b.classList.remove("is-open"),(y=t.userBar)==null||y.classList.remove("is-active")}(r=t.headerSignUpBtn)==null||r.addEventListener("click",l),(c=t.menuToggle)==null||c.addEventListener("click",v),(m=t.userBar)==null||m.addEventListener("click",f),(d=t.fullscreenMenuLogoutBtn)==null||d.addEventListener("click",B),window.addEventListener("click",w),O=!0}},a=h();let q=!1;function G(e){const t=e.target;t===a.authSwitchSignUpBtn?(q=!0,a.authSwitchSignUpBtn.classList.add("is-active"),a.authSwitchSignInBtn.classList.remove("is-active"),a.authSubmitBtn.textContent="Sign up",a.authInputName.style.display="block",a.authInputName.required=!0):t===a.authSwitchSignInBtn&&(q=!1,a.authSwitchSignUpBtn.classList.remove("is-active"),a.authSwitchSignInBtn.classList.add("is-active"),a.authSubmitBtn.textContent="Sign in",a.authInputName.style.display="none",a.authInputName.required=!1)}function E(){a.authForm&&(a.authForm.reset(),a.authBackdrop.classList.add("is-hidden")),q=!1,window.removeEventListener("keydown",ne)}function ne(e){e.code==="Escape"&&E()}function Ee(){a.authBackdrop.classList.remove("is-hidden"),window.addEventListener("keydown",ne)}async function Te(e){var i;e.preventDefault();const t=a.authSubmitBtn.textContent==="Sign up",o=a.authInputEmail.value.trim(),s=a.authInputPassword.value.trim(),n=(i=a.authInputName)==null?void 0:i.value.trim();try{if(t){if(!n){alert("Пожалуйста, введите имя для регистрации");return}if(!await _e(o,s,n))return;a.headerSignUpBtn.classList.add("is-hidden"),alert(`Успешная регистрация ${n}!`),oe(n)}else await Ce(o,s),alert("Успешный вход!");q=!1,E()}catch(r){const c=r.code;alert(c==="auth/email-already-in-use"?"Этот email уже зарегистрирован":c==="auth/invalid-email"?"Некорректный email":c==="auth/invalid-credential"?"Неверный email или пароль":c==="auth/too-many-requests"?"Слишком много попыток. Попробуйте позже.":`Ошибка: ${r.message}`),console.error(c,r.message)}}async function Ie(){try{const e=await Se();if(e){if(console.log("Вход через Google успешен:",e.displayName),!e.displayName){const t=prompt("Введите ваше имя для профиля:");t&&await Q(e,{displayName:t})}E()}}catch(e){console.error("Ошибка Google входа:",e),alert("Не удалось войти через Google. Попробуйте снова.")}}function qe(e){e.target===a.authBackdrop&&E()}a.headerSignUpBtn&&a.headerSignUpBtn.addEventListener("click",Ee);a.authForm&&a.authForm.addEventListener("submit",Te);a.authBackdrop&&a.authBackdrop.addEventListener("click",qe);a.authCloseBtn&&a.authCloseBtn.addEventListener("click",E);a.fullscreenMenuLogoutBtn&&a.fullscreenMenuLogoutBtn.addEventListener("click",ee);a.logoutBtn&&a.logoutBtn.addEventListener("click",ee);a.googleBtn&&a.googleBtn.addEventListener("click",Ie);a.authSwitchSignUpBtn&&a.authSwitchSignInBtn&&(a.authSwitchSignUpBtn.addEventListener("click",G),a.authSwitchSignInBtn.addEventListener("click",G));function A(e){if(!e)return;const o=Array.from(document.querySelectorAll(".categories__link")).find(s=>s.textContent.trim()===e.trim());if(o){const s=document.querySelector(".categories__link.is-active");s&&s.classList.remove("is-active"),o.classList.add("is-active"),o.scrollIntoView({block:"nearest",behavior:"smooth"})}}const W=(e,t,o,s)=>`<li class="books__item">
              <article class="book-card">
                <div class="card__cover">
                  <img src="${e}" alt="${t}" class="book-card__image js-book-image" data-id="${s}" />
                 <div class="quick-view-overlay">
        <p class="quick-view-text">Quick View</p>
      </div>
                  </div>
                <div class="card__info">
                <h3 class="card__title">${t}</h3>
                  <p class="card__author">${o}</p>
                  </div>
                </article>
                </li>`,Pe=(e,t)=>`<li class="top-books__category">
      <h3 class="top-books__title">${e}</h3>
      <ul class="top-books__list">
        ${t}
      </ul>
      <button type="button" class="book__btn" data-category="${e}">
       <span class="button-text">see more</span> 
      </button>
    </li>`;function R(e){const t=e.trim().split(" "),o=t.pop();return`${t.join(" ")} <span class="title-accent">${o}</span>`}function je(){const e=window.innerWidth;return e>=1439?5:e>=767?3:1}async function U(e){const t=h();if(t.booksList)if(!e||e==="All Categories"){e="All Categories",t.booksListTitle.innerHTML=R("Best Sellers Books");try{t.booksList.innerHTML="";const s=(await C.topBooks()).filter(({list_name:n,books:i})=>n!==""&&i&&i.length>0).map(({list_name:n,books:i})=>{const c=i.slice(0,je()).map(({book_image:m,title:d,author:l,_id:f})=>W(m,d,l,f)).join("");return Pe(n,c)}).join("");t.booksList.insertAdjacentHTML("beforeend",s)}catch{}finally{}return}else try{t.booksList.innerHTML="";const o=await C.certainCategory(e);if(o.length===0)return;const n=o.map(({book_image:i,title:r,author:c,_id:m})=>W(i,r,c,m)).join("");t.booksListTitle.textContent=e,t.booksListTitle.innerHTML=R(e),t.booksList.insertAdjacentHTML("beforeend",n)}catch{}}async function Ae(e){const t=e.target.closest(".categories__link");if(!t)return;const o=t.textContent.trim();A(o),await U(o)}const Ue=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"./images/save-children.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"./images/project-hope.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"./images/med-corps.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"./images/razom.png"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"./images/action-hunger.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"./images/prytula.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"./images/united24.png"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"./images/world-vision.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"./images/msf.png"}];async function se(){const e=h();if(e.listCharitableFoundation)try{const t=Ue.map(({title:o,url:s,img:n},i)=>`<li class="foundations__item">
          <span class="foundations__number">${String(i+1).padStart(2,"0")}</span>
          <a class="foundations__link" href="${s}" target="_blank" rel="noopener noreferrer">
            <img class="foundations__logo" src="${n}" alt="${o}" loading="lazy">
          </a>
        </li>`).join("");e.listCharitableFoundation.innerHTML="",e.listCharitableFoundation.insertAdjacentHTML("afterbegin",t),e.supportSliderBtn&&e.supportSliderBtn.addEventListener("click",()=>{e.listCharitableFoundation.scrollTop+e.listCharitableFoundation.clientHeight>=e.listCharitableFoundation.scrollHeight-5?e.listCharitableFoundation.scrollTo({top:0,behavior:"smooth"}):e.listCharitableFoundation.scrollBy({top:52,behavior:"smooth"})})}catch(t){console.error("Charitable fundations error:",t)}finally{}}async function Ne(){const e=h(),t=`<li class="categories__item">
          <button class="categories__link is-active" type="button">All Categories</button>
        </li>`;if(e.categoriesList)try{const s=(await C.getCategories()).filter(({list_name:n})=>n).map(({list_name:n})=>`<li class="categories__item">
        <button class="categories__link" type='button'>${n}</button>         
        </li>`).join("");e.categoriesList.innerHTML="",e.categoriesList.insertAdjacentHTML("afterbegin",t),e.categoriesList.insertAdjacentHTML("beforeend",s)}catch(o){console.error("Error categories list",o)}}const xe="/project-BFG93/assets/sprite-xxUWb4nW.svg";function He(e,t,o){const{_id:s,book_image:n,title:i,author:r,description:c,buy_links:m}=e,d=m.filter(({name:v})=>{const w=v.toLowerCase();return w.includes("amazon")||w.includes("apple")}).map(({name:v,url:w})=>{let B=v.toLowerCase().replace(/&/g,"").replace(/[\s-]+/g,"-").trim();return`
         <a href="${w}" target="_blank" rel="noopener noreferrer" class="modal__shop-link ${B}">
          <img src="./img/${B}.png" alt="${B}" class="shop-link-img ${B}"><span class="visually-hidden"></span>
        </a>
      `}).join("");let l="ADD TO SHOPPING LIST",f="visually-hidden";return o?t&&(l="REMOVE FROM THE SHOPPING LIST",f=""):l="LOG IN TO ADD TO SHOPPING LIST",`
    <div class="modal__book-container">

  <button type="button" class="modal__close-btn" data-modal-close>
    <svg class="modal__close-icon" width="12" height="12">
      <use href="${xe}#cross"></use>
    </svg>
  </button>

  <article class="modal__book-card" data-id="${s}">

    <div class="modal__card-cover">
      <img src="${n}" alt="${i}" class="modal__card-image" />
    </div>

    <div class="modal__card-info">
      <h3 class="modal__card-title">${i}</h3>
      <p class="modal__card-author">${r}</p>
      
      <p class="modal__card-description">
        ${c||"No description available."}
      </p>

      <div class="modal__where-to-buy">${d}</div>
    </div>

  </article>
  
  <div class="modal__action-box">
    <button type="button" class="modal__action-btn js-modal-btn" data-id="${s}">
      ${l}
    </button>

    <p class="modal__notification js-modal-notification ${f}">
      Congratulations! You have added the book to the shopping list. To
      delete, press the button "Remove from the shopping list".
    </p>
    
  </div>
</div>
  `}function Fe(){const e=window.innerWidth,t=window.innerHeight;return{width:e,height:t}}let g=[],N=1,$=3,M=null;function De(){const{width:e}=Fe();e<768?$=4:$=3}function z(e){M=e}async function Oe(){return M?(g=await $e(M),g):[]}function Ge(){return[...g]}function x(e){return g.some(t=>t._id===e)}async function We(e){x(e._id)||(g.push(e),await te(M,g))}async function ie(e){g=g.filter(t=>t._id!==e),await te(M,g)}function H(){return N}function ae(e){N=e}function Re(){const e=(N-1)*$;return g.slice(e,e+$)}function re(){return Math.ceil(g.length/$)||1}const k=h();let S=null;function ce(e){const t=e.target===k.bookModal,o=e.target.closest(".modal__close-btn")||e.target.closest("[data-modal-close]"),s=e.target.closest(".js-modal-btn");if(t||o){le();return}s&&ze()}async function ze(){if(!L.currentUser||!S)return;const e=S._id,t=x(e);t?await ie(e):await We(S),Ve(!t)}function Ve(e){const t=k.bookModal.querySelector(".js-modal-btn"),o=k.bookModal.querySelector(".js-modal-notification");t&&(e?(t&&(t.textContent="Remove from shopping list"),o&&(o.style.display="block")):(t&&(t.textContent="Add to shopping list"),o&&(o.style.display="none")))}function Ke(){k.bookModal.classList.remove("is-hidden"),document.body.classList.add("no-scroll"),window.addEventListener("keydown",ue),k.bookModal.addEventListener("click",ce),document.body.style.overflow="hidden"}function le(){k.bookModal.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),window.removeEventListener("keydown",ue),k.bookModal.removeEventListener("click",ce),S=null,document.body.style.overflow=""}function ue(e){e.code==="Escape"&&le()}async function Ze(e){if(e.target.classList.contains("js-book-image"))try{const t=e.target.dataset.id,o=await C.byId(t);S=o;const s=!!L.currentUser,n=x(o._id),i=He(o,n,s);k.bookModal.innerHTML="",k.bookModal.insertAdjacentHTML("beforeend",i),Ke()}catch(t){console.error("Ошибка при открытии модалки книги:",t)}}const P=h();P.categoriesList&&P.categoriesList.addEventListener("click",Ae);P.booksList&&P.booksList.addEventListener("click",Ze);async function Qe(){await Promise.all([Ne(),se(),U("All Categories")])}function Je(e){const{_id:t,book_image:o,title:s,author:n,description:i,buy_links:r,list_name:c}=e,m=r.filter(({name:d})=>{const l=d.toLowerCase();return l.includes("amazon")||l.includes("apple")}).map(({name:d,url:l})=>{const f=d.toLowerCase().replace(/[\s-]+/g,"-").trim();return`
        <a href="${l}" target="_blank" rel="noopener noreferrer" class="modal__shop-link ${f}">
          <img src="./img/${f}.png" alt="${d}" class="shop-link-img ${f}">
          <span class="visually-hidden">${d}</span>
        </a>
      `}).join("");return`
  <li class="book-card" data-id="${t}">
    <img src="${o}" alt="${s} book cover" class="book-cover" />

    <div class="book-info">
      <h2 class="book-title">${s}</h2>
      <p class="book-genre">${c}</p>
      <p class="book-description">${i}</p>
      <p class="book-author">${n}</p>

      <div class="modal__where-to-buy">${m}</div>
    </div>

    <button
      class="delete-btn js-delete-btn" 
      data-id="${t}"      
      aria-label="Remove from list"
    >
      <svg class="nav-logo-icon" width="24" height="24">
        <use href="./img/sprite.svg#dump"></use>
      </svg>
    </button>
  </li>`}function Xe(e){return!e||e.length===0?"":e.map(t=>Je(t)).join("")}function Ye(e,t,o){const s=t===1,n=t===o,i=`   
   
   <button class="pagination__btn js-pag-first" data-page="first" type="button" ${s?"disabled":""}>
  &laquo;
</button>
<button class="pagination__btn js-pag-prev" data-page="prev" type="button" ${s?"disabled":""}>
  &lsaquo;
</button>

<div class="pagination__pages js-pag-pages">${t} of ${o}</div>

<button class="pagination__btn js-pag-next" data-page="next" type="button" ${n?"disabled":""}>
  &rsaquo;
</button>
<button class="pagination__btn js-pag-last" data-page="last" type="button" ${n?"disabled":""}>
  &raquo;
</button>`;e.innerHTML=i}function et(){return`
<li class="shopping-list-default">
  <p class="list-default-info">
    This page is empty, add some books and proceed to order.
  </p>
  <span class="card-list-default">
    <img src="../../../img/empty-book-list.png" alt="img books list empety">

  </span>
  </li> `}const u=h();async function F(){if(De(),Ge().length===0){u.shoppingListContainer.innerHTML=et(),u.paginationBlock&&(u.paginationBlock.innerHTML="");return}const t=re();H()>t&&ae(t);const o=Re();u.shoppingListContainer.innerHTML=Xe(o),tt(t),ot()}function tt(e){if(u.paginationBlock){if(e<=1){u.paginationBlock.innerHTML="",u.paginationBlock.classList.add("visually-hidden");return}u.paginationBlock.classList.remove("visually-hidden"),Ye(u.paginationBlock,H(),e)}}function ot(){u.shoppingListContainer.removeEventListener("click",V),u.shoppingListContainer.addEventListener("click",V),u.paginationBlock&&(u.paginationBlock.removeEventListener("click",K),u.paginationBlock.addEventListener("click",K))}async function V(e){const t=e.target.closest(".js-delete-btn");if(!t)return;const o=t.dataset.id;o&&(await ie(o),F())}function K(e){const t=e.target.closest(".pagination__btn");if(!t||t.hasAttribute("disabled"))return;const o=t.dataset.page,s=re(),n=H();let i=n;o==="first"&&(i=1),o==="prev"&&n>1&&(i=n-1),o==="next"&&n<s&&(i=n+1),o==="last"&&(i=s),i!==n&&(ae(i),F())}async function Z(e){const t=e.target.closest(".book__btn");if(t){const s=t.dataset.category;try{A(s),await U(s)}catch(n){console.error("Ошибка при загрузке категории:",n)}return}const o=e.target.closest("book-card");if(o){const s=o.dataset.bookId;s&&await openBookModal(s)}}document.addEventListener("DOMContentLoaded",()=>{const e=h();e&&ve(L,async t=>{var n,i;const o=t?t.displayName:null,s=t?t.uid:null;(n=e.pageLoader)==null||n.classList.remove("is-hidden");try{if(t)z(s),await Oe(),e.navHomeLink&&e.navHomeLink.classList.remove("is-hidden"),e.navShoppingLink&&e.navShoppingLink.classList.remove("is-hidden");else if(z(null),e.navHomeLink&&e.navHomeLink.classList.add("is-hidden"),e.navShoppingLink&&e.navShoppingLink.classList.add("is-hidden"),e.menu.classList.contains("is-open")&&e.menu.classList.remove("is-open"),e.shoppingListPage){window.location.href="./index.html";return}oe(o),A(o),e.homePage?(Qe(o),e.booksList&&(e.booksList.removeEventListener("click",Z),e.booksList.addEventListener("click",Z))):e.shoppingListPage&&t&&(await se(o),await F(o))}catch(r){console.error("Ошибка при загрузке данных приложения:",r)}finally{(i=e.pageLoader)==null||i.classList.add("is-hidden")}})});
//# sourceMappingURL=main-CoFz8VRM.js.map
