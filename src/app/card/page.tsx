import Cards, { cardType } from "@/components/CardsNew";
import CardsNew, { cardsType } from "@/components/CardsNewExtended";
import FirstCard, { FirstCardType } from "@/components/FirstCard";
const getCardData = (): cardType[] => {
  return [
    {
      image: {
        src: "/images/BlackmonkLogo.png",
        alt: "double spring",
        width: 75,
        height: 25,
      },
      period: "few seconds",
      subtitle: "DoubleSpring",
      title: "BlackMonk v3.5",
      description: "New BlackMonk with UI updates + enhanced features.",
    },
    {
      image: {
        src: "/images/Black Monk Insider Logo.png",
        alt: "blackMonkinsider",
        width: 75,
        height: 25,
      },
      period: "few seconds",
      subtitle: "DoubleSpring",
      title: "BlackMonk Insider",
      description: "New template that exclusively built for local search",
    },
    {
      image: {
        src: "/images/ApplePayLogo.png",
        alt: "double spring",
        width: 75,
        height: 25,
      },
      period: "a minute",
      subtitle: "Stripe Inc.",
      title: "Apple Pay on Stripe",
      description: "Easy Apple Pay integration for businesses built on Stripe",
    },
    {
      image: {
        src: "/images/ProjectPolymer.png",
        alt: "double spring",
        width: 75,
        height: 25,
      },
      period: "7 minutes",
      subtitle: "Google Inc.",
      title: "Project Polymer",
      description:
        "Web Components usher in a new era of web development based on encapsulated and interoperable custom",
    },
  ];
};
const getCardsData = (): cardsType[] => {
  return [
    {
      image: {
        src: "/images/InVisionLogo.png",
        alt: "InVisionLogo",
        width: 75,
        height: 25,
      },
      period: "2 days",
      title: "InVision",
      subtitle: "InVision v5",
      description:
        "UI update + Reeengineered almost everything from the ground up.",
    },
    {
      image: {
        src: "/images/HyperLapseLogo.png",
        alt: "Hyper Lapse",
        width: 75,
        height: 25,
      },
      period: "3 days",
      title: "Instagram",
      subtitle: "Hyperlapse",
      description:
        "Hyperlapse is one of the first extensions of the Instagram brand to date.",
    },
    {
      image: {
        src: "/images/StripeLogo.png",
        alt: "Stripe Logo",
        width: 75,
        height: 25,
      },
      period: "a week",
      title: "Stripe Inc.",
      subtitle: "Stripe Amex Express Checkout",
      description: "Stripe + Amex Express Checkout",
    },
  ];
};
const getFirstCardData = (): FirstCardType => {
  return {
    label: "traveling",
    text: "cappadocia",
    button: "View Trip",
  };
};
export default function page() {
  const cardData = getCardData();
  const cardsData = getCardsData();
  const firstCardData = getFirstCardData();
  return (
    <div className="w-full flex-col bg-[#f5f5f7] p-2">
      <div className="w-full inline-flex justify-between mb-2">
        <div className="justify-start">
          <h1>All Projects</h1>
        </div>
        <div className="bg-green-600 text-white p-2 rounded-sm justify-end w-fit align-middle">
          <button>+New Project</button>
        </div>
      </div>
      <div className="w-full p-4 flex-col rounded-lg bg-[url('/images/Cappadocia.avif')] space-y-20">
        <FirstCard
          key={firstCardData.label}
          label={firstCardData.label}
          text={firstCardData.text}
          button={firstCardData.button}
        />
      </div>
      <div className="flex flex-row gap-8 p-4">
        {cardData.map((cardprops) => {
          return (
            <Cards
              key={cardprops.title}
              image={cardprops.image}
              title={cardprops.title}
              period={cardprops.period}
              subtitle={cardprops.subtitle}
              description={cardprops.description}
            />
          );
        })}
      </div>
      <div className="flex flex-row gap-8 p-4 w-[75%]">
        {cardsData.map((cardsprops) => {
          return (
            <CardsNew
              key={cardsprops.title}
              image={cardsprops.image}
              title={cardsprops.title}
              period={cardsprops.period}
              subtitle={cardsprops.subtitle}
              description={cardsprops.description}
            />
          );
        })}
      </div>
    </div>
  );
}
