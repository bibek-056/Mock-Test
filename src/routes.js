import { createWebHashHistory, createRouter } from "vue-router";
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Dashboard from './pages/Dashboard';
import RegistrationPage from './pages/RegistrationPage'
import DocSubmit from './pages/DocSubmit';
import Navbar from './components/Navbar';
import Card from './components/Card';
import InfoForm from './components/InfoForm';
import DocForm from './components/DocForm';

const routes = [
    {
        name: 'Login',
        path: '/',
        component: LoginPage
    },
    {
        name: 'SignUp',
        path: '/signup',
        component: SignupPage
    },
    {
        name:'Dashboard',
        path: '/dashboard',
        components: {
            default: Dashboard,
            navbar: Navbar,
            card: Card
        }
    },
    {
        name:'registration',
        path: '/registration',
        components: {
            default: RegistrationPage,
            navbar: Navbar,
            infoForm: InfoForm 
        }
    },
    {
        name:'docsubmit',
        path: '/registration/docsubmit',
        components: {
            default: DocSubmit,
            navbar: Navbar,
            docForm: DocForm 
        }
    }

];

const router=createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;