const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'typography', component: () => import('pages/Typography.vue') },
      { path: 'colors', component: () => import('pages/Colors.vue') },
      { path: 'spacing', component: () => import('pages/Spacing.vue') },
      { path: 'breakpoints', component: () => import('pages/Breakpoints.vue') },
      { path: 'flex-grid-1', component: () => import('pages/FlexGird1.vue') },
      { path: 'flex-grid-2', component: () => import('pages/FlexGird2.vue') },
      {
        path: 'classes-variables',
        component: () => import('pages/Classes-variables.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
