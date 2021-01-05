const Menu = require("../../models/menu");
function homeController() {
  return {
    async index(req, res) {
      const pizzas = await Menu.find();
      return res.render("home", {
        title: "Realtime Pizza App",
        pizzas: pizzas,
      });
    },
  };
}

module.exports = homeController;
