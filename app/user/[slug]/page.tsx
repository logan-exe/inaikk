// components/MainPage.tsx
"use client";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
const sampleMessages = [
  {
    id: 1,
    sender: "user",
    content: "Hello! How are you?",
  },
  {
    id: 2,
    sender: "stranger",
    content: "I'm good, thank you! How about you?",
  },
];

export default function Page({ params }: { params: { slug: string } }) {
  const [messages, setMessages] = useState(sampleMessages);
  const [currentMessage, setCurrentMessage] = useState<string>("");

  const handleSendMessage = () => {
    if (currentMessage.trim()) {
      const newMessage = {
        id: messages.length + 1,
        sender: "user",
        content: currentMessage.trim(),
      };
      setMessages([...messages, newMessage]);
      setCurrentMessage("");
    }
  };

  return (
    <div className="h-screen px-4">
      <div className="flex justify-center align-center my-2">
        <Logo />
      </div>

      <div className="flex flex-col md:flex-row p-4 border-2">
        {/* Video section */}
        <div className="flex-1 flex flex-col space-y-4 mb-4 md:mb-0">
          <video
            className="flex-1 bg-black"
            id="yourVideo"
            controls
            muted
          ></video>
          <video
            className="flex-1 bg-black"
            id="strangerVideo"
            controls
          ></video>
        </div>

        {/* Chat section */}
        <div className="flex-1  p-4">
          <div className="flex flex-col h-full">
            <div id="messages" className="flex-1 overflow-y-scroll">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`border mb-2 p-2 rounded ${
                    message.sender === "user" ? "bg-white" : "bg-gray-200"
                  }`}
                >
                  <strong>
                    {message.sender === "user" ? "You: " : "Stranger: "}
                  </strong>{" "}
                  {message.content}
                </div>
              ))}
            </div>
            <div className="border-t mt-4 pt-4">
              <textarea
                placeholder="Type a message..."
                className="w-full p-2 border"
              />
              <Button className="mt-2">Send</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
