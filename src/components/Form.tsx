"use client";

import { useFormik } from "formik";
import Image from "next/image";
import * as yup from "yup";

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
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: yup.object().shape({
      email: yup.string().email().required("Email is required"),
      password: yup.string().required("Password is required").min(6),
    }),
  });

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { target } = e;
  //   formik.setFieldValue(target.name, target.value);
  // };
  return (
    <form className="flex-row" onSubmit={formik.handleSubmit}>
      <div className="flex flex-col p-2">
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
            name={input.placeholder}
            onChange={formik.handleChange}
            className="outline-none"
          />
        </div>
      </div>
    </form>
  );
}
