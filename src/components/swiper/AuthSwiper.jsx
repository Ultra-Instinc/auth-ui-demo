import React, { useEffect } from "react";

import IMAGE1 from "/authSwiper/1.jpg";
import IMAGE2 from "/authSwiper/2.jpg";
import IMAGE3 from "/authSwiper/3.jpg";

const swipeData = [
	{ key: 1, img: IMAGE1 },
	{ key: 2, img: IMAGE2 },
	{ key: 3, img: IMAGE3 },
];

export default function AuthSwiper({ swiperState, setSwiperState }) {
	useEffect(() => {
		setTimeout(() => {
			if (swiperState === 2) {
				setSwiperState(0);
				return;
			}
			if (swiperState < 2) {
				setSwiperState((prev) => prev + 1);
			}
		}, 7000);
	}, [swiperState]);
	return (
		<div
			style={{ transform: `translateX(${swiperState * -100}%)` }}
			className='flex transition-all duration-700 h-full w-[300%]'>
			{swipeData?.map((item) => (
				<img
					key={item.key}
					src={item.img}
					width={"100%"}
					height={"100%"}
					className='object-contain'
				/>
			))}
		</div>
	);
}
