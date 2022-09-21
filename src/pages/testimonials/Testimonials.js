import React from "react";
import { Helmet } from "react-helmet";
import Video from "../../components/video/Video";

import "./Testimonials.css";

function Testimonials() {
  return (
    <div className="testimonials">
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="TESTIMONIALS BG SHOOTING INSTRUCTION BG-SI, OPERATIONAL AND TECHNIQUES SHOOTING INSTRUCTOR, TRAINING FOR ATHLETES AND PROFESSIONALS, IPSC TSV AND MORE..."
        />
        <meta
          name="keywords"
          content="IPSC TSV SHOOTING INSTRUCTION, SHOOTING INSTRUCTOR, TRAINING FOR ATHLETES AND PROFESSIONALS"
        />
        <title>TESTIMONIALS BG SHOOTING INSTRUCTION</title>
        <link rel="canonical" href="http://bg-si.fr/testimonials/" />
      </Helmet>
      <main className="container testimonials-main">
        <Video />
        <h1 className="text-center testimonials-title">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="54"
            height="54"
            fill="currentColor"
            class="bi bi-quote"
            viewBox="0 0 16 16"
          >
            <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
          </svg>
          Our testimonials
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="54"
            height="54"
            fill="currentColor"
            class="bi bi-quote"
            viewBox="0 0 16 16"
          >
            <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
          </svg>
        </h1>

        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card testimonials-card">
              <div className="card-body">
                <div className="card-title-rounded">
                  <h5 className="card-title">VS</h5>
                </div>
                <p className="card-text p-testimonials">
                  "J'ai eu l'occasion de me faire entraimer par BG shooting
                  instruction. Un entraineur qualifié et parfaitement compétent
                  dont la pédagogie a fait ses preuves. <br />
                  C'était un stage vraiment super, plein d'enseignement ! A
                  refaire !
                  <br />
                  Je vous le recommande pour vos entrainements sportifs ou vos
                  formations professionnelles."
                </p>
                {/* <div class="card-footer text-muted">2 days ago</div> */}
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card testimonials-card">
              <div className="card-body">
                <div className="card-title-rounded">
                  <h5 className="card-title">IF</h5>
                </div>
                <p className="card-text p-testimonials">
                  "Ce week-end j'ai participé à un Master Class de deux jour,
                  organisé dans mon club, avec Bertrand Guillaume : premier jour
                  hand gun, deuxième jour rifle.
                  <br />
                  Les journées commencent avec une explication sur l'importance
                  de l'échauffement physique et technique, avant les
                  entraînements et les matchs, suivie d'une mise en pratique :
                  réveil musculaire (assez physique), étirements et grosse
                  séance de dryfire.
                  <br />
                  La matinée continue avec une grosse révision des fondamentaux
                  avec un passage en revue des tous les stagiaires et correction
                  personnalisé. <br />
                  Un accent particulier est mis sur la tenue de l’arme, que ça
                  soit au pistolet ou à la carabine.
                  <br />
                  L’après-midi est consacré à la mise en pratique des notions du
                  matin : un crescendo de scenarios qui permettent de se tester
                  et qui mettent en évidence comme les fondamentaux doivent être
                  maîtrisés à la perfection, car "when the shit hits the fan"
                  nos bases doivent être solides pour pouvoir soulager notre
                  petit cerveau, qui est trop occupé à résoudre d'autres
                  problèmes. <br />
                  Les journées se terminent avec des petits challenges entre
                  élèves, ce qui joint l'utile et à l’agréable ! <br />
                  Les journées sont chargées et exigeantes mais bien rythmées et
                  Bertrand sait toujours placer un bon mot pour faire descendre
                  la tension ou remotiver les troupes."
                </p>
                {/* <div class="card-footer text-muted">2 weeks ago</div> */}
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card testimonials-card">
              <div className="card-body">
                <div className="card-title-rounded">
                  <h5 className="card-title">PP</h5>
                </div>
                <p className="card-text p-testimonials">
                  "J'ai beaucoup apprécié le stage avec Bertrand GUILLAUME.{" "}
                  <br />
                  J'étais venu pour me perfectionner, c'est mission accomplie.
                  Les exercices dryfires sont vraiment un plus pour progresser,
                  j'ai découvert et adopté. Les astuces et les retours
                  d'expériences de Bertrand comme le positionnement du guidon
                  dans le cran de mire à 8/10 mètres c'est très malin... Un
                  grand merci à Bertrand, à toi …….. (sans qui ce stage n'aurait
                  pas eu lieu) et à tous les membres du groupe (vous êtes super
                  sympa). 👏👏👏 Au plaisir de tous vous revoir sur le range.😉"
                </p>
                {/* <div class="card-footer text-muted">20/09/2022</div> */}
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card testimonials-card">
              <div className="card-body">
                <div className="card-title-rounded">
                  <h5 className="card-title">DB</h5>
                </div>
                <p className="card-text p-testimonials">
                  "Stage HG et Rifle les 20 et 21 août 2022, animé par Bertrand
                  GUILLAUME En résumé, beaucoup d'éléments positifs : <br />
                  • La qualité de l'intervenant qui maîtrise son sujet, en tant
                  que compétiteur et aussi en tant que formateur. Former est un
                  métier et un champion ne fera pas forcément un bon moniteur.
                  <br />
                  • La structuration de chaque journée est cohérente avec le
                  rappel ESSENTIEL sur l'échauffement indispensable avant chaque
                  session, qu'elle soit en dry fire ou live fire.
                  <br />• Le message martelé sur la nécessité de travailler chez
                  soi le dry fire pour espérer pouvoir progresser en stand de
                  tir. <br />
                  • Le rappel indispensable des fondamentaux sur la maîtrise
                  d'une bonne prise en main pour chaque type d'arme.
                  <br />• Les documents supports reprenant les éléments vus
                  pendant la formation. <br />
                  Nous avions demandé deux journées enchaînant les différentes
                  armes, mais je pense que pour une éventuelle prochaine
                  session, il faudrait se concentrer sur une seule arme pendant
                  les deux jours et travailler plus en profondeur certains
                  exercices (comme les standards du type Bill Drill par
                  exemple), ce que le format imposé n'a pas rendu possible. Par
                  ailleurs, nous avons eu la chance d'avoir une excellente
                  équipe gérant les aspects repas et le patchage, permettant de
                  vraiment se concentrer sur les conseils reçus et leur mise en
                  application.
                  <br /> Deux très belles journées !"
                </p>
                {/* <div class="card-footer text-muted">2 days ago</div> */}
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card testimonials-card">
              <div className="card-body">
                <div className="card-title-rounded">
                  <h5 className="card-title">LF</h5>
                </div>
                <p className="card-text p-testimonials">
                  "Ce week-end j'ai participé à un Master Class de deux jours,
                  organisé dans mon club, avec Bertrand Guillaume : <br />
                  premier jour hand gun, deuxième jour rifle. <br />
                  Les journées commencent avec une explication sur l'importance
                  de l'échauffement physique et technique, avant les
                  entraînements et les matchs, suivie d'une mise en pratique:
                  réveil musculaire (assez physique), étirements et grosse
                  séance de dryfire. <br />
                  La matinée continue avec une grosse révision des fondamentaux
                  avec un passage en revue des tous les stagiaires et correction
                  personnalisé. <br />
                  Un accent particulier est mis sur la tenue de l'arme, que ça
                  soit au pistolet ou à la carabine. <br />
                  L'après-midi est consacré à la mise en pratique des notions du
                  matin: <br />
                  un crescendo de scenarios qui permettent de se tester et qui
                  mettent en évidence comme les fondamentaux doivent être
                  maîtrisés à la perfection, car "when the shit hits the fan"
                  nos bases doivent être solides pour pouvoir soulager notre
                  petit cerveau, qui est trop occupé à résoudre d'autres
                  problèmes. <br />
                  Les journées se terminent avec des petits challenges entre
                  élèves, ce qui joint l'utile et à l'agréable! Les journées
                  sont chargées et exigeantes mais bien rythmées et Bertrand
                  sait toujours placer un bon mot pour faire descendre la
                  tension ou remotiver les troupes."
                </p>
                {/* <div class="card-footer text-muted">2 days ago</div> */}
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card testimonials-card">
              <div className="card-body">
                <div className="card-title-rounded">
                  <h5 className="card-title">PS</h5>
                </div>
                <p className="card-text p-testimonials">
                  "J'ai beaucoup apprécié le stage avec Bertrand GUILLAUME.
                  J'étais venu pour me perfectionner, c'est mission accomplie.
                  Les exercices dryfires sont vraiment un plus pour progresser,
                  j'ai découvert et adopté. <br />
                  Les astuces et les retours d'expériences de Bertrand comme le
                  positionnement du guidon dans le cran de mire à 8/10 mètres
                  c'est très malin ... <br />
                  Un grand merci à Bertrand, à toi Phung <br />
                  (sans qui ce stage n'aurait pas eu lieu et à tous les membres
                  du groupe vous êtes super sympa). <br />
                  Au plaisir de tous vous revoir sur le range. <br />
                  J'ai beaucoup apprécié le stage avec Bertrand GUILLAUME.
                  <br /> J'étais venu pour me perfectionner, c'est mission
                  accomplie.
                  <br /> Les exercices dryfires sont vraiment un plus pour
                  progresser, j'ai découvert et adopté. <br />
                  Les astuces et les retours d'expériences de Bertrand comme le
                  positionnement du guidon dans le cran de mire à 8/10 mètres
                  c'est très malin ... <br />
                  Un grand merci à Bertrand, à toi Phung (sans qui ce stage
                  n'aurait pas eu lieu et à tous les membres du groupe vous êtes
                  super sympa). Au plaisir de tous vous revoir sur le range."
                </p>
                {/* <div class="card-footer text-muted">2 days ago</div> */}
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card testimonials-card">
              <div className="card-body">
                <div className="card-title-rounded">
                  <h5 className="card-title">SM</h5>
                </div>
                <p className="card-text p-testimonials">
                  "Très bon stage avec une approche très orientée sport et
                  performances. <br />
                  Des informations très utiles sur la préparation physique et
                  mentale avant et pendant le match. Un apport très pertinent
                  sur l'exploitation du hit factor et donc sur la stratégie sur
                  chaque stage.
                  <br /> Un bon équilibre entre théorie et pratique. <br />
                  Des apports clairs sur des fondamentaux comme la bonne tenue
                  de l'arme, le gainage du haut du corps, et la prise de visée.
                  <br /> Des apports techniques sur le traitement des bobbers.
                  <br /> Et un peu de ludique sur la fin pour décompresser et
                  finir sur une note sympa.
                  <br /> Bertrand GUILLAUME connaît très bien son sujet et son
                  approche de sportif de haut niveau est vraiment une grosse
                  valeur ajoutée. <br />
                  Il est carré, son programme est bien structuré et il est très
                  empathique.
                  <br /> Seul bémol : <br />
                  le prix Un peu élevé pour les deux jours et une annonce du
                  nombre de coups à tirer surévaluée. <br />
                  je suis très satisfait de ce stage et je remercie le club de
                  l'avoir organisé. <br />A refaire donc, je suis preneur à
                  100%."
                </p>
                {/* <div class="card-footer text-muted">2 days ago</div> */}
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card testimonials-card">
              <div className="card-body">
                <div className="card-title-rounded">
                  <h5 className="card-title">MD</h5>
                </div>
                <p className="card-text p-testimonials">
                  "Première expérience pour moi sur une formation de ce type.
                  <br />
                  Les 2 points de progrès en compétition suite à ce we devraient
                  être :<br />
                  - la régularité de mes résultats améliorés <br />
                  - le fait de maitriser le déroulé de stage. <br />
                  C’est une formation qui est venue au bon moment dans mon
                  apprentissage.
                  <br /> Bertrand a su me faire ressentir les points de blocages
                  et le changement après les avoir traités."
                </p>
                {/* <div class="card-footer text-muted">2 days ago</div> */}
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card testimonials-card">
              <div className="card-body">
                <div className="card-title-rounded">
                  <h5 className="card-title">LP</h5>
                </div>
                <p className="card-text p-testimonials">
                  "Petit groupe de tireurs TSV sympa, nous avons profité a
                  domicile d'une journée riche en astuces et conseils avisés a
                  travers des exercices variés. <br />
                  Merci a Bertrand qui nous fait bénéficier de sa solide
                  expérience de tireur avec une pédagogie adaptée. <br />
                  J'en ressort avec une foule de pistes de travail et un regard
                  différent sur certains basique.
                  <br />
                  Un vrai bonheur, j'en redemande encore !"
                </p>
                {/* <div class="card-footer text-muted">2 days ago</div> */}
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "50px", textAlign: "center" }}>
          <p>Thank you all for participating in my instructions...</p>
          <h5 style={{ fontStyle: "italic" }}>shooterBg2's</h5>
        </div>
      </main>
    </div>
  );
}

export default Testimonials;
