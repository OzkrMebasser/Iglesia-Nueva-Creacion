"use client"
import AboutClient from './AboutClient';
// import data from '@/public/data/images.json';

import { useEffect, useState } from 'react';

export default function AboutPage() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('/data/images.json')
      .then((res) => res.json())
      .then((data) => setImages(data.images));
  }, []);

  return <AboutClient serverImages={images} />;
}
