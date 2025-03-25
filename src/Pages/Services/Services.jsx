import React from "react";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaServer,
  FaShoppingCart,
  FaRobot,
  FaCloudUploadAlt,
} from "react-icons/fa";
import { RiDashboardHorizontalLine } from "react-icons/ri";
import styles from "./Styling/Services.module.css";
import banner from "./banner.jpg";
import { Link } from "react-router-dom";
import { GrIntegration } from "react-icons/gr";
import { AiOutlineSolution } from "react-icons/ai";
import { TbTransitionRight } from "react-icons/tb";
import { RiFunctionAddLine } from "react-icons/ri";
import { CgWebsite } from "react-icons/cg";
import { SiInductiveautomation } from "react-icons/si";
import { MdOutlineWeb } from "react-icons/md";
const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className={styles.serviceCard}>
      <div className={styles.serviceIcon}>{icon}</div>
      <h3 className={styles.serviceTitle}>{title}</h3>
      <p className={styles.serviceDescription}>{description}</p>
    </div>
  );
};

const Services = () => {
  const servicesList = [
    {
      icon: <FaLaptopCode />,
      title: "GHL Account Setup",
      description:
        "Maximize your business potential with our expertly tailored GoHighLevel account setup. Designed to optimize your operations and drive sustainable growth, enhance efficiency and elevates customer engagement. Take the next step toward success!",
    },
    {
      icon: <RiDashboardHorizontalLine />,
      title: "Custom GHL Dashboards",
      description:
        "Take your decision-making to the next level with our tailored GoHighLevel dashboards. Get real-time insights, in-depth analytics, and a data-driven approach to optimize your business performance. Empower your strategy with the right information at your fingertips!",
    },
    {
      icon: <GrIntegration />,
      title: "3rd-Party Integrations",
      description:
        "Enhance your business with powerful third-party integrations, streamlining operations and boosting efficiency. From automation to CRM systems, we ensure hassle-free connections to optimize your workflow!",
    },
    {
      icon: <AiOutlineSolution />,
      title: "Powerful SAAS",
      description:
        "Streamline your operations and scale effortlessly with our cutting-edge SaaS solutions, tailored to enhance efficiency, automate workflows, and drive sustainable growth. Let’s optimize your business for success and unlock new opportunities!",
    },
    {
      icon: <TbTransitionRight />,
      title: "Smooth Transition to GHL",
      description:
        "Move to GoHighLevel seamlessly with our expert migration services. We handle the entire process efficiently, ensuring minimal disruption while enhancing automation, workflows, and customer interactions. Upgrade with ease and take your business to the next level!",
    },
    {
      icon: <MdOutlineWeb />,
      title: "Web Application Development",
      description:
        "Custom, responsive web applications built with modern frameworks like React, Angular, and Vue.js. From simple websites to complex enterprise solutions, we deliver scalable and secure web experiences.",
    },

    {
      icon: <RiFunctionAddLine />,
      title: "Tailored GHL Add-Ons",
      description:
        "Unlock new capabilities with our custom GoHighLevel add-ons, designed to seamlessly integrate with your platform. Enhance functionality, automate tasks, and optimize your workflow to match your business needs perfectly.",
    },

    {
      icon: <SiInductiveautomation />,
      title: "Intelligent GHL Automation",
      description:
        "Transform the way you work with our advanced GHL automation solutions. From streamlining processes to increasing efficiency, we help you eliminate manual tasks and focus on what truly matters-growing your business.",
    },
    {
      icon: <CgWebsite />,
      title: "Funnels & Engaging Websites",
      description:
        "Bring your vision to life with our expertly crafted GoHighLevel funnels and websites. Designed to maximize conversions and enhance your brand presence, our solutions ensure a seamless and compelling user experience. Let’s build something exceptional together!",
    },
  ];

  return (
    <div>
      <img src={banner} className={styles.bannerImg} alt="" />
      <div className={styles.servicesContainer}>
        <div className={styles.servicesHeader}>
          <h1 className={styles.mainHeading}>Our Services</h1>
          <p className={styles.mainDescription}>
            We deliver cutting-edge software solutions tailored to your unique
            business needs. Our team of experts combines technical excellence
            with industry knowledge to bring your vision to life.
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {servicesList.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        <div className={styles.processSection}>
          <h2 className={styles.processHeading}>Our Development Process</h2>
          <div className={styles.processGrid}>
            <div className={styles.processStep}>
              <div className={styles.processNumber}>1</div>
              <h3 className={styles.processTitle}>Discovery</h3>
              <p className={styles.processDescription}>
                We collaborate to understand your goals, requirements, and
                vision.
              </p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.processNumber}>2</div>
              <h3 className={styles.processTitle}>Planning</h3>
              <p className={styles.processDescription}>
                We create detailed specifications and project roadmaps.
              </p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.processNumber}>3</div>
              <h3 className={styles.processTitle}>Development</h3>
              <p className={styles.processDescription}>
                We build your solution with agile methodologies and regular
                updates.
              </p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.processNumber}>4</div>
              <h3 className={styles.processTitle}>Launch & Support</h3>
              <p className={styles.processDescription}>
                We deploy your solution and provide ongoing maintenance.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaHeading}>Ready to Start Your Project?</h2>
            <p className={styles.ctaDescription}>
              Let's discuss how we can help you achieve your goals.
            </p>
          </div>
          <div className={styles.ctaButtonContainer}>
            <Link className={styles.ctaButton} to="/Contact_us">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
