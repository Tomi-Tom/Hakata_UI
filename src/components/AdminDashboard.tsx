import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileText,
  TrendingUp,
  CheckCircle,
  XCircle,
  Clock,
  Archive,
  Eye,
  BarChart3,
  Users,
  DollarSign,
  Calendar,
  Search,
  Filter,
  Download,
  Mail,
  Phone,
  Building2,
  Package,
  AlertCircle,
  Check,
  X
} from 'lucide-react';

interface Quote {
  id: string;
  date: string;
  status: 'En cours' | 'Approuvé' | 'Rejeté' | 'Archivé';
  category: string;
  description: string;
  companyName: string;
  email: string;
  phone: string;
}

export function AdminDashboard() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [selectedQuote, setSelectedQuote] = useState<Quote | null>(null);
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showDetailModal, setShowDetailModal] = useState(false);

  useEffect(() => {
    loadQuotes();
  }, []);

  const loadQuotes = () => {
    const savedQuotes = localStorage.getItem('hakata_quotes');
    if (savedQuotes) {
      setQuotes(JSON.parse(savedQuotes));
    }
  };

  const updateQuoteStatus = (quoteId: string, newStatus: Quote['status']) => {
    const updatedQuotes = quotes.map(q =>
      q.id === quoteId ? { ...q, status: newStatus } : q
    );
    setQuotes(updatedQuotes);
    localStorage.setItem('hakata_quotes', JSON.stringify(updatedQuotes));
  };

  const deleteQuote = (quoteId: string) => {
    const updatedQuotes = quotes.filter(q => q.id !== quoteId);
    setQuotes(updatedQuotes);
    localStorage.setItem('hakata_quotes', JSON.stringify(updatedQuotes));
    setShowDetailModal(false);
  };

  // Métriques
  const metrics = {
    total: quotes.length,
    pending: quotes.filter(q => q.status === 'En cours').length,
    approved: quotes.filter(q => q.status === 'Approuvé').length,
    rejected: quotes.filter(q => q.status === 'Rejeté').length,
    archived: quotes.filter(q => q.status === 'Archivé').length,
  };

  // Filtrage
  const filteredQuotes = quotes.filter(quote => {
    const matchesStatus = filterStatus === 'all' || quote.status === filterStatus;
    const matchesSearch =
      quote.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      quote.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      quote.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  // Statistiques par catégorie
  const categoryStats = quotes.reduce((acc, quote) => {
    acc[quote.category] = (acc[quote.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const statusColors = {
    'En cours': 'text-blue-400 bg-blue-500/10 border-blue-500/30',
    'Approuvé': 'text-green-400 bg-green-500/10 border-green-500/30',
    'Rejeté': 'text-red-400 bg-red-500/10 border-red-500/30',
    'Archivé': 'text-gray-400 bg-gray-500/10 border-gray-500/30',
  };

  return (
    <div className="min-h-screen pt-32 pb-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-4xl md:text-5xl text-white mb-2">
                Dashboard <span className="text-[#76b900]">Admin</span>
              </h1>
              <p className="text-white/60">Gestion des demandes de devis</p>
            </div>
            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-[#171717] border border-[#262626] text-white rounded-lg hover:border-[#76b900]/30 transition-all duration-200 flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                <span className="hidden sm:inline">Exporter</span>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          {[
            { label: 'Total Devis', value: metrics.total, icon: FileText, color: 'text-[#76b900]', bg: 'bg-[#76b900]/10' },
            { label: 'En Cours', value: metrics.pending, icon: Clock, color: 'text-blue-400', bg: 'bg-blue-500/10' },
            { label: 'Approuvés', value: metrics.approved, icon: CheckCircle, color: 'text-green-400', bg: 'bg-green-500/10' },
            { label: 'Rejetés', value: metrics.rejected, icon: XCircle, color: 'text-red-400', bg: 'bg-red-500/10' },
            { label: 'Archivés', value: metrics.archived, icon: Archive, color: 'text-gray-400', bg: 'bg-gray-500/10' },
          ].map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-[#171717] border border-[#262626] rounded-xl hover:border-[#76b900]/30 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${metric.bg} rounded-lg flex items-center justify-center`}>
                  <metric.icon className={`w-6 h-6 ${metric.color}`} />
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-1">{metric.value}</div>
              <div className="text-white/60 text-sm">{metric.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Categories Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="p-6 bg-[#171717] border border-[#262626] rounded-xl"
          >
            <h3 className="text-xl text-white mb-6 flex items-center gap-3">
              <BarChart3 className="w-6 h-6 text-[#76b900]" />
              Répartition par Catégorie
            </h3>
            <div className="space-y-4">
              {Object.entries(categoryStats).map(([category, count], index) => (
                <div key={category}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white/80 text-sm">{category}</span>
                    <span className="text-white font-medium">{count}</span>
                  </div>
                  <div className="w-full bg-[#262626] rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(count / metrics.total) * 100}%` }}
                      transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                      className="h-full bg-[#76b900]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="p-6 bg-[#171717] border border-[#262626] rounded-xl"
          >
            <h3 className="text-xl text-white mb-6 flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-[#76b900]" />
              Statistiques
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-[#0a0a0a] rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#76b900]/10 rounded-lg flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-[#76b900]" />
                  </div>
                  <span className="text-white/80">Cette semaine</span>
                </div>
                <span className="text-white font-medium">{quotes.length} devis</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-[#0a0a0a] rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                  </div>
                  <span className="text-white/80">Taux d'approbation</span>
                </div>
                <span className="text-white font-medium">
                  {metrics.total > 0 ? Math.round((metrics.approved / metrics.total) * 100) : 0}%
                </span>
              </div>
              <div className="flex items-center justify-between p-4 bg-[#0a0a0a] rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-blue-400" />
                  </div>
                  <span className="text-white/80">Temps moyen réponse</span>
                </div>
                <span className="text-white font-medium">24h</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Filters & Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-6 flex flex-col sm:flex-row gap-4"
        >
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Rechercher par entreprise, email ou catégorie..."
              className="w-full pl-11 pr-4 py-3 bg-[#171717] border border-[#262626] rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#76b900] transition-colors duration-200"
            />
          </div>

          {/* Status Filter */}
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="pl-11 pr-8 py-3 bg-[#171717] border border-[#262626] rounded-lg text-white focus:outline-none focus:border-[#76b900] transition-colors duration-200 appearance-none cursor-pointer"
            >
              <option value="all">Tous les statuts</option>
              <option value="En cours">En cours</option>
              <option value="Approuvé">Approuvés</option>
              <option value="Rejeté">Rejetés</option>
              <option value="Archivé">Archivés</option>
            </select>
          </div>
        </motion.div>

        {/* Quotes Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-[#171717] border border-[#262626] rounded-xl overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#0a0a0a] border-b border-[#262626]">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-white/80">Date</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-white/80">Entreprise</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-white/80">Catégorie</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-white/80">Contact</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-white/80">Statut</th>
                  <th className="px-6 py-4 text-right text-sm font-medium text-white/80">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#262626]">
                <AnimatePresence>
                  {filteredQuotes.map((quote, index) => (
                    <motion.tr
                      key={quote.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ delay: index * 0.05 }}
                      className="hover:bg-[#262626]/50 transition-colors duration-200"
                    >
                      <td className="px-6 py-4 text-sm text-white/80">{quote.date}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-[#76b900]/10 rounded-lg flex items-center justify-center">
                            <Building2 className="w-5 h-5 text-[#76b900]" />
                          </div>
                          <div>
                            <div className="text-white font-medium">{quote.companyName}</div>
                            <div className="text-white/60 text-sm">{quote.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <Package className="w-4 h-4 text-[#76b900]" />
                          <span className="text-white/80 text-sm">{quote.category}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-sm text-white/60">
                            <Mail className="w-4 h-4" />
                            <span>{quote.email}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-white/60">
                            <Phone className="w-4 h-4" />
                            <span>{quote.phone}</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm border ${statusColors[quote.status]}`}>
                          {quote.status === 'En cours' && <Clock className="w-4 h-4" />}
                          {quote.status === 'Approuvé' && <CheckCircle className="w-4 h-4" />}
                          {quote.status === 'Rejeté' && <XCircle className="w-4 h-4" />}
                          {quote.status === 'Archivé' && <Archive className="w-4 h-4" />}
                          {quote.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => {
                              setSelectedQuote(quote);
                              setShowDetailModal(true);
                            }}
                            className="p-2 bg-[#76b900]/10 text-[#76b900] rounded-lg hover:bg-[#76b900]/20 transition-colors duration-200"
                            title="Voir détails"
                          >
                            <Eye className="w-4 h-4" />
                          </motion.button>
                          {quote.status === 'En cours' && (
                            <>
                              <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => updateQuoteStatus(quote.id, 'Approuvé')}
                                className="p-2 bg-green-500/10 text-green-400 rounded-lg hover:bg-green-500/20 transition-colors duration-200"
                                title="Approuver"
                              >
                                <Check className="w-4 h-4" />
                              </motion.button>
                              <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => updateQuoteStatus(quote.id, 'Rejeté')}
                                className="p-2 bg-red-500/10 text-red-400 rounded-lg hover:bg-red-500/20 transition-colors duration-200"
                                title="Rejeter"
                              >
                                <X className="w-4 h-4" />
                              </motion.button>
                            </>
                          )}
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </tbody>
            </table>
          </div>

          {filteredQuotes.length === 0 && (
            <div className="text-center py-12">
              <AlertCircle className="w-12 h-12 text-white/40 mx-auto mb-4" />
              <p className="text-white/60">Aucun devis trouvé</p>
            </div>
          )}
        </motion.div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {showDetailModal && selectedQuote && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowDetailModal(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl bg-[#171717] border border-[#262626] rounded-2xl p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setShowDetailModal(false)}
                className="absolute top-4 right-4 w-10 h-10 bg-[#262626] hover:bg-[#404040] text-white rounded-lg flex items-center justify-center transition-all duration-200"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6">
                <h2 className="text-3xl text-white mb-2">Détails du Devis</h2>
                <p className="text-white/60">ID: {selectedQuote.id}</p>
              </div>

              <div className="space-y-6">
                {/* Status */}
                <div className="p-6 bg-[#0a0a0a] rounded-xl">
                  <div className="flex items-center justify-between">
                    <span className="text-white/80">Statut</span>
                    <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm border ${statusColors[selectedQuote.status]}`}>
                      {selectedQuote.status === 'En cours' && <Clock className="w-4 h-4" />}
                      {selectedQuote.status === 'Approuvé' && <CheckCircle className="w-4 h-4" />}
                      {selectedQuote.status === 'Rejeté' && <XCircle className="w-4 h-4" />}
                      {selectedQuote.status === 'Archivé' && <Archive className="w-4 h-4" />}
                      {selectedQuote.status}
                    </span>
                  </div>
                </div>

                {/* Company Info */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-[#0a0a0a] rounded-xl">
                    <div className="flex items-center gap-3 mb-2">
                      <Building2 className="w-5 h-5 text-[#76b900]" />
                      <span className="text-white/60 text-sm">Entreprise</span>
                    </div>
                    <p className="text-white text-lg font-medium">{selectedQuote.companyName}</p>
                  </div>

                  <div className="p-6 bg-[#0a0a0a] rounded-xl">
                    <div className="flex items-center gap-3 mb-2">
                      <Package className="w-5 h-5 text-[#76b900]" />
                      <span className="text-white/60 text-sm">Catégorie</span>
                    </div>
                    <p className="text-white text-lg font-medium">{selectedQuote.category}</p>
                  </div>

                  <div className="p-6 bg-[#0a0a0a] rounded-xl">
                    <div className="flex items-center gap-3 mb-2">
                      <Mail className="w-5 h-5 text-[#76b900]" />
                      <span className="text-white/60 text-sm">Email</span>
                    </div>
                    <p className="text-white text-lg">{selectedQuote.email}</p>
                  </div>

                  <div className="p-6 bg-[#0a0a0a] rounded-xl">
                    <div className="flex items-center gap-3 mb-2">
                      <Phone className="w-5 h-5 text-[#76b900]" />
                      <span className="text-white/60 text-sm">Téléphone</span>
                    </div>
                    <p className="text-white text-lg">{selectedQuote.phone}</p>
                  </div>
                </div>

                {/* Description */}
                <div className="p-6 bg-[#0a0a0a] rounded-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <FileText className="w-5 h-5 text-[#76b900]" />
                    <span className="text-white/60 text-sm">Description du projet</span>
                  </div>
                  <p className="text-white/80 leading-relaxed">{selectedQuote.description}</p>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  {selectedQuote.status === 'En cours' && (
                    <>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                          updateQuoteStatus(selectedQuote.id, 'Approuvé');
                          setShowDetailModal(false);
                        }}
                        className="flex-1 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-200 flex items-center justify-center gap-2"
                      >
                        <CheckCircle className="w-5 h-5" />
                        Approuver
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                          updateQuoteStatus(selectedQuote.id, 'Rejeté');
                          setShowDetailModal(false);
                        }}
                        className="flex-1 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all duration-200 flex items-center justify-center gap-2"
                      >
                        <XCircle className="w-5 h-5" />
                        Rejeter
                      </motion.button>
                    </>
                  )}
                  {selectedQuote.status !== 'Archivé' && (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        updateQuoteStatus(selectedQuote.id, 'Archivé');
                        setShowDetailModal(false);
                      }}
                      className="flex-1 px-6 py-3 bg-[#262626] text-white rounded-lg hover:bg-[#404040] transition-all duration-200 flex items-center justify-center gap-2"
                    >
                      <Archive className="w-5 h-5" />
                      Archiver
                    </motion.button>
                  )}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      if (confirm('Êtes-vous sûr de vouloir supprimer ce devis ?')) {
                        deleteQuote(selectedQuote.id);
                      }
                    }}
                    className="px-6 py-3 bg-red-500/10 text-red-400 rounded-lg hover:bg-red-500/20 transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <X className="w-5 h-5" />
                    Supprimer
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
