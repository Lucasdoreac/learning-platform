// Main React Application
const { useState } = React;

// LoginModal Component
function LoginModal({ isOpen, onClose }) {
    if (!isOpen) return null;
    
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg p-8 max-w-md w-full">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-semibold">Entrar</h3>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">×</button>
                </div>
                <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-lg" placeholder="seu@email.com" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Senha</label>
                        <input type="password" className="w-full px-3 py-2 border border-gray-300 rounded-lg" placeholder="••••••••" />
                    </div>
                    <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Entrar</button>
                </form>
            </div>
        </div>
    );
}

// Main App Component
function App() {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [activeSection, setActiveSection] = useState(null);

    const sections = [
        {
            title: 'Ciências',
            icon: '🔬',
            content: 'Explore conceitos básicos das ciências naturais de forma envolvente.'
        },
        {
            title: 'Tecnologia',
            icon: '💻',
            content: 'Desenvolva letramento digital e aprenda programação.'
        },
        {
            title: 'Artes',
            icon: '🎨',
            content: 'Explore sua criatividade através das artes.'
        },
        {
            title: 'Humanidades',
            icon: '📚',
            content: 'Aprenda sobre história, literatura e sociedade.'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navigation */}
            <nav className="bg-white shadow-sm sticky top-0 z-40">
                <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                    <span className="text-xl font-bold text-blue-600">EduLife</span>
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#inicio" className="nav-link">Início</a>
                        <a href="#areas" className="nav-link">Áreas</a>
                        <button onClick={() => setIsLoginOpen(true)} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                            Entrar
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero section */}
            <div id="inicio" className="hero-gradient">
                <div className="max-w-7xl mx-auto px-4 py-24 text-center">
                    <h1 className="text-4xl font-bold text-white mb-6">
                        Aprenda no seu ritmo
                    </h1>
                    <p className="text-xl text-gray-100 mb-8">
                        Uma plataforma completa para seu autoaprendizado multidisciplinar.
                    </p>
                    <button onClick={() => setIsLoginOpen(true)} className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100">
                        Começar Agora
                    </button>
                </div>
            </div>

            {/* Areas section */}
            <div id="areas" className="max-w-7xl mx-auto px-4 py-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900">Áreas de Conhecimento</h2>
                    <p className="mt-4 text-lg text-gray-600">Explore diferentes campos do saber</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {sections.map((section, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center space-x-4 mb-4">
                                <span className="text-2xl">{section.icon}</span>
                                <h3 className="text-xl font-semibold">{section.title}</h3>
                            </div>
                            <p className="text-gray-600">{section.content}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Login Modal */}
            <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
        </div>
    );
}

// Render the App
ReactDOM.render(<App />, document.getElementById('root'));