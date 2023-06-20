import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const features = [
  "Powerfull online protection.",
  "Internet without borders.",
  "Supercharged VPN",
  "No specific time limits."
]

const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <>
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="feature"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <Image
              src="/assets/payments.jpg"
              alt="Payment Processing methods"
              layout="responsive"
              quality={100}
              height={414}
              width={508}
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>

        <motion.div className="flex flex-col items-start justify-center ml-auto w-full lg:w-9/12" variants={scrollAnimation}>
          <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-700">
          Unified platform
          </h3>
          <h4 className="text-xl lg:text-2xl font-medium leading-relaxed text-black-500">
          A fully integrated suite of payments products
          </h4>
          <p className="my-2 text-black-500">
          We bring together everything that’s required to build websites and apps that accept payments and send payouts in Iraq. 
          ePayIraq’s products power payments for online and in-person retailers, subscriptions businesses, software platforms and marketplaces, and everything in between.
          </p>
          
        </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
    <div
    className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
    id="feature"
  >
    <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
    <ScrollAnimationWrapper>

<motion.div className="flex flex-col items-start justify-center ml-auto w-full lg:w-9/12" variants={scrollAnimation}>
  <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-700">
  POS Systems and Terminals
  </h3>
  <h4 className="text-xl lg:text-2xl font-medium leading-relaxed text-black-500">
  A fully integrated suite of Terminals and POS Systems
  </h4>
  <p className="my-2 text-black-500">
  ePayIraq Terminal’s APIs and SDKs enable you to build your own, custom in-person payments experience.
  </p>
  
</motion.div>
</ScrollAnimationWrapper>
      <ScrollAnimationWrapper className="flex w-full justify-end">
        <motion.div className="w-full p-4" variants={scrollAnimation}>
          <Image
            src="/assets/readers.jpg"
            alt="ATM Machine"
            layout="responsive"
            quality={100}
            height={420}
            width={450}
          />
        </motion.div>
      </ScrollAnimationWrapper>
    
    </div>
  </div>
  </>
  );
};

export default Feature;
