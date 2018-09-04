
// Below code segments were obtained from the Week 7 Lecture Content
var express = require('express');
var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 3737);      // Using port 3737 for my flip3 address
app.use(express.static('views'));

app.get('/', function(req, res){
  res.render('index')
});

app.get('/restaurants', function(req,res){
  var pageName = 'restaurants';
  var cardItems = [];
  cardItems.push({'name' : 'Franklin BBQ',
                  'website' : 'https://franklinbbq.com/',
                  'address' : '900 E 11th St, Austin, TX 78702',
                  'phone' : '(512) 653-1187',
                  'mobilelink' : '+1-512-653-1187',
                  'summary' : 'Franklin BBQ has risen from its once humble trailer origins to one of the country’s most talked-about barbecue destinations.  Unfortunately, it’s currently closed due to fire damage caused by the aftermaths of Hurricane Harvey but it will soon reopen.  Some consider this the best place for brisket and ribs in the entire city, maybe even the country.  Because of that there’s always a line that stretches around the block.  Trust me when I say, it’s worth the wait.',
                  'image' : 'franklinsbbq.jpg',
                  'googlemap' : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.8399199613164!2d-97.73345988487958!3d30.270141981800784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b5a4ae3bcc33%3A0x31aba8abf8f64c84!2sFranklin+Barbecue!5e0!3m2!1sen!2sus!4v1510189980126'
                });

  cardItems.push({
                  'name' : 'East Side King Thai Kun Trailer',
                  'website' : 'http://thaikun.com/',
                  'address' : '11601 Rock Rose, Austin, TX 78758',
                  'phone' : '(512) 719-3332',
                  'mobilelink' : '+1-512-719-3332',
                  'summary' : 'Food trucks are an important staple in Austin’s culinary scene.  Here, getting food out of a truck doesn’t mean hotdogs or pizza.  Places like East Side King are changing the game with their Thai-inspired meals.  Putting creative twists on dishes like beef panang curry, beet home fries, and Thai Chicken Karaage. There’s a trailer out on the back patio of The Liberty (Personally, my favorite bar) and a brick and mortar store on the drag over by the University of Texas.  Stop by and grab a delicious bite to eat with your cocktails.',
                  'image' : 'eastsidekings.jpg',
                  'googlemap' : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27529.74682287957!2d-97.73992426044921!3d30.401546199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644cc71e84930b7%3A0xdc43245f0a437d05!2sEast+Side+King+Thai+Kun!5e0!3m2!1sen!2sus!4v1510190049363'
                });

  cardItems.push({
                  'name' : 'La Barbecue',
                  'website' : 'https://www.labarbecue.com/',
                  'address' : '2027 East Cesar Chavez Street, Austin, TX 78702',
                  'phone' : '(512) 605-9696',
                  'mobilelink' : '+1-512-605-9696',
                  'summary' : 'In my humble opinion, in a city that boasts an abundance of great barbecue places, La Barbecue is arguably the best.  Even better than Franklin (there, I said it).  Originally a food truck on East Cesar Chavez, it has since moved itself into an actual building (right across the street from the original location.)  Yes, there will be a line between you and your meal, but where there’s great BBQ, crowds tend to follow.  As an added bonus, it shares a space with Quickie Pickie so the beer selection is pretty extraordinary.',
                  'image' : 'labbq.jpg',
                  'googlemap' : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3446.331123643456!2d-97.7245338844421!3d30.25614531549484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b5b5aaaaaaab%3A0x7d2f18874dccadde!2sLa+Barbecue!5e0!3m2!1sen!2sus!4v1510190126257'
                });

  cardItems.push({
                  'name' : 'Uchi',
                  'website' : 'https://uchiaustin.com/',
                  'address' : '801 South Lamar￼ ￼Boulevard, Austin, TX 78704',
                  'phone' : '(512) 916-4808',
                  'mobilelink' : '+1-512-916-4808',
                  'summary' : 'If you’ve got a bunch of extra money just burning a hole in your pocket and you’re looking to try a new twist on sushi, drop in to Uchi on South Lamar.  While attempting to add a new flair to the sushi spectrum, they also maintain a loyalty to the more traditional style.  The happy hour here is one of the best in Austin as well.',
                  'image' : 'uchi.jpg',
                  'googlemap' : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3446.28310730027!2d-97.76195998487988!3d30.257513781805283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b51ecba165cf%3A0x6c41be37669e60ee!2sUchi!5e0!3m2!1sen!2sus!4v1510190168151'
                });

  cardItems.push({
                  'name' : 'Hopdoddy Burger Bar',
                  'website' : 'https://www.hopdoddy.com/',
                  'address' : '1400 S Congress Ave, Austin, TX 78704',
                  'phone' : '(512) 243-7505',
                  'mobilelink' : '+1-512-243-7505',
                  'summary' : 'Hoppdoddy Burger Bar has some of the best burgers I’ve ever had in my entire life (No Joke).  It was the first place I ate after moving to Austin and has remained a favorite ever since.  They have several locations throughout town, but the original is located on South Congress.  All of the ingredients are locally sourced and fresh.  As with all great things in Austin, it\’s generally a bit busy, but well worth the wait',
                  'image' : 'hopdoddy.png',
                  'googlemap' : 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d110238.52893333243!2d-97.76494175904406!3d30.29537031214438!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b4fcffeabf2b%3A0xfd38859243fed803!2sHopdoddy+Burger+Bar!5e0!3m2!1sen!2sus!4v1511105387383'
                });

  sendParameters(cardItems, res, pageName);
});

