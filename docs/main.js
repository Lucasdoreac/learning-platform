const { useState } = React;

// Importar conteúdos
const sections = [
    {
        id: 'intro',
        title: 'Introdução',
        content: `<div class="prose max-w-none">
            <h1 class="text-4xl font-bold mb-8">Guia Prático de Autoaprendizado Multidisciplinar</h1>
            <p class="text-lg mb-6">Este guia apresenta um plano estruturado para você aprender de forma autodidata em diversas áreas do conhecimento. O plano está organizado em níveis de aprendizado, com recomendações de materiais e recursos.</p>
        </div>`
    },
    {
        id: 'beginner',
        title: 'Nível Iniciante',
        content: `<div class="prose max-w-none">
            <h2 class="text-3xl font-bold mb-8">Nível Iniciante</h2>
            <p class="text-lg mb-6">No nível iniciante, o foco é construir fundamentos amplos em cada área e despertar o interesse.</p>
        </div>`
    },
    {
        id: 'intermediate',
        title: 'Nível Intermediário',
        content: `<div class="prose max-w-none">
            <h2 class="text-3xl font-bold mb-8">Nível Intermediário</h2>
            <p class="text-lg mb-6">No nível intermediário, você já possui uma base em várias áreas e pode aprofundar seus conhecimentos.</p>
        </div>`
    },
    {
        id: 'advanced',
        title: 'Nível Avançado',
        content: `<div class="prose max-w-none">
            <h2 class="text-3xl font-bold mb-8">Nível Avançado</h2>
            <p class="text-lg mb-6">No nível avançado, o objetivo é atingir alta proficiência ou mesmo maestria em uma ou mais áreas.</p>
        </div>`
    },
    {
        id: 'strategies',
        title: 'Estratégias',
        content: `<div class="prose max-w-none">
            <h2 class="text-3xl font-bold mb-8">Estratégias de Aprendizado</h2>
            <p class="text-lg mb-6">Para ter sucesso como autodidata ao longo do tempo, é fundamental adotar estratégias que mantenham sua motivação.</p>
        </div>`
    }
];

function App() {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('intro');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const currentSection = sections.find(section => section.id === activeSection) || sections[0];

    // Components
    const Header = () => (
        <nav className="bg-white shadow-sm fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <span className="text-2xl font-bold text-blue-600">EduLife</span>
                    </div>
                    
                    <div className="hidden md:flex items-center space-x-8">
                        {sections.map(section => (
                            <button
                                key={section.id}
                                className={`text-gray-600 hover:text-gray-900 ${
                                    activeSection === section.id ? 'font-semibold' : ''
                                }`}
                                onClick={() => setActiveSection(section.id)}
                            >
                                {section.title}
                            </button>
                        ))}
                        <button
                            onClick={() => setIsLoginOpen(true)}
                            className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                        >
                            Entrar
                        </button>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-gray-500 hover:text-gray-700"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isMobileMenuOpen ? (
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
            {isMobileMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {sections.map(section => (
                            <button
                                key={section.id}
                                className={`block w-full text-left px-3 py-2 rounded-md ${
                                    activeSection === section.id
                                        ? 'bg-blue-50 text-blue-600'
                                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                }`}
                                onClick={() => {
                                    setActiveSection(section.id);
                                    setIsMobileMenuOpen(false);
                                }}
                            >
                                {section.title}
                            </button>
                        ))}
                        <button
                            onClick={() => {
                                setIsLoginOpen(true);
                                setIsMobileMenuOpen(false);
                            }}
                            className="block w-full text-left px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                        >
                            Entrar
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );

    const LoginModal = () => (
        isLoginOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                <div className="bg-white rounded-lg p-8 max-w-md w-full">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-xl font-semibold">Entrar</h3>
                        <button onClick={() => setIsLoginOpen(false)} className="text-gray-500 hover:text-gray-700">
                            ×
                        </button>
                    </div>
                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                                placeholder="seu@email.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Senha
                            </label>
                            <input
                                type="password"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                                placeholder="••••••••"
                            />
                        </div>
                        <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                            Entrar
                        </button>
                    </form>
                </div>
            </div>
        )
    );

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            
            {/* Main content */}
            <div className="pt-16">
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div dangerouslySetInnerHTML={{ __html: currentSection.content }} />
                </main>
            </div>

            <LoginModal />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));