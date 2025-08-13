import Image from "next/image";

export default function Home() {
  return (
    <main>
      <header>
        <Image 
          src="/images/flux-logo.png"
          alt="flux-logo"
          width={120}
          height={120}
          style={{
            height: 'auto'
          }}
        />
        <nav>
          
        </nav>
      </header>
    </main>
  );
}
