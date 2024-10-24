import Image from "next/image";
import "../app/globals.css";

const page = () => {
  return (
    <>
      <div className="flex flex-row">
        <div className="flex flex-col">
          <Image src="/images/image.png" alt="image" width="413" height="100" />
        </div>

        <div className="flex flex-col">
          <div className="flex-row m-2 space-y-2">
            <p className="bg-slate-100 text-[#356fec] rounded-sm text-xs p-2 max-w-fit">
              Trusted by 50+ companies
            </p>
            <h1 className="text-[#4569b1] font-extrabold text-5xl tracking-tight">
              Kubernetes operations
            </h1>
            <h6 className="text-[#4569b1] text-3xl mb-8 font-[100] tracking-wider">
              simplified with <b className="font-semibold">AI</b> and{" "}
              <b className="font-semibold">automation</b>
            </h6>
          </div>
          <div className="flex flex-row gap-12 w-[75%]">
            <div className="rounded-md shadow-2xl shadow-blue-300 w-auto p-4">
              <div className="inline-flex justify-between gap-4">
                <div className="flex-col">
                  <Image
                    src="/images/KubeSliceLogo.png"
                    alt="kubeslice logo"
                    width="82"
                    height="69"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="w-full inline-flex mt-3">
                    <h1 className="text-[#486caf] font-extrabold tracking-wide">
                      Kube
                    </h1>
                    <h1 className="text-[#f2775d] font-extrabold tracking-wide">
                      Slice
                    </h1>
                  </div>
                  <div className="flex-row">
                    <p className="text-blue-400">Kubernetes Networking</p>
                  </div>
                </div>
              </div>

              <p className="justify-center mb-8">
                Service Connectivity Layer for managing fleet of clusters for
                better application performance
              </p>
              <div className="flex flex-row justify-between">
                <button className="bg-[#f2775d] text-white p-2 rounded-sm text-sm">
                  Try KubeSlice
                </button>
                <button className="text-[#486caf]">Learn</button>
              </div>
            </div>
            <div className="rounded-md shadow-2xl shadow-blue-300 w-auto p-4">
              <div className="p-1 flex flex-row gap-4">
                <div className="inline-flex justify-between ">
                  <Image
                    src="/images/SmartScalerLogo.png"
                    alt="SmartScaler logo"
                    width="82"
                    height="69"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="w-full inline-flex mt-3">
                    <h1 className="text-[#486caf] font-extrabold">Smart</h1>
                    <h1 className="text-[#6ac4a0] font-extrabold"> Scaler</h1>
                  </div>
                  <div className="flex-row">
                    <p className="text-blue-400">Kubernetes Autoscaling</p>
                  </div>
                </div>
              </div>

              <p className="justify-center mb-8">
                Intelligent Remediation for autoscaling and efficient service
                automation
              </p>
              <div className="flex flex-row justify-between">
                <button className="bg-[#6ac4a0] text-white p-2 rounded-sm text-sm">
                  Try Smart Scaler
                </button>
                <button className="text-[#486caf]">Learn</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-row">
        <div className="m-8">
          <p className="text-[#759cf2] text-sm font-normal rounded-sm bg-white p-2">
            Hype Cycle<sup>TM</sup> for Zero Trust Networking, 2023
          </p>
          <h3 className="font-black">
            Gartner<span>&#174;</span> names Avesha as a Sample Vendor for
            <br />
            Kubernetes Networking in the 2023 Hype Cycle<sup>TM</sup> for
            <br />
            Zero Trust Networking
          </h3>
          <button className="bg-[#316ae5] text-white rounded-sm p-2 text-sm mt-4">
            Learn More
          </button>
        </div>

        <div className="m-8">
          <Image
            src="/images/chartimage.png"
            alt="chart-image"
            width="507"
            height="307"
          />
        </div>
      </div> */}
    </>
  );
};

export default page;
