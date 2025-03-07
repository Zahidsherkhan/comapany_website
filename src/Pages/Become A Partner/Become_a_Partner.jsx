import React from "react";
import styles from "./Styling/Become_a_Partner.module.css";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
const Become_a_Partner = () => {
  return (
    <div className={styles.container}>
      <h1>Unlock Growth with a Strong Partnership</h1>
      <p>
        Partnering with us means joining hands with a trusted software solutions
        provider. Whether you're a reseller, agency, or entrepreneur, we offer a
        profitable and collaborative ecosystem to help you scale.
      </p>

      <h2>Why Partner With Us?</h2>
      <ul>
        <li>
          <strong>Revenue Growth:</strong> Increase your earnings through our
          partnership programs.
        </li>
        <li>
          <strong>Exclusive Resources:</strong> Gain access to premium tools and
          dedicated support.
        </li>
        <li>
          <strong>Co-Branding Opportunities:</strong> Build credibility with a
          trusted software company.
        </li>
        <li>
          <strong>End-to-End Support:</strong> From onboarding to client
          servicing, we've got you covered.
        </li>
      </ul>

      <h2>Who Can Partner?</h2>
      <ul>
        <li>
          <strong>Freelancers & Consultants:</strong> Expand your service
          offerings.
        </li>
        <li>
          <strong>Marketing & IT Agencies:</strong> Add top-tier software
          solutions to your portfolio.
        </li>
        <li>
          <strong>Resellers & Distributors:</strong> Sell our services under
          your brand or co-brand with us.
        </li>
      </ul>

      <h2>How It Works?</h2>
      <ol>
        <li>
          <strong>Apply Online:</strong> Fill out our quick partnership form.
        </li>
        <li>
          <strong>Get Approved:</strong> We evaluate your profile and discuss
          collaboration terms.
        </li>
        <li>
          <strong>Start Earning:</strong> Refer, resell, or collaborate with us
          on projects.
        </li>
      </ol>

      <p>
        <strong>Join Us Today!</strong> Let’s build something great together.
      </p>
      <a href="#" className={styles.btn}>
        Become a Partner Now
      </a>
    </div>
  );
};

export default Become_a_Partner;

// <FaMoneyBillTrendUp />
// import { GrResources } from "react-icons/gr";  <GrResources />

// import { MdOutlineBrandingWatermark } from "react-icons/md";
// <MdOutlineBrandingWatermark />

// import { MdSupportAgent } from "react-icons/md";
//  <MdSupportAgent />;
