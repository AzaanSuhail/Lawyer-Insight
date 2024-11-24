import React from "react";
import "tailwindcss/tailwind.css";

const Blog = () => {
    return (
        <div className="blog-container bg-gradient-to-r cursor-pointer from-blue-50 via-white to-blue-50 min-h-screen p-6">
            <div className="max-w-4xl mx-auto">
                {/* Blog Title */}
                <h1 className="text-[4vw] font-bold text-center text-gray-800 mb-12 tracking-tight leading-tight transition-all duration-500 hover:scale-105 hover:text-blue-600">
                    How to Develop a Career in the Legal Corporate Field
                </h1>

                {/* Blog Intro */}
                <p className="text-lg text-gray-600 mb-8 leading-relaxed border-l-4 border-blue-500 pl-4">
                    The legal industry is broad, and many still believe that
                    being an advocate is solely about practicing in courts.
                    However, this belief is outdated. The legal field has
                    expanded significantly and has even become global. Lawyers
                    now have the chance to secure legal consultation customers
                    across the globe due to the increasing need for legal
                    professionalism in every industry.
                </p>

                {/* Blog Content */}
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Strict compliance policies mean that companies of all sizes,
                    from small businesses to multinational corporations, require
                    legal professionals, resulting in a high demand for
                    advocates. Yet, despite this demand, many lawyers struggle
                    to secure these positions. The primary reasons are a lack of
                    knowledge and the skills required for the job. Traditional
                    law schools often prepare students for exams rather than
                    equipping them with the practical skills necessary for a
                    legal career. As a result, new graduates often find
                    themselves unprepared for market demands, missing out on
                    significant opportunities.
                </p>

                {/* Sections with Cards */}
                <div className="space-y-8">
                    {[
                        {
                            title: "1. Legal Research",
                            content:
                                "Start with the basics to build a strong foundation in research skills. Learn to professionally research case laws and understand legal scenarios. Continuously study case laws to become familiar with legal terms and maintain fluency in legal language. The more you engage in legal drafting, the better you’ll articulate arguments and structure your points. Strong research skills directly translate to more precise legal reasoning.",
                        },
                        {
                            title: "2. Contract Drafting",
                            content:
                                "Introduced in the early years of law school, contract law serves as the basis for drafting skills. With this knowledge, refine your contract drafting through practice and internships. Specialized courses can further deepen your understanding of key clauses and agreements, essential for creating and managing legally binding documents.",
                        },
                        {
                            title: "3. Contract Negotiation",
                            content:
                                "Contract negotiation is a critical skill highly valued by companies. Strong negotiation skills can significantly enhance your career prospects. Invest in interactive training and live courses to master the art of securing favorable terms and closing deals. Effective negotiation involves understanding client needs, leveraging key points, and achieving mutually beneficial outcomes.",
                        },
                        {
                            title: "4. Communication Skills",
                            content:
                                "Strong verbal communication skills are essential for negotiations, client meetings, and presentations. Clear articulation of your position, responsiveness to counterarguments, and the ability to explain complex legal concepts in simple terms are critical. These skills help build trust, make arguments persuasive, and create impactful presentations.",
                        },
                        {
                            title: "5. Understanding Business Acumen",
                            content:
                                "Corporate lawyers must understand fundamental business principles, including financial statements, market dynamics, and the regulatory environment. This knowledge allows lawyers to offer practical, relevant advice by considering the broader business context in which legal issues arise. Familiarity with business functions, from supply chains to marketing, enhances a lawyer's ability to address legal matters intertwined with business operations.",
                        },
                    ].map((section, index) => (
                        <div
                            key={index}
                            className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1"
                        >
                            <h2 className="text-2xl font-bold text-blue-600 mb-4">
                                {section.title}
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                {section.content}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Blog Conclusion */}
                <p className="text-lg text-gray-600 mt-12 leading-relaxed text-center bg-blue-50 p-6 rounded-lg shadow-md">
                    The skills mentioned above are crucial for a successful
                    career in corporate law. Begin developing these skills early
                    to build a strong foundation. Additionally, writing research
                    papers and participating in internships will help deepen
                    your understanding of legal concepts and gain practical
                    knowledge. These activities will enhance your resume and
                    demonstrate your commitment to the field, opening doors to a
                    successful career in corporate law.
                </p>
            </div>
        </div>
    );
};

export default Blog;
