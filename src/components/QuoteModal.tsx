import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Building, Mail, Phone, Package } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    company: '',
    email: '',
    phone: '',
    product: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Save quote to localStorage
    const quotes = JSON.parse(localStorage.getItem('hakata_quotes') || '[]');
    const newQuote = {
      id: Date.now(),
      ...formData,
      date: new Date().toISOString(),
      status: 'En cours',
    };
    quotes.push(newQuote);
    localStorage.setItem('hakata_quotes', JSON.stringify(quotes));
    
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      setFormData({ company: '', email: '', phone: '', product: '', message: '' });
    }, 2000);
  };

  const productOptions = [
    'Casiers sécurisés',
    'Systèmes d\'alarme',
    'Cadenas intelligents',
    'Contrôle d\'accès',
    'Caméras de surveillance',
    'Solution complète',
    'Autre',
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl bg-zinc-900 border border-[#76b900]/30 rounded-2xl p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
          >
            {!submitted ? (
              <>
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="mb-8"
                >
                  <h2 className="text-3xl mb-2">Demander un devis</h2>
                  <p className="text-white/60">
                    Décrivez votre projet et nous vous contacterons rapidement
                  </p>
                </motion.div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <label className="block text-sm text-white/80 mb-2">Entreprise</label>
                      <div className="relative">
                        <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#76b900]" />
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          required
                          className="w-full bg-black/50 border border-[#76b900]/30 rounded-xl px-12 py-3 text-white focus:outline-none focus:border-[#76b900] transition-colors"
                          placeholder="Nom de l'entreprise"
                        />
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.25 }}
                    >
                      <label className="block text-sm text-white/80 mb-2">Email</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#76b900]" />
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="w-full bg-black/50 border border-[#76b900]/30 rounded-xl px-12 py-3 text-white focus:outline-none focus:border-[#76b900] transition-colors"
                          placeholder="contact@entreprise.fr"
                        />
                      </div>
                    </motion.div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <label className="block text-sm text-white/80 mb-2">Téléphone</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#76b900]" />
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
                          className="w-full bg-black/50 border border-[#76b900]/30 rounded-xl px-12 py-3 text-white focus:outline-none focus:border-[#76b900] transition-colors"
                          placeholder="+33 1 23 45 67 89"
                        />
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.35 }}
                    >
                      <label className="block text-sm text-white/80 mb-2">Produit</label>
                      <div className="relative">
                        <Package className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#76b900]" />
                        <select
                          value={formData.product}
                          onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                          required
                          className="w-full bg-black/50 border border-[#76b900]/30 rounded-xl px-12 py-3 text-white focus:outline-none focus:border-[#76b900] transition-colors appearance-none"
                        >
                          <option value="">Sélectionner</option>
                          {productOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <label className="block text-sm text-white/80 mb-2">Message</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={4}
                      className="w-full bg-black/50 border border-[#76b900]/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#76b900] transition-colors resize-none"
                      placeholder="Décrivez votre projet et vos besoins..."
                    />
                  </motion.div>

                  <motion.button
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.45 }}
                    whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(118, 185, 0, 0.4)' }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-[#76b900] text-black py-4 rounded-xl hover:bg-[#8dd100] transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Envoyer ma demande</span>
                  </motion.button>
                </form>
              </>
            ) : (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-12"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 360],
                  }}
                  transition={{ duration: 0.6 }}
                  className="w-20 h-20 bg-[#76b900] rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <Send className="w-10 h-10 text-black" />
                </motion.div>
                <h3 className="text-2xl mb-3">Demande envoyée !</h3>
                <p className="text-white/60">
                  Notre équipe vous contactera sous 24h
                </p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
