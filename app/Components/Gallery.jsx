import React from 'react';
import Image from 'next/image';
import one from '../Components/images/Galary/1.jpg';
import two from '../Components/images/Galary/2.jpg';
import three from '../Components/images/Galary/3.jpg';
import four from '../Components/images/Galary/4.avif';
import five from '../Components/images/Galary/5.avif';
import six from '../Components/images/Galary/6.avif';
import seven from '../Components/images/Galary/7.avif';
import eight from '../Components/images/Galary/8.avif';
import nine from '../Components/images/Galary/9.avif';
import ten from '../Components/images/Galary/11.jpg';
import eleven from '../Components/images/Galary/12.avif';
import twelve from '../Components/images/Galary/13.avif';
import thirteen from '../Components/images/Galary/1.avif';
import fifteen from '../Components/images/Galary/15.jpg';
const Gallery = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 m-20" style={{ marginTop: '20px', marginBottom: '20px' }}>
      <div className="grid gap-4">
        <div>
          <img className="h-auto max-w-full rounded-lg" src={one} alt="" />
        </div>
        <div>
        <Image 
            src={nine}
            height={500}
            width={500}
            className="h-auto max-w-full rounded-lg"
            alt=""
          />
        </div>
        <div>
        <Image 
            src={one}
            height={500}
            width={500}
            className="h-auto max-w-full rounded-lg"
            alt=""
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
        <Image 
            src={two}
            height={500}
            width={500}
            className="h-auto max-w-full rounded-lg"
            alt=""
          />
        </div>
        <div>
        <Image 
            src={seven}
            height={500}
            width={500}
            className="h-auto max-w-full rounded-lg"
            alt=""
          />
        </div>
        <div>
        <Image 
            src={three}
            height={500}
            width={500}
            className="h-auto max-w-full rounded-lg"
            alt=""
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
        <Image 
            src={twelve}
            height={500}
            width={500}
            className="h-auto max-w-full rounded-lg"
            alt=""
          />
        </div>
        <div>
        <Image 
            src={ten}
            height={500}
            width={500}
            className="h-auto max-w-full rounded-lg"
            alt=""
          />
        </div>
        <div>
        <Image 
            src={five}
            height={500}
            width={500}
            className="h-auto max-w-full rounded-lg"
            alt=""
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
        <Image 
            src={eight}
            height={500}
            width={500}
            className="h-auto max-w-full rounded-lg"
            alt=""
          />
        </div>
        <div>
        <Image 
            src={fifteen}
            height={500}
            width={500}
            className="h-auto max-w-full rounded-lg"
            alt=""
          />
        </div>
        <div>
          <Image 
            src={thirteen}
            height={500}
            width={500}
            className="h-auto max-w-full rounded-lg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;

