
import { Button } from "@/components/ui/button"
import Sidebar from "./components/sidebar/sidebar"
import Image from "next/image"
import Link from "next/link";


export default function Home() {
  return (
    <>
      <Sidebar />

      <main className="flex justify-center items-center w-full">
        <div className="flex flex-col justify-center items-center gap-2">
          <Image
            alt="Lambang Universitas Sumatera Utara"
            src={ "/image/logo-usu.png" }
            width={ 200 }
            height={ 200 }
          />
          <h1 className="font-bold text-3xl mt-4">PENELITIAN SKRIPSI</h1>
          <h1 className="font-semibold text-2xl w-[850px] text-center">Klasifikasi Zona Tanam Mangrove Desa Pulau Sembilan Menggunakan Gaussian Process Regression for Classification (GPRC)</h1>
          <h1 className="font-semibold text-2xl w-[850px] text-center mt-4">201402043 - Herzinanda Putra</h1>
          <Button className="px-16 mt-4">
            <Link href={ "/training" }>Mulai</Link>
          </Button>
        </div>
      </main>
    </>
  );
}
