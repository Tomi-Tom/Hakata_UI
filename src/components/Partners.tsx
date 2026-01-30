import { motion } from 'framer-motion';
import { Building, Users, Award, TrendingUp } from 'lucide-react';

export function Partners() {
  const stats = [
    { icon: Building, value: '500+', label: 'Clients actifs' },
    { icon: Users, value: '50+', label: 'Partenaires certifiés' },
    { icon: Award, value: '98%', label: 'Satisfaction client' },
    { icon: TrendingUp, value: '15+', label: 'Années d\'expertise' },
  ];

  // Partner categories
  const partnerCategories = [
    {
      title: 'Grands Comptes',
      items: ['CAC 40', 'Banques', 'Assurances', 'Télécoms'],
    },
    {
      title: 'Secteur Public',
      items: ['Ministères', 'Collectivités', 'Établissements publics', 'Hôpitaux'],
    },
    {
      title: 'PME/ETI',
      items: ['Industrie', 'Logistique', 'Commerce', 'Services'],
    },
  ];

  return (
    <section id="partenaires" className="py-24 bg-[#fafafa] relative overflow-hidden">
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
              <Users className="w-4 h-4 text-[#76b900]" />
              <span className="text-[#76b900] text-sm">Nos clients</span>
            </div>
          </motion.div>
          <h2 className="text-4xl md:text-5xl mb-4 text-[#0a0a0a]">
            Ils Nous Font <span className="text-[#76b900]">Confiance</span>
          </h2>
          <p className="text-lg text-[#525252] max-w-3xl mx-auto">
            Plus de 500 organisations protègent leurs actifs avec nos solutions
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -2 }}
              className="relative group"
            >
              <div className="bg-white border border-[#e5e5e5] rounded-xl p-8 text-center transition-all duration-300 group-hover:border-[#76b900]/40 group-hover:shadow-lg group-hover:shadow-[#76b900]/5">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-14 h-14 bg-[#76b900]/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#76b900]/15 transition-colors"
                >
                  <stat.icon className="w-7 h-7 text-[#76b900]" />
                </motion.div>
                <div className="text-3xl text-[#76b900] mb-2">{stat.value}</div>
                <div className="text-[#525252] text-sm">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partner Categories */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {partnerCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative group"
            >
              <div className="bg-white border border-[#e5e5e5] rounded-xl p-8 transition-all duration-300 hover:border-[#76b900]/40 hover:shadow-lg hover:shadow-[#76b900]/5">
                <h3 className="text-xl mb-6 text-center text-[#0a0a0a]">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.items.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + i * 0.1 }}
                      className="flex items-center space-x-3 text-[#525252] hover:text-[#76b900] transition-colors text-sm"
                    >
                      <div className="w-1.5 h-1.5 bg-[#76b900] rounded-full flex-shrink-0" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Logo Marquee Simulation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="relative overflow-hidden py-12">
            <div className="absolute inset-0 bg-gradient-to-r from-[#fafafa] via-transparent to-[#fafafa] z-10" />
            <motion.div
              animate={{
                x: [0, -1000],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="flex space-x-16"
            >
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-32 h-16 bg-white border border-[#e5e5e5] rounded-lg flex items-center justify-center"
                >
                  <Building className="w-8 h-8 text-[#76b900]/30" />
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Testimonial Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-[#76b900]/5 to-transparent border border-[#76b900]/20 rounded-2xl p-8 md:p-12">
            <div className="flex items-start space-x-4 mb-6">
              <div className="text-[#76b900] text-5xl leading-none">"</div>
              <div>
                <p className="text-lg text-[#0a0a0a] mb-6 leading-relaxed">
                  Les solutions Hakata ont transformé la gestion de nos accès et sécurisé 
                  nos infrastructures critiques. Un partenaire fiable et réactif.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#76b900]/15 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-[#76b900]" />
                  </div>
                  <div>
                    <div className="text-[#0a0a0a]">Direction Sécurité</div>
                    <div className="text-[#525252] text-sm">Groupe industriel international</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
