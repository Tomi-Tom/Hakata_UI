import { motion } from 'framer-motion';
import { Shield, ArrowRight, Fingerprint, Lock, Eye, Radio } from 'lucide-react';

export function Hero() {
  const floatingIcons = [
    { Icon: Shield, delay: 0, x: -20, y: -30 },
    { Icon: Fingerprint, delay: 0.2, x: 30, y: -20 },
    { Icon: Lock, delay: 0.4, x: -30, y: 20 },
    { Icon: Eye, delay: 0.6, x: 20, y: 30 },
  ];

  const navigateToQuote = () => {
    // Trigger navigation by dispatching a custom event
    window.dispatchEvent(new CustomEvent('navigate-to-quote'));
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0a] pt-24">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#76b900 1px, transparent 1px), linear-gradient(90deg, #76b900 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
      </div>

      {/* Glowing Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#76b900] rounded-full blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#76b900] rounded-full blur-[120px]"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6"
            >
              <div className="flex items-center space-x-2 bg-[#76b900]/10 border border-[#76b900]/30 rounded-full px-6 py-2">
                <Radio className="w-4 h-4 text-[#76b900]" />
                <span className="text-[#76b900] text-sm">Technologie de pointe</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl mb-6 leading-tight"
            >
              Sécurité{' '}
              <span className="text-[#76b900] relative inline-block">
                Physique
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute bottom-0 left-0 h-0.5 bg-[#76b900]"
                />
              </span>
              <br />
              Redéfinie
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-white/70 mb-8 max-w-xl leading-relaxed"
            >
              Solutions matérielles innovantes pour la protection de vos actifs : 
              casiers, alarmes, cadenas, contrôle d'accès, caméras et systèmes intégrés.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={navigateToQuote}
                className="group px-8 py-4 bg-[#76b900] text-black rounded-full hover:bg-[#8dd100] transition-all duration-300 flex items-center space-x-2 relative overflow-hidden shadow-lg shadow-[#76b900]/20"
              >
                <span className="relative z-10">Demander un devis</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  document.getElementById('produits')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 border-2 border-[#76b900] text-[#76b900] rounded-full hover:bg-[#76b900] hover:text-black transition-all duration-300"
              >
                Découvrir nos solutions
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-[#262626]"
            >
              {[
                { value: '15+', label: 'Ans d\'expérience' },
                { value: '500+', label: 'Clients satisfaits' },
                { value: '99.9%', label: 'Disponibilité' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  className="text-center"
                >
                  <div className="text-2xl text-[#76b900] mb-2">{stat.value}</div>
                  <div className="text-sm text-white/50">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative hidden lg:block"
          >
            {/* Central Icon */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="relative w-80 h-80 mx-auto"
            >
              <div className="absolute inset-0 rounded-full border-2 border-[#76b900]/30" />
              <div className="absolute inset-8 rounded-full border-2 border-[#76b900]/20" />
              <div className="absolute inset-16 rounded-full bg-[#76b900]/10 backdrop-blur-sm flex items-center justify-center">
                <Shield className="w-24 h-24 text-[#76b900]" />
              </div>
            </motion.div>

            {/* Floating Icons */}
            {floatingIcons.map(({ Icon, delay, x, y }, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, y, 0],
                  x: [0, x, 0],
                }}
                transition={{
                  opacity: { delay: delay + 0.5 },
                  scale: { delay: delay + 0.5 },
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay },
                  x: { duration: 4, repeat: Infinity, ease: "easeInOut", delay },
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                  marginTop: `${index * 80 - 120}px`,
                  marginLeft: `${(index % 2 ? 1 : -1) * 120}px`,
                }}
              >
                <div className="w-16 h-16 rounded-xl bg-[#171717] border border-[#262626] flex items-center justify-center backdrop-blur-sm">
                  <Icon className="w-8 h-8 text-[#76b900]" />
                </div>
              </motion.div>
            ))}

            {/* Orbiting Particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 10 + i * 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute top-1/2 left-1/2 w-full h-full"
                style={{
                  transformOrigin: 'center',
                }}
              >
                <div
                  className="absolute w-2 h-2 bg-[#76b900] rounded-full"
                  style={{
                    top: `${20 + i * 10}%`,
                    left: '50%',
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-[#76b900] rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-[#76b900] rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}