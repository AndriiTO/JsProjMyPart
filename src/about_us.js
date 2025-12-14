import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.about-swiper', {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  loop: false,
  spaceBetween: 0,

  navigation: {
    nextEl: '.next-btn',
    prevEl: '.prev-btn',
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 1,
  },
}); 