'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { User, Shield, LogOut, Search, Plus, Calendar, User as UserIcon, ArrowRight, ExternalLink } from 'lucide-react';

const newsData = [
	{
		id: 1,
		title: 'Indonesia Juara Umum SEA Games 2024',
		excerpt: 'Tim Indonesia berhasil meraih juara umum di SEA Games 2024 dengan total 156 medali emas, mengalahkan Thailand dan Vietnam.',
		content: 'Indonesia berhasil mempertahankan gelar juara umum SEA Games untuk ketiga kalinya berturut-turut. Prestasi ini didukung oleh dominasi di cabang olahraga seperti bulutangkis, atletik, dan renang. Atlet-atlet Indonesia menunjukkan performa luar biasa di berbagai cabang olahraga.',
		category: 'Olahraga',
		author: 'Reporter Olahraga',
		date: '2024-12-15',
		image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop',
		readTime: '3 min read',
		featured: true
	},
	{
		id: 2,
		title: 'EVOS Legends Raih Gelar MPL ID Season 13',
		excerpt: 'EVOS Legends berhasil mengalahkan RRQ Hoshi dengan skor 4-2 di grand final MPL ID Season 13.',
		content: 'EVOS Legends membuktikan dominasinya di Mobile Legends dengan mengalahkan rival abadi RRQ Hoshi di grand final MPL ID Season 13. Pertandingan sengit berlangsung selama 6 game dengan EVOS berhasil mengamankan gelar juara dan tiket ke MPLI.',
		category: 'Esports',
		author: 'Esports Reporter',
		date: '2024-12-14',
		image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=250&fit=crop',
		readTime: '4 min read',
		featured: true
	},
	{
		id: 3,
		title: 'Pertumbuhan Ekonomi Indonesia Capai 5.2% di Q4 2024',
		excerpt: 'Bank Indonesia melaporkan pertumbuhan ekonomi Indonesia mencapai 5.2% di kuartal keempat 2024.',
		content: 'Pertumbuhan ekonomi Indonesia menunjukkan tren positif dengan capaian 5.2% di kuartal keempat 2024. Sektor manufaktur dan jasa menjadi kontributor utama pertumbuhan ekonomi nasional.',
		category: 'Ekonomi',
		author: 'Ekonomi Reporter',
		date: '2024-12-13',
		image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop',
		readTime: '2 min read',
		featured: false
	},
	{
		id: 4,
		title: 'Alter Ego Esports Juara PUBG Mobile Pro League',
		excerpt: 'Alter Ego Esports berhasil menjadi juara PUBG Mobile Pro League Indonesia Season 2.',
		content: 'Alter Ego Esports membuktikan kualitasnya di game battle royale dengan mengalahkan Bigetron Esports di grand final PUBG Mobile Pro League Indonesia Season 2. Tim ini akan mewakili Indonesia di turnamen internasional.',
		category: 'Esports',
		author: 'Esports Reporter',
		date: '2024-12-12',
		image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=250&fit=crop',
		readTime: '3 min read',
		featured: false
	},
	{
		id: 5,
		title: 'Indonesia Siap Gelar Formula E di Jakarta',
		excerpt: 'Jakarta akan menjadi tuan rumah Formula E untuk pertama kalinya pada tahun 2025.',
		content: 'Indonesia akan menjadi tuan rumah Formula E untuk pertama kalinya pada tahun 2025. Sirkuit akan dibangun di kawasan Ancol dengan standar internasional dan diperkirakan akan menarik ribuan penonton.',
		category: 'Olahraga',
		author: 'Olahraga Reporter',
		date: '2024-12-11',
		image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=400&h=250&fit=crop',
		readTime: '5 min read',
		featured: false
	},
	{
		id: 6,
		title: 'ONIC Esports Dominasi Free Fire Pro League',
		excerpt: 'ONIC Esports berhasil mempertahankan gelar juara Free Fire Pro League Indonesia.',
		content: 'ONIC Esports membuktikan dominasinya di Free Fire dengan berhasil mempertahankan gelar juara Free Fire Pro League Indonesia. Tim ini menunjukkan konsistensi performa di berbagai turnamen.',
		category: 'Esports',
		author: 'Esports Reporter',
		date: '2024-12-10',
		image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=250&fit=crop',
		readTime: '3 min read',
		featured: false
	},
	{
		id: 7,
		title: 'Teknologi 5G Resmi Diluncurkan di Indonesia',
		excerpt: 'Operator telekomunikasi Indonesia mulai meluncurkan layanan 5G di beberapa kota besar.',
		content: 'Teknologi 5G resmi diluncurkan di Indonesia dengan coverage awal di Jakarta, Surabaya, dan Bandung. Layanan ini akan mendukung transformasi digital dan ekonomi digital Indonesia.',
		category: 'Teknologi',
		author: 'Teknologi Reporter',
		date: '2024-12-09',
		image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop',
		readTime: '4 min read',
		featured: false
	},
	{
		id: 8,
		title: 'Persib Bandung Juara Liga 1 2024',
		excerpt: 'Persib Bandung berhasil mengamankan gelar juara Liga 1 2024 setelah mengalahkan Persija Jakarta.',
		content: 'Persib Bandung berhasil mengamankan gelar juara Liga 1 2024 setelah pertandingan sengit melawan Persija Jakarta. Ini adalah gelar ke-5 untuk Persib dalam sejarah Liga Indonesia.',
		category: 'Olahraga',
		author: 'Olahraga Reporter',
		date: '2024-12-08',
		image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop',
		readTime: '3 min read',
		featured: false
	}
];

