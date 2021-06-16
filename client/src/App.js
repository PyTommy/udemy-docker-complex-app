import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';
import ErrorBoundary from './ErrorBoundary';

function App() {
	return (
		<ErrorBoundary>
			<Router>
				<div
					style={{
						position: 'absolute',
						top: '30px',
						left: '50%',
						width: '80%',
						height: 'auto',
						border: '1px solid',
						padding: 10,
						transform: 'translate(-50%)',
						display: 'flex',
						justifyContent: 'center',
						justifyItems: 'center',
						flexDirection: 'column',
					}}
				>
					<div style={{ marginBottom: 20 }}>
						<Route exact path="/" component={Fib} />
						<Route path="/otherpage" component={OtherPage} />
					</div>
					<div>
						<ul>
							<li>
								{' '}
								<Link to="/">Home</Link>
							</li>
							<li>
								{' '}
								<Link to="/otherpage">Other Page</Link>
							</li>
						</ul>
					</div>
				</div>
			</Router>
		</ErrorBoundary>
	);
}

export default App;
