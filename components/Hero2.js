import React, { useMemo } from "react";
import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
import {motion} from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import Link from 'next/link'
const Hero2 = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto"
      id="about"
    >
      <ScrollAnimationWrapper>
          <motion.div
            className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
            variants={scrollAnimation}>
            <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
              <h1 className="text-3xl lg:text-7xl xl:text-7xl font-medium text-black-600 leading-normal">
              A complete payments platform, engineered for <strong>growth</strong>.
              </h1>
              <p className="text-black-500 mt-4 mb-6">
              Accept payments and move money globally with ePayIraq’s powerful APIs and software solutions designed to help you capture more revenue.
              </p>
              
              <ButtonPrimary><Link href="/payments">Start Today</Link></ButtonPrimary>
              
            </div>
            <div className="flex w-full">
              <motion.div className="h-full w-full" variants={scrollAnimation}>
                <Image
                  src="/assets/creditcards.gif"
                  alt="Payment Methods Example"
                  quality={100}
                  width={612}
                  height={383}
                  layout="responsive"
                />
              </motion.div>
            </div>
          </motion.div>
      </ScrollAnimationWrapper>

    </div>
  );
};

export default Hero2;
