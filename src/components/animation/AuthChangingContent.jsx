import React from "react";
const changingContent = [
	{
		key: 1,
		header: "متابعة التقارير",
		content: "اسأل و تابع مع المزيد من أنواع مختلفة من التقارير",
	},
	{
		key: 2,
		header: "تتبع التنبيهات",
		content:
			"يمكنك متابعة التنبيهات و مدى أهميتها للتأكد من اتخاذ القرار الصحيح",
	},
	{
		key: 3,
		header: "رؤية السوق",
		content:
			"و NIC MAP أطلق العنان لقوة معدل VisionLTC بيانات اللإشغال داخل بوابة",
	},
];
const AuthChangingContent = ({ swiperState }) => {
	return (
		<div className='relative w-full  flex items-center justify-center h-full'>
			{changingContent.map((item, index) => (
				<div
					className='absolute flex justify-center items-start w-[65%] mx-auto  h-full p-[40px]'
					key={item.key}>
					<div className={`flex flex-col `}>
						<span
							className={`text-lightBlue font-bold text-[18px] mx-auto mb-[5px] justify-start h-[36px] ${
								index === swiperState ? "opacity-100" : "opacity-0"
							} transition-all duration-1000`}>
							{item.header}
						</span>
						<span
							className={`text-darkHeader2 h-[104px] text-[30px] mb-[35px] text-center font-bold ${
								index === swiperState ? "opacity-100" : "opacity-0"
							} transition-all duration-1000`}>
							{item.content}
						</span>
						<div className='cursor-pointer w-1/2 rounded-3xl h-[50px]  bg-greenBtn text-white flex items-center justify-center mx-auto mb-[7vh]'>
							المزيد
						</div>
						<div className='w-full flex items-center justify-center'>
							<div className='flex h-[12px] w-[56px] justify-between items-center'>
								{Array(3)
									.fill(0)
									.map((_, i) => (
										<span
											key={i}
											className={`size-3 rounded-full transition-all cursor-pointer duration-1000 ${
												i === swiperState ? "bg-lightBlue" : "bg-lightBlue/10"
											}`}></span>
									))}
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default AuthChangingContent;
