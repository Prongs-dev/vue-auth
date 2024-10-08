// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import VerifyEmail from '../views/VerifyEmail.vue';
import HomeView from '../views/HomeView.vue';

const routes = [
    {path: '/', component: HomeView},
    { path: '/login', component: LoginView },
    { path: '/register', component: RegisterView },
    { path: '/verify', component: VerifyEmail },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
