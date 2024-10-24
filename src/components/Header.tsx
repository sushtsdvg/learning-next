import Image from "next/image";

const Header = () => {
  return (
    <div className="w-full">
      <div className="flex flex-row justify-end border-b-2">
        <ul className="inline-flex p-2 gap-16">
          <li className="list-none ">GitHub</li>
          <li className="list-none ">OpenSource Documentation</li>
          <li className="list-none uppercase pr-5">faq</li>
        </ul>
      </div>

      <div className="flex flex-row justify-between m-2 gap-14">
        <div className="flex-col">
          <Image
            src="/images/Avesha Logo.png"
            alt="Avesha logo"
            width="137"
            height="40"
          />
        </div>

        <div className="flex-col">
          <ul className="inline-flex gap-24">
            <li>Products</li>
            <li>Use Cases</li>
            <li>Partners</li>
            <li>Resources</li>
            <li>Company</li>
          </ul>
        </div>
        <div className="flex-col mr-4">
          <button className="bg-blue-500 text-white rounded-sm text-sm w-28 h-8 justify-center">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
