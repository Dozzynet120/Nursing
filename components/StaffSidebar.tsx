import Link from "next/link";
import { useRouter } from "next/router";
import { LogOut } from "lucide-react";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/config";

export default function StaffSidebar() {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/staff/login");
  };

  const menu = [
    { name: "Dashboard", path: "/staff/dashboard" },
    { name: "Upload Materials", path: "/staff/upload" },
    { name: "Student Management", path: "/staff/students" },
    { name: "Messages", path: "/staff/messages" },
    { name: "Attendance / Timetable", path: "/staff/attendance" },
    { name: "Settings", path: "/staff/settings" },
  ];

  return (
    <aside className="w-64 bg-green-900 text-white h-screen p-5 flex flex-col">
      <h1 className="text-lg font-bold mb-6">Staff Portal</h1>
      <nav className="flex flex-col space-y-4">
        {menu.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`hover:bg-green-700 p-2 rounded ${
              router.pathname === item.path ? "bg-green-700" : ""
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
      <button
        onClick={handleLogout}
        className="mt-auto flex items-center gap-2 bg-red-600 hover:bg-red-700 p-2 rounded"
      >
        <LogOut size={18} /> Logout
      </button>
    </aside>
  );
}
