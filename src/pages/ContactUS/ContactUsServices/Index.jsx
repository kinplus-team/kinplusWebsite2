import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function ContactUsServices() {
  const navigate = useNavigate();
  
  const contactUsExplanation =
    " Looking to partner with us? We'd love to hear from you. Contact us using the details below to explore how we can work together. We're committed to providing the best possible service, so don't hesitate to get in touch.";

  
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ mode: "all" });
  
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const onSubmit = async (data) => {
    await sleep(1000);
    try {
      // Log the form data
      console.log(data);

      // Send a POST request to your API endpoint
      const response = await fetch("https://kinplusgroup.com/api/v2/services", {
        method: "POST",
        
        body: JSON.stringify(data),
      });

      // Check if the request was successful (status code 200)
       if (response.ok) {
        toast.success("Form submitted successfully", {
          position: toast.POSITION.TOP_CENTER,
          style: {
            background: "#082B5B",
            color: "#fff",
            fontSize: "16px",
            padding: "15px 10px",
          },
        });

      
        // Reset form values
        setValue("fullName", "");
        setValue("email", "");
        setValue("phoneNumber", "");
        setValue("companyName", "");
        setValue("message", "");

        // Navigate to contact-us page
        navigate("/contact-us");
      } else {
        // Handle errors if the request was not successful
        toast.error("Something went wrong!", {
          position: toast.POSITION.TOP_CENTER,
          style: {
            width: "230px",
            background: "#ffffff",
            color: "#ff0000",
            fontSize: "20px",
            padding: "15px 10px",
          },
        });
      }
    } catch (error) {
      // Handle unexpected errors
      console.error("An error occurred:", error);
      toast.error("Something went wrong!", {
        position: toast.POSITION.TOP_CENTER,
        style: {
          background: "#ffffff",
          color: "#ff0000",
          fontSize: "20px",
          padding: "15px 10px",
        },
      });
    }
  };


  return (
    <section className="flex justify-between flex-col md:flex-row mb-8">
      {/*Explanation*/}
      <div className="md:w-[60%] w-full p-2">
        <h3 className="text-[2.188rem] md:text-[2.813rem] lg:text-[3.25rem] leading-[2.5rem] md:leading-[4rem] w-[20%] font-[700] text-blue-950 mb-6 md:mb-8 capitalize">
          Get Started
        </h3>
        <ul className="text-[#101010] text-[1rem] md:text-[1.125rem] lg:text-[1.3rem] list-inside list-disc marker:text-[#101010]">
          <li className="leading-[1.5rem] md:leading-[3.125rem] lg:leading-[3.4rem]">
            Innovative Solutions
          </li>
          <li className="leading-[1.5rem] md:leading-[3.125rem] lg:leading-[3.4rem]">
            Expert Training
          </li>
          <li className="leading-[1.5rem] md:leading-[3.125rem] lg:leading-[3.4rem]">
            Strategic Partnerships
          </li>
          <li className="leading-[1.5rem] md:leading-[3.125rem] lg:leading-[3.4rem]">
            Exceptional Services
          </li>
        </ul>
        <hr className="h-[4px] bg-white my-12 mr-5" />
        <p className="text-[#101010] text-[1rem] md:text-[1.125rem] lg:text-[1.3rem] leading-[1.5rem] md:leading-[3.4rem] mb-8 md:mb-0">
          {contactUsExplanation}
        </p>
      </div>

      {/*Services Form*/}
      <div className="md:w-[55%] w-full bg-blue-950 rounded-[0.9375rem]  text-white mx-auto md:ml-0  pl-1">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto mt-8 w-[90%]"
        >
          <h3 className="text-[2.188rem] md:text-[1.875rem] lg:text-[2.75rem] leading-[2.5rem] md:leading-[3.375rem] w-[110%] capitalize font-[700] md:w-[10.625em]">
            Ready to connect? Get in touch.
          </h3>
          
          {/* Full Name */}
          <div className="flex flex-col gap-8 w-[90%] mt-10">
            <div className="flex flex-col gap-[8px]">
              <label htmlFor="fullName">Full Name</label>
              <input
                className="bg-inherit outline-none p-2 border"
                type="text"
                id="fullName"
                placeholder="Enter Your Full Name"
                {...register("fullName", {
                  required: "Full name is required",
                  minLength: {
                    value: 3,
                    message: "Full name should have at least 3 characters",
                  },
                  maxLength: {
                    value: 100,
                    message: "Full name should not exceed 50 characters",
                  },
                })}
              />
              {errors.fullName && (
                <p className="text-red-500 pt-[2px] text-sm font-300 italic">
                  {errors.fullName.message}
                </p>
              )}
            </div>

              {/* E-mail */}
            <div className="flex flex-col gap-[8px]">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                placeholder="Enter Your E-mail"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                className="bg-inherit outline-none border p-2"
              />
              {errors.email && (
                <p className="text-red-500 py-[2px] text-sm font-300 italic">
                  {errors.email.message}
                </p>
              )}
            </div>

              {/* Phone Number */}
            <div className="flex flex-col gap-[8px]">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="text"
                id="phoneNumber"
                placeholder="Enter Your Phone Number"
                {...register("phoneNumber", {
                  required: "Phone number is required",
                  minLength: {
                    value: 5,
                    message: "Phone number should have at least 5 digits",
                  },
                })}
                className="bg-inherit outline-none border p-2"
              />
              {errors.phoneNumber && (
                <p className="text-red-500 pt-[2px] text-sm font-300 italic">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>

            {/* Company Name */}
            <div className="flex flex-col gap-[8px]">
              <label htmlFor="companyName">Company Name</label>
              <input
                type="text"
                id="companyName"
                placeholder="Company Name"
                {...register("companyName", {
                  required: "Company Name is required",
                  message: "",
                })}
                className="bg-inherit outline-none border p-2"
              />
              {errors.phoneNumber && (
                <p className="text-red-500 pt-[2px] text-sm font-300 italic">
                  {errors.companyName.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div className="flex flex-col gap-[8px]">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                placeholder="What do you have for us"
                {...register("message", {
                  required: "Message is required",
                  message: "",
                })}
                className="bg-inherit outline-none border p-2 h-[297px] resize-none"
              />
              {errors.message && (
                <p className="text-red-500 pt-[2px] text-sm font-300 italic">
                  {errors.message.message}
                </p>
              )}
            </div>
          </div>

          {/* Submit button */}
          <div className="text-center mt-[10px] py-9 ">
            <button
              type="submit"
              className="text-blue-500 bg-white font-bold py-2 px-4 rounded-md transition duration-200 ease-in-out focus:outline-none hover:bg-blue-600 hover:text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
