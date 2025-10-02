import { FooterCTA } from './FooterCTA';
import { FooterLinks } from './FooterLinks';
import { FooterBottom } from './FooterBottom';

export const Footer: React.FC = () => {
    return (
        <footer className="w-full bg-gradient-to-b from-gray-50 to-white">
            <FooterCTA />
            <FooterLinks />
            <FooterBottom />
        </footer>
    );
};