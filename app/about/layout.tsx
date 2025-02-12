export const metadata = {
  title: "about",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

        <main>{children}</main>

  );
}
