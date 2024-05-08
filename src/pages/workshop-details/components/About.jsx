import PageLayout from "../../../components/Layout/PageLayout";

export default function About() {
  return (
    <div className="lg:px-[54px] px-4 max-w-[100rem] mx-auto bg-[#082B5B]">
      <div className="grid lg:grid-cols-2 gap-4 lg:pt-20 pt-14 pb-10">
        <div className="max-w-xl grid gap-4">
          <div className="flex items-center gap-3 lg:text-[20px] font-[500] leading-[150%]">
            <p className="text-[#1877F9] text-base font-medium">
              About the workshop
            </p>
            <div className="mt-1 w-[73px] h-[2px] bg-white leading-normal "></div>
          </div>

          <h4 className="text-white lg:text-4xl text-3xl font-bold lg:leading-[50px]">
            Building Mobile Apps with Flutter: Developing Mobile Application
            software with the Flutter framework.
          </h4>

          <div className="text-[#8896AB] grid gap-3 lg:text-lg text-base font-medium leading-7">
            <p>
              The Mobile App development training was provided freely to all
              participants. It was sponsored by NITDA and facilitated by Kinplus
              Technologies.
            </p>
            <p>
              The training was focused on the use of the Flutter framework for
              the development of mobile applications. Though it was only a
              five-day training program - which meant that only a little could
              be taught - the training yet covered a reasonable number of topics
              including the following:- Dart language basics- Creating user
              interfaces with Flutter widgets- State management
            </p>
          </div>
        </div>

        <div className="text-[#8896AB] font-medium leading-7 grid gap-3">
          <p>
            Flutter is an open-source framework by Google for building
            beautiful, natively compiled, multi-platform applications from a
            single codebase.Dart is the programming language that Flutter uses,
            so the training paid close attention to providing the participants
            with a good understanding of it. In the training, the participants
            learned about the basics of the language, including how to create
            variables, control flow, and functions. They also learned about the
            Flutter SDK, the set of tools and libraries used to build Flutter
            apps.
          </p>

          <p>
            Next is creating user interfaces. In Flutter, user interfaces are
            built using widgets. A widget is a reusable UI component that can be
            combined to create more complex user interface.The training also
            covered state management. In Flutter, state is the data that the app
            needs to track and update over time. There are different ways to
            manage state in Flutter. The most common approaches, such as the
            BLoC pattern and the Provider pattern were briefly discussed during
            the training.
          </p>
          <p>
            The training afforded the participants a hands-on experience on the
            topics covered. Exercises were completed, such that the participants
            got a feel for how to actually build an app with Flutter.
          </p>
        </div>
      </div>
    </div>
  );
}
