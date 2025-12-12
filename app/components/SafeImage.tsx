'use client';

import Image from 'next/image';
import { useState } from 'react';

interface SafeImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  fallbackSrc?: string;
}

export default function SafeImage({ 
  src, 
  alt, 
  width, 
  height, 
  className, 
  fallbackSrc = '/images/pc1.jpg' 
}: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  // Check if it's an external URL that might cause issues
  const isExternalUrl = src.startsWith('http') && (typeof window !== 'undefined' ? !src.includes(window.location.hostname) : true);
  
  // If it's a problematic external URL, use regular img tag
  if (isExternalUrl && hasError) {
    return (
      <img
        src={fallbackSrc}
        alt={alt}
        className={className}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    );
  }

  if (isExternalUrl) {
    return (
      <img
        src={imgSrc}
        alt={alt}
        className={className}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        onError={() => {
          setHasError(true);
          setImgSrc(fallbackSrc);
        }}
      />
    );
  }

  // For local images, use Next.js Image component
  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={() => {
        setHasError(true);
        setImgSrc(fallbackSrc);
      }}
    />
  );
}