"use client";
import ThemeRegistry from "../components/ThemeRegistry";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function RootLayout(props: any) {
  const { children } = props;
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ThemeRegistry options={{ key: "mui" }}>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
