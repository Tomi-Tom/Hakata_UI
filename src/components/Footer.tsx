import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import logoImage from '@/assets/9fe5a2abc4983a06dd129aab4826d41f5aacd577.png';

export function Footer() {
  const footerLinks = {
    produits: ['Casiers', 'Alarmes', 'Cadenas', 'Contrôle d\'accès', 'Caméras'],
    solutions: ['Entreprises', 'Industrie', 'Commerce', 'Résidentiel', 'Éducation'],
    entreprise: ['À propos', 'Carrières', 'Blog', 'Presse', 'Contact'],
    legal: ['Mentions légales', 'CGV', 'Politique de confidentialité', 'RGPD'],
  };

  return (
    <footer className="bg-[#0a0a0a] border-t border-[#262626] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#76b900] rounded-full blur-[150px] opacity-5" />

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="flex items-center space-x-3 mb-4">
                <img src={logoImage} alt="Hakata" className="h-10 w-10" />
                <span className="text-xl">
                  HAKATA <span className="text-[#76b900]">TECHNOLOGIE</span>
                </span>
              </div>
              <p className="text-white/60 mb-6">
                Solutions de sécurité physique innovantes pour protéger vos actifs 
                et vos infrastructures.
              </p>
            </motion.div>

            <div className="space-y-3">
              <motion.a
                href="mailto:contact@hakata-tech.fr"
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 text-white/60 hover:text-[#76b900] transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>contact@hakata-tech.fr</span>
              </motion.a>
              <motion.a
                href="tel:+33123456789"
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 text-white/60 hover:text-[#76b900] transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>+33 1 23 45 67 89</span>
              </motion.a>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 text-white/60"
              >
                <MapPin className="w-5 h-5" />
                <span>Paris, France</span>
              </motion.div>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="text-[#76b900] mb-4">Produits</h3>
            <ul className="space-y-2">
              {footerLinks.produits.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                >
                  <a
                    href="#"
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[#76b900] mb-4">Solutions</h3>
            <ul className="space-y-2">
              {footerLinks.solutions.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                >
                  <a
                    href="#"
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[#76b900] mb-4">Entreprise</h3>
            <ul className="space-y-2">
              {footerLinks.entreprise.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                >
                  <a
                    href="#"
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[#76b900] mb-4">Légal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                >
                  <a
                    href="#"
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/40 text-sm">
              © 2025 Hakata Technologie. Tous droits réservés.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {[
                { Icon: Linkedin, href: '#' },
                { Icon: Twitter, href: '#' },
                { Icon: Facebook, href: '#' },
              ].map(({ Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-zinc-900 border border-[#76b900]/20 rounded-full flex items-center justify-center text-white/60 hover:text-[#76b900] hover:border-[#76b900] transition-all"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