app.get('/venues', function(req,res){
  var pageName = 'venues';
  var cardItems = [];
  cardItems.push({'name' : 'Stay Gold',
                  'website' : 'http://staygoldaustin.com/',
                  'address' : '1910 E Cesar Chavez St, Austin, TX 78702',
                  'summary' : 'If you’re looking to get off sixth street, but not stray too far, you should stop by Stay Gold.  It’s a cool bar a few blocks south on East Cesar Chavez.  Every night there’s always a performance up on stage.  Sometimes it’s a comedian working a set.  Sometimes it’s a jazz band letting the brass and the strings go wild.  The bar servers a great selection of beer, but what you’re really here for are the cocktails.  Fan favorites include the Diane Lane (Barr Hill gin, rosemary, grapefruit) and the Keyser Söze (Effen cucumber vodka, lime, pineapple, simple syrup, Hellfire bitters, Trechas chili powder rim).  As an added benefit, Stay Gold is surrounded by amazing food trucks including Toaster in their very own patio.',
                  'image' : 'staygold.jpg'
                });

  cardItems.push({'name' : 'Rio Rita',
                  'website' : 'http://www.riorita.net/',
                  'address' : '1203 Chicon St, Austin, TX 78702',
                  'summary' : 'Rio Rita is an Austin classic.  My brother and I stopped in there on my first night in town and I immediately fell in love with its quaint charm.  During the day, it’s a weird little coffee shop that plays old records and servers caffeinated beverages.  At night it becomes a weird little bar that plays old records and serves alcoholic beverages.  They tend to take their spirits and infuse them with some rather off the wall flavors.  Take you friends there and get a bloody marry.  Take people you hate there and get a shot of habanero and garlic infused vodka',
                  'image' : 'riorita.jpg'
                });

  cardItems.push({'name' : 'White Horse',
                  'website' : 'https://www.thewhitehorseaustin.com/',
                  'address' : '500 Comal St, Austin, TX 78702',
                  'summary' : 'Austin’s still in Texas, so it has an abundance of two-stepping, honky-tonk bars.  The White Horse is a great place to catch a band playing country, jazz, bluegrass, swing, conjunto, zydeco, or honky-tonk up on the red velvet-clad stage.  The bar slings your standard cheap beer and whisky, so order a Two Step (Lone Star beer and whiskey shot) and get your boots moving out on the dance floor.',
                  'image' : 'whitehorse.jpg'
                });

  cardItems.push({'name' : 'Stubb\'s Bar-B-Q',
                  'website' : 'https://www.stubbsaustin.com/',
                  'address' : '801 Red River St, Austin, TX 78701',
                  'summary' : 'On the outside, Stubb\’s looks like just another great barbecue joint, but don’t be fooled.  Inside and around back are two stages where some very major bands have played and recorded.  The outdoor stage is large and is generally reserved for festivals and big acts on tour.  However, it\’s the inside stage that makes Stubb\’s special.  There\’s nothing quite like seeing Metallica live in a room that generally only accommodates about 100 people.  Also, the Barbecue is actually pretty good too (reoccurring theme of Austin).',
                  'image' : 'stubbs.jpg',
                });

  cardItems.push({'name' : 'The Continental Club',
                  'website' : 'http://continentalclub.com/',
                  'address' : '1315 S Congress Ave, Austin, TX 78704',
                  'summary' : 'Down on South Congress there\’s a bar that capitalizes on nostalgia for the halcyon age of rock ’n’ roll in Austin.  The patrons here love their rockabilly and their rides, which shows from the line of muscle cars and hot-rods that line the streets out in front of the bar.  Slick your hair back like Elvis and let those hips shake to the music of a good swing band.  Bonus accolades, The Continental Club was once named one of the best bars in the country by Playboy Magazine.',
                  'image' : 'continentalclub.jpg'
                });

  cardItems.push({'name' : 'Paramount Theatre',
                  'website' : 'http://www.austintheatre.org/',
                  'address' : '713 Congress Ave, Austin, TX 78701',
                  'summary' : 'The Paramount Theatre is widely regarded as one of the best indoor live music venue in Austin, offering amazing production quality for artists and consumers.  Located on Congress avenue just a few blocks south of the capital building, the paramount sits right in the heart of downtown.  The Paramount hosts some of the best comedy and music shows in the city.',
                  'image' : 'paramount.jpg',
                });

  sendParameters(cardItems, res, pageName);
});


