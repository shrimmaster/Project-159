AFRAME.registerComponent("info-banner", {
  schema: {
    itemId: { default: "", type: "string" },
  },
  update: function () {
    this.createBanner();
  },
  createBanner: function () {
    postersInfo = {
      superman: {
        banner_url: "./assets/posters/anime1.jpg",
        title: "Anime : Demon Slayer",
        released_year: "2018",
        description:
          "Demon Slayer: Kimetsu no Yaiba is a comic book based on the manga series of the same title, written and illustrated by Koyoharu Gotouge. The anime television series adaptation by studio Ufotable was announced in Weekly Shōnen Jump",
      },
      spiderman: {
        banner_url: "./assets/posters/spiderman1.webp",
        title: "Spiderman",
        released_year: "1962",
        description:
          "Spider-Man is a fictional superhero created by writer-editor Stan Lee and writer-artist Steve Ditko. He first appeared in the anthology comic book Amazing Fantasy (Aug. 1962) in the Silver Age of Comic Books.",
      },
      "merlin": {
        banner_url: "./assets/posters/merlin1.jpg",
        title: "Adventures of Merlin",
        released_year: "2008",
        description:
          "This action-packed fantasy-drama revisits the saga of King Arthur and his wizard, Merlin, by focusing on the two characters when they were ambitious young men struggling to understand their destinies. In this telling, Prince Arthur is known to be the heir to the throne (no sword from the stone here). And he is acquainted with all those who will one day form the legend of Camelot, including Lancelot, Guinevere, and Morgana. Merlin is also forced to deal with King Uther's Great Purge, which bans all use of magic.",
      },
      "fate": {
        banner_url: "./assets/posters/fate1.jpg",
        title: "Fate The winx Saga",
        released_year: "2020",
        description:
          "Fairies attend a magical boarding school in the Otherworld, where they must learn to master their magical powers while navigating love, rivalries and the monsters that threaten their very existence.",
      },
    };
    const { itemId } = this.data;

    const fadeBackgroundEl = document.querySelector("#fadeBackground");

    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("id", `${itemId}-banner`);

    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 0.9,
      height: 1,
    });

    entityEl.setAttribute("material", { color: "#000" });
    entityEl.setAttribute("position", { x: 0, y: 0.1, z: -1 });

    const item = postersInfo[itemId];

    const imageEl = this.createImageEl(item);
    const titleEl = this.createTitleEl(item);
    const descriptionEl = this.createDescriptionEl(item);

    entityEl.appendChild(imageEl);
    entityEl.appendChild(titleEl);
    entityEl.appendChild(descriptionEl);

    fadeBackgroundEl.appendChild(entityEl);
  },
  createImageEl: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 0.85,
      height: 0.4,
    });
    entityEl.setAttribute("material", { src: item.banner_url });
    entityEl.setAttribute("position", { x: 0, y: 0.3, z: 0.05 });
    return entityEl;
  },
  createTitleEl: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("text", {
      shader: "msdf",
      anchor: "left",
      font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
      width: 1.2,
      height: 2,
      color: "#fff",
      value: `${item.title} (${item.released_year})`,
    });
    entityEl.setAttribute("position", { x: -0.4, y: 0.02, z: 0.05 });
    return entityEl;
  },
  createDescriptionEl: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("text", {
      shader: "msdf",
      anchor: "left",
      font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
      width: 0.75,
      height: 2,
      color: "#fff",
      wrapCount: "40",
      value: item.description,
    });
    entityEl.setAttribute("position", { x: -0.4, y: -0.24, z: 0.05 });
    return entityEl;
  },
});
