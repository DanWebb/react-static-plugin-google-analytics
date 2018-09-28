import React from 'react';

export default options => {
	if (!options.id) {
		console.log(`The Google Analytics plugin expects a google analytics "id" option to be provided like ['react-static-google-analytics', {id: 'GOOGLE ANALYTICS ID'}]`);
		return;
	}

	const scriptUrl = `https://www.googletagmanager.com/gtag/js?id=${options.id}`
	const gTag = `
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			window.dataLayer.push(arguments);
		}
		gtag('js', new Date());
		gtag('config', '${options.id}');
	`;

	return {
		Head: () => (
			<React.Fragment>
				<script async src={scriptUrl}/>
 				<script dangerouslySetInnerHTML={{__html: gTag}}/>
			</React.Fragment>
		)
	};
};