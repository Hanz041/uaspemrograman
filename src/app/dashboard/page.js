'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { User, Shield, LogOut, Search, Plus, FilePen, Trash2, ExternalLink } from 'lucide-react';

const allUsers = [
	{
		name: 'Rahmat Saudi Al Fathir As',
		email: 'rahmatsaudi@universitasmulia.ac.id',
		roles: ['Admin', 'Employee'],
		status: 'Aktif',
	},
	{
		name: 'Lintang',
		email: 'lintang@universitasmulia.ac.id',
		roles: ['Employee'],
		status: 'Aktif',
	},
	{
		name: 'Shafira',
		email: 'shafira@universitasmulia.ac.id',
		roles: ['Employee'],
		status: 'Aktif',
	},
	{
		name: 'Lebah Ganteng',
		email: 'lebahganteng@universitasmulia.ac.id',
		roles: ['Employee'],
		status: 'Suspended',
	},
	{
		name: 'Budi Doremi',
		email: 'budi.do@universitasmulia.ac.id',
		roles: ['Employee'],
		status: 'Aktif',
	},
	{
		name: 'Citra Kirana',
		email: 'citra.ki@universitasmulia.ac.id',
		roles: ['Employee'],
		status: 'Aktif',
	},
	{
		name: 'Dewi Persik',
		email: 'dewi.pe@universitasmulia.ac.id',
		roles: ['Employee'],
		status: 'Suspended',
	},
	{
		name: 'Eko Patrio',
		email: 'eko.pa@universitasmulia.ac.id',
		roles: ['Admin', 'Employee'],
		status: 'Aktif',
	},
	{
		name: 'Fitri Carlina',
		email: 'fitri.ca@universitasmulia.ac.id',
		roles: ['Employee'],
		status: 'Aktif',
	},
	{
		name: 'Gading Marten',
		email: 'gading.ma@universitasmulia.ac.id',
		roles: ['Employee'],
		status: 'Aktif',
	},
];

const UserCard = ({ user }) => (
	<div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm transition-all hover:shadow-md hover:border-gray-300">
		<div className="flex items-center">
			<div className="flex items-center justify-center w-10 h-10 mr-4 text-white bg-gray-700 rounded-full">
				<User size={20} />
			</div>
			<div>
				<h3 className="font-bold text-lg text-gray-800">{user.name}</h3>
				<p className="text-sm text-gray-500">{user.email}</p>
				<div className="flex gap-2 mt-2">
					{user.roles.map((role) => (
						<span
							key={role}
							className="bg-gray-200 text-gray-700 text-xs font-semibold px-2.5 py-0.5 rounded-full"
						>
							{role}
						</span>
					))}
				</div>
			</div>
		</div>
		<div className="flex items-center gap-4">
			<span
				className={`text-sm font-medium ${
					user.status === 'Aktif' ? 'text-green-600' : 'text-red-600'
				}`}
			>
				{user.status}
			</span>
			<button className="p-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700">
				<FilePen size={18} />
			</button>
			<button className="p-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-red-500">
				<Trash2 size={18} />
			</button>
		</div>
	</div>
);

export default function DashboardPage() {
	const router = useRouter();
	const [searchTerm, setSearchTerm] = useState('');

	const handleLogout = () => {
		if (window.confirm('Apakah Anda yakin ingin logout?')) {
			router.push('/');
		}
	};

	const filteredUsers = allUsers.filter((user) =>
		user.name.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<div className="flex h-screen bg-gray-50">
			<aside className="w-64 bg-white p-6 border-r border-gray-200 flex flex-col">
				<h1 className="text-2xl font-extrabold text-black mb-10">Connect</h1>
				<nav className="flex flex-col gap-4">
					<button
						onClick={() => router.push('/dashboard')}
						className="flex items-center gap-3 bg-black text-white py-2 px-4 rounded-lg"
					>
						<User size={20} />
						<span>User</span>
					</button>
					<button
						onClick={() => router.push('/roles')}
						className="flex items-center gap-3 text-gray-600 hover:bg-gray-100 py-2 px-4 rounded-lg"
					>
						<Shield size={20} />
						<span>Hak Akses</span>
					</button>
					<button
						onClick={() => router.push('/news')}
						className="flex items-center gap-3 text-gray-600 hover:bg-gray-100 py-2 px-4 rounded-lg"
					>
						<ExternalLink size={20} />
						<span>News</span>
					</button>
					<button
						onClick={handleLogout}
						className="flex items-center gap-3 text-gray-600 hover:bg-gray-100 py-2 px-4 rounded-lg"
					>
						<LogOut size={20} />
						<span>Logout</span>
					</button>
				</nav>
			</aside>

			<main className="flex-1 p-8 flex flex-col">
				<div className="relative mb-8">
					<input
						type="text"
						placeholder="Cari user"
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black placeholder:text-gray-500"
					/>
					<Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
				</div>

				<div className="flex-1 overflow-y-auto pr-4 space-y-4">
					{filteredUsers.length > 0 ? (
						filteredUsers.map((user) => (
							<UserCard key={user.email} user={user} />
						))
					) : (
						<div className="text-center py-10">
							<p className="text-gray-500">User tidak ditemukan.</p>
						</div>
					)}
				</div>
			</main>

			<button className="fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors">
				<Plus size={24} />
			</button>
		</div>
	);
}
