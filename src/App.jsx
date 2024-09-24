import { useState } from "react";
import Login from "./pages/auth/login/Login";
import SignUp from "./pages/auth/signup/SignUp";

export default function App() {
	const [mode, setMode] = useState('login')
	return (
		<div className="h-screen w-screen relative">
			<div className="absolute flex items-center justify-center left-3 top-3 gap-4">
				<div className={`px-4 py-2 cursor-pointer rounded-md ${mode === 'login' ? ' bg-green-300' : 'bg-gray-300'} cursor-pointer z-50 text-white`} onClick={() => setMode('login')}>Login</div>
				<div className={`px-4 py-2 cursor-pointer rounded-md ${mode === 'signup' ? ' bg-green-300' : 'bg-gray-300'} cursor-pointer z-50 text-white`} onClick={() => setMode('signup')}>Signup</div>
			</div>
			{mode === 'login' ? (<Login />) : (<SignUp />)}
		</div>
	)
}
