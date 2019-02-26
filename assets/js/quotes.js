var seenQuotes = []

function next() {
	if (seenQuotes.length != quotes.length) {
		let index = Math.floor(Math.random() * quotes.length)
		if (seenQuotes.includes(index)) {
			next()
		} else {
			seenQuotes.push(index)
			document.getElementsByClassName("quote")[0].innerHTML = quotes[index].quote
			document.getElementsByClassName("source")[0].innerHTML = quotes[index].source
			return
		}
	} else {
		seenQuotes = seenQuotes.slice(-1)
		next()
	}
}

const quotes = [
	{
		quote: "Once more unto the breach, dear friends, once more!",
		source: "<i>Shakespeare,</i> Henry V"
	},
	{
		quote: "The best-laid plans of Mice and Men often go awry.",
		source: "<i>Robert Burns,</i> To a Mouse"
	},
	{
		quote: "O Captain! My Captain!",
		source: "<i>Walt Whitman</i>"
	},
	{
		quote: "He was always my friend, and I have always been his.",
		source: "<i>Harry S. Truman</i>"
	},
	{
		quote: "And you, my father, there on the sad height,\nCurse, bless, me now with your fierce tears, I pray.\nDo not go gentle into that good night.\nRage, rage against the dying of the light.",
		source: "<i>Dylan Thomas</i>"
	},
	{
		quote: "Within his veins flows the same strength that subjugated Egypt, the same genius that cracked Babylon, the same ambition that led one man to travel from the heart of civilization to the edge of the world...",
		source: "<i>Anonymous,</i> on Alexander the Great"
	},
	{
		quote: "Now cracks a noble heart. Good night, sweet prince...",
		source: "<i>Shakespeare,</i> Hamlet"
	},
	{
		quote: "All is fair in love and war.",
		source: "<i>John Lyly</i>"
	},
	{
		quote: "So this is how liberty dies... with thunderous applause.",
		source: "<i>Padmé Amidala</i>"
	},
	{
		quote: "Into the jaws of Death,\nInto the mouth of hell,\nRode the six hundred.",
		source: "<i>Alfred, Lord Tennyson</i>"
	},
	{
		quote: "What did it cost?\nEverything.",
		source: "<i>Thanos</i>"
	},
	{
		quote: "After all this time?\nAlways.",
		source: "<i>Severus Snape</i>"
	},
	{
		quote: "A tomb now suffices him for whom the world was not enough.",
		source: "<i>Gravestone of Alexander the Great</i>"
	},
	{
		quote: "What the caterpillar calls the end of the world, the master calls a butterfly.",
		source: "<i>Richard Bach</i>"
	},
	{
		quote: "We who are about to die salute you.",
		source: null
	},
	{
		quote: "Whoever fights monsters should see to it that in the process he does not become a monster. For when you gaze long into an abyss, the abyss will gaze back into you.",
		source: "<i>Nietzsche</i>"
	},
	{
		quote: "The empire, long divided, must unite; long united, must divide. Thus it has ever been.",
		source: "<i>Romance of the Three Kingdoms</i>"
	},
	{
		quote: "I shall be telling this with a sigh\nSomewhere ages and ages hence:\nTwo roads diverged in a wood, and I—\nI took the one less traveled by,\nAnd that has made all the difference.",
		source: "<i>Robert Frost,</i> The Road Not Taken"
	},
	{
		quote: "Our greatest glory is not in never falling, but in rising every time we fall.",
		source: "<i>Confucius</i>"
	},
	{
		quote: "Ask not what your country can do for you—ask what you can do for your country",
		source: "<i>John F. Kennedy</i>"
	},
	// {
	// 	quote: "Quoth the Raven, <i>Nevermore.</i>",
	// 	source: "<i>Edgar Allan Poe</i>"
	// },
	// {
	// 	quote: "So it goes.",
	// 	source: "<i>Kurt Vonnegut,</i> Slaughterhouse-Five"
	// },
	// {
	// 	quote: "With the death of your brother Carloman, the prestige and honor of the Frankish kingdom falls on you. He was your rival, but now he is no more. There is still much to be done, but here begins a new chapter in the story of Charlemagne, King of the Franks.",
	// 	source: null
	// },
	// {
	// 	quote: "The empire cracks at the seams...",
	// 	source: null
	// },
]