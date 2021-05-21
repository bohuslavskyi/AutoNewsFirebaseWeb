import { hot } from 'react-hot-loader/root';
import React from 'react';

// const Name = React.lazy(() => import('./path'));

const root = () => {
	return (
		<div>
			<div className="body">
				{/*<Name/>*/}
				New App
			</div>
		</div>
	);
};

export default hot(root);
