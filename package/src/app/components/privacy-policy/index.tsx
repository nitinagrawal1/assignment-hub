"use client"

import Link from "next/link"

function PrivacyPolicy() {
    return (
        <section>
            <div className="relative w-full dark:bg-darkblack">
                <div className="container">
                    <div className='flex flex-col gap-1.5 py-10 md:py-20'>

                        <p>
                            This Privacy Policy describes how <strong>Assignment Solutions</strong> (“we”, “our”, or “us”) collects, uses, stores, and protects personal information when you use our website, communicate with us, or request academic assistance services.
                        </p>

                        <p>
                            By accessing our website or using our services, you agree to the practices described in this Privacy Policy.
                        </p>

                        <p>
                            We are committed to ensuring that your privacy is protected and that your personal data is handled securely and responsibly.
                        </p>

                        <div className="my-6">
                            <h4 className="font-semibold">1. Information We Collect</h4>

                            <p className="mt-6">
                                We collect personal information that you voluntarily provide when:
                            </p>

                            <ul className="list-disc ml-6 mt-2">
                                <li>Filling out the contact form</li>
                                <li>Submitting assignment details</li>
                                <li>Contacting us through WhatsApp or email</li>
                                <li>Requesting pricing or project information</li>
                            </ul>

                            <p className="mt-4">This may include:</p>

                            <ul className="list-disc ml-6 mt-2">
                                <li>Your full name</li>
                                <li>Email address</li>
                                <li>Phone / WhatsApp number</li>
                                <li>Assignment type and project details</li>
                                <li>Any files or documents you provide for project completion</li>
                            </ul>
                        </div>

                        <div className="my-6">
                            <h4 className="font-semibold">2. How We Use Your Information</h4>

                            <p className="mt-6">
                                We use the information you provide strictly for service-related purposes, including:
                            </p>

                            <ul className="list-disc ml-6 mt-2">
                                <li>Understanding your assignment or academic requirements</li>
                                <li>Communicating with you about your project</li>
                                <li>Delivering completed assignments, reports, or documents</li>
                                <li>Providing updates, revisions, and customer support</li>
                                <li>Improving the quality of our services</li>
                            </ul>

                            <p className="mt-4">
                                We <strong>do not</strong> sell, share, or distribute your personal information to third parties for marketing or advertising.
                            </p>
                        </div>

                        <div className="my-6">
                            <h4 className="font-semibold">3. Document & Data Privacy</h4>

                            <p className="mt-6">
                                Any documents, files, or academic materials you share with us are treated with complete confidentiality.
                            </p>

                            <ul className="list-disc ml-6 mt-2">
                                <li>Your documents are used only to complete your requested task.</li>
                                <li>We never resell, reuse, or redistribute your content.</li>
                                <li>All completed work is custom-written and plagiarism-free.</li>
                            </ul>
                        </div>

                        <div className="my-6">
                            <h4 className="font-semibold">4. Communications</h4>

                            <p className="mt-6">
                                We may contact you through:
                            </p>

                            <ul className="list-disc ml-6 mt-2">
                                <li>Email</li>
                                <li>Phone calls</li>
                                <li>WhatsApp messages</li>
                            </ul>

                            <p className="mt-4">
                                Communication is strictly related to your order, updates, delivery, or support.
                            </p>
                        </div>

                        <div className="my-6">
                            <h4 className="font-semibold">5. Payments</h4>

                            <p className="mt-6">
                                We do not store or collect any payment information, such as card numbers or banking details.  
                                Payments made to us are handled securely through approved third-party platforms (UPI, bank transfer, or wallet apps).
                            </p>
                        </div>

                        <div className="my-6">
                            <h4 className="font-semibold">6. Data Security</h4>

                            <p className="mt-6">
                                We take reasonable technical and administrative measures to protect your personal data and documents from unauthorized access, misuse, or disclosure.
                            </p>
                        </div>

                        <div className="my-6">
                            <h4 className="font-semibold">7. Your Choices & Rights</h4>

                            <p className="mt-6">
                                You may request at any time:
                            </p>

                            <ul className="list-disc ml-6 mt-2">
                                <li>Deletion of your personal information</li>
                                <li>Removal of shared documents</li>
                                <li>Stopping communication from our side</li>
                            </ul>
                        </div>

                        <div className="my-6">
                            <h4 className="font-semibold">8. Third-Party Links</h4>

                            <p className="mt-6">
                                Our website may contain links to external platforms (WhatsApp, social media, map locations, etc.).  
                                We are not responsible for their privacy practices.
                            </p>
                        </div>

                        <div className="my-6">
                            <h4 className="font-semibold">9. Updates to This Policy</h4>

                            <p className="mt-6">
                                We may update this Privacy Policy from time to time. Changes will be reflected on this page with the latest updated date.
                            </p>
                        </div>

                        <div className="my-6">
                            <h4 className="font-semibold">10. Contact Information</h4>

                            <p className="mt-6">
                                For questions regarding this Privacy Policy or your personal data, contact us at:
                            </p>

                            <p className="mt-4">
                                📧 Email: <Link href="mailto:assignsolutionscomp@gmail.com">assignsolutionscomp@gmail.com</Link><br />
                                📱 WhatsApp: <Link href="https://wa.me/919079008119">+91 9079008119</Link><br />
                                📍 Location: Swarn Path, Mansarovar, Jaipur
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default PrivacyPolicy;
