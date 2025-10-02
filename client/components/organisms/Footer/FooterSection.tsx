interface FooterSectionProps {
    title: string;
    links: string[];
    isWide?: boolean;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ title, links, isWide = false }) => {
    return (
        <div className={isWide ? "col-span-2" : ""}>
            <h4 className="font-bold text-gray-900 text-base mb-4">{title}</h4>
            <div className={`space-y-2 ${isWide ? "grid grid-cols-2 gap-x-6 gap-y-2" : ""}`}>
                {links.map((link) => (
                    <a
                        key={link}
                        href="#"
                        className="text-gray-600 hover:text-[#0c7057] text-sm block transition-all duration-200 hover:translate-x-1 py-1"
                    >
                        {link}
                    </a>
                ))}
            </div>
        </div>
    );
};