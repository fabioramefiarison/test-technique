"use client";

import { FaArrowDown, FaCalendarAlt } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";
import "./globals.css";

export default function LandingPage() {
  // Configuration des animations (Variants)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    // Utilisation de brand-black pour le fond en mode sombre
    <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-brand-black px-6">
      <motion.main 
        className="max-w-4xl text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Bulle centrée horizontalement */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-3 mb-6 bg-brand-white px-7 py-4 rounded-full shadow-[0_0_25px_rgba(113,221,174,0.6)]"
        >
          <Image
            src="/2_Logo_Bulle.png"
            alt="Icone bulle"
            width={80}
            height={80}
          />
          <span className="text-brand-black uppercase text-xl sm:text-2xl md:text-3xl font-extrabold tracking-wide">
            CRÉER UN SITE WEB <span className="underline">VRAIMENT</span> UNIQUE
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1 
          variants={itemVariants}
          className="text-4xl sm:text-5xl text-center font-extrabold text-gray-900 dark:text-brand-white mb-6"
        >
          Votre <span className="text-brand-green">site</span> doit{" "}
          <span className="text-brand-green"> donner envie </span> de{" "}
          <span className="text-brand-green"> rester</span>, pas de{" "}
          <span className="relative inline-block text-brand-green mx-1.5">
            revenir
            <span className="absolute left-0 top-[50%] w-full h-[6px] bg-brand-black dark:color-brand-black"></span>
          </span>
          <span className="relative inline-block mx-1.5">
            en
            <span className="absolute left-0 top-[50%] w-full h-[6px] bg-brand-black dark:color-brand-black"></span>
          </span>
          <span className="relative inline-block text-brand-green mx-1.5">
            arrière
            <span className="absolute left-0 top-[50%] w-full h-[6px] bg-brand-black dark:color-brand-black"></span>
          </span>.
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
          {/* Bouton RDV (Dégradé avec green-secondary et green-primary) */}
          <div className="relative inline-block">
            <img
              src="/3_Un_Ptit_Click.png"
              alt="Un p'tit click ?"
              className="hidden md:block absolute -bottom-18 -left-14 w-45 h-auto pointer-events-none"
            />
            <a
              href="#rdv"
              className="flex items-center justify-center gap-2 text-2xl bg-gradient-to-l from-green-secondary to-green-primary text-brand-black font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:opacity-95 active:scale-95"
            >
              <FaCalendarAlt className="text-xl" />
              <span>Prendre RDV</span>
            </a>
          </div>

          {/* Bouton Projets (Bordure et texte avec brand-green) */}
          <a
            href="#projets"
            className="flex items-center justify-center gap-2 border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-brand-black font-bold py-3 px-6 rounded-lg transition-all duration-300 text-[16px] hover:scale-105"
          >
            Découvrir nos projets
            <FaArrowDown />
          </a>
        </motion.div>
      </motion.main>
    </div>
  );
}