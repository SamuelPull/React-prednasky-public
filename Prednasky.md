# REACT

## React intro

JavaScript kniznica na vytvaranie user interfacov (UIs).

Facebook, Instagram, Netflix, WhatsApp, Dropbox ...

## Aktivita: Rozbehanie pracovneho prostredia

* [ ] Visual Studio Code (<https://code.visualstudio.com/>)
* [ ] Node.js + NPM (<https://nodejs.org/en/download/>)
* [ ] Chrome + React developer tools
* [ ] React boilerplate: Aktivita 1-1

## Prednasky, materialy, kod, ulohy, riesenia

Budeme postupne pridavat do tohoto public repa.

* `https://github.com/SamuelPull/React-prednasky-public`

## Aktivita 1-1: (<https://create-react-app.dev/docs/getting-started>)

1. `npx create-react-app hello-react-world`
2. `cd hello-react-world`
3. `yarn start`


## JSX

JSX je syntakticke rozsirenie JavaScriptu, ktore sa podoba na HTML.

// Vytvorte JSX element s nazvom 'element',
// ktory obsahuje nasledovne prvky:
// - h1 -> Name: meno
// - p -> Town: mesto
// - p -> Animal: oblubene zviera
// - p -> Food: oblubene jedlo

const element = (
  <div>
    <h1>Name: Samuel</h1>
    <p>Town: Bratislava</p>
    <p>Animal: dogs</p>
    <p>Food: Hamburger</p>
  </div>
)

