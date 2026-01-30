import { motion } from 'framer-motion';
import { Building2, Factory, ShoppingBag, Home, GraduationCap, Hospital, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export function Solutions() {
  const [activeTab, setActiveTab] = useState(0);

  const navigateToQuote = () => {
    window.dispatchEvent(new CustomEvent('navigate-to-quote'));
  };

  const solutions = [
    {
      icon: Building2,
      title: 'Bureaux & Entreprises',
      description: 'Sécurisez vos locaux professionnels avec des solutions modulaires',
      benefits: [
        'Contrôle d\'accès multi-sites',
        'Casiers intelligents pour personnel',
        'Surveillance périmétrique',
        'Intégration badges & biométrie',
      ],
      color: '#76b900',
    },
    {
      icon: Factory,
      title: 'Industrie & Logistique',
      description: 'Protection renforcée pour zones sensibles et stocks stratégiques',
      benefits: [
        'Haute résistance aux chocs',
        'Traçabilité des équipements',
        'Zones ATEX compatibles',
        'Alarmes anti-intrusion',
      ],
      color: '#8dd100',
    },
    {
      icon: ShoppingBag,
      title: 'Commerce & Retail',
      description: 'Solutions discrètes et efficaces pour points de vente',
      benefits: [
        'Casiers click & collect',
        'Systèmes anti-vol',
        'Vidéosurveillance analytics',
        'Comptage de flux',
      ],
      color: '#76b900',
    },
    {
      icon: Home,
      title: 'Résidentiel Haut de Gamme',
      description: 'Confort et sécurité pour résidences et copropriétés',
      benefits: [
        'Interphones vidéo IP',
        'Casiers colis sécurisés',
        'Contrôle smartphone',
        'Design premium',
      ],
      color: '#8dd100',
    },
    {
      icon: GraduationCap,
      title: 'Éducation',
      description: 'Protection des établissements scolaires et universitaires',
      benefits: [
        'Casiers étudiants',
        'Gestion des accès horaires',
        'Vidéo-protection RGPD',
        'Alarmes incendie intégrées',
      ],
      color: '#76b900',
    },
    {
      icon: Hospital,
      title: 'Santé',
      description: 'Conformité et hygiène pour environnements médicaux',
      benefits: [
        'Zones stériles compatibles',
        'Traçabilité médicaments',
        'Accès limités personnalisés',
        'Normes ISO 9001',
      ],
      color: '#8dd100',
    },
  ];

  return (
    <>
      <section id="solutions" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block mb-4"
            >
              <div className="flex items-center space-x-2 bg-[#76b900]/10 border border-[#76b900]/20 rounded-full px-6 py-2">
                <Building2 className="w-4 h-4 text-[#76b900]" />
                <span className="text-[#76b900] text-sm">Secteurs d'activité</span>
              </div>
            </motion.div>
            <h2 className="text-4xl md:text-5xl mb-4 text-white">
              Solutions <span className="text-[#76b900]">Sur Mesure</span>
            </h2>
            <p className="text-lg text-white/60 max-w-3xl mx-auto">
              Expertise sectorielle et adaptation aux contraintes spécifiques de votre activité
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {solutions.map((solution, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveTab(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center space-x-2 px-5 py-2.5 rounded-full transition-all duration-300 text-sm ${
                  activeTab === index
                    ? 'bg-[#76b900] text-black shadow-lg shadow-[#76b900]/20'
                    : 'bg-[#171717] text-white/60 hover:text-white border border-[#262626] hover:border-[#76b900]/30'
                }`}
              >
                <solution.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{solution.title}</span>
              </motion.button>
            ))}
          </div>

          {/* Active Solution Display */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-[#171717] border border-[#262626] rounded-2xl p-8 md:p-12 shadow-2xl">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left: Content */}
                <div>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-14 h-14 bg-[#76b900]/10 rounded-xl flex items-center justify-center border border-[#76b900]/20">
                      {(() => {
                        const Icon = solutions[activeTab].icon;
                        return <Icon className="w-7 h-7 text-[#76b900]" />;
                      })()}
                    </div>
                    <div>
                      <h3 className="text-2xl mb-2 text-white">{solutions[activeTab].title}</h3>
                      <div className="h-0.5 w-16 bg-[#76b900] rounded-full" />
                    </div>
                  </div>

                  <p className="text-base text-white/70 mb-8 leading-relaxed">
                    {solutions[activeTab].description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {solutions[activeTab].benefits.map((benefit, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <div className="w-5 h-5 bg-[#76b900]/15 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 border border-[#76b900]/20">
                          <div className="w-1.5 h-1.5 bg-[#76b900] rounded-full" />
                        </div>
                        <span className="text-white/80 text-sm">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={navigateToQuote}
                    className="group px-8 py-3.5 bg-[#76b900] text-black rounded-full hover:bg-[#8dd100] transition-all duration-300 inline-flex items-center space-x-2 text-sm shadow-lg shadow-[#76b900]/20"
                  >
                    <span>Discuter de votre projet</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>

                {/* Right: Visual */}
                <div className="relative hidden md:block">
                  <motion.div
                    animate={{
                      rotate: [0, 3, 0, -3, 0],
                      scale: [1, 1.02, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="relative"
                  >
                    <div className="w-64 h-64 mx-auto bg-gradient-to-br from-[#76b900]/10 to-transparent rounded-2xl rotate-6 border border-[#76b900]/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      {(() => {
                        const Icon = solutions[activeTab].icon;
                        return <Icon className="w-28 h-28 text-[#76b900]" />;
                      })()}
                    </div>
                  </motion.div>

                  {/* Orbiting Elements */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        rotate: 360,
                      }}
                      transition={{
                        duration: 8 + i * 2,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                      className="absolute top-1/2 left-1/2 w-full h-full"
                      style={{ transformOrigin: 'center' }}
                    >
                      <div
                        className="absolute w-2 h-2 bg-[#76b900] rounded-full"
                        style={{
                          top: `${30 + i * 15}%`,
                          left: '50%',
                        }}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
