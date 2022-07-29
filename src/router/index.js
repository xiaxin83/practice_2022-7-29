import Vue from "vue";
import VueRouter from "vue-router";
import nprogress from "nprogress";
import "nprogress/nprogress.css";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/login.vue"),
  },

  {
    path: "/layout",
    name: "layout",
    component: () => import("@/views/layout"),
    meta: {
      requireAuth: true,
    },
    children: [
      {
        path: "/layout/data",
        name: "data",
        redirect: "/layout/data",
        component: () => import("@/views/statistics/Stand"),
        meta: {
          title: "首页",
          icon: "el-icon-upload",
          requireAuth: true,
        },
        children: [
          {
            path: "/layout/data/tag",
            name: "tag",
            component: () => import("@/views/statistics/Tag"),
            meta: {
              title: "分析",
              requireAuth: true,
            },
          },
          {
            path: "/layout/button",
            name: "button",
            component: () => import("@/views/statistics/StandardList"),
            meta: {
              title: "标准列表",
              requireAuth: true,
            },
          },
        ],
      },
      {
        path: "/layout/form",
        redirect: "/layout/form",
        name: "form",
        component: () => import("@/views/form/Common"),
        meta: {
          title: "表单",
          icon: "el-icon-eleme",
          requireAuth: true,
        },
        children: [
          {
            path: "/layout/form/alidate",
            name: "validate",
            component: () => import("@/views/form/Validate"),
            meta: {
              title: "基础表单",
              requireAuth: true,
            },
            children: [
              {
                path: "/layout/form/alidate1",
                name: "validate1",
                component: () => import("@/views/form/Validate"),
                meta: {
                  title: "基础表单1",
                  requireAuth: true,
                },
              },
            ],
          },
          {
            path: "/layout/form/highform",
            name: "highform",
            component: () => import("@/views/form/highForm"),
            meta: {
              title: "高级表单",
              requireAuth: true,
            },
          },
        ],
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// 全局前置守卫
router.beforeEach((to, _from, next) => {
  nprogress.start();

  const { auth } = to.meta;
  if (auth && !localStorage.getItem("token")) return next("/login");
  next();

  nprogress.done(); //关闭进度条
});

export default router;
