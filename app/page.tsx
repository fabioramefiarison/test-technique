"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { FaArrowDown, FaCalendarAlt } from "react-icons/fa";

export default function LandingPage() {
  // Container animation
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Item animation
  const itemVariants: Variants = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1], // easing valide TS (easeOut)
      },
    },
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-brand-black px-6">
      <motion.main
        className="max-w-4xl text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Bulle */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-3 mb-6 bg-brand-white px-7 py-4 rounded-full shadow-[0_0_25px_rgba(113,221,174,0.6)]"
        >
          <Image
            src="/2_Logo_Bulle.png"
            alt="Icône bulle"
            width={80}
            height={80}
            priority
          />
          <span className="text-brand-black uppercase text-xl sm:text-2xl md:text-3xl font-extrabold tracking-wide">
            CRÉER UN SITE WEB <span className="underline">VRAIMENT</span> UNIQUE
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-brand-white mb-6"
        >
          Votre <span className="text-brand-green">site</span> doit{" "}
          <span className="text-brand-green">donner envie</span> de{" "}
          <span className="text-brand-green">rester</span>, pas de{" "}
          <span className="relative inline-block text-brand-green mx-1.5">
            revenir
            <span className="absolute left-0 top-1/2 w-full h-[6px] bg-brand-black dark:bg-brand-black" />
          </span>{" "}
          <span className="relative inline-block mx-1.5">
            en
            <span className="absolute left-0 top-1/2 w-full h-[6px] bg-brand-black dark:bg-brand-black" />
          </span>{" "}
          <span className="relative inline-block text-brand-green mx-1.5">
            arrière
            <span className="absolute left-0 top-1/2 w-full h-[6px] bg-brand-black dark:bg-brand-black" />
          </span>
          .
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto"
        >
          Design moderne, SEO solide, Suivi complet : on construit un site qui
          retient vos visiteurs et vous apporte des résultats.
        </motion.p>

        {/* Boutons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {/* Bouton RDV */}
          <div className="relative inline-block">
            <img
              src="/3_Un_Ptit_Click.png"
              alt="Un p'tit click ?"
              className="hidden md:block absolute -bottom-16 -left-14 w-40 pointer-events-none"
            />
            <a
              href="#rdv"
              className="flex items-center justify-center gap-2 text-xl bg-gradient-to-l from-green-secondary to-green-primary text-brand-black font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
            >
              <FaCalendarAlt />
              Prendre RDV
            </a>
          </div>

          {/* Bouton Projets */}
          <a
            href="#projets"
            className="flex items-center gap-2 border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-brand-black font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105"
          >
            Découvrir nos projets
            <FaArrowDown />
          </a>
        </motion.div>
      </motion.main>
    </div>
  );
}
