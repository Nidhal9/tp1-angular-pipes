# TP1 Angular - Manipulation des Pipes

## Auteur
Nidhal

## Description
TP sur les pipes Angular : pipes intégrés et pipe personnalisé.

## Pipes utilisés
- uppercase / lowercase / titlecase
- date
- currency (EUR, TND)
- percent
- number (DecimalPipe)
- json
- slice
- chaînage de pipes

## Pipe personnalisé
**ResumePipe** : résume un texte avec "..."
- `{{ message | resume:5 }}` → "angul..."

## Lancer l'application
```bash
ng serve