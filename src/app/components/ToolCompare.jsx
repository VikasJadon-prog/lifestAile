"use client";
import React, { useState } from "react";
import AiToolCard from "./AiToolCard";
import StarRating from "./StarRating";

const ToolCompare = () => {
  const [activeTab, setActiveTab] = useState("price");

  const cards = [
    {
      name: "Chat GPT",
      description:
        "An advanced conversational AI, capable of understanding and generating human-like text based on the GPT-4 architecture.",
      price: [
        { tier: "Free", cost: "Free" },
        { tier: "Plus", cost: "$10/month" },
        { tier: "Team", cost: "$30/person/month" },
        { tier: "Enterprise", cost: "Contact Sales" },
      ],
      features: [
        "Pre-trained models for NLP tasks",
        "Easy integration with various platforms",
        "Active community and extensive documentation",
        "Supports transfer learning and fine-tuning",
        "APIs for model inference",
      ],
      reviews: [
        { aspect: "Overall Rating", rating: 4.8 },
        { aspect: "Value for Money", rating: 5 },
        { aspect: "Ease of Use", rating: 4.5 },
        { aspect: "Features", rating: 4.8 },
        { aspect: "Customer Support", rating: 4.7 },
      ],
    },
    {
      name: "Hugging Face",
      description:
        "A popular library for natural language processing (NLP) that offers pre-trained models and tools for various NLP tasks.",
      price: [
        { tier: "Free", cost: "Free" },
        { tier: "Plus", cost: "$10/month" },
        { tier: "Team", cost: "$30/person/month" },
        { tier: "Enterprise", cost: "Contact Sales" },
      ],
      features: [
        "Pre-trained models for NLP tasks",
        "Easy integration with various platforms",
        "Active community and extensive documentation",
        "Supports transfer learning and fine-tuning",
        "APIs for model inference",
      ],
      reviews: [
        { aspect: "Overall Rating", rating: 4.6 },
        { aspect: "Value for Money", rating: 4 },
        { aspect: "Ease of Use", rating: 4.5 },
        { aspect: "Features", rating: 4.6 },
        {
          aspect: "Customer Support",
          rating: 4.5,
        },
      ],
    },
    {
      name: "IBM Watson",
      description:
        "A suite of enterprise-ready AI services, applications, and tooling designed to reduce the costs and hurdles of AI adoption.",
      price: [
        { tier: "Free", cost: "Free" },
        { tier: "Plus", cost: "$10/month" },
        { tier: "Team", cost: "$30/person/month" },
        { tier: "Enterprise", cost: "Contact Sales" },
      ],
      features: [
        "Pre-trained models for NLP tasks",
        "Easy integration with various platforms",
        "Active community and extensive documentation",
        "Supports transfer learning and fine-tuning",
        "APIs for model inference",
      ],
      reviews: [
        { aspect: "Overall Rating", rating: 4.2 },
        { aspect: "Value for Money", rating: 3.5 },
        { aspect: "Ease of Use", rating: 3.8 },
        { aspect: "Features", rating: 4 },
        {
          aspect: "Customer Support",
          rating: 4.2,
        },
      ],
    },
  ];

  const calculateOverallRating = (reviews) => {
    const filteredReviews = reviews.filter(
      (review) => review.aspect !== "Overall Rating"
    );
    if (filteredReviews.length === 0) return 0;
    const totalRating = filteredReviews.reduce(
      (acc, review) => acc + review.rating,
      0
    );
    return (totalRating / filteredReviews.length).toFixed(1);
  };

  return (
    <div className="p-4">
      <div className="text-center w-full font-square721-normal">
        <h1 className="text-white text-[16px] mb-9 ">
          Here are the top 3 AI tools based on your request. To further help
          choose the best tool for you we have collated comparisons based on the
          following
        </h1>
      </div>
      <div className="flex gap-x-4 justify-center mb-4 font-square721-normal text-md">
        <button
          className={`px-2 text-white border-[3px] rounded-3xl ${
            activeTab === "price"
              ? "rounded-3xl leading-0 bg-[#5271FF] border-[#5271FF] text-white"
              : "bg-transparent text-gray-700"
          }`}
          onClick={() => setActiveTab("price")}
        >
          Price
        </button>
        <button
          className={`px-2 text-white border-[3px] rounded-3xl ${
            activeTab === "features"
              ? "rounded-3xl leading-0 bg-[#5271FF] border-[#5271FF] text-white"
              : "bg-transparent text-gray-700"
          }`}
          onClick={() => setActiveTab("features")}
        >
          Features
        </button>
        <button
          className={`px-2 text-white border-[3px] rounded-3xl ${
            activeTab === "reviews"
              ? "rounded-3xl leading-0 bg-[#5271FF] border-[#5271FF] text-white"
              : "bg-transparent text-gray-700"
          }`}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews
        </button>
      </div>
      <div className="flex items-stretch">
        {cards.map((card, index) => (
          <React.Fragment key={index}>
            <div className="flex-1">
              <AiToolCard data={card} />
              {activeTab === "price" && (
                <div className="grid mt-[40px] bg-transparent px-7 font-square721-normal gap-3">
                  {card.price.map((priceTier, i) => (
                    <React.Fragment key={i}>
                      <div>
                        <h1 className="text-white text-2xl">
                          {priceTier.tier}
                        </h1>
                        <p className="text-white text-md">{priceTier.cost}</p>
                      </div>
                      {i < card.price.length - 1 && (
                        <div className="w-[60px] h-[2px] bg-gray-400 mx-auto my-1"></div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              )}
              {activeTab === "features" && (
                <div className="grid mt-[40px] bg-transparent px-7 text-white font-square721-normal gap-3">
                  {card.features.map((feature, i) => (
                    <p key={i} className="text-lg">
                      - {feature}
                    </p>
                  ))}
                </div>
              )}
              {activeTab === "reviews" && (
                <div className="grid mt-[30px] px-10 bg-transparent text-center font-square721-normal text-white">
                  <div className="text-center mb-4">
                    <h1 className="text-2xl">Overall Rating</h1>
                    <div className="flex justify-center mb-2">
                      <StarRating
                        rating={parseFloat(
                          calculateOverallRating(card.reviews)
                        )}
                      />
                    </div>
                    <h1 className="text-2xl">
                      {calculateOverallRating(card.reviews)}/5
                    </h1>
                  </div>
                  <div className="mt-[20px]">
                    {card.reviews.map(
                      (review, i) =>
                        review.aspect !== "Overall Rating" && (
                          <div key={i} className="mb-2 ">
                            <div className="flex items-center gap-3">
                              <div className="w-[60%] flex justify-start">
                                <p>{review.aspect}:</p>
                              </div>
                              <div className="w-[60%] flex justify-start">
                                <StarRating rating={review.rating} />
                              </div>
                            </div>
                          </div>
                        )
                    )}
                  </div>
                </div>
              )}
            </div>
            {index < cards.length - 1 && (
              <div className="w-[2px] bg-gray-400 mx-2"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ToolCompare;
