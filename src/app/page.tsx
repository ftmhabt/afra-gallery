"use client";
import { useEffect, useState } from "react";
import Welcome from "./welcome/page";
import { useRouter } from "next/navigation";
import Search from "./_ui/search";
import Filter from "./_ui/filter";
import BrandCard from "./_ui/brand-card";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("isFirstTime")) {
      router.push("/welcome");
    }
  });

  return (
    <div>
      <header className="flex flex-col p-6 gap-4">
        <BrandCard />
        <Search />
        <Filter />
      </header>
    </div>
  );
}