app.get('/pictures', function(req,res){
  var pageName = 'pictures';
  var cardItems = [];
  cardItems.push({'image' : 'austinbat.jpg'});
  cardItems.push({'image' : 'artpark.jpg'});
  cardItems.push({'image' : 'austingirl.jpg'});
  cardItems.push({'image' : 'butterhalf.jpg'});
  cardItems.push({'image' : 'Iloveyousign.jpg'});
  cardItems.push({'image' : 'hiHowAreYou.jpg'});
  cardItems.push({'image' : 'austinmetro.jpg'});
  cardItems.push({'image' : 'bobbullock.jpg'});
  cardItems.push({'image' : 'spacepizza.jpg'});
  cardItems.push({'image' : 'tildeath.jpg'});
  cardItems.push({'image' : 'willie.jpg'});
  cardItems.push({'image' : 'zilker.jpg'});

  sendParameters(cardItems, res, pageName);
});

app.get('/videos', function(req,res){
  var pageName = 'videos';
  var cardItems = [];
  cardItems.push({'video1' : 'https://player.vimeo.com/video/75772766',
                  'video2' : 'https://player.vimeo.com/video/179032956?title=0&byline=0&portrait=0',
                });

  cardItems.push({'video1' : 'https://player.vimeo.com/video/122900938',
                  'video2' : 'https://player.vimeo.com/video/81096893',
                });

  cardItems.push({'video1' : 'https://player.vimeo.com/video/87566725',
                  'video2' : 'https://player.vimeo.com/video/73514343',
                });

  sendParameters(cardItems, res, pageName);
});

app.get('/extras', function(req,res){
  var pageName = 'extras';
  var cardItems = [];

  cardItems.push({'name' : 'The Offical Website of the City of Austin',
                  'website' : 'http://www.austintexas.gov/',
                });

  cardItems.push({'name' : 'Do512: Do Awesome Stuff In Austin',
                  'website' : 'http://do512.com/',
                });

  cardItems.push({'name' : 'Everything Austin Reddit',
                  'website' : 'https://www.reddit.com/r/Austin/',
                });

  cardItems.push({'name' : 'SXSW Conferences & Festivals',
                  'website' : 'https://www.sxsw.com/',
                });

  cardItems.push({'name' : 'Austin City Limits',
                  'website' : 'http://acltv.com/',
                });

  cardItems.push({'name' : 'The Austin Chronicle',
                  'website' : 'https://www.austinchronicle.com/',
                });

  cardItems.push({'name' : 'The University of Texas at Austin',
                  'website' : 'https://www.utexas.edu/',
                });

  cardItems.push({'name' : 'CapMetro Austin Public Transit',
                  'website' : 'https://www.capmetro.org/',
                });

  sendParameters(cardItems, res, pageName);
});

function sendParameters(cardItems, res, pageName) {
    var context = {};
    context.dataList = cardItems;
    res.render(pageName, context);
}

// Below code segments were obtained from the Week 7 Lecture Content
// 404 Page not found error handler
app.use(function(req,res){
 res.status(404);
 res.render('404');
});

// 500 Server Error handler
app.use(function(err, req, res, next){
 console.error(err.stack);
 res.type('plain/text');
 res.status(500);
 res.render('500');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port'));
});
