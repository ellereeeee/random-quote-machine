$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
}); //initializes tool tip over tweet button

var quotes = 
         ['I don\'t want to earn my living; I want to live. - Oscar Wilde',
          'The trouble is you think you have time. - Buddha',
          'You get what you settle for. - Anonymous',
          'The best way out is always through. - Robert Frost',
          'It does not matter how slowly you go as long as you do not stop. - Confucius',
          'It is never too late to be what you might have been - Anonymous',
          'We become what we think about. - Earl Nightingale',
          'The fool doth think he is wise, but the wise man knows himself to be a fool. - William Shakespeare',
          'There is no greater agony than bearing an untold story inside of you. - Maya Angelou',
          'Life isn\'t about finding your self.  Life is about creating yourself. - George Bernard Shaw',
          'Not all those who wander are lost. - J.R.R. Tolkien',
          'Knowing yourself is the beginning of all wisdom. - Aristotle',
          'The world is not a wish granting factory. - John Green',
          'Maybe our favorite quotations say more about us than about the stories and people we\'re quoting. - John Green',
          'Do what you feel in your heart to be right – for you’ll be criticized anyway. - Eleanor Roosevelt',
          'Everyone thinks of changing the world, but no one thinks of changing himself. - Leo Tolstoy',
          'A good friend will always stab you in the front. - Oscar Wilde',
          'In the depth of winter, I finally learned that within me there lay an invincible summer. - Albert Camus',
          'You talk when you cease to be at peace with your thoughts. - Kahlil Gibran',
          'Do what you can, with what you have, where you are. - Theodore Roosevelt',
          'You must do the thing you think you cannot do. - Eleanor Roosevelt',
          'Believe you can and you\'re halfway there. - Eleanor Roosevelt',
          'May you live everyday of your life. - Jonathan Swift',
          'The obstacle is the path. - Zen Proverb',
          'Whatever you are, be a good one. - Abraham Lincoln',
          'Do not dwell on the past, do not dream of the future, concentrate the mind on the present moment. - Buddha',
          'It has been my philosophy of life that difficulties vanish when faced boldly. - Isaac Asimov',
           'We are what we repeatedly do.  Excellence, then, is not an act, but a habit. - Aristotle',
         'Everybody has a plan until they get punched in the mouth. - Mike Tyson',
         'If you\'re going through hell, keep going. - Winston Churchill',
          'You miss 100 percent of the shots you never take. - Wayne Gretzky',
          'You know what the true definition of hell is?  It\'s when you die, you get to meet the person you could have been. - Frank Mir',
          'Success isn\'t owned.  It\'s leased and the rent is due everyday. - JJ Watt',
          'It is raining and it will continue to rain until the rain is done. - Gandalf',
          'Do not go gentle into that good night.  Rage, rage against the dying of the light. - Dylan Thomas',
          'The master has failed more times than the beginner has even tried. - Stephen McCranie',
          'How lucky am I have to have something that makes saying goodbye so hard. - Winnie the Pooh',
          'If you can\'t explain it simply, you don\'t understand it well enough. - Albert Einstein',
          'I may not have gone where I intended to go, but I think I ended up where I needed to be. - Douglas Adams',
          'I\'ve held it in my hands.  My dismembered soul reassembles. - Veil of Maya',
          'On the other side of fear is everything you\'ve ever wanted. - Someone',
          'Let me never fall into the vulgar mistake of dreaming that I am persecuted whenever I am contradicted. - Emerson',
          'Your effort to remain what you are is what limits you. - Ghost in the Shell',
          'There are three things all wise men fear: the sea in storm, a night with no moon, and the anger of a gentle man. - Patrick Rothfuss',
          'Having a soft heart in a cruel world is courage, not weakness. - Someone',
          'The world is a book and those who do not travel read only one page. - St. Augustine',
          'It is possible to commit no mistakes and still lose.  That is not a weakness, that is life. - Captain Picard',
          'In the beginning the Universe was created.  This has made a lot of people angry and been widely regarded as a bad move. - Douglas Adams',
          'Comparison is the thief of joy. - Theodore Roosevelt',
          'We only know ourselves to the extent that we have been tested. - Wislawa Szymborska',
          'The best time to plant a tree was 20 years ago.  The second best time is now. - Chinese Proverb',
          'Begin while others are procrastinating.  Work while others are wishing. - William Arthur Ward',
          'Just because you are offended doesn\'t meant you are right. - Ricky Gervais',
          'No man has a right to be an amateur in the matter of physical training.  It is a shame for a man to grow old without seeing the beauty and strength of which his body is capable. - Socrates',
          'There is no good or bad, but thinking makes it so. - Hamlet',
          'The person that you will spend the most time with in your life is yourself, so try to make yourself as interesting as possible. - Someone']

function randomQuote() {
  var quoteAndAuthor = quotes[Math.floor(Math.random() * quotes.length)].split('-');
  console.log(quoteAndAuthor);
  document.getElementById("printQuote").innerHTML = quoteAndAuthor[0];
  document.getElementById("printAuthor").innerHTML = "-" + quoteAndAuthor[1];
} //returns a random quote and splits into an array (quote and author) so I can separately edit the text and spacing of the quote and author


function tweet() {
  window.open("https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + document.getElementById("printQuote").innerHTML + document.getElementById("printAuthor").innerHTML)
}