import module1 from "./modules/module1";
import module2 from "./modules/module2";

export default [
    { path: '/', component: '@/pages/index' },
    ...module1,
    ...module2
]