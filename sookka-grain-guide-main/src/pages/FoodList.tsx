export default function FoodList() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f6f5f3] to-[#fefefe] text-gray-800 p-6">
      <h2 className="text-2xl font-bold mb-4">รายการอาหารทั้งหมด</h2>
      {/* ใส่เนื้อหา list ของคุณตรงนี้ */}
      <ul className="list-disc list-inside">
        <li>ควินัว</li>
        <li>ผักโขม</li>
        <li>อะโวคาโด</li>
        <li>สตรอเบอร์รี่</li>
        <li>อัลมอนด์</li>
        <li>ปลาแซลมอน</li>
      </ul>
    </div>
  )
}
