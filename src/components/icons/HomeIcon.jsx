import React from "react";
import HOMEICON from "/logo.svg";

const HomeIcon = () => {
	return (
		<img
			src={HOMEICON}
			alt='homeLogo'
			width={240}
			height={60}
			className=' bg-cover'
		/>
	);
};

export default HomeIcon;
