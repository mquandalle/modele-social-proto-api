# Évaluation de Deno pour développer une API HTTP publicodes/modele-social

Pour lancer localement :

```
deno run --allow-net index.ts
```

Utilisez `--watch` pour relancer automatiquement le serveur lors d'une modification de code pendant développement.

Pour compiler un executable “livrable” (à intégrer facilement dans une Github Action, cf. [artefacts](https://docs.github.com/en/actions/advanced-guides/storing-workflow-data-as-artifacts))

```
deno compile --allow-net index.ts
```

> Ça ne fonctionne plus actuellement à cause d'un bug entre Deno et oak : https://github.com/denoland/deno/issues/12086
