'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {
	const router = useRouter();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSignIn = (e) => {
		e.preventDefault();
		// Simple validation, in a real app you'd have more robust logic
		if (email && password) {
			router.push('/dashboard');
		} else {
			alert('Please enter email and password');
		}
	};

	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100">
			<div className="w-full max-w-md p-8 space-y-8 bg-white rounded-xl shadow-lg">
				<div className="text-center">
					<h1 className="text-4xl font-extrabold text-black">Connect With Us</h1>
				</div>
				<form className="space-y-6" onSubmit={handleSignIn}>
					<div>
						<input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="Email"
							className="w-full px-4 py-3 text-black placeholder:text-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
							required
						/>
					</div>
					<div>
						<input
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="Password"
							className="w-full px-4 py-3 text-black placeholder:text-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
							required
						/>
					</div>
					<div>
						<button
							type="submit"
							className="w-full py-3 font-semibold text-white bg-black rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
						>
							Sign In
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
