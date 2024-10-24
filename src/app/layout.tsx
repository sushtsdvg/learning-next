import Header from "@/components/Header";
import Toast from "@/components/Toast";
export const metadata = {
  title: "Avesha",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <Toast />
        <Header />
        {children}
      </body>
    </html>
  );
}