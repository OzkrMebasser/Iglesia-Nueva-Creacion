"use client"
import AboutClient from './AboutClient';
// import data from '@/public/data/images.json';

import { useEffect, useState } from 'react';

export default function AboutPage() {
  const [gridImages, setGridImages] = useState([]);

  useEffect(() => {
    fetch('/data/images.json')
      .then((res) => res.json())
      .then((data) => setGridImages(data.grid_images));
  }, []);

  return <AboutClient serverImages={gridImages} />;
}
