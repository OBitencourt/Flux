import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header className="flex w-[100%] justify-between pt-4 pl-8 pr-8">
        <div className="w-[25%]">

          <Image 
            src="/images/flux-logo.png"
            alt="flux-logo"
            width={100}
            height={100}
            style={{
              height: 'auto'
            }}
          />
        </div>
        <nav className="flex w-[50%] justify-center items-center">
          <ul className="flex w-full justify-center gap-12 text-(--muted)  font-(font-family: var(--font-inter) font-normal">
            <li className="hover:text-(--text-light) transition duration-200 ease-in-out">
              <a href="#about">About</a>

            </li>
            <li className="hover:text-(--text-light) transition duration-200 ease-in-out">
              <a href="#pricing">Pricing</a>

            </li>
          </ul>

        </nav>
        <div className="w-[25%]">

        </div>
        <button className="w-[120px] bg-(--cp) rounded-lg text-(--foreground-color) font-semibold p-2 hover:brightness-85 transition duration-300 ease-in-out active:scale-95">
          <Link href="signup">
            Sign Up
          </Link>
        </button>
      </header>
    </main>
  );
}
