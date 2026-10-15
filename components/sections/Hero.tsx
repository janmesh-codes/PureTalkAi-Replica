import type { ReactNode } from "react";

type HeroProps = {
  children: ReactNode;
};

export default function Hero({ children }: HeroProps) {
  return (
    <section className="hero relative min-h-[840px] overflow-hidden">
      {children}
      <div className="relative z-10 mx-auto flex max-w-[1100px] flex-col items-center px-6 pb-52 pt-[116px] text-center sm:pt-[116px]">
        <a
          href="#ai-ruth"
          className="mb-6 flex items-center gap-2 rounded-full border border-white/10 bg-white/30 px-3 py-1.5 text-sm backdrop-blur-md transition hover:bg-white/40"
        >
          <span className="rounded-full bg-white/30 px-2 py-1 text-xs">NEW</span>
          <span>Introducing Puretalk AI RUTH®</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M7 17 17 7M7 7h10v10" stroke="currentColor" strokeWidth="1.8" />
          </svg>
        </a>

        <h1 className="max-w-[1000px] text-[42px] font-semibold leading-[1.04] tracking-[-1.8px] sm:text-[58px] md:text-[68px] lg:text-[70px]">
          All-in-One Conversational AI
          <span className="block text-white/65">Solution.</span>
        </h1>

        <p className="mt-6 max-w-[730px] text-[16px] leading-[1.8] text-white/65 sm:text-[17px]">
          <strong className="font-semibold text-white/85">
            Engage Anywhere, Anytime :
          </strong>{" "}
          Our multi-modal platform ensures your business stays connected
          across all channels, 24/7. We are the Voice of AI®. We are
          Humanizing AI®.
        </p>

        <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#get-started"
            className="flex h-[61px] items-center gap-3 rounded-full bg-black/10 px-3 pr-6 text-sm font-semibold transition hover:bg-black/20"
          >
            <span className="flex h-[35px] w-[35px] items-center justify-center rounded-full bg-white text-[#7733cb]">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 4v16l13-8z" />
              </svg>
            </span>
            Get Started for Free
          </a>

          <a
            href="#contact"
            className="flex h-[61px] items-center gap-3 rounded-full border border-white/40 px-7 text-sm font-semibold transition hover:bg-white/10"
          >
            Contact Us
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
              <path d="M7 17 17 7M7 7h10v10" stroke="currentColor" strokeWidth="1.7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
