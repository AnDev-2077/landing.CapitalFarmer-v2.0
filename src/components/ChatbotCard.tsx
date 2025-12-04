"use client";

import React, { useState, useRef, useEffect } from "react";
import { Send, Sparkles, Loader2, Bot, User } from "lucide-react";
import { Message, LoadingState } from "../types/types";
import { sendMessageAction } from "../actions/chatAction";

export const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "model",
      content:
        "Hola. Soy tu asistente legal con IA. ¿Cómo puedo ayudarte a resolver tus dudas legales hoy?",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [loadingState, setLoadingState] = useState<LoadingState>(
    LoadingState.IDLE
  );
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loadingState]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || loadingState !== LoadingState.IDLE) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setLoadingState(LoadingState.LOADING);

    try {
      const stream = await sendMessageAction(userMsg.content);
      setLoadingState(LoadingState.STREAMING);

      let fullResponseText = "";
      const responseId = (Date.now() + 1).toString();

      // Initialize empty model message
      setMessages((prev) => [
        ...prev,
        { id: responseId, role: "model", content: "", timestamp: new Date() },
      ]);

      for await (const text of stream) {
        if (text) {
          fullResponseText += text;
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === responseId
                ? { ...msg, content: fullResponseText }
                : msg
            )
          );
        }
      }
      setLoadingState(LoadingState.IDLE);
    } catch (error) {
      console.error("Chat error", error);
      setLoadingState(LoadingState.ERROR);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          role: "model",
          content:
            "Disculpe, pero tengo un problema de conexión. Inténtelo de nuevo más tarde.",
          timestamp: new Date(),
        },
      ]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const placeholders = [
    "Haga una pregunta legal...",
    "¿Necesita asesoría jurídica?",
    "Consulte sobre contratos...",
  ];

  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    const currentText = placeholders[index];

    const timeout = setTimeout(
      () => {
        if (!isDeleting && text.length < currentText.length) {
          setText(currentText.slice(0, text.length + 1));
        } else if (!isDeleting && text.length === currentText.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && text.length > 0) {
          setText(text.slice(0, -1));
        } else if (isDeleting && text.length === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % placeholders.length);
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    <div className="glass-panel rounded-2xl overflow-hidden flex flex-col h-[500px] w-full max-w-lg mx-auto shadow-2xl shadow-green-900/20 border border-white/10 relative bg-[rgba(20,20,30,0.6)] backdrop-blur-xl">
      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-[80px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-500/10 rounded-full blur-[80px] -z-10 pointer-events-none"></div>

      {/* Header */}
      <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between bg-white/5">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-2 h-2 absolute top-0 right-0 bg-green-400 rounded-full shadow-[0_0_8px_rgba(74,222,128,0.8)]"></div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[var(--brand-dark-1)] to-[var(--brand-dark-2)] flex items-center justify-center border border-white/10">
              <Sparkles className="w-5 h-5 text-[var(--text-primary)]" />
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wide">
              AI Legal
            </h3>
            <p className="text-xs text-slate-400">Asistente AI • En Linea</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[85%] flex gap-3 ${
                msg.role === "user" ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center bg-slate-700/50 text-slate-300`}
              >
                {msg.role === "user" ? <User size={14} /> : <Bot size={14} />}
              </div>
              <div
                className={`p-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "bg-[var(--brand-primary)] text-black shadow-lg shadow-green-900/20"
                    : "bg-white/5 text-slate-200 border border-white/5"
                }`}
              >
                {msg.content}
              </div>
            </div>
          </div>
        ))}
        {loadingState === LoadingState.LOADING && (
          <div className="flex justify-start">
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center bg-slate-700/50 text-slate-300">
                <Bot size={14} />
              </div>
              <div className="bg-white/5 p-4 rounded-2xl border border-white/5 flex items-center space-x-2">
                <div
                  className="w-2 h-2 bg-[var(--brand-primary)] rounded-full animate-bounce"
                  style={{ animationDelay: "0ms" }}
                ></div>
                <div
                  className="w-2 h-2 bg-[var(--brand-primary)] rounded-full animate-bounce"
                  style={{ animationDelay: "150ms" }}
                ></div>
                <div
                  className="w-2 h-2 bg-[var(--brand-primary)] rounded-full animate-bounce"
                  style={{ animationDelay: "300ms" }}
                ></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-white/5 bg-black/20">
        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={text}
            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-4 pr-12 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[var(--brand-primary)]/50 focus:bg-white/10 transition-all"
            disabled={
              loadingState === LoadingState.LOADING ||
              loadingState === LoadingState.STREAMING
            }
          />
          <button
            onClick={handleSendMessage}
            disabled={
              !inputValue.trim() ||
              loadingState === LoadingState.LOADING ||
              loadingState === LoadingState.STREAMING
            }
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-[var(--brand-primary)] hover:bg-white hover:text-black rounded-lg text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loadingState === LoadingState.LOADING ||
            loadingState === LoadingState.STREAMING ? (
              <Loader2 size={16} className="animate-spin" />
            ) : (
              <Send size={16} />
            )}
          </button>
        </div>
        <p className="text-center text-[10px] text-slate-600 mt-2">
          Las respuestas de IA son sólo para fines informativos y no
          asesoramiento legal.
        </p>
      </div>
    </div>
  );
};
