import Navbar from "../components/Navbar";
export const metadata = {
  title: "Task Management System",
  
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
