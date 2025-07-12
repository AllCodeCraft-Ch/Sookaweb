import { useNavigate } from 'react-router-dom'
import FoodCard from '../components/FoodCard'

const foodData = [
  { emoji: '🌾', label: 'ควินัว', to: '/food-list' },
  { emoji: '🥬', label: 'ผักโขม', to: '/food-list' },
  { emoji: '🥑', label: 'อะโวคาโด', to: '/food-list' },
  { emoji: '🍓', label: 'สตรอเบอร์รี่', to: '/food-list' },
  { emoji: '🥜', label: 'อัลมอนด์', to: '/food-list' },
  { emoji: '🐟', label: 'ปลาแซลมอน', to: '/food-list' },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f6f5f3] to-[#fefefe] text-gray-800">
      <h1 className="text-center text-3xl font-bold py-6">แนะนำสำหรับคุณ</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-6 pb-12">
        {foodData.map((food, index) => (
          <FoodCard key={index} emoji={food.emoji} label={food.label} to={food.to} />
        ))}
      </div>
    </div>
  )
}
