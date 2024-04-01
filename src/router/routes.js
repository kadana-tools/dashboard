const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/HomeBase.vue") },
      {
        path: "/Territories",
        component: () => import("pages/YourTerritories.vue"),
      },
      {
        path: "/Warehouse",
        component: () => import("pages/YourWarehouse.vue"),
      },
      { path: "/SOS", component: () => import("pages/SOS.vue") },
      { path: "/WhoAreWe", component: () => import("pages/WhoAreWe.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
