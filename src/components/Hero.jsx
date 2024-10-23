"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { great_vibes } from "@/app/font";
import { useRouter } from "next/navigation";

export const Hero = () => {
  const router = useRouter();

  return (
    <div
      className="flex items-center justify-between bg-center bg-no-repeat bg-cover px-8 min-h-screen"
      style={{ backgroundImage: `url('/assets/images/bg-prod.jpg')` }}
    >
      <div className="w-1/2">
        <small
          className={`text-sm font-medium leading-none ${great_vibes.className}`}
        >
          Lembut, Kuat, Alami
        </small>
        <h1 className="scroll-m-20 mt-2 mb-4 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Tessa Multi Facial Tissue, Solusi Tepat untuk Kebutuhan Keluarga Anda
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-muted mb-6">
          Tessa Multi Facial Tissue 1000 g dibuat dari 100% serat alami tanpa
          pewarna, parfum, dan bahan kimia. Lembut di kulit namun memiliki daya
          serap tinggi, tisu ini aman digunakan untuk semua jenis kulit,
          termasuk bayi. Ideal untuk membersihkan kotoran dan noda, Tessa Multi
          adalah pilihan higienis dan ekonomis yang sempurna untuk seluruh
          keluarga.
        </p>
        <Button
          onClick={() => {
            window.fbq("track", "ViewContent", {
              content_type: "product",
              content_id: "12345",
              content_name: "Tessa Multi Facial Tissue",
              value: 1,
              currency: "IDR",
            });
            router.push("https://tokopedia.link/x95uLyyfTNb");
            console.log("tracking");
          }}
        >
          Beli Sekarang
        </Button>
      </div>

      <Image
        className="w-1/2"
        src="/assets/images/tessa-1.png"
        alt="Tessa Multi Facial Tissue"
        width={1920}
        height={1080}
      />
    </div>
  );
};
