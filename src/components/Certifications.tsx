import { motion } from 'framer-motion';
import { Award, Shield, CheckCircle2, Lock, FileCheck, Database } from 'lucide-react';

export function Certifications() {
  const certifications = [
    {
      icon: Award,
      title: 'CE',
      description: 'Conformité Européenne',
      details: 'Normes européennes de sécurité',
    },
    {
      icon: Shield,
      title: 'NF',
      description: 'Norme Française',
      details: 'Qualité et fiabilité garanties',
    },
    {
      icon: Lock,
      title: 'A2P',
      description: 'Alarme Protection Prévention',
      details: 'Certification anti-intrusion',
    },
    {
      icon: CheckCircle2,
      title: 'ISO 9001',
      description: 'Management de la Qualité',
      details: 'Processus optimisés',
    },
    {
      icon: FileCheck,
      title: 'APSAD',
      description: 'Assemblée Plénière des Sociétés d\'Assurances Dommages',
      details: 'Règles de sécurité incendie',
    },
    {
      icon: Database,
      title: 'RGPD',
      description: 'Règlement Général sur la Protection des Données',
      details: 'Conformité données personnelles',
    },
  ];

  return (
    <section id="certifications" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
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
              <Award className="w-4 h-4 text-[#76b900]" />
              <span className="text-[#76b900] text-sm">Qualité & Conformité</span>
            </div>
          </motion.div>
          <h2 className="text-4xl md:text-5xl mb-4 text-white">
            Certifications & <span className="text-[#76b900]">Normes</span>
          </h2>
          <p className="text-lg text-white/60 max-w-3xl mx-auto">
            Des produits certifiés conformes aux plus hauts standards de sécurité et de qualité
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -2 }}
              className="group relative"
            >
              <div className="relative h-full bg-[#171717] border border-[#262626] rounded-xl p-8 transition-all duration-300 group-hover:border-[#76b900]/50 group-hover:shadow-lg group-hover:shadow-[#76b900]/10">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="w-16 h-16 bg-[#76b900]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#76b900]/20 group-hover:shadow-[0_0_20px_rgba(118,185,0,0.3)] transition-all mx-auto border border-[#76b900]/20 group-hover:border-[#76b900]/40"
                >
                  <cert.icon className="w-8 h-8 text-[#76b900]" />
                </motion.div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl mb-2 text-[#76b900]">{cert.title}</h3>
                  <p className="text-white/80 mb-3 text-sm">{cert.description}</p>
                  <p className="text-xs text-white/50">{cert.details}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 pt-16 border-t border-[#262626]"
        >
          <div className="flex flex-wrap justify-center items-center gap-12">
            {[
              'Garantie 3 ans',
              'Made in Europe',
              'Support 24/7',
              'Installation pro',
            ].map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 text-white/50 hover:text-[#76b900] transition-colors"
              >
                <CheckCircle2 className="w-5 h-5 text-[#76b900]" />
                <span className="text-sm">{badge}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
