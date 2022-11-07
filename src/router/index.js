import {createRouter,createWebHistory} from 'vue-router'



let defaultRoutes=[

    {path: '/', name: 'getfile',
        component: () => import('../views/getPackageJson/index'),
    },
]
let rolesRouter=[

]

const mycreateRouter=()=>{
    return  createRouter({
        scrollBehavior: () => ({x: 0, y: 0}),
        routes:defaultRoutes,
        history:createWebHistory(),

        fallback:false,
    })
}
const router = mycreateRouter();

export function resetRouter() {
    const newRouter = createRouter();
    router.matcher = newRouter.matcher;
}
export default router
