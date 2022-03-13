import './App.css';
import React, { lazy, Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import {
	DASHBOARD,
	LOGIN,
	SIGN_UP,
	PROFILE,
	NOT_FOUND,
} from '../src/constants/routes';

//Components
import Footer from './components/Footer';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const Login = lazy(() => import('./pages/Login'));
const SignUp = lazy(() => import('./pages/SignUp'));
const Profile = lazy(() => import('./pages/Profile'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
	return (
		<Suspense fallback={<p>Loading...</p>}>
			<Routes>
				<Route path={LOGIN} element={<Login />} />
				<Route path={DASHBOARD} element={<Dashboard />} />
				<Route path={SIGN_UP} element={<SignUp />} />
				<Route path={PROFILE} element={<Profile />} />
				<Route path={NOT_FOUND} element={<NotFound />} />
			</Routes>
			<Footer />
		</Suspense>
	);
}

export default App;
