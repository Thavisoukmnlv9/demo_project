"use client";
import Link from "next/link";
import Hero from "./hero/page";

export default function Home() {
  const linke = [
    {
      name: "original",
      href: "/",
    },
    {
      name: "new design",
      href: "/hero-new",
    },
  ]
  return (
    <>
      <div>
        <nav className="flex">
          {linke.map((linke) => (
            <Link
              key={linke.name}
              href={linke.href}
              className="underline-offset-4 hover:underline gap-x-3 mx-3"
            >
              {linke.name}
            </Link>
          ))}
        </nav>
      </div>
      <Hero />
    </>
  );
}
