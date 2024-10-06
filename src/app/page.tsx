"use client";
import { useEffect, useState } from "react";
import Welcome from "./welcome/page";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("isFirstTime")) {
      router.push("/welcome");
    }
  });

  return <div>hi</div>;
}
