import React from 'react';
import Layout from './Layout.jsx';
import PageContent from './PageContent.jsx';
import './global.css';

const Index = (props) => {
	return (
		<Layout title={props.title}>
			<PageContent page={props.page} data={props.data} />
		</Layout>
	);
}

export default Index;
