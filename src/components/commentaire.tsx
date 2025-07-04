"use client" 
import { TestimonialsColumn } from "@/components/testimonials-columns";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "Grâce à ce service, j’ai pu vérifier mes codes de recharge rapidement. Plus besoin de me déplacer ou d'attendre !",
    image: "https://randomuser.me/api/portraits/women/11.jpg",
    name: "Nadia Kouassi",
    role: "Cliente fidèle",
  },
  {
    text: "Nous utilisons la plateforme pour valider nos coupons de réduction. Elle est rapide, fiable et très facile à utiliser.",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    name: "Jules N'Guessan",
    role: "Responsable Marketing",
  },
  {
    text: "Très pratique pour nos clients. Ils peuvent vérifier leurs recharges en quelques secondes, ce qui renforce la confiance.",
    image: "https://randomuser.me/api/portraits/women/13.jpg",
    name: "Fatou Diallo",
    role: "Gestionnaire de points de vente",
  },
  {
    text: "Le système a détecté un code frauduleux que j’avais reçu. J’ai pu éviter une arnaque. Merci pour cette sécurité !",
    image: "https://randomuser.me/api/portraits/men/14.jpg",
    name: "Arnaud Tchatchoua",
    role: "Utilisateur",
  },
  {
    text: "Nous avons intégré cette solution dans notre boutique pour vérifier nos cartes cadeau. Très fiable et simple.",
    image: "https://randomuser.me/api/portraits/women/15.jpg",
    name: "Aïssata Sow",
    role: "Commerçante",
  },
  {
    text: "L’interface est claire, rapide et efficace. Je recommande à tous ceux qui vendent ou utilisent des coupons.",
    image: "https://randomuser.me/api/portraits/men/16.jpg",
    name: "Ibrahim Koné",
    role: "Freelancer digital",
  },
  {
    text: "Service au top. J’ai eu une réponse par e-mail en quelques secondes après la vérification. Très pro !",
    image: "https://randomuser.me/api/portraits/women/17.jpg",
    name: "Mariam Traoré",
    role: "Consommatrice",
  },
  {
    text: "On utilise cette plateforme en interne pour vérifier nos codes partenaires. Aucun bug, que du bon.",
    image: "https://randomuser.me/api/portraits/men/18.jpg",
    name: "Eric Zinsou",
    role: "Responsable Technique",
  },
  {
    text: "Simple, rapide, sécurisé. J’en avais besoin pour mon activité de revente de cartes prépayées. Excellent outil.",
    image: "https://randomuser.me/api/portraits/men/19.jpg",
    name: "Souleymane Dabo",
    role: "Revendeur indépendant",
  },
];



const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);


const Testimonials = () => {
  return (
    <section className="bg-background my-20 relative ">

      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border py-1 px-4 rounded-lg">Temoignages</div>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5">
          Ce que les clients pensent
          </h2>
          <p className="text-center mt-5 opacity-75">
            Voir ce que les clients disent sur nous .
          </p>
        </motion.div>

        <div className="flex justify-center gap-10 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default  Testimonials ;