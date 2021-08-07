import Home from "../components/ui/Home";
import SignIn from "../components/ui/SignIn";
import SignUp from "../components/ui/SignUp";
import Recipe from "../components/ui/Recipe";
import RecipeNew from "../components/ui/RecipeNew";
import RecipeEdit from "../components/ui/RecipeEdit";
import Header from "../components/ui/Header";
import Footer from "../components/ui/footer/Footer";

const pages = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/sign-up',
        component: SignUp,
    },
    {
        path: '/sign-in',
        component: SignIn,
    },
    {
        path: '/recipe/new',
        component: RecipeNew,
    },
    {
        path: '/recipe/:id/edit',
        component: RecipeEdit,
    },
    {
        path: '/recipe/:id',
        component: Recipe,
    },
];

export default pages;