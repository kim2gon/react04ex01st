import React, { useRef } from "react";
import { motion, useScroll, useTransform } from 'framer-motion';

const Section01 = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  return (
    <section className="w-full h-[400vh] relative bg-black text-white">
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div
          style={{ backgroundImage: `url(/digivice.jpg)` }}
          className="w-[400px] h-[400px] flex justify-center items-center"
        >
          {['egg00', 'egg01', 'egg02', 'egg03', 'egg04', 'egg05',
            'egg06', 'egg07', 'egg08', 'egg09', 'egg10', 'egg11'
          ].map((v, i) => (
            <img key={v}
              src={`/001/${v}.png`}
              alt={`${v}`}
              className="max-w-full max-h-full"
            />
          ))
          }
        </div>
      </div>
      <div className="sticky top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute left-0 w-1/4 h-full bg-white" />
        <div className="absolute left-1/4 w-1/4 h-full bg-white" />
        <div className="absolute left-2/4 w-1/4 h-full bg-white" />
        <div className="absolute left-3/4 w-1/4 h-full bg-white" />
      </div>
    </section>
  );
};

export default Section01;
