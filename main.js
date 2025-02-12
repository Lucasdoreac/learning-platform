const { useState } = React;

function LoginModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg p-8 max-w-md w-full">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-semibold">Entrar</h3>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="seu@email.com"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Senha</label>
                        <input
                            type="password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="••••••••"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                    >
                        Entrar
                    </button>
                    <p className="text-sm text-gray-600 text-center mt-4">
                        Ainda não tem uma conta?{' '}
                        <button className="text-indigo-600 hover:text-indigo-700 font-medium">
                            Cadastre-se
                        </button>
                    </p>
                </form>
            </div>
        </div>
    );
}

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [activeSection, setActiveSection] = useState(null);

    const sections = [
        {
            title: 'Ciências',
            icon: '🔬',
            content: 'Explore conceitos básicos das ciências naturais (física, química, biologia) de forma leve e envolvente.'
        },
        {
            title: 'Tecnologia',
            icon: '💻',
            content: 'Desenvolva letramento digital e introduza-se à lógica de programação de computadores.'
        },
        {
            title: 'Artes',
            icon: '🎨',
            content: 'Explore sua criatividade aprendendo fundamentos artísticos, seja em artes visuais, música ou outra expressão.'
        },
        {
            title: 'Humanidades',
            icon: '📚',
            content: 'Tenha um primeiro contato com assuntos como história, literatura, psicologia ou ciências sociais.'
        },
        {
            title: 'Matemática',
            icon: '📐',
            content: 'Fortaleça a base em matemática, pois ela será útil em muitas áreas.'
        }
    ];

    const levels = [
        {
            title: 'Nível Iniciante',
            description: 'Construa fundamentos amplos em cada área e desperte seu interesse.',
            features: ['Conceitos básicos', 'Visão geral', 'Materiais introdutórios']
        },
        {
            title: 'Nível Intermediário',
            description: 'Aprofunde seus conhecimentos e comece a praticar ativamente.',
            features: ['Conceitos avançados', 'Projetos práticos', 'Especialização inicial']
        },
        {
            title: 'Nível Avançado',
            description: 'Atinja alta proficiência e contribua com conhecimento próprio.',
            features: ['Especialização profunda', 'Projetos complexos', 'Pesquisa e inovação']
        }
    ];

    const toggleSection = (index) => {
        setActiveSection(activeSection === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navigation */}
            <nav className="bg-white shadow-sm fixed w-full top-0 z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <span className="text-2xl font-bold text-indigo-600">EduLife</span>
                        </div>
                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#inicio" className="nav-link">Início</a>
                            <a href="#areas" className="nav-link">Áreas</a>
                            <a href="#niveis" className="nav-link">Níveis</a>
                            <button
                                onClick={() => setIsLoginOpen(true)}
                                className="px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors"
                            >
                                Entrar
                            </button>
                        </div>
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    {isMenuOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                {/* Mobile menu */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <a href="#inicio" className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50">Início</a>
                            <a href="#areas" className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50">Áreas</a>
                            <a href="#niveis" className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50">Níveis</a>
                            <button
                                onClick={() => {
                                    setIsLoginOpen(true);
                                    setIsMenuOpen(false);
                                }}
                                className="w-full text-left px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                            >
                                Entrar
                            </button>
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero section */}
            <section id="inicio" className="pt-16">
                <div className="hero-gradient">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
                                Aprenda no seu ritmo
                            </h1>
                            <p className="mt-6 text-xl text-gray-100 max-w-3xl mx-auto">
                                Uma plataforma completa para seu autoaprendizado multidisciplinar.
                                Explore diferentes áreas do conhecimento e desenvolva suas habilidades.
                            </p>
                            <div className="mt-10">
                                <button
                                    onClick={() => setIsLoginOpen(true)}
                                    className="px-8 py-3 rounded-lg bg-white text-indigo-600 font-medium hover:bg-gray-100 transition-colors"
                                >
                                    Começar Agora
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Areas section */}
            <section id="areas" className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                            Áreas de Conhecimento
                        </h2>
                        <p className="mt-4 text-lg text-gray-600">
                            Explore diferentes campos do saber e encontre sua paixão
                        </p>
                    </div>
                    <div className="space-y-4">
                        {sections.map((section, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                                <button
                                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50"
                                    onClick={() => toggleSection(index)}
                                >
                                    <div className="flex items-center space-x-3">
                                        <span className="text-2xl">{section.icon}</span>
                                        <span className="font-medium text-lg">{section.title}</span>
                                    </div>
                                    <svg
                                        className={`w-5 h-5 transform transition-transform ${
                                            activeSection === index ? 'rotate-180' : ''
                                        }`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                <div
                                    className={`px-6 py-4 bg-gray-50 transition-all duration-300 ${
                                        activeSection === index ? 'block' : 'hidden'
                                    }`}
                                >
                                    <p className="text-gray-600">{section.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Levels section */}
            <section id="niveis" className="py-24 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                            Níveis de Aprendizado
                        </h2>
                        <p className="mt-4 text-lg text-gray-600">
                            Escolha seu nível e comece sua jornada de aprendizado
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {levels.map((level, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-lg p-8 card-hover">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                    {level.title}
                                </h3>
                                <p className="text-gray-600 mb-6">{level.description}</p>
                                <ul className="space-y-2">
                                    {level.features.map((feature, i) => (
                                        <li key={i} className="flex items-center text-gray-600">
                                            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-white">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <div className="text-center text-gray-500">
                        <p>&copy; 2025 EduLife. Todos os direitos reservados.</p>
                    </div>
                </div>
            </footer>

            {/* Login Modal */}
            <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));