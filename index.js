function executeF () {
// Get Date & Slicing It
   var birthDate = document.querySelector("#birthday").value;
   var sliceBirth = birthDate.slice(5);

// Zodiac Signs Date   
   var aries = ["03-21","04-19"];
   var taurus = ["04-20","05-20"];
   var gemini = ["05-21","06-20"];
   var cancer = ["06-21","07-22"];
   var leo = ["07-23","08-22"];
   var virgo = ["08-23","09-22"];
   var libra = ["09-23","10-22"];
   var scorpio = ["10-23","11-21"];
   var sagittarius = ["11-22","12-21"];
   var capricorn = ["12-22","12-31","01-01","01-19"];
   var aquarius = ["01-20","02-18"];
   var pisces = ["02-19","03-20"];

   var astroText;

// Comparison & Result
function forSigns () { if (sliceBirth >= aries [0] && sliceBirth <= aries [1]) {
      astroText = "The first sign of the zodiac, Aries loves to be number one. Naturally, this dynamic fire sign is no stranger to competition. Bold and ambitious, Aries dives headfirst into even the most challenging situations—and they'll make sure they always come out on top!";
      return "Aries";
   } 

   else if (sliceBirth >= taurus [0] && sliceBirth <= taurus [1]) {
      astroText = "What sign is more likely to take a six-hour bath, followed by a luxurious Swedish massage and decadent dessert spread? Why Taurus, of course! Taurus is an earth sign represented by the bull. Like their celestial spirit animal, Taureans enjoy relaxing in serene, bucolic environments surrounded by soft sounds, soothing aromas, and succulent flavors.";
      return "Taurus";
   }

   else if (sliceBirth >= gemini [0] && sliceBirth <= gemini [1]) {
      astroText = "Have you ever been so busy that you wished you could clone yourself just to get everything done? That's the Gemini experience in a nutshell. Spontaneous, playful, and adorably erratic, Gemini is driven by its insatiable curiosity. Appropriately symbolized by the celestial twins, this air sign was interested in so many pursuits that it had to double itself.";
      return "Gemini";
   }

   else if (sliceBirth >= cancer [0] && sliceBirth <= cancer [1]) {
      astroText = "Represented by the crab, Cancer seamlessly weaves between the sea and shore representing Cancer’s ability to exist in both emotional and material realms. Cancers are highly intuitive and their psychic abilities manifest in tangible spaces. But—just like the hard-shelled crustaceans—this water sign is willing to do whatever it takes to protect itself emotionally. In order to get to know this sign, you're going to need to establish trust!";
      return "Cancer";
   }

   else if (sliceBirth >= leo [0] && sliceBirth <= leo [1]) {
      astroText = "Roll out the red carpet because Leo has arrived. Passionate, loyal, and infamously dramatic, Leo is represented by the lion and these spirited fire signs are the kings and queens of the celestial jungle. They're delighted to embrace their royal status: Vivacious, theatrical, and fiery, Leos love to bask in the spotlight and celebrate… well, themselves.";
      return "Leo";
   }

   else if (sliceBirth >= virgo [0] && sliceBirth <= virgo [1]) {
      astroText = "You know the expression, 'if you want something done, give it to a busy person?' Well, that definitely is the Virgo anthem. Virgos are logical, practical, and systematic in their approach to life. Virgo is an earth sign historically represented by the goddess of wheat and agriculture, an association that speaks to Virgo's deep-rooted presence in the material world. This earth sign is a perfectionist at heart and isn’t afraid to improve skills through diligent and consistent practice.";
      return "Virgo";
   }

   else if (sliceBirth >= libra [0] && sliceBirth <= libra [1]) {
      astroText = "Balance, harmony, and justice define Libra energy. As a cardinal air sign, Libra is represented by the scales (interestingly, the only inanimate object of the zodiac), an association that reflects Libra's fixation on establishing equilibrium. Libra is obsessed with symmetry and strives to create equilibrium in all areas of life — especially when it comes to matters of the heart.";
      return "Libra";
   }

   else if (sliceBirth >= scorpio [0] && sliceBirth <= scorpio [1]) {
      astroText = "Elusive and mysterious, Scorpio is one of the most misunderstood signs of the zodiac. Scorpio is a water sign that uses emotional energy as fuel, cultivating powerful wisdom through both the physical and unseen realms. In fact, Scorpio derives its extraordinary courage from its psychic abilities, which is what makes this sign one of the most complicated, dynamic signs of the zodiac.";
      return "Scorpio";
   }

   else if (sliceBirth >= gemini [0] && sliceBirth <= gemini [1]) {
      astroText = "";
      return "Gemini";
   }

   else if (sliceBirth >= gemini [0] && sliceBirth <= gemini [1]) {
      astroText = "";
      return "Gemini";
   }

   else if (sliceBirth >= sagittarius [0] && sliceBirth <= sagittarius [1]) {
      astroText = "Oh, the places Sagittarius goes! But… actually. This fire sign knows no bounds. Represented by the archer, Sagittarians are always on a quest for knowledge. The last fire sign of the zodiac, Sagittarius launches its many pursuits like blazing arrows, chasing after geographical, intellectual, and spiritual adventures.";
      return "Sagittarius";
   }

   else if (sliceBirth >= capricorn [0] && sliceBirth <= capricorn [1]) {
      astroText = "What is the most valuable resource? For Capricorn, the answer is clear: Time. Capricorn is climbing the mountain straight to the top and knows that patience, perseverance, and dedication is the only way to scale. The last earth sign of the zodiac, Capricorn, is represented by the sea-goat, a mythological creature with the body of a goat and the tail of a fish. Accordingly, Capricorns are skilled at navigating both the material and emotional realms.";
      return "Capricorn";
   }

   else if (sliceBirth >= capricorn [2] && sliceBirth <= capricorn [3]) {
      astroText = "What is the most valuable resource? For Capricorn, the answer is clear: Time. Capricorn is climbing the mountain straight to the top and knows that patience, perseverance, and dedication is the only way to scale. The last earth sign of the zodiac, Capricorn, is represented by the sea-goat, a mythological creature with the body of a goat and the tail of a fish. Accordingly, Capricorns are skilled at navigating both the material and emotional realms.";
      return "Capricorn";
   }

   else if (sliceBirth >= aquarius [0] && sliceBirth <= aquarius [1]) {
      astroText = "Despite the 'aqua' in its name, Aquarius is actually the last air sign of the zodiac. Innovative, progressive, and shamelessly revolutionary, Aquarius is represented by the water bearer, the mystical healer who bestows water, or life, upon the land. Accordingly, Aquarius is the most humanitarian astrological sign. At the end of the day, Aquarius is dedicated to making the world a better place.";
      return "Aquarius";
   }

   else if (sliceBirth >= pisces [0] && sliceBirth <= pisces [1]) {
      astroText = "If you looked up the word 'psychic' in the dictionary, there would definitely be a picture of Pisces next to it. Pisces is the most intuitive, sensitive, and empathetic sign of the entire zodiac — and that’s because it’s the last of the last. As the final sign, Pisces has absorbed every lesson — the joys and the pain, the hopes and the fears — learned by all of the other signs. It's symbolized by two fish swimming in opposite directions, representing the constant division of Pisces' attention between fantasy and reality.";
      return "Pisces";
   }


}
document.querySelector(".imageDIV").classList.add("backPanel")
document.getElementById("astimage").src="./images/" + forSigns() + ".png";
document.querySelector("h2").innerHTML = forSigns();
document.querySelector("h3").innerHTML = "Your Zodiac Sign";
document.querySelector("p").innerHTML = astroText;
}

