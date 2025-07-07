"use client";
import React from "react";
import Search from "./Search/search";

const Hero = () => {
  return (
    <div className="bg-[url('https://ixsyk4dakc.ufs.sh/f/j8hvpGMPCNSkCjpZgxGjh7wHxi49gk0PSYct8VnEUuQCoAep')] h-screen bg-cover bg-center overlay flex justify-center flex-col  items-center">
      {/* Tu peux ajouter du contenu ici si besoin */}
      <h1 className="text-5xl">Europe : locations de vacances</h1>
      <p className="text-xl  font-medium">
        Nous avons trouvé 1335104 locations de vacances – saisissez vos dates
        pour voir les disponibilités
      </p>
      {/* rechercher */}
      <Search />
    </div>
  );
};

export default Hero;
