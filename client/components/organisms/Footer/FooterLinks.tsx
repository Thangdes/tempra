import { FooterSection } from './FooterSection';
import { Logo } from '@/components/ui/logo';

interface FooterSectionData {
    title: string;
    links: string[];
    isWide?: boolean;
}

const footerSections: FooterSectionData[] = [
    {
        title: "Features",
        links: [
            "AI Scheduling", "Calendar Sync", "Smart Meetings", "Focus Time",
            "Time Blocking", "Meeting Analytics", "Productivity Insights",
            "Calendar Integration", "Automated Scheduling", "Team Coordination"
        ],
        isWide: true
    },
    {
        title: "Use Cases",
        links: [
            "Remote Teams", "Executives", "Sales Teams", "Marketing Teams",
            "Engineering Teams", "Consultants", "Freelancers"
        ]
    },
    {
        title: "Pricing",
        links: [
            "Pricing Plans", "Free Plan", "Pro Plan", "Team Plan",
            "Enterprise", "Student Discount"
        ]
    },
    {
        title: "Compare",
        links: [
            "Calento vs. Calendly", "Calento vs. Motion", "Calento vs. Clockwise",
            "Calento vs. Google Calendar", "Calento vs. Outlook"
        ]
    },
    {
        title: "Integrations",
        links: [
            "Google Calendar", "Outlook", "Slack", "Zoom", "Microsoft Teams",
            "Notion", "Trello", "Asana", "Linear"
        ]
    },
    {
        title: "Company",
        links: [
            "Contact Sales", "Contact Support", "About", "Careers",
            "Customers", "Affiliate program"
        ]
    },
    {
        title: "Resources",
        links: [
            "Blog", "Glossary", "Webinars & demos", "Help docs"
        ]
    }
];

export const FooterLinks: React.FC = () => {
    return (
        <div className="w-full bg-gradient-to-b from-white to-gray-50 py-20 px-4 border-t border-gray-100">
            <div className="max-w-7xl mx-auto">
                {/* Logo Section */}
                <div className="text-center mb-16">
                    <div className="flex justify-center mb-6">
                        <Logo size="lg" />
                    </div>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        AI-powered calendar assistant that helps you reclaim your time and boost productivity
                    </p>
                </div>
                {/* Desktop Footer Grid */}
                <div className="hidden lg:grid grid-cols-7 gap-8 mb-12">
                    {footerSections.map((section) => (
                        <FooterSection
                            key={section.title}
                            title={section.title}
                            links={section.links}
                        />
                    ))}
                </div>

                {/* Mobile Footer */}
                <div className="lg:hidden space-y-8 mb-12">
                    <div className="grid grid-cols-2 gap-6">
                        {footerSections.slice(0, 4).map((section) => (
                            <FooterSection
                                key={section.title}
                                title={section.title}
                                links={section.links.slice(0, 5)}
                            />
                        ))}
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        {footerSections.slice(4).map((section) => (
                            <FooterSection
                                key={section.title}
                                title={section.title}
                                links={section.links.slice(0, 5)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};