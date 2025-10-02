export const FooterCTA: React.FC = () => {
    const features = [
        "100% free forever plan",
        "No credit card required",
        "Privacy-first AI - your data stays yours"
    ];

    return (
        <div className="w-full bg-gradient-to-r from-[#0c7057] to-[#0f8c6a] py-16 px-4 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full"></div>
                <div className="absolute top-20 right-20 w-16 h-16 border border-white/20 rounded-full"></div>
                <div className="absolute bottom-10 left-1/4 w-12 h-12 border border-white/20 rounded-full"></div>
                <div className="absolute bottom-20 right-1/3 w-8 h-8 border border-white/20 rounded-full"></div>
            </div>
            
            <div className="max-w-5xl mx-auto text-center relative z-10">
                <div className="mb-8">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm font-medium mb-6">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Works with Google Calendar & Outlook</span>
                    </div>
                    
                    <div className="text-center mb-4">
                        <p className="text-white/80 text-lg font-medium">On Google and Microsoft</p>
                    </div>
                </div>
                
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                    Get started for free
                </h3>
                
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                    Join thousands of professionals using AI to optimize their calendar and boost productivity
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-3xl mx-auto">
                    {features.map((feature) => (
                        <div key={feature} className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 text-white">
                            <svg className="w-5 h-5 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm font-medium text-center">{feature}</span>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button className="group bg-white text-[#0c7057] px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-2">
                        <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <span>Start Free - Connect Calendar</span>
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                    
                    <div className="text-white/80 text-sm">
                        <span>Setup takes less than 2 minutes</span>
                    </div>
                </div>
                
                {/* Trust indicators */}
                <div className="mt-8 pt-6 border-t border-white/20">
                    <div className="flex flex-wrap justify-center items-center gap-6 text-white/70 text-sm">
                        <div className="flex items-center gap-2">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Bank-level security</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>10,000+ happy users</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                            </svg>
                            <span>GDPR compliant</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};