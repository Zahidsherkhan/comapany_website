import React from "react";
import { FaMobileScreen } from "react-icons/fa6";
import { SiGoogleearthengine } from "react-icons/si";
import { MdLaptopMac } from "react-icons/md";
import { AiOutlineAudit } from "react-icons/ai";
import { GrVmMaintenance } from "react-icons/gr";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { GiBackwardTime } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import styling from "../Styling/AfterHero.module.css";
import img1 from "../assets/AfterHero/img1.jpg";
import img2 from "../assets/AfterHero/img2.jpg";
import img3 from "../assets/AfterHero/img3.jpg";
import { Link } from "react-router-dom";
import FAQ from "../components/subComponents/AfterHero_SUBS/FAQ";
const AfterHero = () => {
  const services = [
    {
      component: <FaMobileScreen className={styling.icons} />,
      tag: "GHL Account Setup",
      des: "Maximize your business potential with our expertly tailored GoHighLevel account setup. Designed to optimize your operations and drive sustainable growth, enhance efficiency and elevates customer engagement. Take the next step toward success!",
    },
    {
      component: <SiGoogleearthengine className={styling.icons} />,
      tag: "Custom GHL Dashboards",
      des: "Take your decision-making to the next level with our tailored GoHighLevel dashboards. Get real-time insights, in-depth analytics, and a data-driven approach to optimize your business performance. Empower your strategy with the right information at your fingertips!",
    },
    {
      component: <MdLaptopMac className={styling.icons} />,
      tag: "High-Performance Funnels & Websites",
      des: "Turn your vision into a compelling online experience with expertly designed GHL funnels and websites. Boost engagement, increase conversions, and establish a strong digital presence effortlessly.",
    },
    {
      component: <AiOutlineAudit className={styling.icons} />,
      tag: "3rd-Party Integrations",
      des: "Enhance your business with powerful third-party integrations, streamlining operations and boosting efficiency. From automation to CRM systems, we ensure hassle-free connections to optimize your workflow!",
    },
    {
      component: <GrVmMaintenance className={styling.icons} />,
      tag: "Powerful SAAS",
      des: "Streamline operations and scale effortlessly with our innovative SaaS solutions, designed to boost efficiency and drive growth. Let’s take your business to the next level!",
    },
    {
      component: <GrVmMaintenance className={styling.icons} />,
      tag: "Web Development",
      des: "Transform your ideas into high-performing dynamic websites with cutting-edge features, seamless functionality, eye catching and a user-friendly experience designed to engage and convert visitors.",
    },
  ];

  const howContent = [
    {
      title: "Tell Us Your Vision",
      description:
        "Share your ideas with us, and we'll bring them to life with creativity and precision. We ensure your vision is understood and transformed into stunning visuals.",
    },
    {
      title: "Unleash The Creativity",
      description:
        "Our experts craft unique and innovative designs tailored to your needs. Every detail is carefully considered to make your project stand out.",
    },
    {
      title: "Your Perfect Pic",
      description:
        "Get high-quality visuals designed specifically for you. We guarantee exceptional results that align with your preferences and goals.",
    },
    {
      title: "Bring Ideas to Reality",
      description:
        "We take your concepts and turn them into actionable designs. Whether it's branding, UI/UX, or marketing materials, we've got you covered. We make sure our customer is satisfied 100% and for that we have very professional teams",
    },
  ];

  const additionals = [
    {
      component: <FaMoneyBillTransfer className={styling.icons2} />,
      tag: "Money Back Guarantee",
      paragraph:
        "We ensure a full refund if you're not satisfied with our service. " +
        "Your investment is safe with us, and we stand by our commitment to quality. " +
        "No risks, just reliable service!",
    },
    {
      component: <GiBackwardTime className={styling.icons2} />,
      tag: "Always Quick Turnaround",
      paragraph:
        "Timely delivery is our priority, so you get results faster. " +
        "We streamline our processes to ensure efficiency without compromising quality. " +
        "Your projects will always be on time!",
    },
    {
      component: <BiSupport className={styling.icons2} />,
      tag: "Customer Support",
      paragraph:
        "Our team is available 24/7 to assist you with any queries. " +
        "Whether you need guidance, troubleshooting, or general help, we’re here for you. " +
        "Expect fast responses and dedicated support!",
    },
  ];

  return (
    <div className={styling.AfterHeroParent}>
      {/* Services Rendering */}
      <div className={styling.servicesMain}>
        {services.map((componentObject, index) => (
          <div className={styling.servicesEachOne} key={index}>
            {componentObject.component}
            <p className={styling.servicesTagline}>{componentObject.tag}</p>
            <div className={styling.servicesDes}>{componentObject.des}</div>
          </div>
        ))}
      </div>
      <div className={styling.seeAllServiceParent}>
        <p className={styling.generalTagline1}>See All Services </p>
        <span className={styling.arrowTagSPANPARENT}>
          <LiaLongArrowAltRightSolid className={styling.arrowTag} />
        </span>
      </div>
      <div className={styling.taglineDrift}>
        <p className={styling.secondTagline}>
          Build A Brand Your Customers Love
        </p>
      </div>

      {/* Additional Services Rendering */}
      <div className={styling.additionalObjectParent}>
        {additionals.map((additionalObject, index) => (
          <div className={styling.additionalObjectEachOne} key={index}>
            <div className={styling.additionalObjectIconDIV}>
              {additionalObject.component}
            </div>
            <p className={styling.additionalObjectTagline1}>
              {additionalObject.tag}
            </p>
            <p className={styling.additionalObjectTagline2}>
              {additionalObject.paragraph}
            </p>
          </div>
        ))}
      </div>
      <div className={styling.SecondBigTaglineDIV}>
        <p className={styling.SecondBigTagline}>How NaxonSolutions Works?</p>
      </div>
      <div className={styling.parentHow}>
        <div className={styling.howImages}>
          <img className={styling.imageset1} srcSet={img1} alt="" />
          <img className={styling.imageset2} srcSet={img2} alt="" />
          <img className={styling.imageset3} srcSet={img3} alt="" />
        </div>
        <div className={styling.howDivsParent}>
          {howContent.map((item, index) => (
            <div key={index} className={styling.howDivs}>
              <p className={styling.howTaglines}>{item.title}</p>
              <p className={styling.minorTag}>{item.description}</p>
            </div>
          ))}

          <div className={styling.placeOrderParent}>
            <p className={styling.btnLine}>Place Your First Order Now</p>{" "}
            <span className={styling.arrowTagSPANPARENT}>
              <LiaLongArrowAltRightSolid className={styling.arrowTag} />
            </span>
          </div>
        </div>
      </div>
      <div className={styling.contactUsParent}>
        <div className={styling.contactUsINFO}>
          <p>Contact us as your extended Team</p>
          <p>We will be happy to assist you at every step.</p>
        </div>
        <Link to="./Contact_us" className={styling.contactUsBTN}>
          Become Our Partner
        </Link>
      </div>
      <FAQ></FAQ>
    </div>
  );
};

export default AfterHero;
