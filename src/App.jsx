import HomeIcon from "./components/icons/HomeIcon";
import { IoMailOutline } from "react-icons/io5";
import AuthSwiper from "./components/swiper/AuthSwiper";
import { useState } from "react";
import AuthChangingContent from "./components/animation/AuthChangingContent";

export default function App() {
	const [swiperState, setSwiperState] = useState(0);
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<div className='w-screen h-screen flex font-sst_bold'>
			<div className='___LEFT_SIDE____  z-10 lg:w-1/2 hidden xl:flex justify-center items-center p-[60px] '>
				<div
					style={{
						background: "url('./auth-small-bg.png')",
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center",
					}}
					className='w-full h-full mx-auto rounded-[50px] flex flex-col overflow-hidden shadow-lg'>
					<div className='h-[55%] w-full   flex items-center justify-center'>
						<AuthSwiper
							swiperState={swiperState}
							setSwiperState={setSwiperState}
						/>
					</div>
					<div className='h-[45%] w-full bg-white flex items-center justify-center'>
						<AuthChangingContent
							swiperState={swiperState}
							setSwiperState={setSwiperState}
						/>
					</div>
				</div>
			</div>
			<div className='relative ___Right_SIDE___ w-full xl:w-1/2 flex justify-center bg-gradient-to-r from-white via-transparent to-transparent  flex-col'>
				<div className='absolute bottom-[25px] w-full flex items-center justify-center'>
					<p>جميع الحقوق محفوظه لدي وزارة البيئة و المياه و الزراعة @2023</p>
				</div>
				<div className='__NAV__ h-[90px] flex items-center justify-end w-[85%]'>
					<HomeIcon />
				</div>
				<div className='flex items-center justify-center h-[calc(100%_-_60px)]'>
					<form
						onSubmit={handleSubmit}
						className='flex flex-col w-full h-full p-6'>
						<div className='h-full mx-auto flex items-end justify-center flex-col  gap-10 lg:w-[55%] w-[65%]'>
							<div className='flex flex-col gap-[10px] justify-end items-end'>
								<h1 className='text-[30px] md:text-[35px] lg:text-[45px] font-semibold text-darkHeader'>
									مستخدم جديد
								</h1>
								<span className='text-darkSubHeader text-[12px] md:text-[14px] lg:text-base'>
									أدخل بريدك اللإلكتروني للتحقق منه
								</span>
							</div>
							<label
								htmlFor='email'
								className='cursor-pointer h-[100px] flex items-center border-2 justify-center w-full rounded-xl py-4 px-2 select-none focus-within:ring focus-within:ring-blue-500 transition-all '>
								<div className='rounded-xl w-full h-full flex items-center'>
									<div className='border-r-2 border-gray-400 pr-6  h-full justify-center w-[85%] flex flex-col relative peer'>
										<input
											type='text'
											className='w-full flex justify-end outline-none text-right peer text-xl h-full cursor-pointer '
											placeholder=' '
											id='email'
										/>
										<label
											htmlFor='email'
											className='cursor-pointer absolute text-lg transition-all -translate-y-6 scale-[85%] top-4 z-10 origin-right right-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[75%] peer-focus:-translate-y-6'>
											البريد اللإلكتروني
										</label>
									</div>
									<div className='flex items-center justify-center text-center w-[15%] peer-focus-within:text-blue-500 transition-all'>
										<IoMailOutline
											size={25}
											className='mx-auto'
										/>
									</div>
								</div>
							</label>
							<button
								type='submit'
								className='min-h-[100px] flex items-center justify-center w-full text-xl text-white rounded-xl bg-blueBtnBG hover:bg-blueBtnHoverBG'>
								تحقق
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
