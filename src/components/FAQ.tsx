import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is RuggedRats?",
      answer: "RuggedRats is a community-driven meme coin on Solana for degens who've been rugged before. We're building a safe space (daycare) for crypto veterans to rebuild and pump together."
    },
    {
      question: "How do I buy RuggedRats tokens?",
      answer: "Once launched, you can buy RuggedRats on Pump.fun or other Solana DEXs. Make sure to use the official contract address and always DYOR before investing."
    },
    {
      question: "Is this a safe investment?",
      answer: "RuggedRats has been created to be a safe haven. However, all crypto investments carry risk. Only invest what you can afford to lose."
    },
    {
      question: "What makes RuggedRats different?",
      answer: "We're built by degens, for degens. Our community understands the pain of rugs and is committed to creating something different - a project with transparency, humor, and genuine community spirit."
    },
    {
      question: "How can I join the community?",
      answer: "Join our Telegram group and follow us on X (Twitter). We're always welcoming new rats to the daycare! Participate in discussions, share memes, and help grow the community."
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <HelpCircle className="w-8 h-8 text-purple-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-purple-700" style={{ fontFamily: 'Fredoka One, cursive' }}>
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Got questions? We've got answers. Everything you need to know about RuggedRats.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl border-2 border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-bold text-gray-800" style={{ fontFamily: 'Fredoka One, cursive' }}>
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-purple-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-purple-600 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-yellow-100 border-2 border-yellow-300 rounded-2xl p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-yellow-800 mb-2" style={{ fontFamily: 'Fredoka One, cursive' }}>
              ⚠️ Important Disclaimer
            </h3>
            <p className="text-yellow-700 text-sm">
              RuggedRats is a meme coin created for entertainment purposes. Cryptocurrency investments are highly risky and volatile. 
              Never invest more than you can afford to lose. Always do your own research (DYOR) before making any investment decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;