import React from 'react'
 
export default function AboutUs() {
    return (
        <div className="container">
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                        >
                            About the play text
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
 
                            <p>
                                We all struggle with the written word, from typos to formatting woes. At PlayText, we believe the power of communication shouldn't be hindered by technicalities. That's why we created a simple yet powerful tool to give you complete control over your text.
                            </p>
 
                            <p>
                                <strong>Say goodbye to:</strong>
                            </p>
 
                            <ul>
                                <li>
                                    Typos that haunt you: Our lightning-fast spell checker catches even the sneakiest grammatical gremlins, ensuring your writing is polished and professional.
                                </li>
                                <li>
                                    Struggles with formatting: Uppercase, lowercase, proper case, title case – you name it, we handle it. Convert your text with a single click and eliminate formatting inconsistencies.
                                </li>
                                <li>
                                    Extra spaces cluttering your text: We've got your back (and your front) when it comes to spacing. Remove those pesky double spaces and ensure your text is crisp and clear.
                                </li>
                                <li>
                                    Time spent on tedious tasks: Let us automate the mundane! Whether it's counting words or removing line breaks, we free you to focus on the bigger picture – your message.
                                </li>
                            </ul>
 
                            <p>
                                <strong>More than just a text cleaner, PlayText offers:</strong>
                            </p>
 
                            <ul>
                                <li>
                                    Effortless conversions: Need to translate between languages? Convert text formats like HTML or Markdown? We've got you covered.
                                </li>
                                <li>
                                    Customization options: Tailor the app to your needs. Choose your preferred dictionary, adjust sensitivity levels, and personalize your text transformation experience.
                                </li>
                                <li>
                                    Privacy you can trust: We take your data seriously. Your text remains entirely private, and we never share your information with third parties.
                                </li>
                            </ul>
 
                            <p>
                                <strong>Join the community of writers, students, and professionals who rely on PlayText to:</strong>
                            </p>
 
                            <ul>
                                <li>
                                    Write with confidence: Polish your communication and impress your audience with error-free, well-formatted text.
                                </li>
                                <li>
                                    Boost productivity: Automate repetitive tasks and focus on the creative aspects of writing.
                                </li>
                                <li>
                                    Simplify your workflow: Streamline your writing process with a single, versatile tool.
                                </li>
                            </ul>
 
                            <p>
                                Ready to experience the magic of text transformation? Download PlayText today and unlock the full potential of your writing!
                            </p>
 
                            <p>
                                <strong>P.S.</strong> We're constantly adding new features based on user feedback. Tell us what you'd like to see, and we'll make it happen!
                            </p>
 
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                        >
                            When did we start?
                        </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            <p>
                                Welcome! PlayText was first launched in 2024. We're constantly adding new features to enhance your text manipulation experience.
                            </p>
                        </div>
                    </div>
                </div>
 
            </div>
        </div>
 
    )
}