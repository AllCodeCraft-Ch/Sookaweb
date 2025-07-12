
import { useState } from 'react';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { link } from 'fs';

const Homepage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      console.log('Searching for:', searchTerm);
      // Add search functionality here
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = (e.target as HTMLFormElement).email.value;
    if (email) {
      alert('ขอบคุณที่สมัครรับข่าวสาร! เราจะส่งข้อมูลเพื่อสุขภาพไปยังอีเมลของคุณ');
      (e.target as HTMLFormElement).reset();
    }
  };

  return (
    <div className="min-h-screen" style={{
      background: 'radial-gradient(ellipse at top, #F6F5F3 0%, #FEFEFE 100%)'
    }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-[#F6F5F3]/80 backdrop-blur-xl border-b border-[#8E9775]/10 z-50 py-4">
        <div className="max-w-6xl mx-auto px-8 flex justify-between items-center">
          <Link 
            to="/" 
            className="text-3xl font-extrabold bg-gradient-to-r from-[#8E9775] to-[#6B7353] bg-clip-text text-transparent tracking-tight"
          >
            Sookka
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-[#8E9775] font-medium hover:text-[#6B7353] transition-colors relative">
              หน้าแรก
              <div className="absolute bottom-[-0.5rem] left-0 w-full h-0.5 bg-[#8E9775] rounded-full"></div>
            </Link>
            <a href="#categories" className="text-gray-500 font-medium hover:text-[#8E9775] transition-colors">
              ประเภทอาหาร
            </a>
            <a href="#" className="text-gray-500 font-medium hover:text-[#8E9775] transition-colors">
              สูตรอาหาร
            </a>
            <a href="#" className="text-gray-500 font-medium hover:text-[#8E9775] transition-colors">
              เกี่ยวกับเรา
            </a>
          </div>
          
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#8E9775] w-4 h-4" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={handleSearch}
              className="bg-white/80 border border-[#8E9775]/20 pl-12 pr-4 py-3 rounded-full text-sm w-72 focus:outline-none focus:border-[#8E9775] focus:ring-4 focus:ring-[#8E9775]/10 transition-all"
              placeholder="ค้นหาอาหาร เช่น ควินัว, ข้าวโอ๊ต..."
            />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-8 max-w-6xl mx-auto text-center">
        <h1 className="text-7xl font-black bg-gradient-to-r from-gray-800 via-[#8E9775] to-[#B2B09B] bg-clip-text text-transparent mb-6 leading-none tracking-tight">
          ค้นพบอาหารเพื่อสุขภาพ
        </h1>
        <p className="text-2xl text-gray-500 mb-12 font-normal">
          เรียนรู้คุณค่าทางโภชนาการ ประโยชน์ และสูตรอาหารเพื่อสุขภาพที่ดีที่สุด
        </p>
        <a 
          href="#categories" 
          className="inline-flex items-center gap-3 bg-gradient-to-r from-[#8E9775] to-[#B2B09B] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#8E9775]/30"
        >
          <span>เริ่มต้นสำรวจ</span>
          <span>→</span>
        </a>
      </section>

      {/* Stats Section */}
      <section className="max-w-5xl mx-auto px-8 mb-16">
        <div className="bg-white/70 backdrop-blur-xl border border-[#8E9775]/10 rounded-3xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-black text-[#8E9775] mb-2">500+</div>
              <div className="text-gray-600 font-medium">ชนิดอาหาร</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-[#8E9775] mb-2">1,200+</div>
              <div className="text-gray-600 font-medium">สูตรอาหาร</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-[#8E9775] mb-2">50K+</div>
              <div className="text-gray-600 font-medium">ผู้ใช้งาน</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-[#8E9775] mb-2">100%</div>
              <div className="text-gray-600 font-medium">ข้อมูลถูกต้อง</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="max-w-6xl mx-auto px-8 py-16" id="categories">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-[#8E9775] bg-clip-text text-transparent text-center mb-12">
          ประเภทอาหาร
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            { icon: '🌾', title: 'ธัญพืช', description: 'ข้าว ควินัว ข้าวโอ๊ต และธัญพืชเพื่อสุขภาพ', count: '45 รายการ',link: '/FoodList' },
            { icon: '🥬', title: 'ผักใบเขียว', description: 'ผักใบเขียวที่อุดมไปด้วยวิตามินและแร่ธาตุ', count: '68 รายการ' },
            { icon: '🍎', title: 'ผลไม้', description: 'ผลไม้สดที่อุดมไปด้วยวิตามินซี', count: '89 รายการ' },
            { icon: '🥜', title: 'ถั่วและเมล็ด', description: 'แหล่งโปรตีนและไขมันดีจากธรรมชาติ', count: '34 รายการ' },
            { icon: '🐟', title: 'โปรตีน', description: 'เนื้อสัตว์ ปลา และโปรตีนเพื่อสุขภาพ', count: '52 รายการ' },
            { icon: '🥛', title: 'ผลิตภัณฑ์จากนม', description: 'นม ชีส โยเกิร์ต และผลิตภัณฑ์นม', count: '28 รายการ' }
          ].map((category, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-xl border border-[#8E9775]/10 rounded-3xl p-8 text-center hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#8E9775]/20 transition-all duration-500 cursor-pointer relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#8E9775] to-[#B2B09B]"></div>
              <div className="text-6xl mb-4">{category.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{category.title}</h3>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <span className="bg-[#8E9775]/10 text-[#8E9775] px-4 py-2 rounded-xl font-semibold text-sm">
                {category.count}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Recommended Section */}
      <section className="max-w-6xl mx-auto px-8 py-16">
        <div className="bg-white/50 backdrop-blur-xl border border-[#8E9775]/10 rounded-3xl p-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-[#8E9775] bg-clip-text text-transparent text-center mb-8">
            แนะนำสำหรับคุณ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { emoji: '🌾', badge: 'ซุปเปอร์ฟู้ด', title: 'ควินัว', subtitle: 'Chenopodium quinoa', calories: '222', protein: '8g', fiber: '5g', link: '/quinoa' },
              { emoji: '🥬', badge: 'ผักใบเขียว', title: 'ผักโขม', subtitle: 'Spinacia oleracea', calories: '23', protein: '2.9g', fiber: '2.2g' },
              { emoji: '🥑', badge: 'ไขมันดี', title: 'อะโวคาโด', subtitle: 'Persea americana', calories: '160', protein: '2g', fiber: '10g' },
              { emoji: '🍓', badge: 'วิตามินซี', title: 'สตรอเบอร์รี่', subtitle: 'Fragaria × ananassa', calories: '32', protein: '0.7g', fiber: '2g' },
              { emoji: '🥜', badge: 'โปรตีน', title: 'อัลมอนด์', subtitle: 'Prunus dulcis', calories: '579', protein: '21g', fiber: '12g' },
              { emoji: '🐟', badge: 'โอเมก้า-3', title: 'ปลาแซลมอน', subtitle: 'Salmo salar', calories: '208', protein: '20g', fiber: '12g' }
            ].map((food, index) => (
              <div 
                key={index}
                className="bg-white/90 backdrop-blur-xl border border-[#8E9775]/10 rounded-3xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#8E9775]/20 transition-all duration-500 cursor-pointer"
                onClick={() => food.link && (window.location.href = food.link)}
              >
                <div className="h-52 bg-gradient-to-br from-[#8E9775] to-[#B2B09B] flex items-center justify-center text-6xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-pulse"></div>
                  {food.emoji}
                </div>
                <div className="p-6">
                  <span className="bg-green-500/10 border border-green-500/20 text-green-600 px-3 py-1 rounded-xl text-xs font-semibold mb-3 inline-block">
                    {food.badge}
                  </span>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{food.title}</h3>
                  <p className="text-gray-500 text-sm italic mb-4">{food.subtitle}</p>
                  <div className="flex justify-between gap-4">
                    <div className="text-center flex-1">
                      <div className="font-bold text-[#8E9775]">{food.calories}</div>
                      <div className="text-xs text-gray-500 mt-1">แคลอรี่</div>
                    </div>
                    <div className="text-center flex-1">
                      <div className="font-bold text-[#8E9775]">{food.protein}</div>
                      <div className="text-xs text-gray-500 mt-1">โปรตีน</div>
                    </div>
                    <div className="text-center flex-1">
                      <div className="font-bold text-[#8E9775]">{food.fiber}</div>
                      <div className="text-xs text-gray-500 mt-1">ไฟเบอร์</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="max-w-5xl mx-auto px-8 py-16">
        <div className="bg-gradient-to-r from-[#8E9775] to-[#B2B09B] rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">ติดตามข่าวสารเพื่อสุขภาพ</h2>
          <p className="text-xl text-white/90 mb-8">
            รับข้อมูลโภชนาการ สูตรอาหารใหม่ และเคล็ดลับสุขภาพทุกสัปดาห์
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              name="email"
              className="flex-1 px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/70 backdrop-blur-sm border-none focus:outline-none focus:ring-2 focus:ring-white/30"
              placeholder="อีเมลของคุณ"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 bg-white text-[#8E9775] rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              สมัครเลย
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-700 text-gray-100 py-16 px-8 mt-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">
            <div>
              <h3 className="text-xl font-bold text-[#8E9775] mb-4">Sookka</h3>
              <p className="text-gray-300">แหล่งรวมข้อมูลโภชนาการที่น่าเชื่อถือ เพื่อสุขภาพที่ดีของคุณ</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#8E9775] mb-4">ประเภทอาหาร</h3>
              <div className="space-y-2">
                <a href="#" className="block text-gray-300 hover:text-[#8E9775] transition-colors">ธัญพืช</a>
                <a href="#" className="block text-gray-300 hover:text-[#8E9775] transition-colors">ผักใบเขียว</a>
                <a href="#" className="block text-gray-300 hover:text-[#8E9775] transition-colors">ผลไม้</a>
                <a href="#" className="block text-gray-300 hover:text-[#8E9775] transition-colors">โปรตีน</a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#8E9775] mb-4">เกี่ยวกับเรา</h3>
              <div className="space-y-2">
                <a href="#" className="block text-gray-300 hover:text-[#8E9775] transition-colors">ทีมงาน</a>
                <a href="#" className="block text-gray-300 hover:text-[#8E9775] transition-colors">ติดต่อเรา</a>
                <a href="#" className="block text-gray-300 hover:text-[#8E9775] transition-colors">นโยบายความเป็นส่วนตัว</a>
                <a href="#" className="block text-gray-300 hover:text-[#8E9775] transition-colors">เงื่อนไขการใช้งาน</a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#8E9775] mb-4">ติดตามเรา</h3>
              <div className="space-y-2">
                <a href="#" className="block text-gray-300 hover:text-[#8E9775] transition-colors">Facebook</a>
                <a href="#" className="block text-gray-300 hover:text-[#8E9775] transition-colors">Instagram</a>
                <a href="#" className="block text-gray-300 hover:text-[#8E9775] transition-colors">YouTube</a>
                <a href="#" className="block text-gray-300 hover:text-[#8E9775] transition-colors">Line</a>
              </div>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-[#8E9775]/20 text-gray-400">
            <p>&copy; 2025 Sookka. All rights reserved. สร้างด้วยใจเพื่อสุขภาพที่ดีของคุณ</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
