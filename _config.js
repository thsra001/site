import lume from "lume/mod.ts";
import sass from "lume/plugins/sass.ts";

const site = lume();
site.copy("assets2");
site.copy("assets3");
site.copy("404.html")
site.use(sass());

export default site;
