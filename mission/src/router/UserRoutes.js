export default [
  {
    path: '/info',
    name: 'UserInfoPage',
    component: () => import(/* webpackChunkName: "group-user" */ '@/views/UserInfo.vue'),
    meta: { title: '유저 상세 정보 조회' },
  },
];
