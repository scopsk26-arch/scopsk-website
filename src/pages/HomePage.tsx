import {Hero} from '@/sections/Hero';
import {Features} from '@/sections/Features';
import {HowItWorks} from '@/sections/HowItWorks';
import {Audiences} from '@/sections/Audiences';
import {Download} from '@/sections/Download';
import {Contact} from '@/sections/Contact';

export function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Audiences />
      <Download />
      <Contact />
    </>
  );
}
