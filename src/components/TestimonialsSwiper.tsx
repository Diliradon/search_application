"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

interface Testimonial {
  id: number;
  company: string;
  logo: string;
  testimonial: string;
  author: {
    name: string;
    title: string;
    avatar: string;
  };
}

const mockTestimonials: Testimonial[] = [
  {
    id: 1,
    company: "Serene Living Products",
    logo: "🌿",
    testimonial:
      "Sales Fortuna made managing sales easier and helped us focus on customers. Its tools have been crucial for our growth and client satisfaction.",
    author: {
      name: "Ethan Morgan",
      title: "Founder and CEO, Serene Living Products",
      avatar: "https://i.pravatar.cc/300?img=1",
    },
  },
  {
    id: 2,
    company: "Starlight Creations",
    logo: "⭐",
    testimonial:
      "Sales Fortuna has made sales so much easier for us. It saves time, simplifies the whole process, and helps us land more deals without hassle.",
    author: {
      name: "Olivia Haues",
      title: "Owner, Starlight Creations & Co-Founder",
      avatar: "https://i.pravatar.cc/300?img=2",
    },
  },
  {
    id: 3,
    company: "Opulent Living Group",
    logo: "💎",
    testimonial:
      "Sales Fortuna has simplified our lead generation, helping us attract qualified prospects effortlessly and drive consistent growth.",
    author: {
      name: "Alexander Reed",
      title: "Co-Founder, Opulent Living Group",
      avatar: "https://i.pravatar.cc/300?img=3",
    },
  },
  {
    id: 4,
    company: "Serene Living Products",
    logo: "⭐",
    testimonial:
      "Sales Fortuna made managing sales easier and helped us focus on customers. Its tools have been crucial for our growth and client satisfaction.",
    author: {
      name: "Ethan Morgan",
      title: "Founder and CEO, Serene Living Products",
      avatar: "https://i.pravatar.cc/300?img=4",
    },
  },
  {
    id: 5,
    company: "Serene Living Products",
    logo: "🌿",
    testimonial:
      "Sales Fortuna made managing sales easier and helped us focus on customers. Its tools have been crucial for our growth and client satisfaction.",
    author: {
      name: "Ethan Morgan",
      title: "Founder and CEO, Serene Living Products",
      avatar: "https://i.pravatar.cc/300?img=5",
    },
  },
  {
    id: 6,
    company: "Serene Living Products",
    logo: "💎",
    testimonial:
      "Sales Fortuna made managing sales easier and helped us focus on customers. Its tools have been crucial for our growth and client satisfaction.",
    author: {
      name: "Ethan Morgan",
      title: "Founder and CEO, Serene Living Products",
      avatar: "https://i.pravatar.cc/300?img=6",
    },
  },
];

export default function TestimonialsSwiper() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16">
          Voices of Success with Sales Fortuna
        </h1>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={18}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet-custom",
              bulletActiveClass: "swiper-pagination-bullet-active-custom",
            }}
            className="testimonials-swiper max-w-[1000px]"
          >
            {mockTestimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white border border-[#B6B1B1] rounded-2xl p-8 shadow-sm h-full flex flex-col justify-between min-h-[440px] max-w-[380px]">
                  <div className="flex items-center mb-6">
                    <div className="text-3xl mr-4">{testimonial.logo}</div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {testimonial.company}
                    </h3>
                  </div>

                  <div className="flex-grow mb-8">
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {testimonial.testimonial}
                    </p>
                    <div className="text-right mt-4">
                      <span className="text-6xl text-gray-300 font-serif">
                        &rdquo;
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Image
                      src={testimonial.author.avatar}
                      alt={testimonial.author.name}
                      width={60}
                      height={60}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-800 text-lg">
                        {testimonial.author.name}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {testimonial.author.title}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            type="button"
            className="swiper-button-prev-custom absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            type="button"
            className="swiper-button-next-custom absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
