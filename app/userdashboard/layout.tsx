interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function UserDashboard({ children }: DashboardLayoutProps) {
  return (
    <div>
      <nav>Navbar</nav>
      <main>{children}</main>
    </div>
  );
}
