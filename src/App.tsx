import React from 'react';
import { Rocket, Twitter, MessageCircle, Heart, TrendingUp, Users, Shield, Star, Zap, Target } from 'lucide-react';
import MetricsSection from './components/MetricsSection';
import FloatingElements from './components/FloatingElements';
import FAQ from './components/FAQ';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-purple-50">
      <FloatingElements />
      
      {/* Banner Header */}
      <div className="relative overflow-hidden shadow-lg">
        <img 
          src="/ruggedrats-banner.png" 
          alt="RuggedRats Banner" 
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Hero CTA Section */}
        <section className="text-center mb-16">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-3xl p-8 mb-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Fredoka One, cursive' }}>
                🚀 Join the Degen Revolution!
              </h2>
              <p className="text-lg mb-6 opacity-90">
                Don't miss out on the next big meme coin. RuggedRats is launching soon!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="https://pump.fun/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-pulse"
                >
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                    SOON
                  </span>
                  <Rocket className="w-5 h-5 inline mr-2" />
                  Buy on Pump.fun
                </a>
                <div className="flex gap-2">
                  <a 
                    href="https://x.com/RuggedRatsToken" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-6 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105"
                  >
                    <Twitter className="w-5 h-5 inline mr-2" />
                    Follow
                  </a>
                  <a 
                    href="https://t.me/+9w1oqxqlA1NhNGRh" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-6 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105"
                  >
                    <MessageCircle className="w-5 h-5 inline mr-2" />
                    Join TG
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-8" style={{ fontFamily: 'Fredoka One, cursive' }}>
            About RuggedRats
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 font-medium">
              Born in the bear. Raised on rugs. 💥 <br />
              <span className="block mt-4">
                RuggedRats is the first daycare for degens who've seen too many red candles and lost too many bags.
              </span>
              <span className="block mt-4">
                Here, we don't cry over rugs — we build memes, form tribes, and pump harder than ever.
              </span>
            </p>
          </div>
        </section>

        {/* Why RuggedRats Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-12 text-center" style={{ fontFamily: 'Fredoka One, cursive' }}>
            Why Choose RuggedRats?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-yellow-200 hover:shadow-xl transition-all duration-300 hover:scale-105 group">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full p-4 w-fit mx-auto mb-6 group-hover:animate-bounce">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-purple-700 mb-4 text-center" style={{ fontFamily: 'Fredoka One, cursive' }}>
                Rug Rehab
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Safe haven for rug victims, Degen daycare on Solana. Powered by pain, memes & $RUGRAT.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-purple-200 hover:shadow-xl transition-all duration-300 hover:scale-105 group">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-full p-4 w-fit mx-auto mb-6 group-hover:animate-bounce">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-purple-700 mb-4 text-center" style={{ fontFamily: 'Fredoka One, cursive' }}>
                Strong Community
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Built by degens, for degens. Our community understands the game and plays it right.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-pink-200 hover:shadow-xl transition-all duration-300 hover:scale-105 group">
              <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-full p-4 w-fit mx-auto mb-6 group-hover:animate-bounce">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-purple-700 mb-4 text-center" style={{ fontFamily: 'Fredoka One, cursive' }}>
                Moon Mission
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                From daycare to moon base. We're not just surviving - we're thriving and pumping hard.
              </p>
            </div>
          </div>
        </section>

        {/* Enroll Section with Metrics */}
        <section className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ fontFamily: 'Fredoka One, cursive' }}>
            Enroll in Degen Daycare today
          </h2>
          <MetricsSection />
        </section>
      </main>

        {/* Social Proof Section */}
        <section className="mb-16 text-center">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-8 border-2 border-green-200">
            <h3 className="text-2xl font-bold text-green-700 mb-6" style={{ fontFamily: 'Fredoka One, cursive' }}>
              🔥 What the Community Says
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex justify-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-3">
                  "I tried to sell $RUGRAT... but my hands too smol. still holdin"
                </p>
                <p className="text-sm font-semibold text-purple-600">- SmolHands</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex justify-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-3">
                  "milk bottles full of alpha. sippy cup full of Lambo juice"
                </p>
                <p className="text-sm font-semibold text-purple-600">- AlphaBaby</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex justify-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-3">
                  "Not financial advice, I'm literally 2 years old."
                </p>
                <p className="text-sm font-semibold text-purple-600">- ToddlerTrader</p>
              </div>
            </div>
          </div>
        </section>


      {/* FAQ Section */}
      <FAQ />

      {/* Footer */}
      <footer className="bg-gray-100 border-t-2 border-yellow-300 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Heart className="w-5 h-5 text-red-500" />
            <span className="text-gray-600 font-medium">
              © 2024 RuggedRats. No rugs here — just hugs.
            </span>
            <Heart className="w-5 h-5 text-red-500" />
          </div>
          <p className="text-sm text-gray-500">
            Built by degens, for degens. DYOR and invest responsibly.
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center gap-4 mt-6">
            <a 
              href="https://x.com/RuggedRatsToken" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full transition-colors duration-200"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a 
              href="https://t.me/+9w1oqxqlA1NhNGRh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-cyan-500 hover:bg-cyan-600 text-white p-3 rounded-full transition-colors duration-200"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;