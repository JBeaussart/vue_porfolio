import { createRouter, createWebHashHistory } from 'vue-router';
import Services from '../views/Services.vue';
import Competence from '../views/Competence.vue';
import Acceuil from '../views/Acceuil.vue';
import Portfolio from '../views/Portfolio.vue';
import Tarif from '../views/Tarif.vue';
import Apropos from '../views/Apropos.vue';
import Contact from '../views/Contact.vue';

const routes = [
	{
		path: '/',
		name: 'Acceuil',
		component: Acceuil,
	},
	{
		path: '/Services',
		name: 'Services',
		component: Services,
	},
	{
		path: '/Competence',
		name: 'Competence',
		component: Competence,
	},
	{
		path: '/Portfolio',
		name: 'Portfolio',
		component: Portfolio,
	},
	{
		path: '/Tarif',
		name: 'Tarif',
		component: Tarif,
	},
	{
		path: '/Apropos',
		name: 'Apropos',
		component: Apropos,
	},
	{
		path: '/Contact',
		name: 'Contact',
		component: Contact,
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