const NewsCard = ({ news, isFeatured = false }) => (
	<div className={`bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all hover:shadow-lg hover:border-gray-300 ${isFeatured ? 'col-span-2' : ''}`}>
		<div className="relative">
			<img 
				src={news.image} 
				alt={news.title}
				className="w-full h-48 object-cover"
			/>
			<div className="absolute top-3 left-3">
				<span className={`px-3 py-1 text-xs font-semibold rounded-full ${
					news.category === 'Esports' ? 'bg-purple-100 text-purple-800' :
					news.category === 'Olahraga' ? 'bg-blue-100 text-blue-800' :
					news.category === 'Ekonomi' ? 'bg-green-100 text-green-800' :
					'bg-gray-100 text-gray-800'
				}`}>
					{news.category}
				</span>
			</div>
			{news.featured && (
				<div className="absolute top-3 right-3">
					<span className="px-3 py-1 text-xs font-semibold bg-red-100 text-red-800 rounded-full">
						Featured
					</span>
				</div>
			)}
		</div>
		<div className="p-6">
			<div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
				<Calendar size={14} />
				<span>{new Date(news.date).toLocaleDateString('id-ID', { 
					year: 'numeric', 
					month: 'long', 
					day: 'numeric' 
				})}</span>
				<span>•</span>
				<span>{news.readTime}</span>
			</div>
			<h3 className={`font-bold text-gray-900 mb-3 ${isFeatured ? 'text-xl' : 'text-lg'}`}>
				{news.title}
			</h3>
			<p className="text-gray-600 mb-4 line-clamp-3">
				{news.excerpt}
			</p>
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-2">
					<UserIcon size={16} className="text-gray-400" />
					<span className="text-sm text-gray-500">{news.author}</span>
				</div>
				<button className="flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm font-medium">
					Baca Selengkapnya
					<ArrowRight size={14} />
				</button>
			</div>
		</div>
	</div>
);

export default function NewsPage() {
	const router = useRouter();
	const [searchTerm, setSearchTerm] = useState('');
	const [selectedCategory, setSelectedCategory] = useState('Semua');

	const handleLogout = () => {
		if (window.confirm('Apakah Anda yakin ingin logout?')) {
			router.push('/');
		}
	};

	const categories = ['Semua', 'Esports', 'Olahraga', 'Ekonomi', 'Teknologi'];

	const filteredNews = newsData.filter((news) => {
		const matchesSearch = news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
							news.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
		const matchesCategory = selectedCategory === 'Semua' || news.category === selectedCategory;
		return matchesSearch && matchesCategory;
	});

	const featuredNews = filteredNews.filter(news => news.featured);
	const regularNews = filteredNews.filter(news => !news.featured);

	return (
		<div className="flex h-screen bg-gray-50">
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
						className="flex items-center gap-3 text-gray-600 hover:bg-gray-100 py-2 px-4 rounded-lg"
					>
						<Shield size={20} />
						<span>Hak Akses</span>
					</button>
					<a
						href="#"
						className="flex items-center gap-3 bg-black text-white py-2 px-4 rounded-lg"
					>
						<ExternalLink size={20} />
						<span>News</span>
					</a>
					<button
						onClick={handleLogout}
						className="flex items-center gap-3 text-gray-600 hover:bg-gray-100 py-2 px-4 rounded-lg"
					>
						<LogOut size={20} />
						<span>Logout</span>
					</button>
				</nav>
			</aside>

			<main className="flex-1 p-8 overflow-y-auto">
				<div className="max-w-7xl mx-auto">
					<div className="mb-8">
						<h1 className="text-3xl font-bold text-gray-900 mb-2">Berita Terkini</h1>
						<p className="text-gray-600">Dapatkan informasi terbaru seputar Indonesia dan dunia esports</p>
					</div>

					<div className="relative mb-8">
						<input
							type="text"
							placeholder="Cari berita..."
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black placeholder:text-gray-500"
						/>
						<Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
					</div>

					<div className="flex gap-2 mb-8 overflow-x-auto pb-2">
						{categories.map((category) => (
							<button
								key={category}
								onClick={() => setSelectedCategory(category)}
								className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
									selectedCategory === category
										? 'bg-blue-600 text-white'
										: 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
								}`}
							>
								{category}
							</button>
						))}
					</div>

					{filteredNews.length > 0 ? (
						<div className="space-y-8">
							{featuredNews.length > 0 && (
								<div>
									<h2 className="text-xl font-bold text-gray-900 mb-4">Berita Utama</h2>
									<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
										{featuredNews.map((news) => (
											<NewsCard key={news.id} news={news} isFeatured={true} />
										))}
									</div>
								</div>
							)}

							{regularNews.length > 0 && (
								<div>
									<h2 className="text-xl font-bold text-gray-900 mb-4">Berita Lainnya</h2>
									<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
										{regularNews.map((news) => (
											<NewsCard key={news.id} news={news} />
										))}
									</div>
								</div>
							)}
						</div>
					) : (
						<div className="text-center py-16">
							<div className="text-gray-400 mb-4">
								<Search size={64} className="mx-auto" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-2">Berita tidak ditemukan</h3>
							<p className="text-gray-600">Coba ubah kata kunci pencarian atau pilih kategori yang berbeda</p>
						</div>
					)}
				</div>
			</main>
		</div>
	);
}
