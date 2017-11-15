import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Result from '@/components/Result';

Vue.use(Router);

function dynamicPropsFn(route) {
  return {
    workbookData: route.params.dataInJson,
  };
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/result',
      name: 'Result',
      component: Result,
      props: dynamicPropsFn,
    },
  ],
});
