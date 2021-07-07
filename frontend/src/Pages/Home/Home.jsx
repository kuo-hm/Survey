import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import { Tab, Typography, Box } from "@material-ui/core";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Home() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square style={{ marginTop: "100px", textAlign: "center" }}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="Home" centered>
          <Tab label="Emsi" {...a11yProps(0)} />
          <Tab label="Formations" {...a11yProps(1)} />
          <Tab label="Employabilité" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <h2>Candidature</h2>
        <hr />
        <p>
          Nous donnons à nos élèves ingénieurs une formation de qualité et des
          expériences qui les préparent au succès dans leurs carrières. Nous les
          aidons aussi à découvrir un
          <br /> domaine qui les passionne et à oser le diriger. Nos écoles sont
          reconnues par l’Etat <br />
          <hr />
          <h2>Admissions</h2>
          <p>
            <hr />
            <h3>Pôle ingénierie </h3>
            L’admission en première année des deux années préparatoires au cycle
            d’ingénieur, est ouverte aux titulaires du baccalauréat scientifique
            ou technique, après examen de leur dossier scolaire.
            <br />
            <h3>Pôle finance</h3>
            L’admission en première année est ouverte aux titulaires du
            baccalauréat (toutes options) sauf pour le baccalauréat littéraire
            après examen de leur dossier scolaire.
            <br />
            <h3>Pièces à fournir</h3>
            5 photos d’identité
            <br />
            1 extrait d’acte de naissance
            <br />
            Une photocopie de la carte d’identité nationale
            <br />
            3 photocopies certifiées conformes du diplôme Baccalauréat
            <br />
            2 photocopies certifiées conformes de bulletins de notes des 2
            dernières années d’études ( national+régional+ contrôle continu)
            <br />
            <hr />
            <h2>Frais et financement</h2>
            <h3>Frais de scolarité</h3>
            Première et deuxième année: Cycle préparatoire
            <br />
            -Frais d’inscription: 3 000 Dh/an
            <br />
            -Frais de scolarité : 12 000 Dh/trimestre
            <br />
            Troisième, quatrième et cinquième année: Cycle ingénieur
            <br />
            -Frais d’inscription: 3 000 Dh/an
            <br />
            -Frais de scolarité : 13 200 Dh/trimestre
            <br />
            <h3>Frais de scolarité</h3>
            Le Groupe EMSI, dans ses quatre villes (CASA, RABAT, MARRAKECH et
            TANGER), offre des bourses d’études pour l’accès en première année
            aux candidats les plus méritants. Les critères d’éligibilité pour
            bénéficier d’une bourse EMSI sont:
            <br />
            ⦁ Une copie certifiée conforme du baccalauréat de l’année en cours
            avec mention Très Bien
            <br />
            ⦁ Une copie certifiée conforme du bulletin de notes des deux
            dernières années ( première et deuxième années du BAC)
            <br />
            ⦁ Une lettre manuscrite de candidature.
            <br />
            La Commission des bourses de l’EMSI n’examinera que les dossiers de
            candidature complets.
            <br />
          </p>
          <img
            src="https://www.emsi.ma/wp-content/uploads/2020/07/logo.png"
            alt="emsi"
            className="emsiimg"
          ></img>
        </p>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <h2>Cursus des études</h2>
        <hr />
        <p>
          La pratique dans le métier d’Ingénieur étant primordiale, l’EMSI
          dispense à ses étudiants une part importante de travaux pratiques. Les
          manipulations durant ces travaux permettent la compréhension et
          l’assimilation des cours théoriques qui leur sont enseignés. De plus,
          des mini-projets et projets sont programmés tout le long du cursus,
          pour inciter l’étudiant, seul ou en binôme, à proposer et apporter des
          solutions aux problèmes auxquels il sera confronté dans sa vie active.
          <br />
          Un personnel enseignant de compétence indéniable intervient à l’EMSI.
          Outre un personnel permanent de haut potentiel, des docteurs d’Etat,
          des docteurs ingénieurs, professeurs dans les grandes écoles et
          Universités, ou cadres supérieurs dans des entreprises assurent la
          formation de nos élèves ingénieurs.
          <br />
          Ils travaillent en coordination commune sous la direction des
          responsables de filières et forment le conseil d’enseignement de
          l’école. Celui-ci définit, avec le directeur de l’école et les
          industriels partenaires, le contenu des programmes et leur adaptation
          permanente à l’évolution des connaissances et aux besoins de
          l’industrie et des entreprises. Le personnel permanent de l’EMSI,
          bénéficie d’une formation continue, lui permettant l’actualisation de
          ses connaissances par son intervention dans la recherche appliquée
          tant universitaire qu’industrielle.
          <hr />
          <h2>Filières et Programmes</h2>
          <h3>Ingénierie Informatique et Réseaux</h3>
          La filière Ingénierie Informatique et Réseaux de l’EMSI a pour
          objectif de former des Ingénieurs polyvalents dans les domaines du
          génie informatique, tout en alliant l’esprit d’analyse et de
          conception à celui de la mise en œuvre et de la réalisation. Cette
          formation complète, en ingénierie informatique et réseaux permet de
          former des acteurs essentiels en entreprise amenés à intervenir à tous
          les niveaux du réseau et du système d’information d’une organisation.
          La filière ingénierie informatique et réseaux, permet de déboucher sur
          deux voies d’approfondissement :
          <h3>Ingénierie Financière et Audit </h3>
          La filière Ingénierie Financière et Audit vise à former des cadres
          spécialisés d’une part, dans le domaine de l’ingénierie financière en
          termes de diagnostic, d’évaluation et de montages financiers, et
          d’autre part, dans le domaine d’audit et contrôle en termes de
          structures, de processus et de systèmes devenant de plus en plus
          complexes, En effet, Cette filière aura pour principal objectif de
          former des lauréats capables d’utiliser des méthodes innovantes,
          élaborées, et transversales permettant la recherche de solutions
          originales à des problèmes financiers qui touchent aux structures de
          l’entreprise dans ses différentes facettes.
          <h3>génie civil, bâtiments et travaux publics</h3>
          ’objectif de la filière génie civil, bâtiments et travaux publics de
          l’EMSI est de former des ingénieurs spécialistes en bâtiments et
          travaux publics (BTP). Ces domaines sont fortement dynamisés par la
          demande croissante en besoins de logements et construction des
          infrastructures. LA FORMATION GÉNIE CIVIL, BÂTIMENTS ET TRAVAUX
          PUBLICS : Le cursus en génie civil, bâtiments et travaux publics BTP
          associe à une formation scientifique de base, une formation technique
          hautement qualifiée. Cette dernière est fondée sur l’étude de cas
          concrets en étroite collaboration avec les entreprises et les bureaux
          d’études. Tout en permettant une insertion professionnelle fluide et
          l’implication dans de vrais projets.
        </p>
        <br />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <h2>Nos recruteurs</h2>
        <hr />
        <p>
          Depuis 1986, l’École Marocaine des Sciences de l’Ingénieur associe le
          monde de l’entreprise, toujours en mouvement, à tous les niveaux de
          son activité et de sa pédagogie. En effet, l’EMSI est depuis toujours
          engagée dans la formation d’ingénieurs et de managers de haut niveau,
          immédiatement opérationnels, aptes à comprendre les exigences de
          l’entreprise et à répondre à ses priorités. Dans une dynamique de
          développement durable, l’objectif permanent de l’EMSI est de répondre
          aux enjeux économiques actuels du Royaume et du continent Africain.
          L’EMSI favorise largement la présence et la collaboration des
          entreprises en multipliant les rencontres professionnelles et en
          nourrissant les partenariats économiques. Plus de 13 000 lauréats de
          l’EMSI sont actuellement en poste dans tous les secteurs d’activités.
          Ceci favorise les liens étroits et la confiance établi avec avec la
          majorité des entreprises du marché.
          <h3>Événements Employabilité</h3>
          A travers les forums EMSI-Entreprise, nous accueillons des
          responsables de recrutement de plusieurs entreprises partenaires,
          offrant ainsi aux étudiants et lauréats l’opportunité de décrocher un
          stage ou un premier emploi via des entretiens organisés au sein de
          l’EMSI. Des spécialistes de divers secteurs d’activités : entreprises
          spécialisées en ingénierie informatique, technologie, banque,
          assurance, télécom, bâtiment et travaux publics, consulting… Des
          professionnels souhaitant partager leurs connaissances et leurs
          expériences à travers des tables rondes. Des start-ups marocaines pour
          les étudiants désireux de s’orienter vers l’entrepreneuriat. Le forum
          emsi-entreprises est une opportunité pour les étudiants de rencontrer
          : Des responsables de recrutement offrant aux étudiants/lauréats
          l’opportunité de décrocher un stage ou un premier emploi via des
          entretiens organisés sur place Des spécialistes de divers secteurs
          d’activités : SSII, technologie, banque, assurance, télécom, BTP,
          consulting… Des professionnels souhaitant partager leurs connaissances
          et leurs expériences à travers des tables rondes Des start-ups
          marocaines pour les étudiants désireux de s’orienter vers
          l’entrepreneuriat
          <hr />
          <h2>Témoignages des entreprises</h2>
          Avec plus de 200 000 collaborateurs et plus de 1600 au Maroc,
          CAPGEMINI est présent dans plus de 40 pays et célèbre son cinquantième
          anniversaire en 2017 et son 11ème au Maroc. le Groupe est l’un des
          leaders mondiaux du conseil, des services informatiques et de
          l’infogérance et a réalisé en 2016 un chiffre d’affaires de 12,5
          milliards d’euros. Avec ses clients, CAPGEMINI conçoit et met en
          oeuvre les solutions business, technologiques et digitales qui
          correspondent à leurs besoins et leur apportent innovation et
          compétitivité. CAPGEMINI à établi depuis 2010 un partenariat fort avec
          l’EMSI en participant aux différents « job days » pour le recrutement
          des stagiaires et jeunes diplômés qui représentent 40 % de cette
          population au sein de l’entreprise. Entièrement satisfaits de cette
          collaboration, CAPGEMINI a renouvelé ce partenariat lors du forum EMSI
          entreprises du mois d’avril 2018 et ce pour les 5 prochaines années.
        </p>
      </TabPanel>
    </Paper>
  );
}

export default Home;
