'use client'
import React from "react";
import { cn } from "@/lib/utils";
import { useRef } from "react";

export const GlareCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const isPointerInside = useRef(false);
  const refElement = useRef<HTMLDivElement>(null);
  const state = useRef({
    glare: { x: 50, y: 50 },
    background: { x: 50, y: 50 },
    rotate: { x: 0, y: 0 },
  });

  const containerStyle = {
    "--m-x": "50%",
    "--m-y": "50%",
    "--r-x": "0deg",
    "--r-y": "0deg",
    "--bg-x": "50%",
    "--bg-y": "50%",
    "--duration": "300ms",
    "--foil-size": "100%",
    "--opacity": "0",
    "--radius": "48px",
    "--easing": "ease",
    "--transition": "var(--duration) var(--easing)",
  } as any;

  const backgroundStyle = {
    "--step": "5%",
    "--foil-svg": `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.99994 3.419C2.99994 3.419 21.6142 7.43646 22.7921 12.153C23.97 16.8695 3.41838 23.0306 3.41838 23.0306' stroke='white' stroke-width='5' stroke-miterlimit='3.86874' stroke-linecap='round' style='mix-blend-mode:darken'/%3E%3C/svg%3E")`,
    "--pattern": "var(--foil-svg) center/100% no-repeat",
    "--rainbow": `repeating-linear-gradient(
      0deg,
      #250049 calc(var(--step) * 1),    /* Primary */
      #4b0027 calc(var(--step) * 2),    /* Secondary */
      #FFA500 calc(var(--step) * 3),    /* Warning */
      #FF3333 calc(var(--step) * 4),    /* Error */
      #00AEEF calc(var(--step) * 5),    /* Info */
      #250049 calc(var(--step) * 6)     /* Primary */
    ) 0% var(--bg-y)/200% 700% no-repeat`,
    "--diagonal": `repeating-linear-gradient(
      128deg,
      #250049 0%,
      #4b0027 5%,
      #FFA500 10%,
      #FF3333 15%,
      #00AEEF 20%,
      #250049 25%
    ) var(--bg-x) var(--bg-y)/300% no-repeat`,
    "--shade": `radial-gradient(
      farthest-corner circle at var(--m-x) var(--m-y),
      rgba(255,255,255,0.1) 12%,
      rgba(255,255,255,0.15) 20%,
      rgba(255,255,255,0.25) 120%
    ) var(--bg-x) var(--bg-y)/300% no-repeat`,
    backgroundBlendMode: "hue, hue, hue, overlay",
  };

  const updateStyles = () => {
    if (refElement.current) {
      const { background, rotate, glare } = state.current;
      refElement.current.style.setProperty("--m-x", `${glare.x}%`);
      refElement.current.style.setProperty("--m-y", `${glare.y}%`);
      refElement.current.style.setProperty("--r-x", `${rotate.x}deg`);
      refElement.current.style.setProperty("--r-y", `${rotate.y}deg`);
      refElement.current.style.setProperty("--bg-x", `${background.x}%`);
      refElement.current.style.setProperty("--bg-y", `${background.y}%`);
    }
  };

  return (
    <div
      style={containerStyle}
      className="relative isolate [contain:layout_style] [perspective:600px] transition-transform duration-[var(--duration)] ease-[var(--easing)] will-change-transform max-w-7xl h-[300px] rounded-5xl"
      ref={refElement}
      onPointerMove={(event) => {
        const rotateFactor = 0.4;
        const rect = event.currentTarget.getBoundingClientRect();
        const position = { x: event.clientX - rect.left, y: event.clientY - rect.top };
        const percentage = { x: (100 / rect.width) * position.x, y: (100 / rect.height) * position.y };
        const delta = { x: percentage.x - 50, y: percentage.y - 50 };

        const { background, rotate, glare } = state.current;
        background.x = 50 + percentage.x / 4 - 12.5;
        background.y = 50 + percentage.y / 3 - 16.67;
        rotate.x = -(delta.x / 3.5) * rotateFactor;
        rotate.y = (delta.y / 2) * rotateFactor;
        glare.x = percentage.x;
        glare.y = percentage.y;

        updateStyles();
      }}
      onPointerEnter={() => {
        isPointerInside.current = true;
        if (refElement.current) {
          setTimeout(() => {
            if (isPointerInside.current) {
              refElement.current.style.setProperty("--duration", "0s");
            }
          }, 300);
        }
      }}
      onPointerLeave={() => {
        isPointerInside.current = false;
        if (refElement.current) {
          refElement.current.style.removeProperty("--duration");
          refElement.current.style.setProperty("--r-x", `0deg`);
          refElement.current.style.setProperty("--r-y", `0deg`);
        }
      }}
    >
      <div className="h-full grid will-change-transform origin-center transition-transform duration-[var(--duration)] ease-[var(--easing)] rounded-[var(--radius)] border border-slate-800 hover:[--opacity:0.6] hover:filter-none overflow-hidden">
        <div className="w-full h-full grid [grid-area:1/1] mix-blend-soft-light">
          <div className={cn("h-full w-full", className)}>{children}</div>
        </div>
        <div className="w-full h-full grid [grid-area:1/1] mix-blend-soft-light opacity-[var(--opacity)] will-change-background [background:radial-gradient(farthest-corner_circle_at_var(--m-x)_var(--m-y),_rgba(255,255,255,0.8)_10%,_rgba(255,255,255,0.65)_20%,_rgba(255,255,255,0)_90%)]" />
        <div
          className="w-full h-full grid [grid-area:1/1] mix-blend-color-dodge opacity-[var(--opacity)] will-change-background transition-opacity"
          style={{ ...backgroundStyle }}
        />
      </div>
    </div>
  );
};
