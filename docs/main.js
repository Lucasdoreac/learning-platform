// Main React Application
const { useState } = React;

// Site content
const CONTENT = {
    intro: {
        title: 'Introdução',
        content: `
            <div class="prose max-w-none">
                <h1 class="text-4xl font-bold mb-8">Guia Prático de Autoaprendizado Multidisciplinar</h1>
                <p class="text-lg mb-6">
                    Este guia apresenta um plano estruturado para você aprender de forma autodidata em 
                    diversas áreas do conhecimento – ciências, tecnologia, artes, humanidades, matemática, 
                    filosofia e habilidades práticas.
                </p>
                <p class="text-lg mb-6">
                    O plano está organizado em níveis de aprendizado (iniciante, intermediário e avançado), 
                    com recomendações de materiais, recursos online, livros e cursos adequados a cada etapa.
                </p>
            </div>
        `
    },
    beginner: {
        title: 'Nível Iniciante',
        content: `
            <div class="prose max-w-none">
                <h2 class="text-3xl font-bold mb-8">Nível Iniciante</h2>
                <p class="text-lg mb-6">
                    No nível iniciante, o foco é construir fundamentos amplos em cada área e despertar 
                    o interesse. Nesta fase, busque conceitos básicos e visão geral de cada disciplina.
                </p>
                <!-- Adicione aqui o conteúdo completo do nível iniciante -->
            </div>
        `
    },
    intermediate: {
        title: 'Nível Intermediário',
        content: `
            <div class="prose max-w-none">
                <h2 class="text-3xl font-bold mb-8">Nível Intermediário</h2>
                <p class="text-lg mb-6">
                    No nível intermediário, você já possui uma base em várias áreas e pode aprofundar 
                    seus conhecimentos.
                </p>
                <!-- Adicione aqui o conteúdo completo do nível intermediário -->
            </div>
        `
    },
    advanced: {
        title: 'Nível Avançado',
        content: `
            <div class="prose max-w-none">
                <h2 class="text-3xl font-bold mb-8">Nível Avançado</h2>
                <p class="text-lg mb-6">
                    No nível avançado, o objetivo é atingir alta proficiência ou mesmo maestria em uma 
                    ou mais áreas.
                </p>
                <!-- Adicione aqui o conteúdo completo do nível avançado -->
            </div>
        `
    },
    strategies: {
        title: 'Estratégias',
        content: `
            <div class="prose max-w-none">
                <h2 class="text-3xl font-bold mb-8">Estratégias de Aprendizado</h2>
                <p class="text-lg mb-6">
                    Para ter sucesso como autodidata ao longo do tempo, é fundamental adotar estratégias 
                    que mantenham sua motivação.
                </p>
                <!-- Adicione aqui o conteúdo completo das estratégias -->
            </div>
        `
    }
};

function App() {
    const [activeSection, setActiveSection] = useState('intro');
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const sections = Object.entries(CONTENT).map(([id, data]) => ({
        id,
        ...data
    }));

    const currentSection = CONTENT[activeSection];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navigation */}
            <nav className="bg-white shadow-sm sticky top-0 z-50">
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
                                {isMobileMenuOpen ? 'X' : '☰'}
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

            {/* Main content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div dangerouslySetInnerHTML={{ __html: currentSection.content }} />
            </main>

            {/* Login Modal */}
            {isLoginOpen && (
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
            )}
        </div>
    );
}

// Render the app
ReactDOM.render(<App />, document.getElementById('root'));