import happyFace from "../../assets/trainingPics/training-carousel/smiling_faces.jpeg";
import focusedLady from "../../assets/trainingPics/training-carousel/a_focused_lady.jpeg";
import twoPeopleFocused from "../../assets/trainingPics/training-carousel/A_girl_and_a_boy_focused.jpeg";
import cutePeople from "../../assets/trainingPics/training-carousel/cute_faces.jpeg";
import TrainingTestimonial from "./Testimonial";

export default function Gallery() {
  return (
    <div className="pt-8 relative bg-[#f1f3f9]">
      <div className="flex justify-between items-baseline overflow-hidden gap-5">
        <div
          className=""
          style={{
            backgroundImage: `url(${twoPeopleFocused})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: "350px",
            width: "350px",
          }}
          loading="lazy"
        ></div>
        <div
          style={{
            backgroundImage: `url(${focusedLady})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: "606px",
            width: "445px",
          }}
          loading="lazy"
        ></div>
        <div
          style={{
            backgroundImage: `url(${cutePeople})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: "350px",
            width: "350px",
          }}
          loading="lazy"
        ></div>
        <div
          className=" "
          style={{
            backgroundImage: `url(${happyFace})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: "350px",
            width: "350px",
          }}
          loading="lazy"
        ></div>
      </div>
      <div className="absolute top-0 right-0">
        <p className="flex items-center gap-3 text-[20px] text-[#1877F9] font-[500] leading-[150%]">
          Kinplus gallery
          <div className="mt-1 w-[73px] h-[2px] bg-[#222831] "></div>
        </p>
        <p className="text-[#082B5B] text-[40px] font-[700] w-[496px]">
          Check out our past trainees
        </p>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="168"
            height="27"
            viewBox="0 0 168 27"
            fill="none"
          >
            <path
              d="M167.552 14.6792L158.348 25.8696C158.052 26.2277 157.682 26.4067 157.313 26.4067C156.943 26.4067 156.573 26.2277 156.278 25.8696C155.686 25.1534 155.686 24.0344 156.278 23.3182L162.968 15.1716H141.381C140.568 15.1716 139.902 14.3659 139.902 13.3811C139.902 12.3963 140.568 11.5906 141.381 11.5906H162.968L156.278 3.44403C155.686 2.72784 155.686 1.60879 156.278 0.892608C156.869 0.176422 157.793 0.176422 158.384 0.892608L167.589 12.083C168.143 12.844 168.143 14.0078 167.552 14.6792Z"
              fill="#1877F9"
            />
            <rect
              x="76.3145"
              y="11.1875"
              width="88.7142"
              height="4.47534"
              rx="2.23767"
              fill="#1877F9"
            />
            <path
              d="M0.762821 14.6792L9.96692 25.8696C10.2626 26.2277 10.6323 26.4067 11.0019 26.4067C11.3716 26.4067 11.7412 26.2277 12.0369 25.8696C12.6284 25.1534 12.6284 24.0344 12.0369 23.3182L5.34638 15.1716H26.9335C27.7468 15.1716 28.4121 14.3659 28.4121 13.3811C28.4121 12.3963 27.7468 11.5906 26.9335 11.5906H5.34638L12.0369 3.44403C12.6284 2.72784 12.6284 1.60879 12.0369 0.892608C11.4455 0.176422 10.5214 0.176422 9.92996 0.892608L0.725843 12.083C0.171379 12.844 0.171392 14.0078 0.762821 14.6792Z"
              fill="#9A9A9A"
            />
            <rect
              width="50"
              height="4.00171"
              rx="2.00085"
              transform="matrix(-1 0 0 1 53 11.4004)"
              fill="#9A9A9A"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
