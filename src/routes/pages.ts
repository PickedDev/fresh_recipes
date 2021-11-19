import { Home } from '../pages/Home/Home';
import { SignIn } from '../pages/SignIn/SignIn';
import { SignUp } from '../pages/SignUp/SignUp';
import { Recipe } from '../pages/Recipe/Recipe';
import { RecipeNew } from '../pages/RecipeNew';
import { RecipeEdit } from '../pages/RecipeEdit';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/footer/Footer';

/*
    TO DO
    1. Update imports
*/

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
