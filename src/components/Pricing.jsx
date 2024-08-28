import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants"; // Ensure this path is correct and the data is properly defined

const Pricing = () => {
  console.log(pricingOptions); // Add this line to verify the pricingOptions array

  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider">
        Pricing
      </h2>
      <div className="flex flex-wrap">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border border-neutral-700 rounded-xl">
              <div className="text-4xl mb-8">
                {option.title}
                {option.title === "Pro" && (
                  <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl mb-4 ml-2">
                    (Most Popular)
                  </span>
                )}
              </div>
              <p className="mb-8 mt-6 mr-2">
                <span className="text-neutral-400 tracking-tight">
                  {option.price}/Month
                </span>
              </p>

              <ul>
                {option.features.map((feature, idx) => (
                  <li key={idx} className="mt-8 flex items-center">
                    <CheckCircle2 className="text-green-400" />
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 tracking-wide bg-red-500 hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200"
              >
                Subscribe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;