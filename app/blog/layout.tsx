export const metadata = {
    title: "Blog",
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
  