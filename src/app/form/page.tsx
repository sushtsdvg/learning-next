import Form, { formType } from "@/components/Form";
import Image from "next/image";
const getFormData = (): formType[] => {
  return [
    {
      image: {
        src: "/images/email-svgrepo-com.svg",
        alt: "email-icon",
        width: 20,
        height: 10,
      },
      input: {
        type: "email",
        placeholder: "Email",
        name: "email",
      },
    },
    {
      image: {
        src: "/images/password-svgrepo-com.svg",
        alt: "password-icon",
        width: 20,
        height: 10,
      },
      input: {
        type: "password",
        placeholder: "Password",
        name: "password",
      },
    },
  ];
};
export default function page() {
  const formData = getFormData();
  return (
    <div className="w-full bg-gray-400 flex flex-row p-8">
      <div className="bg-white rounded-l-lg w-[50%]">
        <div className="p-8 inline-flex gap-2 justify-center">
          <Image
            width={50}
            height={50}
            src="/images/dotwork.png"
            alt="dotwork"
          />
          <p className="text-blue-600 text-sm font-semibold">dotwork</p>
        </div>
        <div className="flex flex-col">
          <p className="text-black font-semibold text-2xl p-2 flex flex-row justify-center">
            Log in to your Account
          </p>
          <p className="text-gray-400 p-2 text-sm flex flex-row justify-center">
            Welcome back! Select method to login:
          </p>
        </div>
        <div className="flex flex-row gap-2 p-2 justify-center">
          <button className="bg-white rounded-lg p-2 border border-gray-400 flex flex-row gap-2">
            <Image
              src="/images/google-color-svgrepo-com.svg"
              alt="google-icon"
              width={20}
              height={10}
            />
            Google
          </button>
          <button className="bg-white rounded-lg p-2 border border-gray-400 flex flex-row gap-2">
            <Image
              src="/images/facebook-3-logo-svgrepo-com.svg"
              alt="facebook-icon"
              width={20}
              height={10}
            />
            Facebook
          </button>
        </div>
        <div className="flex flex-row justify-center">
          <p>or continue with email</p>
        </div>
        <div className="flex justify-center">
          {formData.map((form) => {
            return (
              <Form
                key={form.image.src}
                image={form.image}
                input={form.input}
              />
            );
          })}
        </div>
      </div>
      <div className="bg-blue-600 rounded-r-lg w-[50%]">right-part</div>
    </div>
  );
}
