'use client';
import { CAAMButton } from './CAAMButton';
import React from 'react';
import Image from 'next/image';


export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center" style={{ backgroundColor: 'var(--dark-green)' }}>
      
      <div className="container relative z-10 mx-auto px-6 md:px-8 mt-2 md:-mt-24">
        <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left py-12 md:py-20">
          {/* Logo Area */}
          <div className="w-full md:w-2/5 lg:w-5/12 mb-12 md:mb-0 flex justify-center md:justify-center items-center">
            <div className="w-[80%] h-[80%] md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] xl:w-[400px] xl:h-[400px]">
              <Image
                src="/assets/logos/caam_golden_logo.png"
                alt="CAAM Golden Logo"
                width={400} // Base width for aspect ratio
                height={400} // Base height for aspect ratio
                sizes="(max-width: 640px) 240px, (max-width: 768px) 288px, (max-width: 1024px) 320px, 400px"
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* Text Content Area */}
          <div className="w-full md:w-3/5 lg:w-7/12 space-y-8 md:pr-12 lg:pr-16 md:text-left">
            <h1 className="hero-title md:text-left font-bold tracking-tight">
              <span className="text-white">
                Advance Your Practice. <span className="text-amber-300">Shape Ayurveda&apos;s Future.</span>
              </span>
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-3xl md:max-w-none">
              The California Association of Ayurvedic Medicine (CAAM) is your dedicated partner in professional excellence. We provide the advocacy, resources, and community to elevate your practice and establish Ayurveda as a leading profession in California, honoring the profound connection of body, mind, and spirit.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start gap-5">
              <CAAMButton
                href="/membership"
                variant="primary"
                size="md"
                external={true} // Assuming membership page might be external
                showArrow={true}
                className="shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Become a Member
              </CAAMButton>
              <CAAMButton
                href="/about#impact"
                variant="secondary"
                size="md"
                external={false} // Assuming /about is internal
                className="shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Our Impact & Initiatives
              </CAAMButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}