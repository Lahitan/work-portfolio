import React from 'react';
import Image from 'next/image';

const CertificateShowcase = () => {
  const results = [
    '/certificate-image/1.png',
    '/certificate-image/2.png',
    '/certificate-image/3.jpg',
    '/certificate-image/4.png',
    '/certificate-image/wt.PNG',
    '/certificate-image/6.PNG',
  ];

  return (
    <section className="relative bg-gray-50 py-16 overflow-hidden">
      <h2 className="text-4xl font-heading font-bold text-center mb-10 text-foreground">
        My Certificates & Achievements
      </h2>

      {/* Wrapper for the scrolling images */}
      <div className="relative w-full overflow-hidden">
        <div
          className="flex animate-scroll-x space-x-4 sm:space-x-6 min-w-max"
          style={{
            animationDuration: '40s', // smooth & long loop
          }}
        >
          {[...results, ...results].map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Result ${index + 1}`}
              width={500}
              height={300}
              className="rounded-xl shadow-md w-40 sm:w-52 md:w-64 h-28 sm:h-36 md:h-40 object-cover border border-gray-200 flex-shrink-0"
            />
          ))}
        </div>
      </div>

      {/* Optional gradient fade on both ends for effect */}
      <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
      <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
    </section>
  );
};

export default CertificateShowcase;
