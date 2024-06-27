"use client"
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./CarouselStyles.css";
import { MainBtn } from "./MainBtn";
import Link from "next/link";
import { CarouselSlide } from "./CarouselSlide";

export const Carousel = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
    slides: {
      origin: "center",
      perView: 2,
      spacing: 15,
    },
  })

  const slides = [
    {
      title: "VisuaLoom AI",
      website: "",
      img: ""
    },
    {
      title: "Expenses WebApp",
      website: "",
      img: ""
    },
    {
      title: "React - Issues Filter",
      website: "",
      img: ""
    },
    {
      title: "Notes - GoogleOauth",
      website: "",
      img: ""
    },
    {
      title: "La Ferreteria - WebApp",
      website: "",
      img: ""
    },
  ]

  return (
    <>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider rounded-md mt-10">
          {
            slides.map((slide, index) => (
              <CarouselSlide
                key={index}
                title={slide.title}
                website={slide.website}
              />
            ))
          }
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            )
          })}
        </div>
      )}
    </>
  )
}

function Arrow(props: {
  disabled: boolean
  left?: boolean
  onClick: (e: any) => void
}) {
  const disabled = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${props.left ? "arrow--left" : "arrow--right"
        } ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  )
}
