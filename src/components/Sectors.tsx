import { motion } from 'framer-motion';
import { Building2, Factory, ShoppingBag, GraduationCap, Hospital, Home, MapPin, ArrowRight } from 'lucide-react';

export function Sectors() {
  const navigateToQuote = () => {
    window.dispatchEvent(new CustomEvent('navigate-to-quote'));
  };

  const sectors = [
    {
      icon: Building2,
      name: 'Tertiaire',
      description: 'Bureaux, immeubles, centres d\'affaires',
    },
    {
      icon: Factory,
      name: 'Industriel',
      description: 'Usines, entrepôts, sites logistiques',
    },
    {
      icon: ShoppingBag,
      name: 'Retail',
      description: 'Magasins, centres commerciaux',
    },
    {
      icon: GraduationCap,
      name: 'Éducation',
      description: 'Écoles, universités, campus',
    },
    {
      icon: Hospital,
      name: 'Santé',
      description: 'Hôpitaux, cliniques, EHPAD',
    },
    {
      icon: Home,
      name: 'Résidentiel',
      description: 'Immeubles, résidences, copropriétés',
    },
  ];

  return (
    <>
      <section className="py-24 bg-[#fafafa] relative overflow-hidden">
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
                <MapPin className="w-4 h-4 text-[#76b900]" />
                <span className="text-[#76b900] text-sm">Nos domaines</span>
              </div>
            </motion.div>
            <h2 className="text-4xl md:text-5xl mb-4 text-[#0a0a0a]">
              Secteurs d'<span className="text-[#76b900]">Activité</span>
            </h2>
            <p className="text-lg text-[#525252] max-w-3xl mx-auto">
              Une expertise transversale adaptée aux spécificités de chaque secteur
            </p>
          </motion.div>

          {/* Sectors Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
            {sectors.map((sector, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="group relative"
              >
                <div className="relative h-full bg-white border border-[#e5e5e5] rounded-xl p-8 transition-all duration-300 group-hover:border-[#76b900]/40 group-hover:shadow-lg group-hover:shadow-[#76b900]/5">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="w-14 h-14 bg-[#76b900]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#76b900]/15 transition-colors"
                  >
                    <sector.icon className="w-7 h-7 text-[#76b900]" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl mb-3 text-[#0a0a0a] group-hover:text-[#76b900] transition-colors">
                    {sector.name}
                  </h3>
                  <p className="text-[#525252] mb-4 text-sm">{sector.description}</p>

                  {/* Hover Arrow */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="flex items-center space-x-2 text-[#76b900] text-sm"
                  >
                    <span>En savoir plus</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#76b900]/5 to-transparent border border-[#76b900]/20 rounded-2xl p-12">
              <h3 className="text-3xl md:text-4xl mb-6 text-[#0a0a0a]">
                Prêt à sécuriser votre infrastructure ?
              </h3>
              <p className="text-lg text-[#525252] mb-8 max-w-2xl mx-auto">
                Nos experts analysent vos besoins et vous proposent une solution sur mesure, 
                adaptée à votre secteur et à vos contraintes.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={navigateToQuote}
                  className="group px-10 py-4 bg-[#76b900] text-black rounded-full hover:bg-[#8dd100] transition-all duration-300 inline-flex items-center space-x-3 shadow-lg shadow-[#76b900]/20"
                >
                  <span className="text-base">Demander un devis gratuit</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <motion.a
                  href="tel:+33123456789"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-4 border-2 border-[#76b900] text-[#76b900] rounded-full hover:bg-[#76b900] hover:text-black transition-all duration-300 inline-flex items-center space-x-3"
                >
                  <span className="text-base">+33 1 23 45 67 89</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
