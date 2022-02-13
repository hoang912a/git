
const router = [
    { path: "/*", component: <Home /> },
    { path: "/home", component: <Home /> },
    { path: "/about", component: <About /> },
    { path: "/shop", component: <Shop /> },
    { path: "/feature", component: <Features /> },
    { path: "/blog", component: <Blog /> },
    { path: "/blog/:id", component: <BlogDetail /> },
    { path: "/contact", component: <Contact /> },
    { path: "/order", component: <Order /> },
    { path: "/order/:id", component: <OrderDetail /> },
    { path: "/shopdetail/:id", component: <ShopDetail /> },
  ];
  
  export default router;