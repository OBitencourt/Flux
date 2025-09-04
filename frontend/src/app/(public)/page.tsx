import PublicHeader from "@/components/public-pages/header";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <PublicHeader />
      <div className="relative">
        <div className="flex w-[100%] pt-4 pl-8 pr-8">
          <Image
            src="/images/light-hero-1.png"
            alt="light"
            width={1000}
            height={100}
            style={{
              height: 'auto'
            }}
            className="absolute rounded-tl-[3rem]"
          />
          <Image
            src="/images/light-hero-2.png"
            alt="light"
            width={1000}
            height={100}
            style={{
              height: 'auto'
            }}
            className="absolute rounded-tr-[3rem] right-8"
          />
          <Image
            src="/images/details-with-mask.png"
            alt="light"
            width={600}
            height={100}
            style={{
              height: 'auto'
            }}
            className="absolute rounded-tr-[3rem] left-[35%] top-45"
          />

          <div className="absolute left-[42%] top-85 text-center">
            Get Started with
            <br />
            <Image
              src="/images/flux-logo.png"
              alt="light"
              width={250}
              height={100}
              style={{
                height: 'auto'
              }}
            />
          </div>

          <div className="flex w-[100%] border-1 border-(--border-muted) h-[90dvh] bg-(--foreground-color) rounded-[3rem] p-12">
            
            <div className="flex self-end">
              <button className="border-1 border-(--border-muted) pt-5 pb-5 pl-10 pr-10 rounded-[3rem] hover:bg-(--cp) hover:text-(--foreground-color) font-semibold transition duration-150 ease-in-out hover:border-(--cp) hover:translate-x-1 hover:translate-y-[-4px]">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
