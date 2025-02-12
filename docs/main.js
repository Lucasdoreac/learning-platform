const { useState } = React;

function App() {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [activeSection, setActiveSection] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const sections = [
        {
            title: "Introdução",
            content: `
                <h1 class="text-4xl font-bold mb-8">Guia Prático de Autoaprendizado Multidisciplinar</h1>
                <p class="text-lg mb-6">Este guia apresenta um plano estruturado para você aprender de forma autodidata em diversas áreas do conhecimento – ciências, tecnologia, artes, humanidades, matemática, filosofia e habilidades práticas.</p>
                <p class="text-lg mb-6">O plano está organizado em níveis de aprendizado (iniciante, intermediário e avançado), com recomendações de materiais, recursos online, livros e cursos adequados a cada etapa.</p>
            `
        },
        {
            title: "Nível Iniciante",
            content: `
                <h2 class="text-3xl font-bold mb-6">Nível Iniciante</h2>
                <p class="text-lg mb-6">No nível iniciante, o foco é construir fundamentos amplos em cada área e despertar o interesse. Nesta fase, busque conceitos básicos e visão geral de cada disciplina.</p>
                
                <div class="mb-8">
                    <h3 class="text-2xl font-semibold mb-4">Ciências</h3>
                    <p class="mb-4">Comece explorando conceitos básicos das ciências naturais (física, química, biologia) de forma leve e envolvente.</p>
                    <ul class="list-disc pl-6 space-y-3">
                        <li><strong>Leitura:</strong> Uma breve história de quase tudo, de Bill Bryson – livro divertido que apresenta vários campos científicos de maneira acessível e instigante.</li>
                        <li><strong>Online:</strong> Acesse a Khan Academy em português para lições introdutórias em ciência.</li>
                        <li><strong>Curso:</strong> Faça cursos básicos ou MOOCs introdutórios.</li>
                    </ul>
                </div>

                <div class="mb-8">
                    <h3 class="text-2xl font-semibold mb-4">Tecnologia</h3>
                    <p class="mb-4">Desenvolva letramento digital e introduza-se à lógica de programação de computadores.</p>
                    <ul class="list-disc pl-6 space-y-3">
                        <li><strong>Prática:</strong> Experimente tutoriais interativos em sites como Code.org e FreeCodeCamp.</li>
                        <li><strong>Leitura:</strong> Consulte Internet e Informática para Leigos.</li>
                        <li><strong>Curso:</strong> Inscreva-se em cursos online para iniciantes.</li>
                    </ul>
                </div>

                <!-- Continue with other sections -->
            `
        },
        {
            title: "Nível Intermediário",
            content: `
                <h2 class="text-3xl font-bold mb-6">Nível Intermediário</h2>
                <p class="text-lg mb-6">No nível intermediário, você já possui uma base em várias áreas e pode aprofundar seus conhecimentos.</p>
                <!-- Add all intermediate level content -->
            `
        },
        {
            title: "Nível Avançado",
            content: `
                <h2 class="text-3xl font-bold mb-6">Nível Avançado</h2>
                <p class="text-lg mb-6">No nível avançado, o objetivo é atingir alta proficiência ou mesmo maestria em uma ou mais áreas.</p>
                <!-- Add all advanced level content -->
            `
        },
        {
            title: "Estratégias de Aprendizado",
            content: `
                <h2 class="text-3xl font-bold mb-6">Estratégias para Aprendizado Contínuo</h2>
                <p class="text-lg mb-6">Para ter sucesso como autodidata ao longo do tempo, é fundamental adotar estratégias que mantenham sua motivação.</p>
                <!-- Add all strategies content -->
            `
        }
    ];

    const renderContent = (content) => {
        return { __html: content };
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm fixed w-full z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <div className="lg:hidden">
                                <button
                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                    className="text-gray-500 hover:text-gray-700"
                                >
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                            </div>
                            <div className="ml-4 lg:ml-0">
                                <span className="text-2xl font-bold text-blue-600">EduLife</span>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <button
                                onClick={() => setIsLoginOpen(true)}
                                className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                            >
                                Entrar
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden fixed inset-0 z-40 flex">
                    <div className="fixed inset-0 bg-black opacity-50" onClick={() => setIsMobileMenuOpen(false)}></div>
                    <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
                        <div className="flex-1 h-0 pt-20 pb-4 overflow-y-auto">
                            <nav className="px-2 space-y-1">
                                {sections.map((section, index) => (
                                    <button
                                        key={index}
                                        className={`w-full text-left px-3 py-2 rounded-md ${
                                            activeSection === index
                                                ? 'bg-blue-50 text-blue-600'
                                                : 'text-gray-600 hover:bg-gray-50'
                                        }`}
                                        onClick={() => {
                                            setActiveSection(index);
                                            setIsMobileMenuOpen(false);
                                        }}
                                    >
                                        {section.title}
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </div>
                </div>
            )}

            {/* Main Content */}
            <div className="pt-16 lg:pt-16 lg:pl-64">
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="py-8">
                        <div
                            className="prose prose-blue max-w-none"
                            dangerouslySetInnerHTML={renderContent(sections[activeSection].content)}
                        />
                    </div>
                </main>
            </div>

            {/* Login Modal */}
            {isLoginOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-lg p-8 max-w-md w-full">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-semibold">Entrar</h3>
                            <button
                                onClick={() => setIsLoginOpen(false)}
                                className="text-gray-500 hover:text-gray-700"
                            >
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

ReactDOM.render(<App />, document.getElementById('root'));