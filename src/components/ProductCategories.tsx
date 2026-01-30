import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Bell, Key, Fingerprint, Camera, Shield, ArrowRight, X, Check, Zap, Award, Users } from 'lucide-react';
import { useState } from 'react';

interface Product {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  detailedInfo: {
    longDescription: string;
    specifications: string[];
    useCases: string[];
    certifications: string[];
  };
}

export function ProductCategories() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const navigateToQuote = () => {
    window.dispatchEvent(new CustomEvent('navigate-to-quote'));
  };

  const products: Product[] = [
    {
      icon: Lock,
      title: 'Casiers Sécurisés',
      description: 'Solutions de stockage haute sécurité pour environnements professionnels',
      features: ['Verrouillage électronique', 'Traçabilité complète', 'Matériaux renforcés'],
      detailedInfo: {
        longDescription: 'Nos casiers sécurisés offrent une protection optimale pour vos biens et équipements sensibles. Conçus avec des matériaux de haute qualité et équipés de systèmes de verrouillage électronique avancés, ils garantissent une sécurité maximale tout en offrant une traçabilité complète des accès.',
        specifications: [
          'Acier renforcé épaisseur 2-4mm',
          'Serrure électronique RFID/NFC',
          'Système anti-effraction certifié',
          'Interface de gestion centralisée',
          'Compatible badges et smartphones',
          'Historique d\'accès horodaté'
        ],
        useCases: [
          'Stockage d\'équipements sensibles en entreprise',
          'Casiers personnel dans les vestiaires',
          'Conservation de documents confidentiels',
          'Rangement sécurisé dans les data centers'
        ],
        certifications: ['CE', 'ISO 9001', 'Norme EN 14450', 'ANSSI']
      }
    },
    {
      icon: Bell,
      title: 'Systèmes d\'Alarme',
      description: 'Protection périmétrique et intrusion avec alertes en temps réel',
      features: ['Détection intelligente', 'Alertes instantanées', 'Certification A2P'],
      detailedInfo: {
        longDescription: 'Protégez vos locaux avec nos systèmes d\'alarme de dernière génération. Dotés de capteurs intelligents et d\'algorithmes de détection avancés, nos solutions minimisent les fausses alarmes tout en garantissant une réactivité optimale en cas d\'intrusion réelle.',
        specifications: [
          'Détection volumétrique et périphérique',
          'Capteurs sans fil longue portée',
          'Sirène intérieure/extérieure 110dB',
          'Transmission GSM/IP redondante',
          'Application mobile iOS/Android',
          'Batterie de secours 72h'
        ],
        useCases: [
          'Protection des locaux commerciaux',
          'Sécurisation de sites industriels',
          'Surveillance de bureaux hors horaires',
          'Alarme anti-intrusion résidentielle'
        ],
        certifications: ['A2P Type 2', 'NF&A2P', 'CE', 'RoHS']
      }
    },
    {
      icon: Key,
      title: 'Cadenas Intelligents',
      description: 'Cadenas connectés avec gestion centralisée et audit des accès',
      features: ['Bluetooth/NFC', 'Historique d\'accès', 'Gestion à distance'],
      detailedInfo: {
        longDescription: 'Révolutionnez la gestion de vos accès avec nos cadenas intelligents. Éliminez les contraintes des clés physiques et bénéficiez d\'une gestion centralisée avec un suivi précis de tous les accès. Idéal pour les environnements nécessitant une flexibilité maximale.',
        specifications: [
          'Connexion Bluetooth 5.0 et NFC',
          'Autonomie batterie jusqu\'à 2 ans',
          'Résistance aux intempéries IP67',
          'Anse en acier trempé Ø 8-13mm',
          'Déverrouillage par code, badge ou smartphone',
          'Synchronisation cloud automatique'
        ],
        useCases: [
          'Sécurisation de casiers et armoires',
          'Contrôle d\'accès temporaire pour visiteurs',
          'Gestion de flottes de véhicules',
          'Protection d\'équipements en extérieur'
        ],
        certifications: ['CE', 'FCC', 'Bluetooth SIG', 'IP67']
      }
    },
    {
      icon: Fingerprint,
      title: 'Contrôle d\'Accès',
      description: 'Systèmes biométriques et badges pour zones sensibles',
      features: ['Multi-facteurs', 'Biométrie avancée', 'Intégration complète'],
      detailedInfo: {
        longDescription: 'Contrôlez précisément les accès à vos zones sensibles grâce à nos systèmes de contrôle d\'accès avancés. De la simple gestion par badge à l\'authentification biométrique multi-facteurs, nos solutions s\'adaptent à tous les niveaux de sécurité requis.',
        specifications: [
          'Lecteurs biométriques (empreinte, iris, facial)',
          'Authentification multi-facteurs (badge + bio)',
          'Gestion jusqu\'à 100 000 utilisateurs',
          'Intégration Active Directory/LDAP',
          'Zones horaires et profils personnalisés',
          'API REST pour intégration tierces'
        ],
        useCases: [
          'Accès data center et salles serveurs',
          'Zones de production pharmaceutique',
          'Laboratoires de recherche',
          'Accès administratifs d\'entreprises'
        ],
        certifications: ['ISO 27001', 'ANSSI', 'RGPD', 'EN 50133']
      }
    },
    {
      icon: Camera,
      title: 'Caméras IP',
      description: 'Surveillance vidéo haute définition avec IA et analytics',
      features: ['4K/8MP', 'Vision nocturne', 'Analyse comportementale'],
      detailedInfo: {
        longDescription: 'Surveillez vos installations avec la dernière génération de caméras IP intelligentes. Qualité d\'image exceptionnelle, analyses comportementales par IA et détection d\'événements en temps réel pour une sécurité proactive.',
        specifications: [
          'Résolution 4K Ultra HD (8MP)',
          'Vision nocturne infrarouge 50m',
          'Détection IA (personne, véhicule, objet)',
          'Analytics avancés (comptage, chaleur)',
          'Compression H.265+ pour économie bande passante',
          'PoE+ / WiFi 6 / 4G en option'
        ],
        useCases: [
          'Vidéosurveillance périmétrique',
          'Surveillance de parkings et voies d\'accès',
          'Monitoring de zones de production',
          'Analytics retail (comptage, heatmap)'
        ],
        certifications: ['ONVIF', 'NDAA Compliant', 'CE', 'IP67/IK10']
      }
    },
    {
      icon: Shield,
      title: 'Solutions Intégrées',
      description: 'Plateformes complètes sur mesure pour sécurité globale',
      features: ['Architecture évolutive', 'Intégration totale', 'Support 24/7'],
      detailedInfo: {
        longDescription: 'Une plateforme unifiée pour gérer l\'ensemble de votre sécurité. Nos solutions intégrées combinent contrôle d\'accès, vidéosurveillance, alarmes et analytics dans une interface unique, offrant une vision complète et un pilotage centralisé.',
        specifications: [
          'Plateforme VMS unifiée multi-sites',
          'Dashboard centralisé temps réel',
          'Intégration IoT et domotique',
          'Reporting et analytics personnalisés',
          'Architecture redondante haute disponibilité',
          'Support technique et maintenance préventive'
        ],
        useCases: [
          'Gestion multi-sites d\'entreprises',
          'Smart building et bâtiments connectés',
          'Campus universitaires et scolaires',
          'Complexes industriels et logistiques'
        ],
        certifications: ['ISO 9001', 'ISO 27001', 'Cyber Essentials Plus', 'RGPD']
      }
    },
  ];

  return (
    <>
      <section id="produits" className="py-24 bg-[#fafafa] relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
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
                <Shield className="w-4 h-4 text-[#76b900]" />
                <span className="text-[#76b900] text-sm">Notre gamme</span>
              </div>
            </motion.div>
            <h2 className="text-4xl md:text-5xl mb-4 text-[#0a0a0a]">
              Solutions de <span className="text-[#76b900]">Sécurité Matérielle</span>
            </h2>
            <p className="text-lg text-[#525252] max-w-3xl mx-auto">
              Des équipements de pointe certifiés pour protéger vos installations et vos actifs
            </p>
          </motion.div>

          {/* Products Grid */}
          <div className="relative grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {products.map((product, index) => (
              <motion.div
                key={index}
                layoutId={`product-card-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                onClick={() => setExpandedIndex(index)}
                className="group relative cursor-pointer"
                style={{
                  opacity: expandedIndex !== null && expandedIndex !== index ? 0.3 : 1,
                  transition: 'opacity 0.3s ease'
                }}
              >
                <div className="relative h-full bg-white border border-[#e5e5e5] rounded-xl p-8 transition-all duration-300 hover:border-[#76b900]/40 hover:shadow-lg hover:shadow-[#76b900]/5">
                  {/* Icon */}
                  <motion.div
                    animate={{
                      scale: hoveredIndex === index ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-14 h-14 bg-[#76b900]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#76b900]/15 transition-colors"
                  >
                    <product.icon className="w-7 h-7 text-[#76b900]" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl mb-3 text-[#0a0a0a] group-hover:text-[#76b900] transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-[#525252] mb-6 text-sm leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2.5 mb-6">
                    {product.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center space-x-2 text-sm text-[#525252]"
                      >
                        <div className="w-1.5 h-1.5 bg-[#76b900] rounded-full" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Hover Arrow */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{
                      opacity: hoveredIndex === index ? 1 : 0,
                      x: hoveredIndex === index ? 0 : -10,
                    }}
                    className="flex items-center space-x-2 text-[#76b900]"
                  >
                    <span className="text-sm font-medium">En savoir plus</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </div>
              </motion.div>
            ))}

            {/* Expanded Card Overlay */}
            <AnimatePresence>
              {expandedIndex !== null && (
                <motion.div
                  layoutId={`product-card-${expandedIndex}`}
                  className="absolute inset-0 z-50"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.95 }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    className="relative w-full h-full bg-white border border-[#e5e5e5] rounded-2xl shadow-2xl overflow-hidden"
                  >
                    {/* Close Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setExpandedIndex(null);
                      }}
                      className="absolute top-6 right-6 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm hover:bg-[#76b900] text-[#0a0a0a] hover:text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
                    >
                      <X className="w-5 h-5" />
                    </button>

                    {/* Scrollable Content */}
                    <div className="h-full overflow-y-auto">
                      {/* Header Section */}
                      <div className="bg-gradient-to-br from-[#76b900]/10 to-[#76b900]/5 p-8 md:p-12 border-b border-[#e5e5e5]">
                        <div className="flex items-start space-x-6">
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.3, type: "spring", bounce: 0.4 }}
                            className="w-20 h-20 bg-[#76b900]/15 rounded-2xl flex items-center justify-center flex-shrink-0"
                          >
                            {(() => {
                              const Icon = products[expandedIndex].icon;
                              return <Icon className="w-10 h-10 text-[#76b900]" />;
                            })()}
                          </motion.div>
                          <div className="flex-1">
                            <motion.h3
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.35 }}
                              className="text-3xl md:text-4xl mb-3 text-[#0a0a0a]"
                            >
                              {products[expandedIndex].title}
                            </motion.h3>
                            <motion.p
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.4 }}
                              className="text-lg text-[#525252] leading-relaxed"
                            >
                              {products[expandedIndex].detailedInfo.longDescription}
                            </motion.p>
                          </div>
                        </div>
                      </div>

                      {/* Content Sections */}
                      <div className="p-8 md:p-12">
                        <div className="grid md:grid-cols-2 gap-12">
                          {/* Specifications */}
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                          >
                            <div className="flex items-center space-x-3 mb-6">
                              <div className="w-10 h-10 bg-[#76b900]/10 rounded-lg flex items-center justify-center">
                                <Zap className="w-5 h-5 text-[#76b900]" />
                              </div>
                              <h4 className="text-xl font-semibold text-[#0a0a0a]">Spécifications Techniques</h4>
                            </div>
                            <ul className="space-y-3">
                              {products[expandedIndex].detailedInfo.specifications.map((spec, i) => (
                                <motion.li
                                  key={i}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.55 + i * 0.05 }}
                                  className="flex items-start space-x-3"
                                >
                                  <Check className="w-5 h-5 text-[#76b900] flex-shrink-0 mt-0.5" />
                                  <span className="text-[#525252]">{spec}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </motion.div>

                          {/* Use Cases */}
                          <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.55 }}
                          >
                            <div className="flex items-center space-x-3 mb-6">
                              <div className="w-10 h-10 bg-[#76b900]/10 rounded-lg flex items-center justify-center">
                                <Users className="w-5 h-5 text-[#76b900]" />
                              </div>
                              <h4 className="text-xl font-semibold text-[#0a0a0a]">Cas d'Usage</h4>
                            </div>
                            <ul className="space-y-3">
                              {products[expandedIndex].detailedInfo.useCases.map((useCase, i) => (
                                <motion.li
                                  key={i}
                                  initial={{ opacity: 0, x: 10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.6 + i * 0.05 }}
                                  className="flex items-start space-x-3"
                                >
                                  <div className="w-6 h-6 bg-[#76b900]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <div className="w-2 h-2 bg-[#76b900] rounded-full" />
                                  </div>
                                  <span className="text-[#525252]">{useCase}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </motion.div>
                        </div>

                        {/* Certifications */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.7 }}
                          className="mt-12 pt-8 border-t border-[#e5e5e5]"
                        >
                          <div className="flex items-center space-x-3 mb-6">
                            <div className="w-10 h-10 bg-[#76b900]/10 rounded-lg flex items-center justify-center">
                              <Award className="w-5 h-5 text-[#76b900]" />
                            </div>
                            <h4 className="text-xl font-semibold text-[#0a0a0a]">Certifications & Normes</h4>
                          </div>
                          <div className="flex flex-wrap gap-3">
                            {products[expandedIndex].detailedInfo.certifications.map((cert, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.75 + i * 0.05 }}
                                className="px-4 py-2 bg-[#76b900]/10 border border-[#76b900]/20 rounded-full text-[#76b900] text-sm font-medium"
                              >
                                {cert}
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.85 }}
                          className="mt-12 flex flex-col sm:flex-row gap-4"
                        >
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={(e) => {
                              e.stopPropagation();
                              navigateToQuote();
                            }}
                            className="flex-1 group px-8 py-4 bg-[#76b900] text-black rounded-full hover:bg-[#8dd100] transition-all duration-300 inline-flex items-center justify-center space-x-3 shadow-lg shadow-[#76b900]/20"
                          >
                            <span className="font-medium">Demander un devis</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={(e) => {
                              e.stopPropagation();
                              setExpandedIndex(null);
                            }}
                            className="px-8 py-4 bg-white border-2 border-[#e5e5e5] text-[#0a0a0a] rounded-full hover:border-[#76b900]/40 transition-all duration-300 inline-flex items-center justify-center space-x-3"
                          >
                            <span className="font-medium">Retour à la liste</span>
                          </motion.button>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* CTA - Only show when no card is expanded */}
          {expandedIndex === null && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={navigateToQuote}
                className="group px-10 py-4 bg-[#76b900] text-black rounded-full hover:bg-[#8dd100] transition-all duration-300 inline-flex items-center space-x-3 shadow-lg shadow-[#76b900]/20"
              >
                <span className="text-base">Obtenir un devis personnalisé</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}
