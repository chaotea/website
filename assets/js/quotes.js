const quotes = [
	"The best-laid plans of Mice and Men often go awry.",
	"Once more unto the breach, dear friends, once more!",
	"O Captain! My Captain!",
	"He was always my friend, and I have always been his.",
	"And you, my father, there on the sad height,\nCurse, bless, me now with your fierce tears, I pray.\nDo not go gentle into that good night.\nRage, rage against the dying of the light.",
	"From the heart of civilization to the edge of the world, he marched...",
	"Now cracks a noble heart. Good night, sweet prince.",
	"With the death of your brother Carloman, the prestige and honor of the Frankish kingdom falls on you. He was your rival, but now he is no more. There is still much to be done, but here begins a new chapter in the story of Charlemagne, King of the Franks.",
	"All is fair in love and war.",
	"Quoth the Raven, <i>nevermore.</i>",
	"So this is how liberty dies... with thunderous applause.",
	"Into the jaws of Death,\nInto the mouth of hell,\nRode the six hundred.",
	"The empire cracks at the seams...",
	"What did it cost?\nEverything.",
	"After all this time?\nAlways.",
	"A tomb now suffices him for whom the world was not enough.",
	"So it goes.",
	"What the caterpillar calls the end of the world, the master calls a butterfly.",
	"We who are about to die salute you.",
	"Whoever fights with monsters should see to it that he does not become a monster in the process. And when you gaze long into an abyss the abyss also gazes into you.",
	"The empire, long divided, must unite; long united, must divide. Thus it has ever been.",
	"I shall be telling this with a sigh\nSomewhere ages and ages hence:\nTwo roads diverged in a wood, and I—\nI took the one less traveled by,\nAnd that has made all the difference."
]

let seenQuotes = []

function next() {
	if (seenQuotes.length != quotes.length) {
		let index = Math.floor(Math.random() * quotes.length)
		if (seenQuotes.includes(index)) {
			next()
		} else {
			seenQuotes.push(index)
			document.getElementsByClassName("quote")[0].innerHTML = quotes[index]
			return
		}
	} else {
		seenQuotes = seenQuotes.slice(-1)
		next()
	}
}