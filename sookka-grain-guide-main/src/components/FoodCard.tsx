import { useNavigate } from 'react-router-dom'

interface Props {
  emoji: string
  label: string
  to: string
}

export default function FoodCard({ emoji, label, to }: Props) {
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(to)}
      className="bg-[#d8d8c9] hover:brightness-95 transition cursor-pointer rounded-2xl p-6 flex flex-col items-center shadow-md"
    >
      <div className="text-5xl mb-3">{emoji}</div>
      <div className="text-lg font-semibold">{label}</div>
    </div>
  )
}
