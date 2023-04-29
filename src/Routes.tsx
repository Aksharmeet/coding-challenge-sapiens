import React, { Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes as Switch, useLocation } from 'react-router-dom'
import Layout from './components/layout'

const HomePage = React.lazy(() => import('./pages/home'))
const Dashboard = React.lazy(() => import('./pages/dashboard'))

function NoMatch() {
	const location = useLocation()

	return (
		<div>
			<h3>Error 404</h3>
			<p>
				No match for <code>{location.pathname}</code>
			</p>
		</div>
	)
}

export default function Routes() {
	return (
		<>
			<BrowserRouter>
				<Layout>
					<Suspense fallback={<code>Loading...</code>}>
						<Switch>
							<Route path='/home' element={<HomePage />} />
							<Route path='/dashboard' element={<Dashboard />} />
							<Route path='*' element={<NoMatch />} />
							<Route path='/' element={<Navigate to='/home' replace />} />
						</Switch>
					</Suspense>
				</Layout>
			</BrowserRouter>
		</>
	)
}
