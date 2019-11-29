import React from "react";
import "../components/style.scss";
import Helmet from "../components/layout/helmet";
import NavBar from "../components/layout/navbar";
import Footer from "../components/layout/footer";
import Faq from "../components/faq";

const questions = [
  {
    id: 1,
    title: "Why should I become a Carviva Autocare Partner?",
    text:
      "Be part of a big market. List with Nigeria’s largest community of car owners, enjoy wide coverage by adding unlimited service centers of your choice anywhere across Nigeria."
  },
  {
    id: 2,
    title: "How do I join Carviva Community?",
    text:
      "Simply have a clean and functional garage or workshop then create an account with us."
  },
  {
    id: 3,
    title: "Does it take long to Signup?",
    text:
      "It takes only 5 minutes to create an account. This quick setup allows you to be ready to receive autocare requests from car owners within 3hours once verification is completed."
  },
  {
    id: 4,
    title: "What are Autocare Partner signup and workshop requirements?",
    text:
      "Be a registered business entity with RC number or business name registration. Have a verified Bank account matching your business name. Agree to our fair pricing terms, commission structure, custom care policy and payouts schedule."
  },
  {
    id: 5,
    title: "What is fair and transparent Pricing by Carviva?",
    text:
      "Our Autocare Partners are required to provide upfront pricing on all services for car owners to have an idea of charges or cost to be paid during booking process."
  },
  {
    id: 6,
    title: "Does Carviva charge listing or monthly Fees?",
    text:
      "No. Listing fees are free forever and there are no monthly commitment fees. Our low platform access fees of N1000 is free for first 12 months of partner operation."
  },
  {
    id: 7,
    title: "How do I get paid and when?",
    text:
      "Fast payout is done weekly to designated Bank accounts provided by Autocare Partners."
  },
  {
    id: 8,
    title: "What if I’m not ready with a Brick and mortar service Centre?",
    text:
      "Not to worry as Carviva will work with bigger service centers to provide roadside service opportunities for interested individual mechanics to signup using bikes, tricycles and mini vans."
  },
  {
    id: 9,
    title: "How much will an Autocare Partner pay Carviva?",
    text:
      "We adopt a low discount structure. We support our Autocare Partners to make more as carviva takes only 20% commission on service payments or in some cases; small fixed fees on lowly priced autocare service."
  },
  {
    id: 10,
    title: "How do car owners pay for Service?",
    text:
      "Car owners pay cash on service delivery at service center or via prepaid card payments before visiting service center."
  }
];

const FaqPage = () => (
  <div className="about">
    <Helmet />
    <Faq title="Frequently Asked Question" questions={questions} />
    <Footer />
  </div>
);

export default FaqPage;
