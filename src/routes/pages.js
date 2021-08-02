import Home from "../components/Home";
import SignIn from "../components/user/SignIn";
import SignUp from "../components/user/SignUp";
import Recipe from "../components/Recipe";
import RecipeNew from "../components/RecipeNew";
import RecipeEdit from "../components/RecipeEdit";

const pages = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/sign-up/',
        component: SignUp,
    },
    {
        path: '/sign-in',
        component: SignIn,
    },
    {
        path: '/recipe/:id',
        component: Recipe,
    },
    {
        path: '/recipe/:id/edit',
        component: RecipeEdit,
    },
    {
        path: '/recipe/new',
        component: RecipeNew,
    },
];

export default pages;