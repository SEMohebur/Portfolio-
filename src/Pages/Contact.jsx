import React from "react";
import { Mail, Phone, MessageCircle } from "lucide-react";

export default function Contact() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent");
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Get in touch
          </h2>
          <p className="text-gray-600 mt-3 text-lg">
            Have a project or job opportunity? I&apos;d love to hear about it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="relative bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-50 rounded-lg">
                <Mail className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <a
                  href="mailto:mdmohebur11@gmail.com"
                  className="text-blue-600 underline"
                >
                  mdmohebur11@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-green-50 rounded-lg">
                <Phone className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Phone / WhatsApp</h3>
                <a href="tel:+8801987573972" className="text-gray-700">
                  +880 1987 573972
                </a>
              </div>
            </div>

            <div className="text-sm text-gray-600">
              <p>
                I usually respond within <strong>1–3 hours</strong> on weekdays.
                If it&apos;s urgent, call or WhatsApp.
              </p>
            </div>

            <svg
              className="absolute right-6 bottom-6 w-28 opacity-40"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="4" y="12" width="40" height="36" rx="2" fill="#E6F0FF" />
              <path d="M44 12h12v36H44z" fill="#FFF" />
              <path
                d="M10 18h28v2H10zM10 24h28v2H10zM10 30h28v2H10z"
                fill="#C7D9FF"
              />
            </svg>
          </div>

          <form
            onSubmit={handleFormSubmit}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-4">Send a message</h3>

            <div className="grid grid-cols-1 gap-4">
              <input
                required
                className="border rounded-lg p-4 text-gray-800 focus:ring-2 focus:ring-blue-300 outline-none"
                placeholder="Your name"
              />

              <input
                type="email"
                required
                className="border rounded-lg p-4 text-gray-800 focus:ring-2 focus:ring-blue-300 outline-none"
                placeholder="Your email"
              />

              <textarea
                rows={6}
                required
                className="border rounded-lg p-4 text-gray-800 focus:ring-2 focus:ring-blue-300 outline-none resize-none"
                placeholder="Tell me about your project, timeline and budget (optional)"
              />

              <button className="w-full px-6 py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition shadow-md">
                Send message
              </button>

              <div className="flex items-center gap-2 text-sm text-gray-600 pt-2">
                <MessageCircle className="w-4 h-4" />
                <span>
                  Or email me directly at{" "}
                  <a
                    className="underline text-blue-600"
                    href="mailto:mdmohebur11@gmail.com"
                  >
                    mdmohebur11@gmail.com
                  </a>
                </span>
              </div>
            </div>
          </form>
        </div>

        <p className="text-center text-sm text-gray-500 mt-8">
          By sending a message you agree to receive a reply. I respect your
          privacy.
        </p>
      </div>
    </section>
  );
}
