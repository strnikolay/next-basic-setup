"use client";
import Link from "next/link";
import * as React from "react";

export default function Header() {



  return (
    <header>
      <nav>
        <Link href="/">Главная</Link>
        <Link href="/page1">Страница 1</Link>
        <Link href="/page2">Страница 2</Link>
      </nav>

    </header>
  );
}
