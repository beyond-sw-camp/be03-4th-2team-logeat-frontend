import { createRouter, createWebHistory } from 'vue-router';
import HeaderComponent from '../components/HeaderComponent';
import LoginComponent from '../components/LoginComponent'
import SignupComponent from '../components/SignupComponent'
import ModalLoginComponent from '../components/ModalLoginComponent'
import ModalSignupComponent from '../components/ModalSignupComponent'
import ModalComponent from '../components/ModalComponent'
import NotLoginMainComponent from '../components/NotLoginMainComponent'
import MypageComponent from '../components/MypageComponent.vue'
import PostCreate from '../components/PostCreate'
import LatestPostComponent from '../components/LatestPostComponent'
import WeeklyLikeComponent from '../components/WeeklyLikeComponent.vue'
import MonthlylikeComponent from '../components/MonthlylikeComponent.vue'
import MyPostComponent from '../components/MyPostComponent.vue'
import PostDetail from '../components/PostDetail'
import LeftSectionComponent from '../components/LeftSectionComponent'
import CenterSectionComponent from '../components/CenterSectionComponent'
import MyFollowingComponent from '../components/MyFollowingComponent'
import MyFollowerComponent from '../components/MyFollowerComponent'



const routes = [
    { path: '/', redirect: '/main', },
    { path: '/header', component: HeaderComponent, },
    { path: '/login', component: LoginComponent, },
    { path: '/signup', component: SignupComponent, },
    { path: '/modallogin', component: ModalLoginComponent, },
    { path: '/modalsignup', component: ModalSignupComponent, },
    { path: '/modal', component: ModalComponent, },
    { path: '/main', component: NotLoginMainComponent, },
    { path: '/mypage', component: MypageComponent },
    { path: '/post/create', component: PostCreate, },
    { path: '/left', component: LeftSectionComponent, },
    { path: '/center', component: CenterSectionComponent, },
    { path: '/post/following/latest-post', component: LatestPostComponent, },
    { path: '/post/like/weeks', component: WeeklyLikeComponent, },
    { path: '/post/like/month', component: MonthlylikeComponent, },
    { path: '/post/mypost', component: MyPostComponent, },
    { path: '/post/:id/detail', component: PostDetail,  props: true },
    { path: '/user/myfollower', component: MyFollowerComponent,  props: true },
    { path: '/user/myfollowing', component: MyFollowingComponent,  props: true },
  ];
  
  export default createRouter({
    history: createWebHistory(),
    routes,
  });