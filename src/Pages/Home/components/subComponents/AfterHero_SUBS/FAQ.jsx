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
    question: "How can custom GoHighLevel dashboards benefit my business?",
    answer:
      "Our GHL dashboards provide real-time insights and in-depth analytics, allowing you to track key metrics, monitor performance, and make informed decisions. With a user-friendly interface and customizable features, you can optimize workflows, improve efficiency, and drive consistent business growth.",
  },
  {
    question: "What sets your funnels, web design, and integrations apart?",
    answer:
      "We specialize in creating high-converting funnels, visually engaging websites, and seamless third-party integrations tailored to your brand’s needs. Our approach focuses on user experience, automation, and performance-driven design to ensure your business operates efficiently while maximizing engagement and conversions.",
  },
  {
    question: "What makes your services different from others?",
    answer:
      "we build lasting relationships. Our team provides ongoing support, training, and maintenance to ensure you get the most out of your investment. Your success is our success, and we go the extra mile to help you achieve it. Our services are fully customized to align with your specific business goals, brand identity, and user experience needs. Whether it's web development, SaaS, or integrations, we craft solutions tailored just for you.",
  },
];

export default FAQ;
