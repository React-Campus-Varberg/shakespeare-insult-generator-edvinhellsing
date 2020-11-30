# Övning

> *Have you no wit, manners, nor honesty but to gabble like tinkers at this time of night? - Twelfth Night*

I denna övning ska du få bygga en sida som loopar ut 10 förolämpningar från Shakespeare och visar dessa för användaren.
En "sick burn" från Shakespeare ger en bra start på dagen!

Du ska ha två komponenter en klasskomponent som håller alla förolämpningar och en 
funktionell komponent som visar förolämpningen.

Skapa ett objekt för varje förolämpning som har två egenskaper. Den första som heter **insult** som innehåller en sträng med förolämpningen och den andra som heter **play** med pjäsen namn. Lägg sedan alla objekt i en array som sedan ska läggas till i ditt state.

**Extra utmaning:** Lägg till en komponent där en användare kan lägga till en komponent och som uppdaterar ditt state.

Tips på typsnitt: [MedievalSharp](https://fonts.google.com/specimen/MedievalSharp)
				[IM Fell English SC](https://fonts.google.com/specimen/IM+Fell+English+SC)

## Förolämpningar

Were such things here as we do speak about? Or have we eaten on the insane root That takes the reason prisoner? - Macbeth

Never hung poison on a fouler toad - Richard III

He thinks too much: such men are dangerous. - Julius Ceasar 

Thou calledst me a dog before thou hadst a cause. But since I am a dog, beware my fangs. - The Merchant of Venice 

Give me your hand...I can tell your fortune. You are a fool. - The Two Noble Kinsmen

He smells like a fish, a very ancient and fish-like smell, a kind of not-of-the-newest poor-John. A strange fish! - The Tempest

It is a tale Told by an idiot, full of sound and fury, Signifying nothing. - Macbeth

Alas, poor heart, that kiss is comfortless As frozen water to a starved snake. - Titus Andronicus

He hath eaten me out of house and home; he hath put all substance into that fat belly of his. - Henry IV, Part 2

Out, you green-sickness carrion! Out, you baggage! You tallow-face! - Romeo and Juliet

# Instruktioner för utvecklingsmiljön

Detta kräver att du har installerat **node** och **npm**. Du kan ladda ner det [här](https://nodejs.org/en/).

I terminalen kör:
```
npm install
````

Efter det kör:

```
npm run serve
````

Det kommer köra igång en utvecklingserver som kollar efter förändringar du kör i dina HTML, CSS och JS filer. Vi kommer diskutera detta lite längre fram men nu fokuserar vi enbart på koden till och börja med.