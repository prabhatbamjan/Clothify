import { useState } from "react";
import QuestionsAnswer from "./accordion/QuestionsAnswer";

export default function Feedback() {
    const feedbacks = [
        {
            question: "How satisfied are you with the fit of the clothes?",
            answer:
                "I wish they fit better :(",
        },

        {
            question: "What features would you like to see added to the website?",
            answer:
                "I would love to see more size options and color choices for the clothes.",
        },

        {
            question: "How satisfied are you with the overall design and usability of the website?",
            answer:
                "I find the website easy to navigate, but the design could be improved.",
        },

        {
            question: "Would you recommend this website to others?",
            answer:
                "Yes, I would recommend it to my friends who are looking for stylish clothes.",
        },
        {
            question: "Do you have any other feedback or suggestions?",
            answer:
                "I think adding a wishlist feature would be helpful for users to save their favorite items.",
        },
    ];

  
    return (
        <>
             <div className="faq-section">
                <div className="faq-container">
                    <div className="faq-contents">
                        <div className="faq-title">
                        <h1> Drop Your Feedback</h1>
                        </div>
                        {feedbacks.map((feedback ,index) => {
                            return (
                              <QuestionsAnswer question={feedback.question} answer={feedback.answer} key={index}/>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}
