import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Services from '../views/Services.vue';
import Tarif from '../views/Tarif.vue';
import Apropos from '../views/Apropos.vue';
import Contact from '../views/Contact.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/services',
		name: 'Services',
		component: Services,
	},
	{
		path: '/tarif',
		name: 'Tarif',
		component: Tarif,
	},
	{
		path: '/a-propos',
		name: 'Apropos',
		component: Apropos,
	},
	{
		path: '/contact',
		name: 'Contact',
		component: Contact,
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
