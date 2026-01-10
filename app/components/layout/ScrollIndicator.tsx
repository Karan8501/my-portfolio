"use client";

export function ScrollIndicator() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToContent}
      aria-label="Scroll to content"
      className="absolute bottom-spacing-2xl left-1/2 -translate-x-1/2 flex flex-col items-center gap-spacing-sm bg-none border-none cursor-pointer text-text-secondary transition-all duration-300 z-10 hover:text-purple-primary hover:-translate-y-1"
    >
      <span className="text-sm font-medium uppercase tracking-[0.1em]">
        Scroll
      </span>
      <div
          className="w-[30px] h-[50px] rounded-full border-2 border-purple-primary flex justify-center p-2"
      >
        <div
          className="w-1 h-2 bg-current rounded-[2px] absolute top-1.5 left-1/2 -translate-x-1/2 animate-[pulse_2s_ease-in-out_infinite]"
        />
      </div>
    </button>
  );
}
