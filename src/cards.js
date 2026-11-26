// Word deck for Don't Say It!
// One card per line: TARGET|danger1,danger2,danger3,danger4,danger5
// Easy mode shows the first 3 danger words, Normal shows all 5.
const CARDS_RAW = `
Elephant|trunk,big,grey,ears,Africa
Giraffe|neck,tall,spots,Africa,leaves
Penguin|bird,ice,black,white,waddle
Kangaroo|jump,Australia,pouch,joey,hop
Koala|Australia,tree,eucalyptus,bear,sleep
Shark|fish,teeth,ocean,fin,bite
Octopus|eight,arms,ocean,ink,tentacles
Snake|slither,hiss,venom,long,reptile
Owl|bird,night,hoot,wise,eyes
Bee|honey,buzz,sting,yellow,flower
Spider|web,eight,legs,bug,scary
Dolphin|ocean,smart,swim,mammal,fin
Monkey|banana,tree,swing,tail,zoo
Lion|king,roar,mane,cat,jungle
Zebra|stripes,horse,black,white,Africa
Crocodile|teeth,reptile,river,snap,swamp
Butterfly|wings,caterpillar,colourful,insect,flower
Turtle|shell,slow,reptile,swim,sea
Frog|green,jump,pond,tadpole,croak
Platypus|duck,bill,Australia,eggs,mammal
Wombat|Australia,dig,burrow,marsupial,cube
Emu|bird,Australia,run,fly,tall
Kookaburra|bird,laugh,Australia,tree,gum
Unicorn|horn,horse,magic,rainbow,pretend
Dragon|fire,wings,breathe,scales,castle
Dinosaur|extinct,T-Rex,fossil,old,big
Bat|night,fly,cave,vampire,wings
Pig|oink,farm,pink,mud,bacon
Cow|milk,moo,farm,beef,udder
Chicken|egg,farm,cluck,bird,rooster
Horse|ride,saddle,gallop,neigh,pony
Rabbit|bunny,ears,carrot,hop,Easter
Cat|meow,pet,purr,kitten,whiskers
Dog|bark,pet,puppy,woof,bone
Hamster|pet,wheel,small,cage,rodent
Goldfish|pet,bowl,orange,swim,water
Whale|ocean,big,blue,mammal,spout
Jellyfish|sting,ocean,see-through,tentacles,blob
Parrot|bird,talk,colourful,pirate,feathers
Squirrel|nuts,tree,tail,acorn,rodent
Polar Bear|white,Arctic,ice,snow,cold
Camel|desert,hump,ride,sand,water
Snail|slow,shell,slime,garden,slug
Ant|small,insect,colony,picnic,queen
Mosquito|bite,itch,buzz,insect,blood
Wolf|howl,moon,dog,pack,grey
Fox|red,tail,sly,cunning,dog
Peacock|feathers,bird,colourful,tail,proud
Lobster|red,claws,sea,crab,seafood
Crab|claws,sideways,beach,shell,pinch
Seagull|bird,beach,chips,steal,squawk
Gorilla|ape,big,monkey,jungle,chest
Panda|black,white,bear,China,bamboo
Tiger|stripes,orange,cat,roar,jungle
Cheetah|fast,spots,cat,run,Africa
Hippo|big,river,Africa,mouth,water
Rhino|horn,grey,Africa,big,charge
Sloth|slow,tree,lazy,hang,sleep
Worm|dirt,wiggle,fishing,garden,long
Pizza|cheese,Italian,slice,pepperoni,dough
Ice Cream|cold,cone,scoop,dessert,vanilla
Chocolate|sweet,brown,candy,cocoa,bar
Hamburger|bun,beef,patty,cheese,fast food
Spaghetti|pasta,noodles,Italian,meatballs,sauce
Banana|yellow,fruit,peel,monkey,split
Apple|fruit,red,green,tree,pie
Popcorn|movie,butter,snack,kernels,salty
Pancake|breakfast,syrup,flat,flip,batter
Sandwich|bread,lunch,ham,cheese,toast
Birthday Cake|candles,party,icing,blow,wish
Carrot|orange,vegetable,rabbit,crunchy,root
Watermelon|fruit,seeds,green,red,summer
Sausage|barbecue,bread,sizzle,meat,snag
Vegemite|toast,black,spread,Australian,salty
Lemon|sour,yellow,fruit,juice,citrus
Egg|chicken,yolk,shell,breakfast,boil
Cheese|mouse,yellow,milk,cheddar,slice
Toast|bread,butter,crunchy,breakfast,brown
Honey|bee,sweet,sticky,gold,jar
Milkshake|drink,straw,cold,chocolate,thick
Strawberry|red,fruit,seeds,jam,cream
Broccoli|green,vegetable,tree,healthy,steam
Chips|potato,crunchy,salty,packet,fries
Doughnut|hole,sweet,sprinkles,round,fried
Cookie|biscuit,chocolate chip,bake,sweet,jar
Taco|Mexican,shell,beef,cheese,crunchy
Sushi|Japanese,rice,fish,roll,seaweed
Pineapple|fruit,spiky,yellow,tropical,pizza
Lollipop|sweet,stick,lick,candy,round
Jelly|wobble,dessert,wiggle,colourful,custard
Corn|yellow,cob,vegetable,pop,kernel
Hot Dog|sausage,bun,mustard,sauce,frankfurt
Cereal|breakfast,bowl,milk,spoon,box
Peanut Butter|jam,spread,sandwich,crunchy,smooth
Marshmallow|fluffy,white,campfire,toast,sweet
Toothbrush|teeth,paste,bathroom,clean,morning
Umbrella|rain,wet,open,shade,handle
Pillow|bed,sleep,head,soft,fight
Bed|sleep,pillow,blanket,night,mattress
Television|watch,screen,show,remote,channel
Fridge|cold,kitchen,food,freezer,door
Mirror|reflection,look,glass,face,bathroom
Clock|time,tick,hands,hour,alarm
Scissors|cut,paper,sharp,snip,blades
Ladder|climb,steps,up,high,rungs
Bicycle|ride,wheels,pedal,helmet,bike
Skateboard|wheels,ride,trick,ramp,skate park
Trampoline|jump,bounce,backyard,high,springs
Backpack|school,carry,bag,straps,books
Pencil|write,lead,sharpen,eraser,draw
Eraser|rubber,pencil,mistake,rub,remove
Book|read,pages,story,library,cover
Candle|wax,flame,light,birthday,wick
Key|lock,door,open,unlock,car
Mobile Phone|call,text,screen,apps,smart
Computer|keyboard,mouse,screen,laptop,internet
Camera|photo,picture,lens,snap,flash
Balloon|party,air,pop,float,helium
Kite|fly,wind,string,sky,tail
Sunglasses|eyes,dark,wear,shades,summer
Hat|head,wear,cap,sun,brim
Shoes|feet,laces,wear,socks,walk
Socks|feet,wear,pair,shoes,smelly
Glasses|eyes,see,wear,lenses,frames
Remote Control|TV,buttons,channel,couch,batteries
Vacuum Cleaner|dust,suck,floor,carpet,noise
Washing Machine|clothes,laundry,spin,dirty,soap
Bathtub|water,bubbles,wash,soak,bathroom
Couch|sit,lounge,sofa,cushions,living room
Lamp|light,bulb,switch,desk,shade
Map|directions,country,lost,find,treasure
Treasure Chest|pirate,gold,box,map,hidden
Sandcastle|beach,build,bucket,spade,waves
Snowman|winter,carrot,build,cold,frosty
Rocket|space,launch,moon,blast,astronaut
Robot|machine,metal,beep,computer,battery
Crown|king,queen,head,gold,jewels
Magic Wand|wizard,spell,stick,fairy,trick
Guitar|strings,music,play,strum,rock
Piano|keys,music,play,black,white
Drum|bang,beat,sticks,music,loud
Trumpet|brass,blow,music,loud,band
Lego|bricks,build,blocks,toy,step on
School|teacher,learn,class,students,homework
Beach|sand,ocean,waves,swim,sun
Hospital|doctor,nurse,sick,ambulance,patient
Library|books,quiet,borrow,read,librarian
Zoo|animals,cages,visit,lion,keeper
Airport|plane,fly,travel,luggage,gate
Supermarket|shopping,food,trolley,buy,checkout
Playground|swings,slide,park,kids,monkey bars
Swimming Pool|water,dive,lane,splash,chlorine
Castle|king,queen,tower,knight,moat
Farm|animals,cows,tractor,sheep,barn
Jungle|trees,animals,monkey,Tarzan,rainforest
Desert|sand,hot,dry,camel,cactus
Volcano|lava,erupt,mountain,hot,ash
Moon|night,space,astronaut,crescent,sky
Space|stars,planets,astronaut,rocket,galaxy
Cinema|movie,screen,popcorn,film,tickets
Kitchen|cook,food,oven,fridge,room
Bathroom|toilet,shower,tub,wash,sink
Island|water,sand,ocean,stranded,palm tree
Mountain|tall,climb,peak,snow,hill
Circus|clown,tent,acrobat,show,ringmaster
Haunted House|ghost,scary,spooky,boo,Halloween
Opera House|Sydney,sails,harbour,building,music
Uluru|rock,red,Australia,desert,Ayers
Great Barrier Reef|coral,Queensland,fish,ocean,snorkel
Eiffel Tower|Paris,France,tall,metal,landmark
Teacher|school,class,students,learn,homework
Doctor|sick,hospital,nurse,medicine,stethoscope
Firefighter|truck,hose,water,ladder,flames
Police Officer|crime,siren,badge,arrest,car
Pilot|plane,fly,airport,cockpit,captain
Astronaut|space,rocket,moon,helmet,NASA
Chef|cook,kitchen,food,restaurant,hat
Pirate|ship,treasure,parrot,eye patch,arr
Wizard|magic,spell,wand,hat,Harry Potter
Superhero|cape,powers,save,villain,fly
Ninja|black,sneaky,Japan,fight,stars
Clown|circus,funny,red nose,juggle,makeup
Princess|crown,castle,royal,queen,dress
Knight|armour,sword,horse,castle,shining
Vampire|blood,fangs,bite,Dracula,night
Ghost|boo,scary,haunted,white,sheet
Mermaid|tail,ocean,fish,swim,Ariel
Santa Claus|Christmas,presents,beard,red,reindeer
Easter Bunny|eggs,chocolate,rabbit,basket,hop
Tooth Fairy|pillow,money,wings,night,wobbly
Dentist|teeth,check,drill,toothbrush,mouth
Farmer|tractor,cows,crops,field,sheep
Builder|house,hammer,construction,hard hat,bricks
Lifeguard|beach,swim,save,whistle,flags
Vet|animals,doctor,pets,sick,dog
Baby|small,cry,nappy,young,born
Grandma|nana,old,family,mum,grandpa
Sleep|bed,night,tired,dream,snore
Dance|music,move,party,ballet,feet
Swim|water,pool,stroke,ocean,float
Sneeze|nose,achoo,cold,tissue,bless you
Laugh|funny,joke,smile,giggle,ha
Cry|tears,sad,eyes,baby,upset
Whisper|quiet,secret,soft,ear,speak
Juggle|balls,throw,catch,clown,hands
Yawn|tired,mouth,sleepy,bored,open
Hiccup|stomach,drink,scare,noise,jump
Climb|tree,up,mountain,rope,wall
Tickle|laugh,feet,fingers,giggle,funny
Hug|arms,squeeze,love,embrace,cuddle
Wink|eye,close,one,blink,cheeky
Clap|hands,applause,noise,cheer,together
Snore|sleep,loud,nose,night,noise
Paint|brush,colour,picture,art,wall
Whistle|blow,lips,sound,referee,tune
Soccer|ball,kick,goal,football,team
Cricket|bat,ball,wicket,bowl,stumps
Basketball|hoop,bounce,dunk,court,net
Tennis|racquet,ball,net,court,serve
Hide and Seek|count,find,game,ready,hiding
Chess|board,king,queen,checkmate,pawn
Olympics|medal,gold,sport,rings,games
Footy|kick,mark,goal,football,AFL
Surfing|wave,board,beach,ocean,ride
Skiing|snow,mountain,slope,poles,winter
Fishing|rod,hook,catch,boat,worm
Camping|tent,fire,outdoors,marshmallow,sleeping bag
Video Game|play,controller,screen,console,level
Minecraft|blocks,game,build,Creeper,Steve
Hopscotch|jump,chalk,squares,one foot,game
Bowling|pins,ball,strike,roll,alley
Golf|club,ball,hole,course,swing
Roller Coaster|ride,theme park,loop,fast,scary
Rainbow|colours,sky,arch,pot of gold,storm
Thunder|lightning,storm,loud,clouds,rain
Snow|cold,white,winter,flake,ski
Sun|hot,bright,sky,day,star
Star|night,sky,twinkle,shine,shape
Tree|leaves,wood,branch,green,trunk
Flower|petals,garden,smell,rose,bloom
Cloud|sky,white,fluffy,rain,float
Ocean|water,sea,waves,blue,salt
Fire|hot,burn,flame,smoke,red
Earthquake|shake,ground,crack,disaster,rumble
Tornado|wind,spin,storm,twister,funnel
Cactus|desert,prickly,plant,green,spikes
Leaf|tree,green,fall,autumn,plant
Waterfall|river,cliff,splash,drop,rocks
Wind|blow,air,breeze,kite,strong
Nose|smell,face,sneeze,breathe,pick
Teeth|mouth,brush,bite,white,dentist
Hair|head,cut,brush,long,comb
Elbow|arm,bend,joint,funny bone,knee
Belly Button|tummy,hole,middle,navel,stomach
Brain|think,head,smart,mind,skull
Heart|love,beat,blood,chest,valentine
Skeleton|bones,Halloween,skull,body,spooky
Freckles|spots,face,skin,sun,brown
Christmas|December,Santa,presents,tree,Jesus
Halloween|October,costume,trick,treat,scary
Birthday|cake,party,candles,presents,age
Wedding|bride,married,groom,ring,dress
Holiday|vacation,travel,school,break,trip
Sleepover|friends,night,pyjamas,party,stay
Fireworks|bang,sky,New Year,colourful,explode
Picnic|blanket,basket,park,food,outside
Car|drive,wheels,road,engine,seatbelt
Train|tracks,station,carriage,choo,ride
Helicopter|fly,blades,spin,chopper,air
Boat|water,sail,float,ship,row
Submarine|underwater,ocean,yellow,periscope,navy
Bus|school,driver,stop,ride,seats
Tractor|farm,drive,field,plough,wheels
Ambulance|hospital,siren,emergency,sick,paramedic
Hot Air Balloon|basket,fly,float,sky,fire
Scooter|ride,wheels,push,kick,handle
Harry Potter|wizard,Hogwarts,glasses,scar,magic
Spider-Man|web,hero,Peter Parker,red,Marvel
Batman|Gotham,Robin,hero,cape,Joker
Mickey Mouse|Disney,ears,Minnie,cartoon,Donald
Cinderella|glass slipper,midnight,prince,pumpkin,ball
Pinocchio|nose,lie,puppet,wooden,boy
Pokémon|Pikachu,catch,cards,game,trainer
Homework|school,teacher,study,after,assignment
Secret|tell,hide,whisper,know,keep
Dream|sleep,night,nightmare,bed,imagine
Money|cash,dollars,coins,buy,rich
Music|song,listen,sing,band,instrument
Shadow|dark,light,sun,follow,shape
Echo|repeat,sound,cave,voice,again
Bubble|soap,pop,blow,float,round
Magnet|stick,metal,fridge,north,attract
Invisible|see,disappear,hidden,cloak,clear
Alarm|wake,ring,clock,morning,loud
Present|gift,birthday,wrap,box,open
Selfie|photo,phone,camera,picture,yourself
Emoji|smiley,face,text,phone,icon
Password|secret,computer,login,letters,type
YouTube|video,watch,channel,subscribe,internet
Pyjamas|sleep,wear,night,bed,clothes
Bandaid|cut,sticky,hurt,blood,plaster
Thermometer|temperature,hot,cold,sick,degrees
Zombie|undead,walk,brains,scary,monster
Alien|space,UFO,green,Mars,planet
Monster|scary,under the bed,big,teeth,beast
Fairy|wings,magic,tiny,wand,Tinkerbell
Recycling|bin,plastic,environment,reuse,green
Mud|dirt,wet,brown,puddle,messy
Puddle|water,rain,jump,splash,wet
Garden|plants,flowers,grow,dig,backyard
Tent|camping,sleep,outdoors,poles,canvas
Wheelbarrow|garden,push,handles,carry,dirt
Snowball|throw,cold,white,fight,winter
Library Card|borrow,books,scan,member,return
Rubbish Bin|trash,lid,throw,garbage,wheelie
Toilet|flush,bathroom,seat,paper,loo
Shower|water,wash,bathroom,soap,hot
Spoon|eat,soup,cereal,fork,metal
Fork|eat,prongs,knife,spoon,dinner
Chopsticks|eat,two,Chinese,noodles,Japanese
Plate|dish,dinner,round,food,eat
Blanket|warm,bed,cover,cosy,sleep
Torch|light,dark,battery,shine,beam
Battery|power,charge,remote,AA,energy
Doorbell|ring,ding dong,visitor,button,front
Letterbox|mail,post,letters,front,stamp
Postcard|holiday,send,stamp,picture,write
Calendar|days,months,year,date,week
Weekend|Saturday,Sunday,school,days,relax
Breakfast|morning,eat,cereal,first,meal
Dessert|sweet,after,dinner,cake,ice cream
Lunchbox|school,food,sandwich,pack,eat
Teddy Bear|soft,toy,cuddle,stuffed,hug
Jigsaw Puzzle|pieces,fit,picture,together,edges
Board Game|dice,play,family,pieces,Monopoly
Dice|roll,six,dots,cube,game
Cards|deck,shuffle,play,game,ace
Yo-yo|string,up,down,toy,spin
Slime|gooey,green,sticky,stretch,toy
Bubble Gum|chew,blow,pink,sticky,pop
Paper Plane|fold,throw,fly,glide,origami
Sunscreen|burn,lotion,beach,protect,cream
Thong|feet,beach,rubber,flip-flop,shoe
Swimsuit|wear,beach,pool,costume,bathers
Raincoat|wet,jacket,hood,wear,yellow
Helmet|head,bike,protect,safety,hard
Medal|gold,win,first,sport,ribbon
Trophy|win,cup,prize,gold,champion
Superpower|fly,hero,invisible,strong,special
Time Machine|past,future,travel,clock,history
Treehouse|climb,build,ladder,hideout,backyard
Bunk Bed|sleep,top,bottom,ladder,share
Spaceship|alien,fly,stars,rocket,galaxy
Mummy|Egypt,bandages,tomb,pyramid,wrapped
Pyramid|Egypt,triangle,pharaoh,desert,ancient
Statue|stone,still,carved,museum,liberty
Museum|old,history,dinosaur,exhibit,visit
Bakery|bread,cakes,shop,oven,pies
Restaurant|eat,menu,waiter,dinner,table
Hairdresser|cut,scissors,salon,style,chair
Bubble Bath|foam,soap,tub,wash,relax
`;

const CARDS = CARDS_RAW.trim().split('\n').map(line => {
  const [w, f] = line.split('|');
  return { w: w.trim(), f: f.split(',').map(s => s.trim()) };
});
