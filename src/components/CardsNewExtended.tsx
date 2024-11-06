"useClient";
import Image from "next/image";
export type cardsType = {
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  period: string;
  subtitle: string;
  title: string;
  description: string;
};
export default function CardsNew({
  image,
  period,
  subtitle,
  title,
  description,
}: cardsType) {
  return (
    <div className="w-full p-4 flex-col rounded-md bg-white">
      <div className="inline-flex gap-8">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className="rounded-full relative"
        />

        <p className="uppercase text-gray-400 text-sm pt-3">{period}</p>
      </div>
      <p className="text-gray-400">{subtitle}</p>
      <h2 className="font-black">{title}</h2>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  );
}
