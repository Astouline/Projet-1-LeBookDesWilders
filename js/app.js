$(document).ready(function() {
  // Object form Wilders
  const dataWilders = {
    benoit: {
      fisrtName: "Benoît",
      link: "Benoit",
      lastName: "NIVEAU",
      words: "Ouvert d'esprit - Sociable - Tranquille",
      email: "be.niveau@hotmail.fr",
      github: "https://github.com/benoit1521",
      linkedin: "https://www.linkedin.com/in/benoît-niveau-a34ba9133",
      mobility: "Reims, Paris",
      language: "HTML, CSS, JS React",
      group: `Tout est fonction de la composition du groupe, des caractères qui le compose ou des compétences de ceux qui le compose.
            Je peux autant être en avant qu'en retrait ou au service du groupe. Si je dois être en avant du groupe,  j'ai besoin de maîtriser ce que j'expose.`,
      chooseCode: `J'ai choisi le code pour donner une orientation nouvelle à ma carrière professionnelle et surtout pour exercer dans un domaine qui me passionne de jour en jour. Domaine dans lequel j'ai encore beaucoup à apprendre et c'est ce qui me motive.`,
      tomorrow: `En train de coder et d'acquérir de l’expérience dans ce domaine et enfin m'épanouir professionnellement.`
    },
    charles: {
      fisrtName: "Charles",
      link: "Charles",
      lastName: "CREPIN",
      words: "Geek - Attentif - Assidu.",
      email: "c.crepin@net-c.fr",
      github: "https://github.com/CharlesC51",
      linkedin: "https://www.linkedin.com/in/charles-crepin-b42819170/",
      mobility: "Nationale",
      language: "Javascript / Bootstrap4 / React",
      group:
        "Je suis là pour fournir mes compétences et aider les autres au maximum.",
      chooseCode:
        "Etant geek depuis tout petit, il me fallait un métier en rapport avec l'informatique. J'ai découvert le code grâce a un article parlant d'une école accessible aux débutants puis j'ai commencé à coder et j'aime ça.",
      tomorrow: "Dans une entreprise me caractérisant."
    },
    corentin: {
      fisrtName: "Corentin",
      link: "Corentin",
      lastName: "DE SOTO COBET",
      words: "Flexible - A l'écoute - Assidu",
      email: "corentin.dsc@gmail.com",
      github: "https://github.com/CorentinReims",
      linkedin: "https://www.linkedin.com/in/corentin-de-soto-cobet-b5b78b170/",
      mobility: "Reims",
      language: "Html, Css(bootstrap), JS(React)",
      group: "Je m'adapte par rapport aux profils présents dans le groupe.",
      chooseCode: "La liberté de création avec énormément de possibilités.",
      tomorrow:
        "En entreprise avec toujours un projet personnel dans le coin de la tête."
    },
    fabien: {
      fisrtName: "Fabien",
      link: "Fabien",
      lastName: "RAYMOND",
      words: "Collectif - Sérieux - Sportif",
      email: "voortexxx@gmail.com",
      github: "https://github.com/voortexx",
      linkedin: "https://www.linkedin.com/in/fabien-raymond-41227114b",
      mobility: "Grand-Est",
      language: "HTML/CSS, PHP, MySQL, Bootstrap, JQuery",
      group: "Médiateur ou Organisateur",
      chooseCode:
        "Le code nous permet de répondre à des besoins, créer des projets qui seront utiles à d'autres personnes. <br> A partir d'une idée, apporter quelque chose de concret.",
      tomorrow: "En Freelance ou dans une start-up"
    },
    florentin: {
      fisrtName: "Florentin",
      link: "Florentin",
      lastName: "COYARD",
      words: "Ponctuel - Persévérant - Calme",
      email: "florentin.coyard@gmail.com",
      github: "https://github.com/Takoouh",
      linkedin: "https://www.linkedin.com/in/florentin-coyard-72a10016b/",
      mobility: "Reims",
      language: "HTML-CSS-REACT.js",
      group: "Je donne des idées et des solutions aux contraintes",
      chooseCode:
        "Je trouve fascinant le fait de taper des lignes de codes et voir un site se mettre en forme !",
      tomorrow: "En poste dans une compagnie à l'ambiance sympathique"
    },
    gautier: {
      fisrtName: "Gautier",
      link: "Gautier",
      lastName: "SIMONIN",
      words: "A l'écoute - Souriant - Discret.",
      email: "gautier08000@hotmail.com",
      github: "https://github.com/Gautier08",
      linkedin: "https://www.linkedin.com/in/gautier-simonin-63a191170/",
      mobility: "Région Champagne-Ardenne",
      language: "html, css, javascript",
      group: "Discret",
      chooseCode: "Par passion de l'informatique",
      tomorrow: "Développeur Web"
    },
    leuthsouline: {
      fisrtName: "Leuthsouline",
      link: "Leuthsouline",
      lastName: "CHANTHATHIRATH",
      words: "Persévérante - Rigoureuse - Aimable",
      email: "r.leuthsouline@gmail.com",
      github: "https://github.com/Astouline",
      linkedin:
        "https://www.linkedin.com/in/leuthsouline-chanthathirath-776723170/",
      mobility: "Marne - Ile de France",
      language: "HTML 5 - CSS3 - Javascript",
      group:
        "Je ne suis pas leader mais je participe activement au projet, je donne mes observations et mes idées",
      chooseCode: "Par goût du défi",
      tomorrow: "Je me vois dans une agence web, type start up"
    },
    mathieu: {
      fisrtName: "Mathieu",
      link: "Mathieu",
      lastName: "THOMAS",
      words: "Dynamisme - Ponctualité - Persévérance",
      email: "kawacke@gmail.com",
      github: "https://github.com/Kawacke",
      linkedin: "https://www.linkedin.com/in/mathieu-thomas-95a855165/",
      mobility: "Ardennes - Marne",
      language: "HTML5 / CSS3 / Bootstrap 4 / PHP / JS REACT",
      group:
        "Je suis à l'écoute des membres du groupe, afin de mettre en commun toutes les idées.",
      chooseCode:
        "Je suis tombé dedans quand jétait jeune, j'ai démarré en autodidacte, et j'ai souhaité poursuivre avec une formation pour apprendre une structure de travail.",
      tomorrow:
        "Je souhaiterais travailler en freelance, créer une startup à plusieurs, ou dans une startup en devenir, "
    },
    michael: {
      fisrtName: "Michaël",
      link: "Michael",
      lastName: "BOURNEAU",
      words: "Rigoureux - Adaptabilité",
      email: "michael.bourmeau@outlook.fr",
      github: "https://github.com/NovaaHD",
      linkedin: "https://www.linkedin.com/in/micha%C3%ABl-bourmeau-4b19b7170/",
      mobility: "Nationale",
      language: "Bootstrap / JS / React",
      group: "Chef de groupe",
      chooseCode:
        "Car depuis plusieurs années, j'aime coder des petites choses et je voulais en faire mon métier",
      tomorrow:
        "Je me vois dans une entreprise dans un secteur qui me plairait (jeux vidéos) et pourquoi pas en Freelance"
    },
    michel: {
      fisrtName: "Michel",
      link: "Michel",
      lastName: "DESCOTES",
      words: "Créatif - Souriant - Motivé",
      email: "micheldescotes65@gmail.com",
      github: "https://github.com/mde51",
      linkedin: "https://www.linkedin.com/feed/?trk=nav_logo",
      mobility: "Région de Reims et les Ardennes",
      language: "HTML-CSS JS-React",
      group:
        "Je suis capable de travailler avec beaucoup de personnes très différentes",
      chooseCode: "Pour exploiter ma créativité en créant des lignes de codes",
      tomorrow:
        "Je me vois bien avec une petite équipe de développeurs web dans une entreprise ou alors en freelance."
    },
    quentin: {
      fisrtName: "Quentin",
      link: "Quentin",
      lastName: "DA SILVA",
      words: "Optimiste - Curieux - Collectif",
      email: "quentin_51@live.fr",
      github: "https://github.com/quentinsd",
      linkedin: "https://www.linkedin.com/in/quentin-da-silva-50b58b16b/",
      mobility: "Grand-Est - Hauts-De-France - Ile-de-France",
      language: "HTML / CSS - JavaScript / React",
      group:
        "J'aime apporter mes idées au projet, toujours a l'écoute de mes coéquipiers. ",
      chooseCode:
        "Car ce n'est pas statique, il y a toujours des évolutions, de nouvelles choses à apprendre et à perfectionner. Pour moi, il n'y a rien de plus satisfaisant que de passer d'une page blanche à un projet abouti.",
      tomorrow:
        "Je me vois, dans une startup ou bien en entreprise en train de travailler sur un projet avec une équipe, tout en découvrant de nouveaux langages de programmation."
    },
    robin: {
      fisrtName: "Robin",
      link: "Robin",
      lastName: "GUERRE",
      words: "Calme - Curieux - Passionné",
      email: "rb.guerre@gmail.com",
      github: "https://github.com/Sheoo",
      linkedin: "https://www.linkedin.com/in/robin-guerre-256161152/",
      mobility: "Reims - Paris",
      language: "JavaScript, Python, Java(bases)",
      group: "Soutien et diplomate",
      chooseCode:
        "Pour maîtriser un domaine qui lie tous mes centres d'intérêts",
      tomorrow: "Là où je saurai trouver ma place !"
    }
  };

  for (let index in dataWilders) {
    let article = document.createElement("article");
    article.setAttribute("class", "col-12 col-md-6 col-lg-4 p-4");

    let vignette = document.createElement("article");
    vignette.setAttribute("class", "vignette w-100");

    let figure = document.createElement("figure");
    figure.setAttribute("class", "photo card rounded-circle w-100");

    let image = document.createElement("img");
    image.setAttribute("class", "card-img rounded-circle");
    image.setAttribute("src", `photos/${dataWilders[index].link}300.jpg`);

    let figcaption = document.createElement("figcaption");
    figcaption.setAttribute(
      "class",
      "card-img-overlay text-center d-flex flex-column"
    );

    let divFigcaption = document.createElement("div");
    divFigcaption.setAttribute("class", "card-text mt-auto mb-4");

    let spanFigcaption = document.createElement("span");
    spanFigcaption.setAttribute("class", "btn btn-primary");
    spanFigcaption.innerHTML = `${dataWilders[index].fisrtName}`;

    let aside = document.createElement("aside");
    aside.setAttribute(
      "class",
      "texte card rounded-circle text-center d-flex flex-column w-100"
    );

    let imageBackground = document.createElement("img");
    imageBackground.setAttribute("class", "card-img rounded-circle");
    imageBackground.setAttribute("src", "images/logoWCS.png");

    let figcaptionBackground = document.createElement("figcaption");
    figcaptionBackground.setAttribute(
      "class",
      "card-img-overlay bg-orange-opacity text-center d-flex flex-column rounded-circle"
    );

    let pBackground = document.createElement("p");
    pBackground.setAttribute("class", "card-text m-auto");
    pBackground.innerHTML = `
    <span class="h3">${dataWilders[index].fisrtName} <br> ${
      dataWilders[index].lastName
    }</span><br><br>
    ${dataWilders[index].words}<br><br>
    <a href="#" class="btn btn-secondary mt-auto shadow-lg" 
    data-toggle="modal" 
    data-target="#ModalWilder${
      dataWilders[index].fisrtName
    }">Découvrir son profil</a>`;

    document
      .getElementById("wilders")
      .appendChild(article)
      .appendChild(vignette);
    vignette.appendChild(figure).appendChild(image);
    figure
      .appendChild(figcaption)
      .appendChild(divFigcaption)
      .appendChild(spanFigcaption);

    vignette.appendChild(aside).appendChild(imageBackground);
    aside.appendChild(figcaptionBackground).appendChild(pBackground);
  }

  // Object Supervisors

  const dataSupervisors = {
    clement: {
      fisrtName: "Clement",
      lastName: "BECHETOILLE",
      description:
        "Campus manager, Reims. <br> Diplômé de l’ESSCA d’Angers, Clément a d’abord travaillé à des fonctions marketing dans l’édition et les objets éducatifs avant de développer son expérience dans l’enseignement supérieur au Vietnam puis en France sur les sujets d’insertion professionnelle, de développement personnel et de recrutement innovant. Basé à Reims depuis quelques années, il s’implique dans les initiatives locales notamment l’organisation de TEDxReims. Passionné par les nouvelles approches pédagogiques, il a rejoint la Wild Code School comme Campus Manager à Reims",
      wild:
        "Aller à la découverte des cultures du monde, en Asie notamment, et surtout de tout ce qui se mange !",
      linkedin: "https://www.linkedin.com/in/clementbechetoille/",
      email: "clement@wildcodeschool.fr"
    },
    thomas: {
      fisrtName: "Thomas",
      lastName: "CULDAUT",
      description:
        "Après des études en informatique, Thomas a tout de suite lié la pratique du développement et de la pédagogie dans le monde de la formation professionnelle en France et au Cameroun. S’ensuit une expérience dans une startup parisienne spécialisée dans le développement d’application événementielle au sein de laquelle il développe des jeux en AS3, Unity et PHP/JavaScript. Cela le mène à diriger une équipe de dév en Inde où il gère la réalisation de projets web.",
      wild:
        "Amateur de jeu de rôle, de plateau et de stratégie à base de figurines, quand il ne code pas Thomas peut passer des heures entre amis autour d’un jeu.",
      linkedin: "https://www.linkedin.com/in/thomas-culdaut-76ba593/",
      email: "thomas@wildcodeschool.fr"
    }
  };

  for (let index in dataSupervisors) {
    let article = document.createElement("article");
    article.setAttribute("class", "col-12 col-md-6 col-lg-4 p-4");

    let vignette = document.createElement("article");
    vignette.setAttribute("class", "vignette w-100");

    let figure = document.createElement("figure");
    figure.setAttribute("class", "photo card rounded-circle w-100");

    let image = document.createElement("img");
    image.setAttribute("class", "card-img rounded-circle");
    image.setAttribute(
      "src",
      `photos/${dataSupervisors[index].fisrtName}300.jpg`
    );

    let figcaption = document.createElement("figcaption");
    figcaption.setAttribute(
      "class",
      "card-img-overlay text-center d-flex flex-column"
    );

    let divFigcaption = document.createElement("div");
    divFigcaption.setAttribute("class", "card-text mt-auto mb-4");

    let spanFigcaption = document.createElement("span");
    spanFigcaption.setAttribute("class", "btn btn-primary");
    spanFigcaption.innerText = `${dataSupervisors[index].fisrtName}`;

    let aside = document.createElement("aside");
    aside.setAttribute(
      "class",
      "texte card rounded-circle text-center d-flex flex-column w-100"
    );

    let imageBackground = document.createElement("img");
    imageBackground.setAttribute("class", "card-img rounded-circle");
    imageBackground.setAttribute("src", "images/logoWCS.png");

    let figcaptionBackground = document.createElement("figcaption");
    figcaptionBackground.setAttribute(
      "class",
      "card-img-overlay bg-orange-opacity text-center d-flex flex-column rounded-circle"
    );

    let pBackground = document.createElement("p");
    pBackground.setAttribute("class", "card-text m-auto");
    pBackground.innerHTML = `
    <span class="h3">${dataSupervisors[index].fisrtName} <br> ${
      dataSupervisors[index].lastName
    }</span><br><br><br><br>
    <a href="#" class="btn btn-secondary mt-auto shadow-lg" 
    data-toggle="modal" 
    data-target="#ModalWilder${
      dataSupervisors[index].fisrtName
    }">Découvrir son profil</a>`;

    document
      .getElementById("supervisors")
      .appendChild(article)
      .appendChild(vignette);
    vignette.appendChild(figure).appendChild(image);
    figure
      .appendChild(figcaption)
      .appendChild(divFigcaption)
      .appendChild(spanFigcaption);

    vignette.appendChild(aside).appendChild(imageBackground);
    aside.appendChild(figcaptionBackground).appendChild(pBackground);
  }

  // Object Modal "FOR"

  for (let index in dataWilders) {
    let containModal = document.createElement("article");
    containModal.innerHTML = `
    <!-- MODAL -->
    <div class="modal fade" id="ModalWilder${
      dataWilders[index].fisrtName
    }" tabindex="-1" role="dialog" aria-labelledby="ModalWilder1-Title"
      aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header border border-white p-1">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <!-- PHOTO + NOM/PRENOM -->
          <section class="modal-body pt-0 container-fluid">
            <article class="row">
              <figure class="col-sm-4 offset-1 col-12">
                <div class="row">
                  <div class="col-sm-12 col-5">
                    <img class="rounded-circle img-fluid" src="photos/${
                      dataWilders[index].link
                    }300.jpg"
                      alt="image de profil">
                  </div>
                  <div class="col-sm-12 col-7 my-auto">
                    <figcaption>
                      <h3 class="text-center nomprenom">${
                        dataWilders[index].fisrtName
                      } ${dataWilders[index].lastName}</h3>
                    </figcaption>
                  </div>
                </div>
              </figure>
              <div class="col-sm-6 offset-sm-1 col-12 my-auto">
                <article class="text-center">
                  <p><b>Mobilité professionnelle</b>
                    <br>${dataWilders[index].mobility}</p>
                  <p><b>Langage de programmation pratiqué</b>
                    <br>${dataWilders[index].language}</p>
                </article>
                <div class="row d-flex justify-content-center pl-3">
                  <!------------------------------------------------------ LINKEDIN ------------------------------------------------------>
                  <p class="col-12 text-center"><b>Contact</b></p>
                  <figure class="col-4 col-lg-3 text-center w-50">
                    <a href="${
                      dataWilders[index].linkedin
                    }" title="Lien linkedin" target="_blank"><span class="iconmodal"><svg data-icon="linkedin"
                          role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                          <path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                        </svg></span></a>
                  </figure>
                  <!------------------------------------------------------ GITHUB --------------------------------------------------------->
                  <figure class="col-4 col-lg-3 text-center">
                    <a href="${
                      dataWilders[index].github
                    }" title="Lien Github" target="_blank"><span class="iconmodal"><svg data-icon="github"
                          role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                          <path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                        </svg></span></a>
                  </figure>
                  <!------------------------------------------------------- MAIL ---------------------------------------------------------->
                  <figure class="col-4 col-lg-3  text-center">
                    <input type="text" value="${
                      dataWilders[index].email
                    }" class="${dataWilders[index].fisrtName} inputCopy">
                    <a href="#" class="copy" data-container="body" data-toggle="popover" data-placement="right" data-content="Adresse Mail copiée !"><span data-balloon="size: 2x"
                        data-balloon-pos="up" class="iconmodal"><svg aria-hidden="true" data-prefix="fas" data-icon="envelope"
                          role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path fill="currentColor" d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                        </svg></span></a>
                  </figure>
                </div>
              </div>
            </article>
            <!-- 3 MOTS -->
            <section class="row">
              <article class="col-12">
                <hr class="w-50 mt-0 bg-orange-opacity">
                <h3 class="text-center">${dataWilders[index].words}</h3>
                <hr class="w-50 bg-orange-opacity">
              </article>
              <!-- QUESTION -->
              <article class="col-12 mx-auto">
                <h4 class="text-center">Quelle est ta place dans un groupe ?</h4>
                <p class="text-center">${dataWilders[index].group}</p>
              </article>
              <article class="col-12 mx-auto">
                <h4 class="text-center">Pourquoi avoir choisi le code ?</h4>
                <p class="text-center">
                  ${dataWilders[index].chooseCode}</p>
              </article>
              <article class="col-12 mx-auto">
                <h4 class="text-center">Où te vois-tu demain ?</h4>
                <p class="text-center">${dataWilders[index].tomorrow}</p>
              </article>
            </section>
          </section>
        </div>

      </div>
    </div>

    `;

    document.getElementById("Modal").appendChild(containModal);
  }

  for (let index in dataSupervisors) {
    let containModalSupervisors = document.createElement("article");
    containModalSupervisors.innerHTML = `
    <!-- MODAL -->
    <div class="modal fade" id="ModalWilder${
      dataSupervisors[index].fisrtName
    }" tabindex="-1" role="dialog" aria-labelledby="ModalWilder-Title"
      aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header border border-white p-1">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <!-- PHOTO + NOM/PRENOM -->
          <section class="modal-body pt-0 container-fluid">
            <article class="row">
              <figure class="col-12 text-center">
                <img class="rounded-circle img-fluid" src="photos/${
                  dataSupervisors[index].fisrtName
                }300.jpg"
                  alt="image de profil">
              </figure>
              <figcaption class="col-12">
                  <h3 class="text-center">${dataSupervisors[index].fisrtName} ${
      dataSupervisors[index].lastName
    }</h3>
              </figcaption>
            </article>
            <!-- 3 MOTS -->
            <section class="row">
              <article class="col-12">
                <hr class="w-50 mt-0 bg-orange-opacity">
                <h4 class="text-center">Son parcours</h4>
                <p class="text-center">${dataSupervisors[index].description}</p>
              </article>
              <article class="col-12 mx-auto">
                <h4 class="text-center">Côté wild</h4>
                <p class="text-center">
                  ${dataSupervisors[index].wild}</p>
              </article>
            </section>
          </section>
        </div>

      </div>
    </div>

    `;

    document.getElementById("Modal").appendChild(containModalSupervisors);
  }

  // Copy to Clipboard
  function CopyToClipboard(url) {
    /* Select the text field */
    url.select();
    /* Copy the text inside the text field */
    document.execCommand("copy");
  }

  $("a.copy").click(function(e) {
    e.preventDefault();
    element = $(this).prev();
    CopyToClipboard(element);
  });
});

//POPOVER

$(function() {
  $('[data-toggle="popover"]').popover();
});
