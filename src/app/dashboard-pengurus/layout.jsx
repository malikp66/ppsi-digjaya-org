import DashboardSidebar from "@/components/dashboard/DashboardSidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className='flex min-h-screen bg-muted/50'>
      <DashboardSidebar />
      <div className='flex flex-1 flex-col overflow-hidden'>{children}</div>
    </div>
  );
}

