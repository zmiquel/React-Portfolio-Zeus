import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import Toast from "./Toast";
import { social } from "../collections/social.jsx";

const SERVICE_ID = "service_gmrgyjd";
const TEMPLATE_ID = "template_6bigrho";
const PUBLIC_KEY = "7OQA-hhYHAncYGexL";
const DELAY_DURATION = 1500;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const inputClass =
  "w-full mt-2 py-3 px-3 rounded-lg bg-[#1b1b1b] border border-gray-700 text-gray-100 " +
  "placeholder-gray-500 font-medium focus:border-green-500 focus:ring-1 focus:ring-green-500 focus:outline-none transition-colors";

const Contact = () => {
  const [showToast, setShowToast] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("");
  const form = useRef();

  const showToastMessage = (message, type) => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);
  };

  const sendEmail = () => {
    const username = form.current.user_name.value.trim();
    const email = form.current.email.value.trim();
    const message = form.current.message.value.trim();

    if (!username || !email || !message) {
      setTimeout(() => {
        setIsSending(false);
        showToastMessage(
          "Please fill in all fields before sending the email.",
          "failed"
        );
      }, DELAY_DURATION);
      return;
    }

    if (!EMAIL_RE.test(email)) {
      setTimeout(() => {
        setIsSending(false);
        showToastMessage("Please enter a valid email address.", "failed");
      }, DELAY_DURATION);
      return;
    }

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        () => {
          setTimeout(() => {
            setIsSending(false);
            showToastMessage("Your message was sent successfully!", "success");
            form.current.reset();
          }, DELAY_DURATION);
        },
        (error) => {
          console.error(error?.text || error);
          setIsSending(false);
          showToastMessage(
            "There was a system error, please try again later.",
            "failed"
          );
        }
      );
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    setIsSending(true);
    sendEmail();
  };

  const details = [
    {
      Icon: HiOutlineLocationMarker,
      text: social.location,
      href: null,
    },
    {
      Icon: HiOutlinePhone,
      text: social.phone,
      href: `tel:${social.phone.replace(/[^+\d]/g, "")}`,
    },
    { Icon: HiOutlineMail, text: social.email, href: `mailto:${social.email}` },
  ];

  return (
    <section
      name="contact"
      id="contact"
      className="w-full bg-[#0f0f0f] text-gray-300 py-24"
    >
      <div className="max-w-[1000px] mx-auto px-4">
        <div className="pb-10">
          <p className="text-4xl font-bold inline border-b-4 border-green-600">
            Contact
          </p>
          <p className="py-4 text-gray-400">
            {"// Have a project in mind? Let's talk"}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Details */}
          <div className="p-8 rounded-lg bg-[#161616] border border-white/10">
            <h3 className="text-3xl sm:text-4xl text-white font-extrabold tracking-tight">
              Get in touch
            </h3>
            <p className="text-lg text-gray-400 mt-2">
              Fill in the form to start a conversation.
            </p>

            <div className="mt-8 flex flex-col gap-5">
              {details.map(({ Icon, text, href }) => (
                <div key={text} className="flex items-center text-gray-400">
                  <Icon className="w-6 h-6 text-green-500 shrink-0" />
                  {href ? (
                    <a
                      href={href}
                      className="ml-4 font-semibold tracking-wide hover:text-green-400 transition-colors break-all"
                    >
                      {text}
                    </a>
                  ) : (
                    <span className="ml-4 font-semibold tracking-wide">
                      {text}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form
            className="p-8 rounded-lg bg-[#161616] border border-white/10 flex flex-col"
            ref={form}
            id="contactForm"
            onSubmit={handleSendMessage}
            noValidate
          >
            <div className="flex flex-col">
              <label htmlFor="name" className="sr-only">
                Full Name
              </label>
              <input
                type="text"
                name="user_name"
                id="name"
                autoComplete="name"
                placeholder="Full Name"
                className={inputClass}
              />
            </div>

            <div className="flex flex-col mt-4">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                placeholder="Email"
                className={inputClass}
              />
            </div>

            <div className="flex flex-col mt-4">
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={5}
                placeholder="Your Message"
                className={`${inputClass} resize-y`}
              ></textarea>
            </div>

            <button
              type="submit"
              className="md:w-40 bg-green-600 text-white font-bold py-3 px-6 rounded-lg mt-5
                         hover:bg-green-500 hover:shadow-lg hover:shadow-green-900/40
                         disabled:opacity-60 disabled:cursor-not-allowed
                         transition-all ease-in-out duration-300"
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </div>

      {showToast && (
        <Toast
          message={toastMessage}
          type={toastType}
          onClose={() => setShowToast(false)}
        />
      )}
    </section>
  );
};

export default Contact;
