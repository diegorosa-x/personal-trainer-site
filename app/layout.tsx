import "./globals.css";

export const metadata = {
  title: "Higor Freire — Personal Trainer",
  description: "Professional personal trainer site with training plans and WhatsApp contact",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}
