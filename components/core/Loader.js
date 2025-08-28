"use client"
import { useEffect, useState } from "react"
import motivationalTexts from "@/data/motivationalText"
// import "./Loader.css";

const Loader = () => {
  const [text, setText] = useState("Loading...")

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * motivationalTexts.length)
    setText(motivationalTexts[randomIndex])
  }, [])

  const renderLoader = (displayText) => (
    <div
      style={{
        background: "#e3e4e8",
        color: "#17181c",
        fontFamily: 'bold 1em / 1.5 "Comfortaa", sans-serif',
        display: "grid",
        placeItems: "center",
        alignContent: "center",
        height: "100dvh",
        width: "100%",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        fontSize: "calc(14px + (30 - 20) * (100vw - 320px) / (1280 - 320))",
      }}
      aria-label="Animated hexagonal ripples"
    >
      <div
        style={{
          marginBottom: "1.5em",
          overflow: "hidden",
          position: "relative",
          width: "12em",
          height: "12em",
        }}
      >
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              transform: i % 2 === 1 ? "rotate(30deg)" : "none",
            }}
          >
            {[...Array(6)].map((_, j) => (
              <div
                key={j}
                style={{
                  position: "absolute",
                  width: "0.2em",
                  height: "0.2em",
                  top: "calc(50% - 0.1em)",
                  left: "calc(50% - 0.1em)",
                  background: "currentColor",
                  borderRadius: "0.1em",
                  animation: `moveOut${j + 1} 8s infinite linear`,
                  animationDelay: `${(-8 * i) / 6}s`,
                }}
              />
            ))}
          </div>
        ))}
      </div>
      <p aria-label="Loading">{displayText}</p>
      <style jsx>{`
        @keyframes moveOut1 {
          from { transform: translateY(0) scale(0); }
          3% { transform: translateY(0.2em) scale(1); }
          97% { transform: translateY(7.3em) scale(1); }
          to { transform: translateY(7.5em) scale(0); }
        }
        @keyframes moveOut2 {
          from { transform: rotate(60deg) translateY(0) scale(0); }
          3% { transform: rotate(60deg) translateY(0.2em) scale(1); }
          97% { transform: rotate(60deg) translateY(7.3em) scale(1); }
          to { transform: rotate(60deg) translateY(7.5em) scale(0); }
        }
        @keyframes moveOut3 {
          from { transform: rotate(120deg) translateY(0) scale(0); }
          3% { transform: rotate(120deg) translateY(0.2em) scale(1); }
          97% { transform: rotate(120deg) translateY(7.3em) scale(1); }
          to { transform: rotate(120deg) translateY(7.5em) scale(0); }
        }
        @keyframes moveOut4 {
          from { transform: rotate(180deg) translateY(0) scale(0); }
          3% { transform: rotate(180deg) translateY(0.2em) scale(1); }
          97% { transform: rotate(180deg) translateY(7.3em) scale(1); }
          to { transform: rotate(180deg) translateY(7.5em) scale(0); }
        }
        @keyframes moveOut5 {
          from { transform: rotate(240deg) translateY(0) scale(0); }
          3% { transform: rotate(240deg) translateY(0.2em) scale(1); }
          97% { transform: rotate(240deg) translateY(7.3em) scale(1); }
          to { transform: rotate(240deg) translateY(7.5em) scale(0); }
        }
        @keyframes moveOut6 {
          from { transform: rotate(300deg) translateY(0) scale(0); }
          3% { transform: rotate(300deg) translateY(0.2em) scale(1); }
          97% { transform: rotate(300deg) translateY(7.3em) scale(1); }
          to { transform: rotate(300deg) translateY(7.5em) scale(0); }
        }
        @media (prefers-color-scheme: dark) {
          div { background: #17181c !important; color: #e3e4e8 !important; }
        }
      `}</style>
    </div>
  )

  return renderLoader(text)
}

export default Loader
