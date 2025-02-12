// Components
const Sidebar = ({ sections, activeSection, setActiveSection }) => (
    <div className="hidden lg:block w-64 bg-white shadow-sm overflow-y-auto fixed h-screen">
        <nav className="px-4 py-6">
            <div className="font-semibold text-lg mb-4">Conteúdo</div>
            {sections.map((section, index) => (
                <button
                    key={index}
                    className={`block w-full text-left px-2 py-2 rounded-lg mb-1 ${
                        activeSection === index ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
                    }`}
                    onClick={() => setActiveSection(index)}
                >
                    {section.title}
                </button>
            ))}
        </nav>
    </div>
);

const ContentSection = ({ title, content }) => (
    <div className="prose prose-blue max-w-none">
        <h2 className="text-2xl font-bold mb-6">{title}</h2>
        {content}
    </div>
);

const LoginModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg p-8 max-w-md w-full">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-semibold">Entrar</h3>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">×</button>
                </div>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
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
};

function App() {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [activeSection, setActiveSection] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const sections = [
        {
            title: "Introdução",
            content: (
                <div>
                    <p className="text-lg mb-6">
                        Aprender 'tudo' é uma meta ambiciosa! Para tornar esse objetivo mais gerenciável, 
                        posso te ajudar a explorar uma ampla gama de conhecimentos, desde ciências e 
                        tecnologia até artes e humanidades. Você pode começar especificando um campo de 
                        interesse inicial, e podemos construir um plano de aprendizado personalizado para você.
                    </p>
                    <h1 className="text-3xl font-bold mb-6">Guia Prático de Autoaprendizado Multidisciplinar</h1>
                    <p className="mb-6">
                        Este guia apresenta um plano estruturado para você aprender de forma autodidata em 
                        diversas áreas do conhecimento – ciências, tecnologia, artes, humanidades, matemática, 
                        filosofia e habilidades práticas. O plano está organizado em níveis de aprendizado 
                        (iniciante, intermediário e avançado), com recomendações de materiais, recursos online, 
                        livros e cursos adequados a cada etapa.
                    </p>
                </div>
            )
        },
        {
            title: "Nível Iniciante",
            content: (
                <div>
                    <h2 className="text-2xl font-bold mb-6">Nível Iniciante</h2>
                    <p className="mb-6">
                        No nível iniciante, o foco é construir fundamentos amplos em cada área e despertar 
                        o interesse. Nesta fase, busque conceitos básicos e visão geral de cada disciplina.
                    </p>
                    {/* Continue with all the content for Nível Iniciante */}
                </div>
            )
        },
        // Add all other sections here
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navigation */}
            <nav className="bg-white shadow-sm sticky top-0 z-40">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <span className="text-2xl font-bold text-blue-600">EduLife</span>
                        </div>
                        <div className="hidden md:flex items-center space-x-8">
                            <button onClick={() => setIsLoginOpen(true)} className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                                Entrar
                            </button>
                        </div>
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main content */}
            <div className="flex">
                <Sidebar 
                    sections={sections}
                    activeSection={activeSection}
                    setActiveSection={setActiveSection}
                />
                
                <main className="flex-1 lg:ml-64">
                    <div className="max-w-7xl mx-auto px-4 py-8">
                        <ContentSection
                            title={sections[activeSection].title}
                            content={sections[activeSection].content}
                        />
                    </div>
                </main>
            </div>

            {/* Login Modal */}
            <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));