"use client";

import Image from "next/image";
export const VisitCard = () => {
  return (
    <div className="card p-2 sm:p-4 xl:max-w-lg md:p-0 block md:flex md:justify-between md:items-center md:gap-8 xl:block">
      <div>
        <div
          className="max-h-36
                        w-full
                        flex flex-row
                        justify-center items-center md:justify-start
                        gap-1
                        mb-0 md:mb-6"
        >
          <div className="block lg:hidden xl:block img mr-6 w-24 h-auto">
            <Image
              src="/p192.jpg"
              alt="Pierre Abeille"
              width={600}
              height={600}
              className="rounded-[22px]"
            />
          </div>
          <div className="text-appBlack">
            <h1 className="capitalize text-3xl lg:text-5xl font-semibold mb-1 text-balance">
              Pierre Abeille
            </h1>
            <h2 className="block lg:hidden italic font-mono text-lg md:text-xl font-light mb-2 text-balance">
              Développeur web fullstack
            </h2>
          </div>
        </div>
        <div className="hidden md:flex md:flex-col text-wrap w-full md:gap-1">
          <p>👋 Salut, je suis développeur web fullstack.</p>
          <p>
            👨‍💻 Je travaille notamment avec Angular, React, Node.js, Java et
            MongoDB.
          </p>
          <h3>
            🤖 N'hésitez pas à discuter avec mon clone virtuel pour en savoir
            plus sur moi !
          </h3>
        </div>
      </div>
      <div className="hidden lg:block xl:hidden img w-40 h-auto">
        <Image
          src="/p192.jpg"
          alt="Pierre Abeille"
          width={600}
          height={600}
          className="rounded-[22px]"
        />
      </div>
    </div>
  );
};
