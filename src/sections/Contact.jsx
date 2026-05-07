import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useTranslation();
  const [messageSent, setMessageSent] = useState(false);
  const [error, setError] = useState(false);

  const parentVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const inputVariant = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_vqujx0a", "template_gxqnf11", formRef.current, "HN924O7uVNytm7KFY")
      .then(
        () => {
          setMessageSent(true);
          setError(false);
          e.target.reset();
        },
        () => setError(true)
      );
  };

  return (
    <section className="section-spacing relative overflow-hidden" id="contact">

      {/* 1. FOND DÉCORATIF (Bien au fond avec -z-10) */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-orange-200/50 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-orange-300/30 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto max-w-7xl c-space relative z-10">
        <motion.div
          ref={ref}
          variants={parentVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col items-center"
        >
          {/* TITRE */}
          <motion.div variants={inputVariant} className="mb-12">
            <h2 className="inline-block px-8 py-3 bg-zinc-900 text-orange-500 font-black uppercase tracking-tighter text-4xl md:text-6xl rounded-2xl shadow-[8px_8px_0px_0px_#ea580c]">
              Contact _
            </h2>
          </motion.div>

          {/* 2. LE FORMULAIRE (Forcé en haut de la pile avec z-20) */}
          <div className="w-full max-w-2xl relative z-20">
            <motion.div
              className="bg-zinc-900 border-4 border-orange-600 p-8 md:p-12 rounded-[2.5rem] shadow-[15px_15px_0px_0px_#ea580c]"
            >
              <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-6">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-orange-500 font-black uppercase tracking-widest text-xs ml-2">
                      {t("contactName")}
                    </label>
                    <input
                      type="text"
                      name="user_name"
                      required
                      className="px-4 py-4 rounded-xl bg-orange-50 text-zinc-900 border-4 border-transparent focus:border-orange-600 outline-none font-bold transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-orange-500 font-black uppercase tracking-widest text-xs ml-2">
                      {t("contactLastname")}
                    </label>
                    <input
                      type="text"
                      name="user_lastname"
                      required
                      className="px-4 py-4 rounded-xl bg-orange-50 text-zinc-900 border-4 border-transparent focus:border-orange-600 outline-none font-bold transition-all"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-orange-500 font-black uppercase tracking-widest text-xs ml-2">
                    {t("contactEmail")}
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    className="px-4 py-4 rounded-xl bg-orange-50 text-zinc-900 border-4 border-transparent focus:border-orange-600 outline-none font-bold transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-orange-500 font-black uppercase tracking-widest text-xs ml-2">
                    {t("contactMessage")}
                  </label>
                  <textarea
                    rows="4"
                    name="message"
                    required
                    className="px-4 py-4 rounded-xl bg-orange-50 text-zinc-900 border-4 border-transparent focus:border-orange-600 outline-none font-bold transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full cursor-pointer bg-orange-600 text-white font-black uppercase tracking-tighter text-xl rounded-xl 
                    px-8 py-5 border-4 border-zinc-900 shadow-[6px_6px_0px_0px_#fff]
                    hover:shadow-none hover:translate-x-1 hover:translate-y-1
                    active:scale-95 transition-all"
                >
                  {t("contactSend")}
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>

        <footer className="mt-20 text-[10px] font-black uppercase tracking-widest text-zinc-500 text-center pb-8">
          Design & Dev by Maxence — © {new Date().getFullYear()} — Flag icons by <a href="https://www.flaticon.com" target="_blank" className="text-orange-600 hover:underline">Flaticon</a>
        </footer>
      </div>
    </section>
  );
};

export default Contact;