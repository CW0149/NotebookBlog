import React from 'react';
import siteConfig from 'config/site'

function Qcode(props) {
	return (
		<div className="comp-qcode">
			<img
			  src={siteConfig.qCode.url}
			  alt={siteConfig.qCode.alt}
			  className="comp-qcode-img"
			  title={siteConfig.qCode.title}
			/>
		</div>
	)
}

export default Qcode
