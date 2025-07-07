import Testimonials from "@/components/commentaire";
import { Faqs } from "@/components/faqs";
import { Feature43 } from "@/components/feature43";
import { Fonctionnement } from "@/components/fonctionnement";

import Hero from "@/components/hero";
import { Popular_destinations } from "@/components/Popular_destinations";

import React from "react";

export default function Home() {
  return (
    <div>
      <Hero />
      {/* quelques appartement  ???? */}
      <Popular_destinations />
      {/* Confiance */}
      <Feature43 />
      <Fonctionnement />
      <Testimonials />
      <Faqs />
    </div>
  );
}
