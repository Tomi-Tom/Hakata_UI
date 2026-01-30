import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Building2, Mail, Phone, MessageSquare, Send, CheckCircle2, ArrowLeft, Package } from 'lucide-react';
import { SignUpModal } from './SignUpModal';

interface QuoteCreationPageProps {
  isLoggedIn: boolean;
  onLogin: (userData: { email: string; firstName: string; lastName: string }) => void;
  user: { email: string; firstName: string; lastName: string } | null;
}

export function QuoteCreationPage({ isLoggedIn, onLogin, user }: QuoteCreationPageProps) {
  const [formData, setFormData] = useState({
    category: '',
    companyName: '',
    email: user?.email || '',
    phone: '',
    description: ''
  });
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [pendingSubmit, setPendingSubmit] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const categories = [
    'Casiers & Coffres Sécurisés',
    'Systèmes de Vidéosurveillance',
    'Alarmes & Détection',
    'Contrôle d\'Accès Biométrique',
    'Cadenas & Serrures Connectés',
    'Solution de Sécurité Complète',
    'Autre (à préciser)'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isLoggedIn) {
      setPendingSubmit(true);
      setIsSignUpModalOpen(true);
    } else {
      submitQuote();
    }
  };

  const submitQuote = () => {
    const quotes = JSON.parse(localStorage.getItem('hakata_quotes') || '[]');
    const newQuote = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString('fr-FR'),
      status: 'En cours',
      category: formData.category,
      description: formData.description,
      companyName: formData.companyName,
      email: formData.email,
      phone: formData.phone
    };
    quotes.push(newQuote);
    localStorage.setItem('hakata_quotes', JSON.stringify(quotes));

    setSubmitted(true);
  };

  const handleLoginSuccess = (userData: { email: string; firstName: string; lastName: string }) => {
    onLogin(userData);
    setIsSignUpModalOpen(false);

    if (!formData.email) {
      setFormData({ ...formData, email: userData.email });
    }

    if (pendingSubmit) {
      setPendingSubmit(false);
      submitQuote();
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Success Screen
  if (submitted) {
    return (
      <div className="min-h-screen pt-32 pb-20 bg-[#0a0a0a] flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", bounce: 0.4 }}
          className="max-w-md w-full mx-4"
        >
          <div className="p-12 bg-[#171717] border border-[#76b900]/30 rounded-2xl text-center space-y-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: 360 }}
              transition={{ delay: 0.2, type: "spring", bounce: 0.5 }}
              className="w-20 h-20 bg-[#76b900]/20 rounded-full flex items-center justify-center mx-auto"
            >
              <CheckCircle2 className="w-10 h-10 text-[#76b900]" />
            </motion.div>
            <div className="space-y-2">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl text-white"
              >
                Demande Envoyée !
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-white/60"
              >
                Votre demande de devis a été transmise à nos équipes.
                Nous vous recontacterons sous 48h ouvrées.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="pt-4 space-y-2"
            >
              <div className="w-full bg-[#262626] rounded-full h-2 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 2, ease: "easeOut" }}
                  className="h-full bg-[#76b900]"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 pt-4"
            >
              <button
                onClick={() => window.location.href = '/'}
                className="flex-1 px-6 py-3 bg-[#76b900] text-black rounded-lg hover:bg-[#8dd100] transition-all duration-300"
              >
                Retour à l'accueil
              </button>
              <button
                onClick={() => setSubmitted(false)}
                className="flex-1 px-6 py-3 bg-[#262626] text-white rounded-lg hover:bg-[#404040] transition-all duration-300"
              >
                Nouvelle demande
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen pt-32 pb-20 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ x: -5 }}
            onClick={() => window.history.back()}
            className="flex items-center space-x-2 text-white/60 hover:text-[#76b900] transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Retour</span>
          </motion.button>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 text-center space-y-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#76b900]/10 border border-[#76b900]/30 rounded-full mb-4"
            >
              <FileText className="w-4 h-4 text-[#76b900]" />
              <span className="text-[#76b900] uppercase tracking-wide text-sm">Demande de Devis</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl text-white"
            >
              Obtenez Votre <span className="text-[#76b900]">Devis Personnalisé</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-white/60 max-w-2xl mx-auto"
            >
              Remplissez le formulaire ci-dessous et nos experts vous recontacteront
              rapidement pour étudier votre projet de sécurité.
            </motion.p>
          </motion.div>

          {/* Login Notice */}
          <AnimatePresence>
            {!isLoggedIn && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mb-8 p-6 bg-blue-500/10 border border-blue-500/30 rounded-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <FileText className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white mb-2">Compte requis pour finaliser</h3>
                    <p className="text-white/60 text-sm mb-4">
                      Vous pouvez remplir le formulaire maintenant. Pour soumettre votre demande,
                      vous devrez créer un compte (gratuit et rapide).
                    </p>
                    <button
                      onClick={() => setIsSignUpModalOpen(true)}
                      className="inline-flex items-center gap-2 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-200"
                    >
                      Créer un compte maintenant
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Category Selection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="p-8 bg-[#171717] border border-[#262626] rounded-xl space-y-6"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-[#76b900]/10 rounded-lg flex items-center justify-center">
                  <Package className="w-5 h-5 text-[#76b900]" />
                </div>
                <h2 className="text-2xl text-white">Type de Solution</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    type="button"
                    onClick={() => handleChange('category', category)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`p-4 border-2 rounded-lg text-left transition-all duration-200 ${
                      formData.category === category
                        ? 'border-[#76b900] bg-[#76b900]/10 text-white'
                        : 'border-[#262626] bg-[#262626]/50 text-white/60 hover:border-[#404040] hover:text-white'
                    }`}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="p-8 bg-[#171717] border border-[#262626] rounded-xl space-y-6"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-[#76b900]/10 rounded-lg flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-[#76b900]" />
                </div>
                <h2 className="text-2xl text-white">Informations Entreprise</h2>
              </div>

              <div>
                <label className="block mb-2 text-white/80">
                  Nom de l'entreprise <span className="text-[#76b900]">*</span>
                </label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => handleChange('companyName', e.target.value)}
                    className="w-full pl-11 pr-4 py-3 bg-[#0a0a0a] border border-[#404040] rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#76b900] transition-colors duration-200"
                    placeholder="Votre entreprise"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 text-white/80">
                    Email professionnel <span className="text-[#76b900]">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      disabled={!!user}
                      className="w-full pl-11 pr-4 py-3 bg-[#0a0a0a] border border-[#404040] rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#76b900] transition-colors duration-200 disabled:opacity-50"
                      placeholder="contact@entreprise.fr"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-white/80">
                    Téléphone <span className="text-[#76b900]">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      className="w-full pl-11 pr-4 py-3 bg-[#0a0a0a] border border-[#404040] rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#76b900] transition-colors duration-200"
                      placeholder="+33 1 23 45 67 89"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Project Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="p-8 bg-[#171717] border border-[#262626] rounded-xl space-y-6"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-[#76b900]/10 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-[#76b900]" />
                </div>
                <h2 className="text-2xl text-white">Description du Projet</h2>
              </div>

              <div>
                <label className="block mb-2 text-white/80">
                  Décrivez vos besoins <span className="text-[#76b900]">*</span>
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-white/40" />
                  <textarea
                    required
                    value={formData.description}
                    onChange={(e) => handleChange('description', e.target.value)}
                    rows={6}
                    className="w-full pl-11 pr-4 py-3 bg-[#0a0a0a] border border-[#404040] rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#76b900] transition-colors duration-200 resize-none"
                    placeholder="Décrivez votre projet : type de site, nombre d'équipements souhaités, contraintes spécifiques, délais..."
                  />
                </div>
                <p className="mt-2 text-white/40 text-sm">
                  Plus votre description est précise, plus notre devis sera adapté à vos besoins.
                </p>
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="p-8 bg-gradient-to-br from-[#76b900]/10 to-transparent border border-[#76b900]/30 rounded-xl"
            >
              <h3 className="text-xl text-white mb-6">Ce que vous obtenez</h3>
              <ul className="grid md:grid-cols-2 gap-4">
                {[
                  'Réponse sous 48h ouvrées maximum',
                  'Audit gratuit de vos besoins',
                  'Devis détaillé et personnalisé',
                  'Accompagnement par un expert',
                  'Solutions certifiées et conformes',
                  'Support technique inclus'
                ].map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="flex items-center gap-3 text-white/80"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#76b900] flex-shrink-0" />
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            >
              <motion.button
                type="submit"
                disabled={!formData.category || !formData.companyName || !formData.email || !formData.phone || !formData.description}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#76b900] text-black font-medium rounded-lg hover:bg-[#8dd100] hover:shadow-xl hover:shadow-[#76b900]/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#76b900] disabled:hover:shadow-none"
              >
                <Send className="w-5 h-5" />
                <span>{isLoggedIn ? 'Envoyer ma demande' : 'Finaliser (compte requis)'}</span>
              </motion.button>
            </motion.div>
          </form>
        </div>
      </div>

      <SignUpModal
        isOpen={isSignUpModalOpen}
        onClose={() => {
          setIsSignUpModalOpen(false);
          setPendingSubmit(false);
        }}
        onLogin={handleLoginSuccess}
      />
    </>
  );
}
