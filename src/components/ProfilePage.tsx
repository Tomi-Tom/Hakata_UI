import { motion } from 'framer-motion';
import { User, FileText, Archive, Mail, Phone, MessageSquare, ArrowRight, Calendar, Clock, CheckCircle, XCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

interface ProfilePageProps {
  user: { email: string; firstName: string; lastName: string } | null;
  onLogout: () => void;
}

interface Quote {
  id: number;
  company: string;
  email: string;
  phone: string;
  product: string;
  message: string;
  date: string;
  status: string;
}

export function ProfilePage({ user, onLogout }: ProfilePageProps) {
  const [activeTab, setActiveTab] = useState<'current' | 'archive'>('current');
  const [quotes, setQuotes] = useState<Quote[]>([]);

  const navigateToQuote = () => {
    window.dispatchEvent(new CustomEvent('navigate-to-quote'));
  };

  useEffect(() => {
    // Load quotes from localStorage
    const savedQuotes = localStorage.getItem('hakata_quotes');
    if (savedQuotes) {
      setQuotes(JSON.parse(savedQuotes));
    }
  }, []);

  const currentQuotes = quotes.filter(q => q.status === 'En cours');
  const archivedQuotes = quotes.filter(q => q.status === 'Archivé');

  const archiveQuote = (id: number) => {
    const updatedQuotes = quotes.map(q =>
      q.id === id ? { ...q, status: 'Archivé' } : q
    );
    setQuotes(updatedQuotes);
    localStorage.setItem('hakata_quotes', JSON.stringify(updatedQuotes));
  };

  const deleteQuote = (id: number) => {
    const updatedQuotes = quotes.filter(q => q.id !== id);
    setQuotes(updatedQuotes);
    localStorage.setItem('hakata_quotes', JSON.stringify(updatedQuotes));
  };

  return (
    <>
      <div className="min-h-screen bg-[#fafafa] pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-4xl md:text-5xl mb-3 text-[#0a0a0a]">
                  Bonjour, <span className="text-[#76b900]">{user?.firstName}</span>
                </h1>
                <p className="text-[#525252] text-lg">Gérez vos demandes de devis et suivez leur progression</p>
              </div>
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-20 h-20 bg-[#76b900]/10 rounded-full flex items-center justify-center border-2 border-[#76b900]/20"
              >
                <User className="w-10 h-10 text-[#76b900]" />
              </motion.div>
            </div>

            {/* User Info Cards */}
            <div className="grid md:grid-cols-3 gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white border border-[#e5e5e5] rounded-xl p-4 flex items-center space-x-3"
              >
                <Mail className="w-5 h-5 text-[#76b900]" />
                <div>
                  <div className="text-sm text-[#525252]">Email</div>
                  <div className="text-[#0a0a0a]">{user?.email}</div>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white border border-[#e5e5e5] rounded-xl p-4 flex items-center space-x-3"
              >
                <FileText className="w-5 h-5 text-[#76b900]" />
                <div>
                  <div className="text-sm text-[#525252]">Devis en cours</div>
                  <div className="text-[#0a0a0a] text-xl">{currentQuotes.length}</div>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white border border-[#e5e5e5] rounded-xl p-4 flex items-center space-x-3"
              >
                <Archive className="w-5 h-5 text-[#76b900]" />
                <div>
                  <div className="text-sm text-[#525252]">Devis archivés</div>
                  <div className="text-[#0a0a0a] text-xl">{archivedQuotes.length}</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Quotes */}
            <div className="lg:col-span-2 space-y-6">
              {/* New Quote CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-br from-[#76b900]/10 to-[#76b900]/5 border border-[#76b900]/20 rounded-2xl p-8"
              >
                <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                  <div>
                    <h3 className="text-2xl mb-2 text-[#0a0a0a]">Nouveau projet à sécuriser ?</h3>
                    <p className="text-[#525252]">Demandez un devis personnalisé en quelques clics</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={navigateToQuote}
                    className="px-8 py-4 bg-[#76b900] text-black rounded-full hover:bg-[#8dd100] transition-all duration-300 flex items-center space-x-2 whitespace-nowrap shadow-lg shadow-[#76b900]/20"
                  >
                    <span>Demander un devis</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </motion.div>

              {/* Tabs */}
              <div className="flex space-x-2 bg-white border border-[#e5e5e5] rounded-xl p-2">
                <button
                  onClick={() => setActiveTab('current')}
                  className={`flex-1 py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 text-sm ${
                    activeTab === 'current'
                      ? 'bg-[#76b900] text-black shadow-lg shadow-[#76b900]/20'
                      : 'text-[#525252] hover:text-[#0a0a0a]'
                  }`}
                >
                  <FileText className="w-5 h-5" />
                  <span>En cours ({currentQuotes.length})</span>
                </button>
                <button
                  onClick={() => setActiveTab('archive')}
                  className={`flex-1 py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 text-sm ${
                    activeTab === 'archive'
                      ? 'bg-[#76b900] text-black shadow-lg shadow-[#76b900]/20'
                      : 'text-[#525252] hover:text-[#0a0a0a]'
                  }`}
                >
                  <Archive className="w-5 h-5" />
                  <span>Archivés ({archivedQuotes.length})</span>
                </button>
              </div>

              {/* Quotes List */}
              <div className="space-y-4">
                {(activeTab === 'current' ? currentQuotes : archivedQuotes).length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-white border border-[#e5e5e5] rounded-xl p-12 text-center"
                  >
                    <FileText className="w-16 h-16 text-[#76b900]/30 mx-auto mb-4" />
                    <p className="text-[#525252]">Aucun devis {activeTab === 'current' ? 'en cours' : 'archivé'}</p>
                  </motion.div>
                ) : (
                  (activeTab === 'current' ? currentQuotes : archivedQuotes).map((quote, index) => (
                    <motion.div
                      key={quote.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.01, y: -2 }}
                      className="bg-white border border-[#e5e5e5] rounded-xl p-6 hover:border-[#76b900]/40 hover:shadow-lg hover:shadow-[#76b900]/5 transition-all"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-xl text-[#76b900]">{quote.product}</h3>
                            <span className={`px-3 py-1 rounded-full text-xs ${
                              quote.status === 'En cours'
                                ? 'bg-[#76b900]/15 text-[#76b900] border border-[#76b900]/20'
                                : 'bg-[#f5f5f5] text-[#525252]'
                            }`}>
                              {quote.status}
                            </span>
                          </div>
                          <p className="text-[#525252] mb-3">{quote.company}</p>
                        </div>
                        <div className="flex space-x-2">
                          {activeTab === 'current' && (
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => archiveQuote(quote.id)}
                              className="p-2 bg-[#f5f5f5] hover:bg-[#76b900]/10 rounded-lg transition-colors"
                              title="Archiver"
                            >
                              <Archive className="w-5 h-5 text-[#76b900]" />
                            </motion.button>
                          )}
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => deleteQuote(quote.id)}
                            className="p-2 bg-[#f5f5f5] hover:bg-red-50 rounded-lg transition-colors"
                            title="Supprimer"
                          >
                            <XCircle className="w-5 h-5 text-red-500" />
                          </motion.button>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center space-x-2 text-sm text-[#525252]">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(quote.date).toLocaleDateString('fr-FR')}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-[#525252]">
                          <Clock className="w-4 h-4" />
                          <span>{new Date(quote.date).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}</span>
                        </div>
                      </div>

                      <div className="bg-[#f5f5f5] rounded-lg p-4 mb-4">
                        <p className="text-[#0a0a0a] text-sm">{quote.message}</p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <div className="flex items-center space-x-2 px-3 py-1 bg-[#f5f5f5] rounded-lg text-sm">
                          <Mail className="w-4 h-4 text-[#76b900]" />
                          <span className="text-[#525252]">{quote.email}</span>
                        </div>
                        <div className="flex items-center space-x-2 px-3 py-1 bg-[#f5f5f5] rounded-lg text-sm">
                          <Phone className="w-4 h-4 text-[#76b900]" />
                          <span className="text-[#525252]">{quote.phone}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>
            </div>

            {/* Right Column - Contact & Support */}
            <div className="space-y-6">
              {/* Contact Support */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white border border-[#e5e5e5] rounded-2xl p-6"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-[#76b900]/10 rounded-xl flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-[#76b900]" />
                  </div>
                  <div>
                    <h3 className="text-xl text-[#0a0a0a]">Support client</h3>
                    <p className="text-sm text-[#525252]">Disponible 24/7</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <motion.a
                    href="mailto:support@hakata-tech.fr"
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-3 p-3 bg-[#f5f5f5] rounded-lg hover:bg-[#76b900]/5 transition-colors"
                  >
                    <Mail className="w-5 h-5 text-[#76b900]" />
                    <div>
                      <div className="text-sm text-[#525252]">Email</div>
                      <div className="text-[#0a0a0a]">support@hakata-tech.fr</div>
                    </div>
                  </motion.a>

                  <motion.a
                    href="tel:+33123456789"
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-3 p-3 bg-[#f5f5f5] rounded-lg hover:bg-[#76b900]/5 transition-colors"
                  >
                    <Phone className="w-5 h-5 text-[#76b900]" />
                    <div>
                      <div className="text-sm text-[#525252]">Téléphone</div>
                      <div className="text-[#0a0a0a]">+33 1 23 45 67 89</div>
                    </div>
                  </motion.a>
                </div>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white border border-[#e5e5e5] rounded-2xl p-6"
              >
                <h3 className="text-xl mb-4 text-[#0a0a0a]">Statistiques</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[#525252]">Total devis</span>
                    <span className="text-2xl text-[#76b900]">{quotes.length}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#525252]">Taux de réponse</span>
                    <span className="text-2xl text-[#76b900]">98%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#525252]">Délai moyen</span>
                    <span className="text-2xl text-[#76b900]">24h</span>
                  </div>
                </div>
              </motion.div>

              {/* Help Section */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-[#76b900]/10 to-transparent border border-[#76b900]/20 rounded-2xl p-6"
              >
                <h3 className="text-xl mb-3 text-[#0a0a0a]">Besoin d'aide ?</h3>
                <p className="text-[#525252] text-sm mb-4">
                  Notre équipe est là pour vous accompagner dans votre projet de sécurisation.
                </p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-[#76b900] text-black rounded-xl hover:bg-[#8dd100] transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-[#76b900]/20"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Contacter le support</span>
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
