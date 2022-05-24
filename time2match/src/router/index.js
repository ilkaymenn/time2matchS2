import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import TerrainsView from '../views/TerrainsView.vue'
import PartiesView from '../views/PartiesView.vue'
import SportsView from '../views/SportsView.vue'
import PartenairesView from '../views/PartenairesView.vue'
import aProposView from '../views/aProposView.vue'
import MentionsLegalesView from '../views/MentionsLegalesView.vue'
import PageCoView from '../views/PageCoView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'AccueilView', component: AccueilView },
    { path: '/terrains', name: 'TerrainsView', component: TerrainsView },
    { path: '/parties', name: 'PartiesView', component: PartiesView },
    { path: '/sports', name: 'SportsView', component: SportsView },
    { path: '/partenaires', name: 'PartenairesView', component: PartenairesView },
    { path: '/apropos', name: 'aProposView', component: aProposView },
    { path: '/mentionslegales', name: 'MentionsLegalesViewt', component: MentionsLegalesView },
    { path: '/pageco', name: 'PageCoView', component: PageCoView },
  ]
})

export default router
