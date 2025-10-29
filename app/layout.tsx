export const metadata = { title: "NextJS Homework" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui, sans-serif", margin: 0 }}>
        <header style={{ padding: "1rem", borderBottom: "1px solid " }}>
          <nav style={{ display: "flex", gap: "1rem" }}>
            <a href="/">Home</a>
            <a href="/counter">Counter</a>
            <a href="/about">About/Repo</a>
            <a href="/store">Store</a>
          </nav>
        </header>
        <main style={{ padding: "1rem" }}>{children}</main>
      </body>
    </html>
  );
}