import Gallery4 from "@/components/gallery4";

const data = [
  {
    id: "paris",
    title: "Paris",
    description:
      "Découvrez le charme intemporel de Paris, entre monuments historiques, gastronomie raffinée et balades romantiques le long de la Seine.",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "rome",
    title: "Rome",
    description:
      "Immergez-vous dans l’histoire antique de Rome, avec ses ruines majestueuses, ses fontaines légendaires et ses délicieuses trattorias.",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1555992828-ca4dbe41d294?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "lisbon",
    title: "Lisbonne",
    description:
      "Entre collines colorées, tramways rétro et vue sur l’Atlantique, Lisbonne est un parfait mélange de tradition et de modernité.",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1080",
  },
  {
    id: "marrakech",
    title: "Marrakech",
    description:
      "Plongez dans l’ambiance envoûtante de Marrakech, ses souks vibrants, ses riads somptueux et ses jardins apaisants.",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1562163143-1a1f227c609e?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1080",
  },
  {
    id: "bali",
    title: "Bali",
    description:
      "Évadez-vous sur l’île des Dieux : plages paradisiaques, rizières verdoyantes et culture balinaise authentique vous attendent.",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1526476148966-99ad1835423a?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1080",
  },
];

function Popular_destinations() {
  return <Gallery4 items={data} />;
}

export { Popular_destinations };
