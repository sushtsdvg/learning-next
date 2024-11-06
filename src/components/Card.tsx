"useClient";

import Image from "next/image";
export type propsType = {
  image: {
    alt: string;
    src: string;
  };
  title: {
    part1: string;
    part2: string;
  };
  subtitle: string;
  description: string;
  button: {
    primaryButton: {
      text: string;
      url: string;
    };
    secondaryButton: {
      text: string;
      url: string;
    };
  };
};
export default function Card({
  image,
  title,
  subtitle,
  description,
  button,
}: propsType) {
  return (
    <div className="flex flex-row gap-12 w-[75%]">
      <div className="rounded-md shadow-2xl shadow-blue-300 w-auto p-4">
        <div className="inline-flex justify-between gap-4">
          <div className="flex-col">
            <Image src={image.src} alt={image.alt} width="82" height="69" />
          </div>
          <div className="flex flex-col">
            <div className="w-full inline-flex mt-3">
              <h1 className="text-[#486caf] font-extrabold tracking-wide">
                {title.part1}
              </h1>
              <h1 className="text-[#f2775d] font-extrabold tracking-wide">
                {title.part2}
              </h1>
            </div>
            <div className="flex-row">
              <p className="text-blue-400">{subtitle}</p>
            </div>
          </div>
        </div>

        <p className="justify-center mb-8">{description}</p>
        <div className="flex flex-row justify-between">
          <button className="bg-[#f2775d] text-white p-2 rounded-sm text-sm">
            {button.primaryButton.text}
          </button>
          <button className="text-[#486caf]">
            {button.secondaryButton.text}
          </button>
        </div>
      </div>
    </div>
  );
}
