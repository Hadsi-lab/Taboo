# Don't Say It!

A pass-the-phone word guessing game for the family. One player describes the word on the card while everyone else guesses, and the describer can't say any of the "danger words" listed under it. Works in any phone browser (iPhone or Android), with nothing to install.

## Playing

- **Every player for themselves** (2–10 players): when someone guesses right, the describer taps that person's name. The describer and the guesser each get a point.
- **Two teams** (2–6 players per team): the describer's team gets a point for each word. The other team watches over the describer's shoulder and shouts "Buzz!" if a danger word slips out.
- Time per turn: anywhere from 15 seconds to 5 minutes, in 15-second steps. Choose **Same for everyone**, or **Set for each player** to give younger players more time.
- Settings: 1–8 rounds, skip limits, and an optional −1 point for saying a danger word.
- Danger words: Easy (3), Medium (4) or Hard (5). Choose **Same for everyone** to use one level for the whole game, or **Set for each player** to give each player their own level.
- At the end of each turn you can tap any word to fix its result before the scores are saved.
- A game in progress is saved on the phone, so you can close the browser and pick up where you left off.
- The deck has 361 cards. Cards you've already played are kept to the back of the deck for later games.

## Running it

`index.html` is a self-contained page. Host the repository on any static host (for example GitHub Pages), open it on the phone, then use **Add to Home Screen** (Safari share menu on iPhone, or the ⋮ menu in Chrome on Android). It then opens full screen and works offline.

## Editing

- Words live in `src/cards.js` (one card per line: `Word|danger1,danger2,danger3,danger4,danger5`).
- The page lives in `src/game.html`.
- After changing either one, run `node tools/build.js` to regenerate `index.html`, then `node tools/check-cards.js src/cards.js` to check the deck for duplicates and danger words that overlap the target word.
