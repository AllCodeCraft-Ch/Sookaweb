import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // 🔴 ลบ token จาก localStorage
    localStorage.removeItem("token");

    // ✅ พา user ไปยังหน้า login
    navigate("/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="text-red-600 font-medium px-4 py-2 border border-red-500 rounded-full hover:bg-red-100 transition"
    >
      ออกจากระบบ
    </button>
  );
}
