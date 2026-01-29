import Footer from "@/components/layout/footer";
import PublicNavbar from "@/components/layout/publicNavbar";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PublicNavbar />
      {children}
      <Footer />
    </>
  );
}
