export const FooterBottom: React.FC = () => {
    const legalLinks = [
        { name: "Terms of Service", href: "#" },
        { name: "Privacy Policy", href: "#" },
        { name: "Security", href: "#" },
        { name: "Cookie Policy", href: "#" }
    ];

    return (
        <div className="w-full bg-gradient-to-r from-gray-50 to-slate-100 py-8 px-4 border-t border-gray-300">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-gray-700 text-sm">
                        <p>&copy; {new Date().getFullYear()} <span className="font-bold bg-gradient-to-r from-[#0c7057] to-[#0f8c6a] bg-clip-text text-transparent">Calento Inc</span>. All rights reserved.</p>
                    </div>
                    
                    <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
                        {legalLinks.map((item, index) => (
                            <div key={item.name} className="flex items-center gap-6">
                                <a 
                                    href={item.href} 
                                    className="text-gray-700 hover:text-[#0c7057] transition-colors duration-200 font-semibold hover:font-bold"
                                >
                                    {item.name}
                                </a>
                                {index < legalLinks.length - 1 && (
                                    <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};