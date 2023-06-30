import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBinding from '../views/DataBinding.vue'
import DataBindingText from '../views/DataBindingText.vue'
import DataBindingInputNumber from '../views/DataBindingInputNumber.vue'
import DataBindingTextarea from '../views/DataBindingTextarea'
import DataBindingSelect from '../views/DataBindingSelect'
import DataBindingCheckbox from '../views/DataBindingCheckbox'
import DataBindingCheckbox2 from '../views/DataBindingCheckbox2'
import DataBindingRadio from '../views/DataBindingRadio'
import DataBindingAttribue from '../views/DataBindingAttribue'
import DataBindingButton from '../views/DataBindingButton'
import DataBindingClass from '../views/DataBindingClass'
import DataBindingClass2 from '../views/DataBindingClass2'
import DataBindingStyle from '../views/DataBindingStyle'
import DataBindingStyle2 from '../views/DataBindingStyle2'
import DataBindingList from '../views/DataBindingList'
import DataBindingList2 from '../views/DataBindingList2'
import RenderingVIf from '../views/RenderingVIf'
import EventClick from '../views/EventClick'
import EventChange from '../views/EventChange'
import NestedComponent from '../views/NestedComponent'
import ParentComponent from '../views/ParentComponent'
import ParentComponent2 from '../views/ParentComponent2'
import ParentComponent3 from '../views/ParentComponent3'
import TestPage from '../views/TestPage'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/databinding',
    name: 'DataBinding',
    component: DataBinding
  },
  {
    path: '/databindingtext',
    name: 'DataBindingText',
    component: DataBindingText
  },
  {
    path: '/databindinginputnumber',
    name: 'DataBindingTextInputNumber',
    component: DataBindingInputNumber
  },
  {
    path: '/databindingtextarea',
    name: 'DataBindingTextarea',
    component: DataBindingTextarea
  },
  {
    path: '/databindingselect',
    name: 'DataBindingSelect',
    component: DataBindingSelect
  },
  {
    path: '/databindingcheckbox',
    name: 'DataBindingCheckbox',
    component: DataBindingCheckbox
  },
  {
    path: '/databindingcheckbox2',
    name: 'DataBindingCheckbox2',
    component: DataBindingCheckbox2
  },
  {
    path: '/databindingradio',
    name: 'DataBindingRadio',
    component: DataBindingRadio
  },
  {
    path: '/databindingattribue',
    name: 'DataBindingAttribue',
    component: DataBindingAttribue
  },
  {
    path: '/databindingbutton',
    name: 'DataBindingButton',
    component: DataBindingButton
  },
  {
    path: '/databindingclass',
    name : 'DataBindingClass',
    component: DataBindingClass
  },
  {
    path: '/databindingclass2',
    name : 'DataBindingClass2',
    component: DataBindingClass2
  },
  {
    path: '/databindingstyle',
    name: 'DataBindingStyle',
    component: DataBindingStyle
  },
  {
    path: '/databindingstyle2',
    name: 'DataBindingStyle2',
    component: DataBindingStyle2
  },
  {
    path: '/databindinglist',
    name: 'DataBindingList',
    component: DataBindingList
  },
  {
    path: '/databindinglist2',
    name: 'DataBindingList2',
    component: DataBindingList2
  },
  {
    path: '/renderingvif',
    name: 'RenderingVIf',
    component: RenderingVIf
  },
  {
    path: '/eventclick',
    name: 'EventClick',
    component: EventClick
  },
  {
    path: '/eventchange',
    name: 'EventChange',
    component: EventChange
  },
  {
    path: '/nestedcomponent',
    name: 'NestedComponent',
    component: NestedComponent
  },
  {
    path: '/parentcomponent',
    name: 'ParentComponent',
    component: ParentComponent
  },
  {
    path: '/parentcomponent2',
    name: 'ParentComponent2',
    component: ParentComponent2
  },
  {
    path: '/parentcomponent3',
    name: 'ParentComponent3',
    component: ParentComponent3
  },
  {
    path: '/testpage',
    name: 'TestPage',
    component: TestPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
