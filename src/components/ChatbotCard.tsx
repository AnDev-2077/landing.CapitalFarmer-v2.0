import React from 'react';
import { Send, Bot, User } from 'lucide-react';

const ChatbotCard = () => {
  return (
    <div className="glass-panel p-6 rounded-2xl border border-[rgba(255,255,255,0.1)] bg-[rgba(20,20,30,0.6)] backdrop-blur-xl shadow-2xl">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6 border-b border-[rgba(255,255,255,0.05)] pb-4">
        <div className="w-10 h-10 rounded-full bg-[var(--brand-primary)] flex items-center justify-center shadow-[0_0_15px_rgba(var(--brand-primary-rgb),0.3)]">
          <Bot size={20} className="text-white" />
        </div>
        <div>
          <h3 className="text-white font-semibold">Legal AI Assistant</h3>
          <p className="text-xs text-[var(--text-muted)] flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Online
          </p>
        </div>
      </div>

      {/* Chat Area */}
      <div className="space-y-4 mb-6">
        {/* Bot Message */}
        <div className="flex gap-3">
          <div className="w-8 h-8 rounded-full bg-[rgba(255,255,255,0.05)] flex items-center justify-center flex-shrink-0">
            <Bot size={14} className="text-[var(--text-secondary)]" />
          </div>
          <div className="bg-[rgba(255,255,255,0.05)] p-3 rounded-2xl rounded-tl-none text-sm text-[var(--text-secondary)]">
            <p>Hello! I'm your AI legal assistant. How can I help you navigate your legal questions today?</p>
          </div>
        </div>

        {/* User Message */}
        <div className="flex gap-3 flex-row-reverse">
          <div className="w-8 h-8 rounded-full bg-[var(--brand-primary)] flex items-center justify-center flex-shrink-0">
            <User size={14} className="text-white" />
          </div>
          <div className="bg-[var(--brand-primary)] p-3 rounded-2xl rounded-tr-none text-sm text-white">
            <p>I need help reviewing a contract.</p>
          </div>
        </div>
        
         {/* Bot Message */}
        <div className="flex gap-3">
          <div className="w-8 h-8 rounded-full bg-[rgba(255,255,255,0.05)] flex items-center justify-center flex-shrink-0">
            <Bot size={14} className="text-[var(--text-secondary)]" />
          </div>
          <div className="bg-[rgba(255,255,255,0.05)] p-3 rounded-2xl rounded-tl-none text-sm text-[var(--text-secondary)]">
            <p>I can certainly help with that. Please upload the document or paste the text here.</p>
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="relative">
        <input 
          type="text" 
          placeholder="Type your message..." 
          className="w-full bg-[rgba(0,0,0,0.2)] border border-[rgba(255,255,255,0.1)] rounded-xl py-3 px-4 text-sm text-white placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--brand-primary)] transition-colors"
        />
        <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-lg bg-[var(--brand-primary)] text-white hover:bg-opacity-90 transition-opacity">
          <Send size={16} />
        </button>
      </div>
    </div>
  );
};

export default ChatbotCard;
