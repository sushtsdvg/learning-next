"useClient";
export type FirstCardType = {
  label: string;
  text: string;
  button: string;
};
export default function FirstCard({ label, text, button }: FirstCardType) {
  return (
    <>
      <div className="rounded-md bg-orange-500 text-white uppercase p-2 w-fit">
        <p>{label}</p>
      </div>
      <div>
        <p className="capitalize text-white font-semibold text-xl">
          {text}
        </p>
        <p className="text-white font-medium">
          {" "}
          {button} <span className="text-lg">&#8594;</span>
        </p>
      </div>
    </>
  );
}
