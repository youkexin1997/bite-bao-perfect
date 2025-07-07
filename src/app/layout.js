
export const metadata = {
  title: "Bite Bao",
  description: "Soup dumplings, healthy meals and American Chinese favorites.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
