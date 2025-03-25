import React from "react";
// import styles from "./FAQ.module.css"; // Import modular CSS
import { AiOutlineDown } from "react-icons/ai"; // Using an arrow icon
import styles from "./subComponentsStyling/FAQ.module.css";

const FAQ = () => {
  return (
    <div className={styles.faqContainer}>
      <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>

      {faqData.map((faq, index) => (
        <details key={index} className={styles.details}>
          <summary className={styles.summary}>
            {faq.question}
            <AiOutlineDown className={styles.arrow} />
          </summary>
          <p className={styles.content}>{faq.answer}</p>
        </details>
      ))}
    </div>
  );
};

// FAQ data array
const faqData = [
  {
    question: "How does the design process work?",
    answer:
      "Our design process is simple and efficient. First, you provide us with your design requirements and specifications. Our talented creatives then submit their designs based on your brief. Once the designs are ready, we present them to you for review. You have the opportunity to provide feedback, request revisions, and refine the concepts until you are completely satisfied with the final design.",
  },
  {
    question: "Can I provide feedback and make revisions to the designs?",
    answer:
      "Yes! We encourage feedback and offer revisions to ensure the final design meets your expectations. Once you receive the initial design drafts, you can review them and share your thoughts. Whether it's minor tweaks or major changes, our team will work with you to refine the design. Our goal is to deliver a final product that aligns perfectly with your vision and business needs.",
  },
  {
    question: "How long does it take to receive the design submissions?",
    answer:
      "The turnaround time depends on the project, but typically, initial submissions are delivered within a few days. More complex projects may take a bit longer, as we ensure each design is carefully crafted to meet your requirements. We prioritize efficiency while maintaining high-quality standards. If you have urgent requests, let us know, and we will do our best to accommodate your timeline.",
  },
  {
    question: "What if I don’t like any of the submitted designs?",
    answer:
      "No worries! We can refine the designs based on your feedback or offer additional concepts to better match your vision. Our designers are committed to ensuring your satisfaction, and we provide multiple revision rounds to get the design just right. If needed, we can explore alternative styles, colors, and layouts to better suit your preferences.",
  },
  {
    question: "Do you offer ongoing support and maintenance?",
    answer:
      "Yes! We provide ongoing support and maintenance to ensure your system remains secure, up to date, and fully functional. Whether it’s bug fixes, performance optimizations, feature enhancements, or security updates, our team is here to help. Our goal is to ensure your digital assets continue to deliver value without disruptions.",
  },
  {
    question: "What makes your services different from others?",
    answer:
      "we build lasting relationships. Our team provides ongoing support, training, and maintenance to ensure you get the most out of your investment. Your success is our success, and we go the extra mile to help you achieve it. Our services are fully customized to align with your specific business goals, brand identity, and user experience needs. Whether it's web development, SaaS, or integrations, we craft solutions tailored just for you.",
  },
];

export default FAQ;
