// components/StaffLayout.tsx
import StaffSidebar from "./StaffSidebar";

export default function StaffLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <StaffSidebar />
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
