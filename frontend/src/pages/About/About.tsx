const teamMembers = [
    {
      name: 'RABEMANANTSIMBA Onja Faneva Rinoh',
      role: 'Développeur Front-end',
    },
    {
      name: 'NOFINIAINA NATOLOJANAHARY Tambatra',
      role: 'Développeur Back-end',
    },
    {
      name: 'ANDRIAMIALINIRINA Fanantenana',
      role: 'Designer UX/UI',
    },
    {
      name: 'RANDIMBIARISOA Santatriniaina Charles Ricardo',
      role: 'Développeur Front-end',
    },
    {
      name: 'RAZAFINDRALAMBO MARIPITIA Lafatriniaina',
      role: 'Développeur Back-end',
    },
  ];
  
  // ... Le reste du code reste inchangé
  

const About = () => {
  return (
    <div className="p-10 h-[505px]">
      {/* <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blueColor">À propos de JobFinder</h1>
        <p className="text-gray-600">Trouvez votre emploi idéal avec nous.</p>
      </div> */}

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Notre Histoire</h2>
        <p className="text-gray-700">
          JobFinder a été fondée en 2023 par une équipe passionnée d'étudiants en troisième année de l'ISPM. L'idée est née de notre propre expérience en cherchant du travail pendant nos études. Nous avons remarqué qu'il pouvait être difficile de trouver les offres d'emploi qui correspondaient à nos compétences et à nos aspirations.
        </p>
        <p className="text-gray-700">
          C'est alors que nous avons décidé de créer JobFinder, une plateforme qui simplifie le processus de recherche d'emploi en mettant en relation les chercheurs d'emploi avec les employeurs qui recherchent des talents. Depuis lors, notre équipe travaille sans relâche pour améliorer constamment JobFinder et offrir à nos utilisateurs la meilleure expérience possible.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Notre Équipe</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-gray-100 p-4 shadow-md rounded-lg">
              <h3 className="text-xl font-semibold text-blueColor">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Autres sections, comme des témoignages, des partenaires, etc. */}
    </div>
  );
};

export default About;
