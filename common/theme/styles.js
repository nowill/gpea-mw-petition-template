const styles = {
	global: {
		'html, #__next': {
			height: '100%'
		},
		'#__next': {
			display: 'flex',
			flexDirection: 'column'
		},
		'.body': {
			// todo check how to do this without breaking the site
			// height: '100%', // Push footer to bottom
			overflowY: 'scroll' // Always show scrollbar to avoid flickering
		},
		html: {
			scrollBehavior: 'smooth'
		},
		'#nprogress': {
			pointerEvents: 'none'
		},
		'#nprogress .bar': {
			background: 'brand.400',
			position: 'fixed',
			zIndex: '1031',
			top: 0,
			left: 0,
			width: '100%',
			height: '2px'
		},
		'#nprogress .spinner': {
			display: 'none'
		},
		'.swiper-pagination-bullet-active': {
			background: 'brand.500'
		},
		'.strapi-content h2': {
			lineHeight: 1.2,
			mb: 6,
			fontSize: { base: 'xl', md: '2xl' },
			fontWeight: 'bold'
		},
		'.strapi-content h3': {
			lineHeight: 1.2,
			mb: 6,
			fontSize: { base: 'lg', md: 'xl' },
			fontWeight: 'bold'
		},
		'.strapi-content p': {
			lineHeight: 1.7,
			mb: 6,
			fontSize: { base: '16px' },
			whiteSpace: 'pre-line',
			textAlign: 'justify'
		}
	}
};

export default styles;
