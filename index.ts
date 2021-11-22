import Publicodes from "https://unpkg.com/publicodes@next/esm/index.min.js";
import modeleSocial from "https://cdn.skypack.dev/modele-social";
import {
  Application,
  Router,
  helpers,
} from "https://deno.land/x/oak@v10.0.0/mod.ts";

const engine = new Publicodes(modeleSocial);

const router = new Router();
router
  .get("/", ({ response }) => {
    response.headers.set("Content-Type", "text/html; charset=utf-8");
    response.body = `Bienvenue dans le futur !<br /><br />
    Exemple d'utilisation:<br />
    <a href="/api/salaire?brut=2000">2000€ brut ça fait combien en net ?</a>`;
  })
  .get("/api/salaire", (context) => {
    const { brut } = helpers.getQuery(context);
    if (brut) {
      engine.setSituation({
        "contrat salarié . rémunération . brut": brut,
      });
      const ruleNet = "contrat salarié . rémunération . net";
      const net = engine.evaluate(ruleNet);
      context.response.body = { [ruleNet]: net.nodeValue };
    } else {
      context.response.status = 400;
      context.response.body = "Erreur: précisez le salaire brut";
    }
  });

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });
