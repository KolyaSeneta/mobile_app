window.addEventListener("load",(function(){const e=document.querySelectorAll('[data-slider="team-slider"]');e&&e.forEach((e=>{let t=e.querySelector(".swiper-pagination");swiper=new Swiper(e.querySelector(".swiper"),{speed:1500,centeredSlides:!0,autoplay:{delay:3e3,disableOnInteraction:!1},slidesPerView:1,spaceBetween:20,pagination:{el:t,clickable:!0,renderBullet:function(e,t){return'<li class="'+t+'"></li>'}},on:{transitionStart:function(){let t=this.previousIndex,i=e.getElementsByClassName("swiper-slide")[t];i&&setTimeout((function(){i.classList.remove("is-play")}),1e3)},transitionEnd:function(){let t=this.activeIndex;e.getElementsByClassName("swiper-slide")[t].classList.add("is-play")}}})}))}),!1);
//# sourceMappingURL=index.e14280fc.js.map
