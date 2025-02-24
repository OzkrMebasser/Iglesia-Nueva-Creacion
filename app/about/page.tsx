
import AboutClient from './AboutClient';
import data from '@/public/data/images.json';

export default function AboutPage() {
  return <AboutClient serverImages={data.images} />;
}

const dynamic = 'force-dynamic'; 
