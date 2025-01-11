import FormInput from "../../components/FormInput";
import gitHubIcon from "../../../public/github.png";
import emailIcon from "../../../public/email.png";
import linkedInIcon from "../../../public/linkedin.png";
import Image from "next/image";
import ContactCards from "../../components/ContactCards";
import Link from "next/link";

function ContactMe() {
  const socialIcons = [
    {
      id: "1",
      image: gitHubIcon,
      url: "https://github.com/FirstAyo",
    },
    {
      id: "2",
      image: emailIcon,
      url: "mailto:firstayomike@gmail.com?",
    },
    {
      id: "3",
      image: linkedInIcon,
      url: "https://www.linkedin.com/in/firstayo/",
    },
  ];

  return (
    <>
      <section className="bg-gray-50">
        <h1 className="text-4xl text-center py-5 uppercase font-semibold">
          Contact Me
        </h1>
        <div className="flex flex-col lg:flex-row w-[90%] mx-auto gap-5">
          <div className="flex-1 flex mt-14 flex-col gap-5">
            <h2 className="text-3xl underline text-center lg:text-start font-semibold">
              On Social Media
            </h2>
            <p className="text-xl text-center lg:text-start">
              Ready to start your next project or have any questions? Feel free
              to reach out to me.
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-5 w-[100%] pb-10 pt-2">
              {socialIcons.map((socialIcon) => (
                <div
                  className="bg-white w-[50px] h-[50px] rounded-full shadow-md border-2 border-gray-700"
                  key={socialIcon.id}
                >
                  <Link
                    href={socialIcon.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={socialIcon.image}
                      alt=""
                      className="w-full p-3"
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <ContactCards />
          </div>
        </div>

        <div>
          <h2 className="text-3xl underline text-center lg:text-start font-semibold w-[90%] mx-auto mb-3">
            Message Me
          </h2>

          <FormInput />
        </div>
      </section>
    </>
  );
}

export default ContactMe;
