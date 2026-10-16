import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="relative z-10 border-b border-white/10">
      <div className="mx-auto flex h-[110px] max-w-[1240px] items-center justify-between px-6 xl:px-0">
        <a href="#" className="flex shrink-0 items-center gap-2">
          <Image
            src="https://puretalk.ai/logo.svg"
            alt="Puretalk.ai"
            width={114}
            height={38}
            unoptimized
            className="w-[114px] brightness-0 invert"
          />
        </a>

        <div className="hidden items-center gap-9 text-[15px] font-semibold lg:flex">
          <a href="#solutions" className="flex items-center gap-2 hover:text-white/70">
            Solutions
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="m2 4 4 4 4-4" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </a>
          <a href="#integrations" className="hover:text-white/70">
            Integrations
          </a>
          <a href="#enterprise" className="hover:text-white/70">
            Enterprise
          </a>
          <a href="#docs" className="hover:text-white/70">
            Docs
          </a>
          <a href="#search" className="flex items-center gap-2 hover:text-white/70">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <circle cx="10.8" cy="10.8" r="6.8" stroke="currentColor" strokeWidth="2" />
              <path d="m16 16 5 5" stroke="currentColor" strokeWidth="2" />
            </svg>
            Search
            <span className="rounded border border-white/40 px-2 py-0.5 text-xs">
              /
            </span>
          </a>
        </div>

        <div className="hidden items-center gap-6 md:flex">
          <a href="#community" aria-label="Discord" className="hover:opacity-70">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
              <path d="M19.7 5.1a18 18 0 0 0-4.4-1.4l-.6 1.2a16 16 0 0 0-5.4 0l-.6-1.2a18 18 0 0 0-4.4 1.4C1.5 9.2.7 13.2 1.1 17.1a18 18 0 0 0 5.4 2.7l1.2-2a11 11 0 0 1-1.9-.9l.5-.4a12.8 12.8 0 0 0 11.4 0l.5.4a11 11 0 0 1-1.9.9l1.2 2a18 18 0 0 0 5.4-2.7c.5-4.5-.8-8.5-3.2-12Zm-11 9.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Zm6.6 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Z" />
            </svg>
          </a>
          <a href="https://github.com" aria-label="GitHub" className="hover:opacity-70">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
              <path d="M12 .8a11.4 11.4 0 0 0-3.6 22.2c.6.1.8-.2.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.3-1.3-1.6-1.3-1.6-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.6-1.4-5.6-6.3 0-1.4.5-2.5 1.2-3.4-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.5 1.3a12.2 12.2 0 0 1 6.4 0c2.4-1.6 3.5-1.3 3.5-1.3.6 1.7.2 3 .1 3.3.8.9 1.2 2 1.2 3.4 0 4.9-3 6-5.7 6.3.5.4.8 1.1.8 2.2v3.1c0 .4.2.7.8.6A11.4 11.4 0 0 0 12 .8Z" />
            </svg>
          </a>
          <a
            href="#login"
            className="rounded-lg border-2 border-white/80 px-5 py-2 text-sm font-semibold transition hover:bg-white/15"
          >
            Login
          </a>
          <a
            href="#dashboard"
            className="rounded-lg bg-white/30 px-5 py-2.5 text-sm font-semibold transition hover:bg-white/40"
          >
            Dashboard
          </a>
        </div>

        <a
          href="#dashboard"
          className="rounded-lg border border-white/60 px-4 py-2 text-sm md:hidden"
        >
          Menu
        </a>
      </div>
    </nav>
  );
}
