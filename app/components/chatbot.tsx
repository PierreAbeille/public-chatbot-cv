"use client";

import { useRef, useEffect } from "react";
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";
import { useChat } from "ai/react"
import Markdown from "react-markdown";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";


export const ChatBot = () => {
  const placeholders = [
    "Que sais-tu faire ?",
    "Parles-moi de tes expériences",
    "Tu as des passions ?",
    "Quels sont tes projets ?",
    "Quels sont tes objectifs ?",
  ];

  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/openai",
  });

  const chatContainer = useRef<HTMLDivElement>(null);
  const responseContainer = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    const { scrollHeight, clientHeight } =
      responseContainer.current as HTMLDivElement;
    responseContainer.current?.scrollTo(0, scrollHeight - clientHeight);
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const renderResponse = () => {
    return (
      <div
        ref={responseContainer}
        className="response sm:p-4 z-20 max-h-[93%] w-full overflow-auto"
      >
        {messages.map((message, index) => (
          <div
            key={message.id}
            className={`message flex gap-2 mb-8 justify-start items-start lg:px-10 ${
              message.role === "user" ? "flex-row" : "flex-row-reverse"
            }`}
          >
            <div className="avatar w-10 flex justify-center items-center">
              <Avatar>
                <AvatarImage
                  src={message.role === "user" ? "/userpp.png" : "/iapp.png"}
                  alt="avatar"
                />
                <AvatarFallback>🕵️‍♂️</AvatarFallback>
              </Avatar>
            </div>
            <div className="content mx-2 pb-6 sm:pb-2 max-w-10/12">
              <div
                className={`message prose prose-h1:text-4xl prose-h1:text-green prose-p:text-base prose-strong:text-blue prose-ul:list-decimal prose-ul:text-dark ${
                  message.role === "user"
                    ? "bg-green-cv py-2 px-4 rounded-full text-white font-semibold"
                    : "text-black-cv"
                }`}
              >
                <Markdown>{message.content}</Markdown>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div
      ref={chatContainer}
      className="chat w-full h-full bg-creme-cv bg-dot-black/[0.2] relative flex flex-col items-center justify-start gap-4"
    >
      {renderResponse()}
      <span className="absolute bottom-4 mb-4 z-20 w-full h-12">
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleInputChange}
          onSubmit={handleSubmit}
        />
      </span>
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-creme-cv [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <span
        className={`${
          messages.length < 1
            ? "md:hidden text-4xl text-balance text-center font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 to-neutral-700 py-8"
            : "hidden"
        }`}
      >
        <h3 className="text-black-cv">
          🤖 <br />
        </h3>
        Discutez avec mon clone virtuel <br /> ⬇
      </span>
    </div>
  );
};
