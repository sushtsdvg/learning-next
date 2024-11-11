"use client";

import { Formik, FormikConfig, FormikValues, useFormik, useFormikContext } from "formik";
import Image from "next/image";
import { ReactNode } from "react";
import * as yup from "yup";

export interface FormType {
  image: {
    width: number;
    height: number;
    src: string;
    alt: string;
  },
  input: {
    type: string;
    placeholder: string;
    name: string;
  },
};

export default function FormWrapper({ initialValues, validationSchema, children }: { initialValues: Record<string, unknown>, validationSchema: Record<string, unknown>, children: ReactNode }) {

  //const formik = useFormik({
  //  initialValues: initialValues,
  //  onSubmit: (values) => {
  //    alert(JSON.stringify(values, null, 2));
  //  },
  //  validationSchema: yup.object().shape({
  //    email: yup.string().email().required("Email is required"),
  //    password: yup.string().required("Password is required").min(6),
  //  }),
  //});
  //

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values, null, 2));
      }}
      validationSchema={validationSchema}
    >{formik => (
      <form className="flex-row" onSubmit={formik.handleSubmit}>
        <div className="flex flex-col p-2">
          {children}
        </div>
      </form>
    )}
    </Formik >
  )
}
export function Form({ image, input }: FormType) {

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { target } = e;
  //   formik.setFieldValue(target.name, target.value);
  // };
  const formik = useFormikContext();
  return (
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
        onChange={formik.handleChange}
        className="outline-none"
      />
      <p>{JSON.stringify(formik.errors?.[input.name])}</p>
    </div>
  );
}
