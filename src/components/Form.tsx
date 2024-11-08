"useClient";

import Image from "next/image";

export type formType = {
  image: {
    width: number;
    height: number;
    src: string;
    alt: string;
  };
  input: {
    type: string;
    placeholder: string;
    name: string;
  };
};
export default function Form({ image, input }: formType) {
  return (
    <form className="flex-row">
      <div className="flex flex-col m-8">
        <div className="inline-flex outline outline-gray-500 outline-1 rounded-lg p-2">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
          />
          <input
            type={input.type}
            placeholder={input.placeholder}
            name={input.name}
            className="outline-none"
          />
        </div>
        {/* <div className="inline-flex outline outline-gray-500 outline-1 rounded-lg p-2 my-2">
          <Image
            src="/images/password-svgrepo-com.svg"
            alt="email-icon"
            width={20}
            height={10}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="outline-none"
          />
        </div> */}
      </div>
      {/* <div className="inline-flex gap-2">
        <div className="inline-flex gap-2">
          <input type="checkbox" name="Remember Me" id="checkbox" />
          <p>Remember me</p>
        </div>
        <div className="text-blue-600">
          <a href="#">Forgot Password?</a>
        </div>
      </div>
      <div className="bg-blue-500 rounded-lg w-full text-white text-center py-2">
        <button>Log in</button>
      </div>
      <div className="inline-flex gap-2 p-2">
        <p>Don&apos;t have an account?</p>
        <a href="#" className="text-blue-500">
          Create an account
        </a> 
      </div>*/}
    </form>
  );
}
