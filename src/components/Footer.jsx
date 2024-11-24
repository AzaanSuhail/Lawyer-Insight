import React from "react";

const Footer = () => {
    return (
        <footer className="bg-[#0f5157] text-gray-200 py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between items-center border-b border-gray-600 pb-4 mb-4">
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-lg font-semibold">About</h2>
                        <p className="text-sm mt-2">
                            Lawyer Insight is a platform dedicated to providing
                            valuable insights on legal issues, including family
                            law, civil litigation, and legal consultations. Our
                            mission is to empower individuals with knowledge and
                            guidance to navigate complex legal matters.
                        </p>
                    </div>

                    <div className="mt-4">
                        <h2 className="text-lg font-semibold">Contact</h2>
                        <ul className="text-sm mt-2 space-y-2">
                            <li>
                                Email:{" "}
                                <a
                                    href="mailto:info@lawyerinsight.com"
                                    className="text-blue-400 hover:underline"
                                >
                                    Lawyersinsights@gmail.com
                                </a>
                            </li>
                            <li>
                                Phone:{" "}
                                <a
                                    href="tel:+1234567890"
                                    className="text-blue-400 hover:underline"
                                >
                                    +91-8433416841
                                </a>
                            </li>
                            <li>Office: New Delhi, Saket</li>
                        </ul>
                    </div>
                </div>

                {/* Social Media Links */}
                <div className="flex justify-center space-x-6 mb-4">
                    {/* <a
                        href="https://linkedin.com/company/lawyerinsight"
                        className="text-gray-400 hover:text-gray-200"
                    >
                        <i className="fab fa-linkedin text-xl">twitter</i>
                    </a> */}
                    <a
                        href="https://www.instagram.com/lawyer_insight?igsh=MTZ4emVmYnByZ2F2bQ=="
                        className="text-gray-400 hover:text-gray-200"
                    >
                        <i className="fab fa-twitter text-xl">Instagram</i>
                    </a>
                    {/* <a
                        href="https://facebook.com/lawyerinsight"
                        className="text-gray-400 hover:text-gray-200"
                    >
                        <i className="fab fa-facebook text-xl"></i>
                    </a> */}
                </div>

                {/* Disclaimer and Copyright */}
                <div className="text-center text-sm border-t border-gray-600 pt-4">
                    <p>
                        <strong>Disclaimer:</strong> The information on this
                        platform is for general informational purposes only and
                        does not constitute legal advice. Please consult with a
                        professional attorney for specific legal matters.
                    </p>
                    <p className="mt-2">
                        &copy; {new Date().getFullYear()} Lawyer Insight. All
                        rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
