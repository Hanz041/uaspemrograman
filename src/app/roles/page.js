'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { User, Shield, LogOut, Search, Plus, Edit, Trash2, ExternalLink } from 'lucide-react';

const roles = [
	{ id: 1, name: 'Employee' },
	{ id: 2, name: 'Admin' },
	{ id: 3, name: 'Manager' },
	{ id: 4, name: 'Support' },
	{ id: 5, name: 'Viewer' },
];

export default function RolesPage() {
	const router = useRouter();
	const [searchTerm, setSearchTerm] = useState('');

	const handleLogout = () => {
		if (window.confirm('Apakah Anda yakin ingin logout?')) {
			router.push('/');
		}
	};

	const filteredRoles = roles.filter((role) =>
		role.name.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<div className="flex min-h-screen bg-gray-50">
			<aside className="w-64 bg-white p-6 border-r border-gray-200 flex flex-col">
				<h1 className="text-2xl font-extrabold text-black mb-10">Connect</h1>
				<nav className="flex flex-col gap-4">
					<button
						onClick={() => router.push('/dashboard')}
						className="flex items-center gap-3 text-gray-600 hover:bg-gray-100 py-2 px-4 rounded-lg"
					>
						<User size={20} />
						<span>User</span>
					</button>
					<button
						onClick={() => router.push('/roles')}
						className="flex items-center gap-3 bg-black text-white py-2 px-4 rounded-lg"
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

			<main className="flex-1 p-8">
				<div className="relative mb-8">
					<input
						type="text"
						placeholder="Cari Hak Akses"
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black placeholder:text-gray-500"
					/>
					<Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
				</div>

				<div className="bg-white rounded-lg shadow overflow-hidden">
					<table className="min-w-full">
						<thead className="bg-gray-50">
							<tr>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
									No
								</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
									Hak Akses
								</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
									Action
								</th>
							</tr>
						</thead>
						<tbody className="bg-white divide-y divide-gray-200">
							{filteredRoles.length > 0 ? (
								filteredRoles.map((role, index) => (
									<tr key={role.id}>
										<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
											{index + 1}
										</td>
										<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
											{role.name}
										</td>
										<td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
											<div className="flex items-center gap-4">
												<button className="text-blue-600 hover:text-blue-900">
													<Edit size={20} />
												</button>
												<button className="text-red-600 hover:text-red-900">
													<Trash2 size={20} />
												</button>
											</div>
										</td>
									</tr>
								))
							) : (
								<tr>
									<td colSpan="3" className="px-6 py-4 text-center text-sm text-gray-500">
										Hak akses tidak ditemukan.
									</td>
								</tr>
							)}
						</tbody>
					</table>
				</div>
			</main>

			<button className="fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors">
				<Plus size={24} />
			</button>
		</div>
	);
}
