"use client";
import { useEffect, useState } from "react";
import Welcome from "./welcome/page";
import { useRouter } from "next/navigation";
import Search from "./_ui/search";
import Filter from "./_ui/filter";
import BrandCard from "./_ui/brand-card";
import Card from "./_ui/card";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("isFirstTime")) {
      router.push("/welcome");
    }
  });

  return (
    <div>
      <header className="flex flex-col gap-4 p-6">
        <BrandCard />
        <Search />
        <Filter />
      </header>
      <div className="flex flex-col gap-4 p-6 pt-0">
        {new Array(12).fill(4).map((item, index) => (
          <Card key={index} />
        ))}
      </div>
    </div>
  );
}
