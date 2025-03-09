"use client"

import { useEffect, useState } from "react"
import Image from "next/image";


// interface AnimatedSvgProps {
//   width?: number
//   height?: number
//   className?: string
// }

// export function AnimatedSvg({ width = 200, height = 200, className = "" }: AnimatedSvgProps) {
//   const [isVisible, setIsVisible] = useState(false)

//   useEffect(() => {
//     // Trigger the animation after component mounts
//     const timer = setTimeout(() => {
//       setIsVisible(true)
//     }, 100)

//     return () => clearTimeout(timer)
//   }, [])

//   return (
//     // <svg
//     //   width={width}
//     //   height={height}
//     //   viewBox="0 0 100 100"
      
//     // >
//     //   {/* Sample SVG content - replace with your own SVG */}
//     //   <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" fill="none" />
//     //   <path d="M30,50 L45,65 L70,35" stroke="currentColor" strokeWidth="2" fill="none" />
//     // </svg>

//     <Image
//         // className="light:invert"
//         className={`transition-opacity duration-1000 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"} ${className}`}
//         src="/logo.svg"
//         alt="logo"
//         width={360}
//         height={76}
//         priority
//     />
//   )
// }

interface AnimatedLogoProps {
    width?: number
    height?: number
    className?: string
    text?: string
    textClassName?: string
  }
  
export function AnimatedSvg({
width = 200,
height = 200,
className = "",
text = "MooGuard",
textClassName = "font-bold text-8xl -z-100",
}: AnimatedLogoProps) {
const [animationState, setAnimationState] = useState<"hidden" | "fadeIn" | "slideLeft">("hidden")

useEffect(() => {
    // Sequence the animations
    const fadeInTimer = setTimeout(() => {
    setAnimationState("fadeIn")

    // After fade in completes, start the slide animation
    const slideTimer = setTimeout(() => {
        setAnimationState("slideLeft")
    }, 1000) // Start sliding after fade completes

    return () => clearTimeout(slideTimer)
    }, 100)

    return () => clearTimeout(fadeInTimer)
}, [])

return (
    <div className="flex items-center overflow-hidden">
    <div
        className={`
        transition-all duration-300 ease-in-out
        ${animationState === "hidden" ? "opacity-0" : "opacity-100"}
        ${animationState === "slideLeft" ? "-translate-x-1 mr-4" : "translate-x-70 mr-4" }
        `}
    >
        <Image width={width} height={height}
        // className="light:invert"
        className={className}
        src="/logo.svg"
        alt="logo"
        // width={360}
        // height={76}
        priority
    />
    </div>

    <div
        className={`
        transition-all duration-300 ease-in-out
        ${animationState !== "slideLeft" ? "opacity-0 -translate-x-50" : "opacity-100 -translate-x-10"}
        ${textClassName}
        `}
    >
        {text}
    </div>
    </div>
)
}