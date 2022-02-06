import {
  faHome,
  faBookmark,
  faShoppingCart,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

export default [
  {
    id: 1,
    icon: faHome,
    name: '홈',
    url: '/',
  },
  {
    id: 2,
    icon: faBookmark,
    name: '찜 목록',
    url: '/wish',
  },
  {
    id: 3,
    icon: faShoppingCart,
    name: '장바구니',
    url: '/cart',
  },
  {
    id: 4,
    icon: faUser,
    name: '마이 페이지',
    url: '/info',
  },
];
