const WORDS = {
    programming: {
        easy: ['java', 'php', 'html', 'css', 'code', 'web', 'data', 'ruby', 'git', 'sql', 'perl', 'bash', 'void', 'npm', 'yarn', 'main', 'loop', 'link'],
        medium: ['python', 'script', 'react', 'nodejs', 'docker', 'syntax', 'mysql', 'api', 'json', 'swift', 'linux', 'ubuntu', 'server', 'client', 'module', 'github', 'vscode', 'heroku'],
        hard: ['javascript', 'typescript', 'algorithm', 'recursion', 'middleware', 'blockchain', 'kubernetes', 'encryption', 'asynchronous', 'framework', 'microservices', 'deployment', 'optimization']
    },
    movies: {
        easy: ['jaws', 'up', 'cars', 'thor', 'it', 'coco', 'soul', 'mulan', 'klaus', 'sing', 'bolt', 'shrek'],
        medium: ['avatar', 'batman', 'frozen', 'alien', 'dune', 'joker', 'titanic', 'hermit', 'zootopia', 'moana', 'tangler', 'brave'],
        hard: ['inception', 'gladiator', 'interstellar', 'pulpfiction', 'godfather', 'parasite', 'whiplash', 'prestige', 'memento', 'goodfellas', 'scarface']
    },
    animals: {
        easy: ['cat', 'dog', 'lion', 'bear', 'fish', 'wolf', 'bird', 'duck', 'frog', 'deer', 'pony', 'goat'],
        medium: ['rabbit', 'monkey', 'donkey', 'tigers', 'spider', 'horse', 'eagle', 'shark', 'camel', 'panda', 'zebra', 'koala'],
        hard: ['kangaroo', 'elephant', 'crocodile', 'platypus', 'chimpanzee', 'octopus', 'hummingbird', 'rhinoceros', 'hippopotamus', 'chameleon']
    },
    countries: {
        easy: ['usa', 'india', 'china', 'brazil', 'peru', 'egypt', 'italy', 'fiji', 'oman', 'cuba', 'iran', 'laos'],
        medium: ['france', 'canada', 'russia', 'mexico', 'japan', 'germany', 'turkey', 'spain', 'norway', 'sweden', 'greece', 'poland'],
        hard: ['australia', 'switzerland', 'argentina', 'netherlands', 'thailand', 'singapore', 'portugal', 'luxembourg', 'philippines', 'indonesia']
    },
    sports: {
        easy: ['golf', 'polo', 'judo', 'surf', 'swim', 'runs', 'ball', 'bat', 'net', 'goal'],
        medium: ['soccer', 'tennis', 'hockey', 'boxing', 'karate', 'cricket', 'rugby', 'squash', 'cycling', 'archery', 'fencing', 'rowing'],
        hard: ['basketball', 'volleyball', 'badminton', 'gymnastics', 'snowboarding', 'wrestling', 'triathlon', 'equestrian', 'athletics']
    },
    science: {
        easy: ['atom', 'cell', 'gene', 'acid', 'base', 'heat', 'mass', 'volt', 'lab', 'wire'],
        medium: ['physics', 'biology', 'geology', 'energy', 'matter', 'plasma', 'botany', 'optics', 'gravity', 'oxygen', 'helium', 'carbon'],
        hard: ['chemistry', 'evolution', 'quantum', 'molecular', 'neurology', 'astronomy', 'genetics', 'ecology', 'fossils', 'magnetism']
    },
    food: {
        easy: ['rice', 'cake', 'taco', 'pear', 'soup', 'milk', 'egg', 'bun', 'jam', 'tea'],
        medium: ['burger', 'pizza', 'pasta', 'sushi', 'cheese', 'bread', 'steak', 'salad', 'donut', 'muffin', 'cookie', 'yogurt'],
        hard: ['spaghetti', 'croissant', 'guacamole', 'chocolate', 'sandwich', 'lasagna', 'biscotti', 'pancake', 'macaroni', 'dumpling']
    },
    space: {
        easy: ['star', 'moon', 'mars', 'sun', 'nova', 'ship', 'suit', 'void', 'dark', 'beam'],
        medium: ['planet', 'galaxy', 'rocket', 'comet', 'orbit', 'meteor', 'nebula', 'cosmos', 'pluto', 'saturn', 'venus', 'jupiter'],
        hard: ['astronaut', 'universe', 'blackhole', 'asteroid', 'telescope', 'supernova', 'constellation', 'satellite', 'exoplanet']
    },
    technology: {
        easy: ['chip', 'disk', 'byte', 'ram', 'cpu', 'web', 'app', 'link', 'code', 'file'],
        medium: ['laptop', 'mobile', 'tablet', 'server', 'router', 'camera', 'modem', 'wifi', 'drone', 'pixel', 'sensor', 'plugin'],
        hard: ['processor', 'software', 'hardware', 'interface', 'mainframe', 'broadband', 'blockchain', 'algorithm', 'cybersecurity']
    },
    bikes: {
        easy: ['hero', 'java', 'tvs', 'bmw', 'ktm', 'bajaj', 'yezdi', 're', 'lml', 'rd'],
        medium: ['ninja', 'pulsar', 'ducati', 'yamaha', 'suzuki', 'harley', 'honda', 'apache', 'scooter', 'moped', 'bullet', 'classic'],
        hard: ['kawasaki', 'triumph', 'hayabusa', 'royal Enfield', 'benelli', 'mv agusta', 'aprilia', 'indian', 'husqvarna']
    },
    cars: {
        easy: ['audi', 'ford', 'tata', 'bmw', 'kia', 'fiat', 'jeep', 'mini', 'mg', 'vw'],
        medium: ['tesla', 'toyota', 'honda', 'nissan', 'hyundai', 'skoda', 'volvo', 'suzuki', 'renault', 'mazda', 'jaguar', 'lexus'],
        hard: ['lamborghini', 'ferrari', 'porsche', 'mercedes', 'chevrolet', 'volkswagen', 'bugatti', 'mclaren', 'bentley', 'rolls royce']
    },
    god: {
        easy: ['ram', 'shiva', 'odin', 'zeus', 'thor', 'ra', 'isis', 'set', 'kali', 'yama'],
        medium: ['vishnu', 'brahma', 'krishna', 'ganesha', 'apollo', 'anubis', 'athena', 'ares', 'hades', 'hera', 'loki', 'freya'],
        hard: ['murugan', 'venkateswara', 'hanuman', 'poseidon', 'hercules', 'permetheus', 'dionysus', 'aphrodite', 'artemis']
    },
    mnc: {
        easy: ['tcs', 'ibm', 'hcl', 'dell', 'wipro', 'cts', 'zoho', 'nike', 'uber', 'hp'],
        medium: ['google', 'apple', 'amazon', 'oracle', 'infosys', 'cognizant', 'intel', 'meta', 'tesla', 'netflix', 'adobe', 'paypal'],
        hard: ['microsoft', 'accenture', 'capgemini', 'qualcomm', 'adobe', 'samsung', 'jpmorgan', 'goldman', 'deloitte', 'walmart']
    },
    english: {
        easy: ['book', 'pen', 'life', 'love', 'home', 'work', 'play', 'fast', 'slow', 'big'],
        medium: ['beauty', 'active', 'family', 'simple', 'friend', 'nature', 'garden', 'school', 'travel', 'health', 'music', 'peace'],
        hard: ['ephemeral', 'loquacious', 'quintessential', 'serendipity', 'nomenclature', 'magnitude', 'resilience', 'eloquence', 'labyrinth']
    }
};

const HINTS = {
    // Programming (New words included)
    'JAVA': 'Popular object-oriented language often used in enterprise and Android apps.',
    'PHP': 'Scripting language primarily used for server-side web development.',
    'HTML': 'The standard markup language for creating web pages.',
    'CSS': 'Language used for describing the presentation of a document written in HTML.',
    'CODE': 'The universal language of computers.',
    'WEB': 'The vast network of interconnected documents we browse every day.',
    'DATA': 'Raw facts or figures used for analysis.',
    'RUBY': 'A dynamic, open-source programming language with a focus on simplicity.',
    'GIT': 'A distributed version control system for tracking changes in source code.',
    'SQL': 'Standard language for managing data in relational databases.',
    'PYTHON': 'A high-level language known for its readability and use in AI.',
    'SCRIPT': 'A program or sequence of instructions that is carried out by another program.',
    'REACT': 'A JavaScript library for building user interfaces.',
    'NODEJS': 'A cross-platform JavaScript runtime environment.',
    'DOCKER': 'A platform to develop, ship, and run applications in containers.',
    'SYNTAX': 'The set of rules that defines the structure of a language.',
    'MYSQL': 'An open-source relational database management system.',
    'API': 'A set of protocols for building software applications.',
    'JSON': 'A lightweight data-interchange format.',
    'SWIFT': 'A programming language for iOS and macOS.',
    'JAVASCRIPT': 'The most popular programming language for web interactivity.',
    'TYPESCRIPT': 'A strict syntactical superset of JavaScript.',
    'ALGORITHM': 'A step-by-step procedure for calculations.',
    'RECURSION': 'A method where the solution depends on smaller instances of itself.',
    'MIDDLEWARE': 'Software that acts as a bridge between systems.',
    'BLOCKCHAIN': 'A system in which a record of transactions are maintained.',
    'KUBERNETES': 'A system for automating deployment of containerized apps.',
    'ENCRYPTION': 'The process of converting information into a code.',
    'PERL': 'A highly capable, feature-rich programming language.',
    'BASH': 'A Unix shell and command language.',
    'VOID': 'A type that represents the absence of a value.',
    'NPM': 'The default package manager for Node.js.',
    'YARN': 'A package manager from Facebook.',
    'MAIN': 'The entry point function in many programs.',
    'LOOP': 'A sequence of instructions that is continually repeated.',
    'LINK': 'A reference to data that the reader can follow.',
    'LINUX': 'A famous open-source operating system kernel.',
    'UBUNTU': 'A popular Linux distribution based on Debian.',
    'SERVER': 'A computer that provides data to other computers.',
    'CLIENT': 'A piece of computer hardware or software that accesses a service.',
    'MODULE': 'A self-contained unit of a larger system.',
    'GITHUB': 'A platform for version control and collaboration.',
    'VSCODE': 'A streamlined code editor with support for debugging.',
    'HEROKU': 'A platform as a service (PaaS) that enables developers to build and run apps.',
    'ASYNCHRONOUS': 'Designating a type of communication that does not occur in real-time.',
    'FRAMEWORK': 'A basic structure underlying a system.',
    'MICROSERVICES': 'An architectural style that structures an app as a collection of services.',
    'DEPLOYMENT': 'The action of bringing resources into effective action.',
    'OPTIMIZATION': 'The action of making the best or most effective use of a resource.',

    // Movies
    'JAWS': 'A 1975 thriller about a giant man-eating great white shark.',
    'UP': 'An animated film featuring a flying house and many balloons.',
    'CARS': 'Pixar movie where the characters are all vehicles.',
    'THOR': 'Marvel superhero with a powerful hammer.',
    'IT': 'Stephen King horror featuring Pennywise the clown.',
    'COCO': 'Pixar movie celebrating the Day of the Dead.',
    'SOUL': 'Pixar film about a jazz musician searching for his purpose.',
    'MULAN': 'A young Chinese maiden disguises herself as a warrior.',
    'KLAUS': 'An animated film depicting an alternative origin story of Santa.',
    'SING': 'A jukebox musical comedy about a singing competition.',
    'BOLT': 'A story about a white dog who believes he has superpowers.',
    'SHREK': 'An ogre who lives in a swamp.',
    'AVATAR': 'Science fiction film set on the lush world of Pandora.',
    'BATMAN': 'The Dark Knight of Gotham City.',
    'FROZEN': 'Disney movie featuring Elsa and Anna.',
    'ALIEN': 'Sci-fi horror film where "in space, no one can hear you scream".',
    'DUNE': 'A sci-fi epic set on the desert planet Arrakis.',
    'JOKER': 'The archenemy of Batman, a failed comedian.',
    'TITANIC': 'An epic romance and disaster film directed by James Cameron.',
    'HERMIT': 'A character who lives in solitude.',
    'ZOOTOPIA': 'A city of anthropomorphic mammals.',
    'MOANA': 'A story about the daughter of a village chief in ancient Polynesia.',
    'TANGLER': 'Could refer to Rapunzel\'s hair in a popular Disney film.',
    'BRAVE': 'A story about a Scottish princess who defies an age-old custom.',
    'INCEPTION': 'A complex thriller about entering dreams to steal secrets.',
    'GLADIATOR': 'An epic historical drama starring Russell Crowe as Maximus.',
    'INTERSTELLAR': 'A sci-fi film exploring time travel and black holes to save humanity.',
    'PULPFICTION': 'A cult classic crime film by Quentin Tarantino.',
    'GODFATHER': 'Widely regarded as one of the greatest films, focusing on the Corleone family.',
    'PARASITE': 'A South Korean thriller that won Best Picture at the Oscars.',
    'WHIPLASH': 'A film about a young drummer pushed to his limits by a strict teacher.',
    'PRESTIGE': 'A story about two rival stage magicians in London.',
    'MEMENTO': 'A psychological thriller about a man with short-term memory loss.',
    'GOODFELLAS': 'A classic mob film directed by Martin Scorsese.',
    'SCARFACE': 'A story about a Cuban immigrant who becomes a drug kingpin.',

    // Animals
    'CAT': 'A small domesticated carnivorous mammal with soft fur.',
    'DOG': 'Man\'s best friend, known for loyalty and barking.',
    'LION': 'The King of the Jungle.',
    'BEAR': 'A large, heavy mammal with thick fur and a very short tail.',
    'FISH': 'A limbless cold-blooded animal with gills and fins living in water.',
    'WOLF': 'A wild carnivorous mammal of the dog family.',
    'BIRD': 'A warm-blooded egg-laying vertebrate distinguished by feathers and wings.',
    'DUCK': 'A waterbird with a broad blunt bill and short legs.',
    'FROG': 'A tailless amphibian with a short stout body and long hind legs.',
    'DEER': 'A hoofed grazing or browsing animal, typically with branched bony antlers.',
    'PONY': 'A small horse of a particular breed.',
    'GOAT': 'A hardy domesticated ruminant animal with backward-curving horns.',
    'RABBIT': 'A small mammal with long ears and a short tail.',
    'MONKEY': 'A primate with a long tail that lives in trees.',
    'DONKEY': 'A domesticated hoofed mammal with long ears.',
    'TIGERS': 'Large wild cats with orange fur and black stripes.',
    'SPIDER': 'An eight-legged arachnid that spins webs.',
    'HORSE': 'A large hoofed mammal used for riding and racing.',
    'EAGLE': 'A large bird of prey with a massive hooked bill.',
    'SHARK': 'A large cartilaginous fish with a streamlined body.',
    'CAMEL': 'A large long-necked mammal with one or two humps.',
    'PANDA': 'A large bearlike mammal with characteristic black and white markings.',
    'ZEBRA': 'An African wild horse with black-and-white stripes.',
    'KOALA': 'A bearlike arboreal Australian marsupial.',
    'KANGAROO': 'A large herbivorous marsupial with a long powerful tail.',
    'ELEPHANT': 'The largest living land animal, characterized by a long trunk.',
    'CROCODILE': 'A large predatory semi-aquatic reptile.',
    'PLATYPUS': 'An egg-laying mammal with a bill like a duck.',
    'CHIMPANZEE': 'A highly intelligent great ape.',
    'OCTOPUS': 'A cephalopod with eight arms and three hearts.',
    'HUMMINGBIRD': 'The smallest bird that can fly backwards.',
    'RHINOCEROS': 'A large, heavily built plant-eating mammal with one or two horns.',
    'HIPPOPOTAMUS': 'A large semi-aquatic African herbivore.',
    'CHAMELEON': 'A small slow-moving Old World lizard with a prehensile tail.',

    // Countries
    'USA': 'The United States of America.',
    'INDIA': 'Home of the Taj Mahal and vibrant cultures.',
    'CHINA': 'Most populous country with the Great Wall.',
    'BRAZIL': 'Largest country in South America, famous for Carnival.',
    'PERU': 'South American country home to Machu Picchu.',
    'EGYPT': 'Famous for its ancient pyramids and the Nile.',
    'ITALY': 'European country known for pizza, pasta, and the Colosseum.',
    'FIJI': 'A country in the South Pacific, an archipelago of more than 300 islands.',
    'OMAN': 'A country on the southeastern coast of the Arabian Peninsula.',
    'CUBA': 'The largest island in the Caribbean.',
    'IRAN': 'A country in Western Asia, historically known as Persia.',
    'LAOS': 'A Southeast Asian country traversed by the Mekong River.',
    'FRANCE': 'Home to the Eiffel Tower and fine cuisine.',
    'CANADA': 'The Great White North, known for maple syrup.',
    'RUSSIA': 'The largest country in the world by area.',
    'MEXICO': 'Known for its tacos, tequila, and Mayan ruins.',
    'JAPAN': 'Land of the Rising Sun, famous for sushi and tech.',
    'GERMANY': 'European country known for engineering and history.',
    'TURKEY': 'Country bridging Europe and Asia.',
    'SPAIN': 'Known for its beaches, flamenco, and tapas.',
    'NORWAY': 'A Scandinavian country encompassing mountains, glaciers and deep coastal fjords.',
    'SWEDEN': 'A Scandinavian nation with thousands of coastal islands and inland lakes.',
    'GREECE': 'Considered the cradle of Western civilization.',
    'POLAND': 'A country in Central Europe, known for its medieval architecture.',
    'AUSTRALIA': 'The Land Down Under, home to kangaroos.',
    'SWITZERLAND': 'Land of mountains, watches, and chocolate.',
    'ARGENTINA': 'South American country famous for tango and steak.',
    'NETHERLANDS': 'Known for its canals, tulips, and windmills.',
    'THAILAND': 'Known for its tropical beaches and ornate royal palaces.',
    'SINGAPORE': 'A sovereign city-state and island country in Southeast Asia.',
    'PORTUGAL': 'Country on the Iberian Peninsula.',
    'LUXEMBOURG': 'A small European country, known for its fortified medieval old town.',
    'PHILIPPINES': 'A Southeast Asian country in the Western Pacific, comprising more than 7,000 islands.',
    'INDONESIA': 'A country in Southeast Asia and Oceania, between the Indian and Pacific oceans.',

    // Sports
    'GOLF': 'Sport involving hitting a small ball into holes with clubs.',
    'POLO': 'A game played on horseback with a long-handled mallet.',
    'JUDO': 'A modern Japanese martial art and Olympic sport.',
    'SURF': 'Riding on the crest of a breaking wave.',
    'SWIM': 'Moving through water by means of the limbs.',
    'RUNS': 'Plural form of moving fast on foot.',
    'BALL': 'A solid or hollow spherical or egg-shaped object used in games.',
    'BAT': 'An implement with a handle and a solid surface used for hitting the ball.',
    'NET': 'A piece of open-meshed material used in various sports.',
    'GOAL': 'The object of a person\'s ambition or effort; an aim or desired result in sports.',
    'SOCCER': 'The world\'s most popular sport.',
    'TENNIS': 'Racket sport played individually or in pairs.',
    'HOCKEY': 'Sport played on grass or ice with a curved stick.',
    'BOXING': 'Combat sport in which two people throw punches at each other.',
    'KARATE': 'A martial art developed in the Ryukyu Kingdom.',
    'CRICKET': 'A bat-and-ball game played between two teams of eleven players.',
    'RUGBY': 'A team game played with an oval ball.',
    'SQUASH': 'A racket-and-ball sport played by two or four players in a four-walled court.',
    'CYCLING': 'The sport or activity of riding a bicycle.',
    'ARCHERY': 'The sport, practice or skill of using a bow to shoot arrows.',
    'FENCING': 'The sport of fighting with swords.',
    'ROWING': 'The sport or pastime of propelling a boat under oar power.',
    'BASKETBALL': 'Game played on a court where players shoot a ball into a hoop.',
    'VOLLEYBALL': 'Game where teams hit a ball over a high net.',
    'BADMINTON': 'Sport played with rackets and a shuttlecock.',
    'GYMNASTICS': 'Exercises developing or displaying physical agility and coordination.',
    'SNOWBOARDING': 'The sport of sliding down a snow-covered slope on a board.',
    'WRESTLING': 'The sport or activity of grappling with an opponent.',
    'TRIATHLON': 'An athletic contest consisting of three different events.',
    'EQUESTRIAN': 'Relating to horse riding.',
    'ATHLETICS': 'The sport of competing in track and field events.',

    // Science
    'ATOM': 'The smallest unit of ordinary matter.',
    'CELL': 'The basic structural and functional unit of all living organisms.',
    'GENE': 'A unit of heredity.',
    'ACID': 'A chemical substance that neutralizes alkalis.',
    'BASE': 'A substance that can neutralize acid.',
    'HEAT': 'The quality of being hot; high temperature.',
    'MASS': 'A coherent, typical large body of matter with no definite shape.',
    'VOLT': 'The SI unit of electromotive force.',
    'LAB': 'Short for laboratory.',
    'WIRE': 'Metal drawn out into the form of a thin flexible thread or rod.',
    'PHYSICS': 'The branch of science concerned with nature and properties of matter and energy.',
    'BIOLOGY': 'The study of living organisms.',
    'GEOLOGY': 'The study of the earth\'s physical structure and substance.',
    'ENERGY': 'The strength and vitality required for sustained physical or mental activity.',
    'MATTER': 'Physical substance in general.',
    'PLASMA': 'The fourth state of matter.',
    'BOTANY': 'The scientific study of plants.',
    'OPTICS': 'The scientific study of sight and the behavior of light.',
    'GRAVITY': 'The force that attracts a body toward the center of the earth.',
    'OXYGEN': 'A colorless, odorless reactive gas, the life-supporting component of the air.',
    'HELIUM': 'A colorless, odorless, tasteless, non-toxic, inert, monatomic gas.',
    'CARBON': 'The chemical element with the symbol C and atomic number 6.',
    'CHEMISTRY': 'The study of the properties and behavior of matter.',
    'EVOLUTION': 'The process by which different kinds of living organisms are thought to have developed.',
    'QUANTUM': 'Minimum amount of any physical entity involved in an interaction.',
    'MOLECULAR': 'Relating to or consisting of molecules.',
    'NEUROLOGY': 'The branch of medicine or biology that deals with nerves.',
    'ASTRONOMY': 'The study of celestial objects and phenomena.',
    'GENETICS': 'The study of heredity and the variation of inherited characteristics.',
    'ECOLOGY': 'The branch of biology that deals with the relations of organisms to one another.',
    'FOSSILS': 'The remains or impression of a prehistoric organism preserved in petrified form.',
    'MAGNETISM': 'A physical phenomenon produced by the motion of electric charge.',

    // Food
    'RICE': 'A staple food for more than half of the world\'s human population.',
    'CAKE': 'A sweet food made from flour, sugar, and other ingredients.',
    'TACO': 'A traditional Mexican dish consisting of a folded tortilla.',
    'PEAR': 'A sweet fruit with a rounded body that narrows toward the stem.',
    'SOUP': 'A liquid food made with vegetables, meat, or fish.',
    'MILK': 'An opaque white fluid rich in fat and protein, secreted by female mammals.',
    'EGG': 'An oval or round object laid by a female bird, reptile, fish, or invertebrate.',
    'BUN': 'A small cake or bread roll.',
    'JAM': 'A food made from fruit and sugar boiled to a thick consistency.',
    'TEA': 'A hot or cold beverage made by infusing dried leaves in water.',
    'BURGER': 'A sandwich consisting of one or more cooked patties of ground meat.',
    'PIZZA': 'An Italian dish consisting of a flat base of leavened wheat-based dough.',
    'PASTA': 'Italian food made from unleavened dough of wheat flour.',
    'SUSHI': 'A staple rice dish of Japanese cuisine.',
    'CHEESE': 'A dairy product derived from milk.',
    'BREAD': 'A staple food prepared from a dough of flour and water.',
    'STEAK': 'A high-quality beef taken from the hindquarters of the animal.',
    'SALAD': 'A cold dish of various mixtures of raw or cooked vegetables.',
    'DONUT': 'A small fried cake of sweetened dough, typically in the shape of a ring.',
    'MUFFIN': 'A small domed cake or quick bread.',
    'COOKIE': 'A small sweet cake, typically round, flat, and crisp.',
    'YOGURT': 'A semi-solid sourish food prepared from milk fermented by added bacteria.',
    'SPAGHETTI': 'A long, thin, solid, cylindrical noodle pasta.',
    'CROISSANT': 'A buttery, flaky, viennoiserie pastry.',
    'GUACAMOLE': 'An avocado-based dip, spread, or salad.',
    'CHOCOLATE': 'A food preparation made from roasted cacao seeds.',
    'SANDWICH': 'Food item consisting of vegetables, cheese or meat, between slices of bread.',
    'LASAGNA': 'A type of wide, flat pasta, possibly one of the oldest types of pasta.',
    'BISCOTTI': 'Twice-baked almond biscuits that originated in the city of Prato.',
    'PANCAKE': 'A thin, flat cake of batter, usually fried and turned in a pan.',
    'MACARONI': 'A variety of pasta shaped like narrow tubes.',
    'DUMPLING': 'A small mass of leavened dough which is boiled or steamed.',

    // Space
    'STAR': 'A luminous ball of gas, mostly hydrogen and helium.',
    'MOON': 'Earth\'s natural satellite.',
    'MARS': 'The Red Planet.',
    'SUN': 'The star at the center of our solar system.',
    'NOVA': 'A star showing a sudden large increase in brightness.',
    'SHIP': 'A large boat for transporting people or goods by sea.',
    'SUIT': 'A set of clothes made of the same fabric.',
    'VOID': 'A completely empty space.',
    'DARK': 'With little or no light.',
    'BEAM': 'A ray or shaft of light.',
    'PLANET': 'A celestial body moving in an elliptical orbit around a star.',
    'GALAXY': 'A system of millions or billions of stars.',
    'ROCKET': 'A cylindrical projectile propelled to a great distance.',
    'COMET': 'A celestial object consisting of a nucleus of ice and dust.',
    'ORBIT': 'The curved path of a celestial object.',
    'METEOR': 'A small body of matter from outer space that enters the earth\'s atmosphere.',
    'NEBULA': 'A cloud of gas and dust in outer space.',
    'COSMOS': 'The universe seen as a well-ordered whole.',
    'PLUTO': 'A dwarf planet in the Kuiper belt.',
    'SATURN': 'The sixth planet from the Sun and the second-largest in the Solar System.',
    'VENUS': 'The second planet from the Sun, named after the Roman goddess of love.',
    'JUPITER': 'The largest planet in our solar system.',
    'ASTRONAUT': 'A person who is trained to travel in a spacecraft.',
    'UNIVERSE': 'All existing matter and space considered as a whole.',
    'BLACKHOLE': 'A region of space where no matter or radiation can escape.',
    'ASTEROID': 'A small rocky body orbiting the sun.',
    'TELESCOPE': 'An instrument designed to make distant objects appear nearer.',
    'SUPERNOVA': 'A star that suddenly increases greatly in brightness.',
    'CONSTELLATION': 'A group of stars forming a recognizable pattern.',
    'SATELLITE': 'An artificial body placed in orbit around the earth or moon.',
    'EXOPLANET': 'A planet that orbits a star outside the solar system.',

    // Technology
    'CHIP': 'A tiny piece of semiconducting material.',
    'DISK': 'A flat, thin, circular object used to store data.',
    'BYTE': 'A unit of data that is eight binary digits long.',
    'RAM': 'A form of computer memory.',
    'CPU': 'The primary component of a computer that processes instructions.',
    'LAPTOP': 'A portable computer.',
    'MOBILE': 'Relating to handheld computing devices.',
    'TABLET': 'A personal computer with a touchscreen interface.',
    'SERVER': 'A computer that manages access to a centralized resource.',
    'ROUTER': 'A networking device that forwards data packets.',
    'CAMERA': 'A device for recording visual images.',
    'MODEM': 'A hardware device that converts data into a suitable format for transmission.',
    'WIFI': 'A facility allowing computers, smartphones, or other devices to connect to the internet.',
    'DRONE': 'A remote-controlled pilotless aircraft or missile.',
    'PIXEL': 'A minute area of illumination on a display screen.',
    'SENSOR': 'A device which detects or measures a physical property.',
    'PLUGIN': 'A software component that adds a specific feature to an existing computer program.',
    'PROCESSOR': 'The "brain" of a computer.',
    'SOFTWARE': 'Programs and other operating information used by a computer.',
    'HARDWARE': 'The physical parts of a computer system.',
    'INTERFACE': 'A point where two systems meet and interact.',
    'MAINFRAME': 'A large high-speed computer supporting numerous workstations.',
    'BROADBAND': 'High-capacity transmission technique.',
    'CYBERSECURITY': 'The state of being protected against the criminal or unauthorized use of electronic data.',

    // Bikes
    'HERO': 'A leading Indian motorcycle manufacturer.',
    'JAVA': 'A legendary motorcycle brand reborn.',
    'TVS': 'A major Indian manufacturer of motorcycles and scooters.',
    'BMW': 'A German brand known for luxury and performance.',
    'KTM': 'An Austrian motorcycle brand famous for being "Ready to Race".',
    'BAJAJ': 'An Indian multinational automotive manufacturing company.',
    'YEZDI': 'An Indian motorcycle brand that was a cult favorite in the 70s.',
    'RE': 'Short for Royal Enfield.',
    'LML': 'An Indian scooter and motorcycle manufacturer.',
    'RD': 'Refers to the RD350, a legendary performance bike.',
    'NINJA': 'A famous sportbike line by Kawasaki.',
    'PULSAR': 'A popular line of motorcycles from Bajaj.',
    'DUCATI': 'An Italian motorcycle manufacturer.',
    'YAMAHA': 'A Japanese brand famous for its R-series.',
    'SUZUKI': 'A Japanese manufacturer known for the Hayabusa.',
    'HARLEY': 'Iconic American motorcycle brand.',
    'HONDA': 'The world\'s largest manufacturer of two-wheelers.',
    'APACHE': 'A line of performance-oriented motorcycles from TVS.',
    'SCOOTER': 'A light two-wheeled open motor vehicle with a step-through frame.',
    'MOPED': 'A low-power lightweight motorized bicycle.',
    'BULLET': 'A famous model from Royal Enfield with a distinctive "thump".',
    'CLASSIC': 'A popular retro-styled model from Royal Enfield.',
    'KAWASAKI': 'A Japanese brand known for its green bikes.',
    'TRIUMPH': 'Historic British motorcycle manufacturer.',
    'HAYABUSA': 'One of the fastest production motorcycles.',
    'ROYAL ENFIELD': 'The oldest global motorcycle brand in continuous production.',
    'BENELLI': 'A historic Italian motorcycle brand.',
    'MV AGUSTA': 'An Italian motorcycle manufacturer renowned for design.',
    'APRILIA': 'An Italian motorcycle company, one of the marques owned by Piaggio.',
    'INDIAN': 'An American brand of motorcycles originally produced from 1901 to 1953.',
    'HUSQVARNA': 'A Swedish-origin company that produces motocross, enduro, and street motorcycles.',

    // Cars
    'AUDI': 'A German luxury automobile brand.',
    'FORD': 'An American car manufacturer.',
    'TATA': 'An Indian multinational conglomerate.',
    'KIA': 'A South Korean automotive manufacturer.',
    'FIAT': 'An Italian automobile manufacturer, formerly part of Fiat Chrysler Automobiles.',
    'JEEP': 'An American automobile marque, now owned by multi-national corporation Stellantis.',
    'MINI': 'A British automotive marque founded in 1969.',
    'MG': 'A British automotive marque founded by Cecil Kimber in the 1920s.',
    'VW': 'Short for Volkswagen.',
    'TESLA': 'Leading electric vehicle company.',
    'TOYOTA': 'The world\'s largest automobile manufacturer.',
    'NISSAN': 'Japanese automotive manufacturer.',
    'HYUNDAI': 'A major South Korean automotive manufacturer.',
    'SKODA': 'A Czech automobile manufacturer.',
    'VOLVO': 'A Swedish brand known for safety.',
    'RENAULT': 'A French multinational automobile manufacturer established in 1899.',
    'MAZDA': 'A Japanese multinational automaker based in Fuchū, Hiroshima Prefecture.',
    'JAGUAR': 'The luxury vehicle brand of Jaguar Land Rover.',
    'LEXUS': 'The luxury vehicle division of the Japanese automaker Toyota.',
    'LAMBORGHINI': 'Italian manufacturer of luxury sports cars.',
    'FERRARI': 'Luxury Italian sports car manufacturer.',
    'PORSCHE': 'German manufacturer specializing in high-performance sports cars.',
    'MERCEDES': 'A luxury German automotive brand.',
    'CHEVROLET': 'An American automobile division of General Motors.',
    'VOLKSWAGEN': 'The "People\'s Car" German manufacturer.',
    'BUGATTI': 'A manufacturer of high-performance automobiles based in Molsheim, France.',
    'MCLAREN': 'A British automotive manufacturer based at the McLaren Technology Centre.',
    'BENTLEY': 'A British manufacturer and marketer of luxury cars and SUVs.',
    'ROLLS ROYCE': 'A British luxury automobile maker.',

    // God
    'RAM': 'A major deity in Hinduism.',
    'SHIVA': 'The Destroyer within the Hindu Trinity.',
    'ODIN': 'The All-father in Norse mythology.',
    'ZEUS': 'The sky and thunder god in Greek mythology.',
    'THOR': 'The Norse god of thunder.',
    'RA': 'The ancient Egyptian sun god.',
    'ISIS': 'The ancient Egyptian goddess of magic, fertility, and motherhood.',
    'SET': 'The ancient Egyptian god of storms, disorder, and violence.',
    'KALI': 'A Hindu goddess associated with time, change, creation, power, and destruction.',
    'YAMA': 'The Hindu god of death and justice.',
    'VISHNU': 'The Preserver within the Hindu Trinity.',
    'BRAHMA': 'The Creator within the Hindu Trinity.',
    'KRISHNA': 'A major deity in Hinduism, teacher in the Gita.',
    'GANESHA': 'The elephant-headed god.',
    'APOLLO': 'The Greek god of music and truth.',
    'ANUBIS': 'The Egyptian god of mummification.',
    'ATHENA': 'The ancient Greek goddess of wisdom and war.',
    'ARES': 'The Greek god of courage and war.',
    'HADES': 'The Greek god of the dead and the king of the underworld.',
    'HERA': 'The goddess of women, marriage, family and childbirth in Greek mythology.',
    'LOKI': 'The Norse god of mischief.',
    'FREYA': 'The Norse goddess associated with love, beauty, fertility, sex, and war.',
    'MURUGAN': 'The Hindu god of war, popular in South India.',
    'VENKATESWARA': 'An avatar of Vishnu.',
    'HANUMAN': 'The monkey god, disciple of Rama.',
    'POSEIDON': 'The ancient Greek god of the sea.',
    'HERCULES': 'A Roman hero and god.',
    'PERMETHEUS': 'A Titan in Greek mythology, best known as the deity who was the creator of mankind.',
    'DIONYSUS': 'The god of the grape-harvest, winemaking and wine in Greek mythology.',
    'APHRODITE': 'The ancient Greek goddess of sexual love and beauty.',
    'ARTEMIS': 'The Greek goddess of the hunt, the wilderness, and wild animals.',

    // MNC
    'TCS': 'The largest Indian IT services company.',
    'IBM': 'A global technology giant.',
    'HCL': 'A major Indian multinational IT services company.',
    'DELL': 'American technology company known for PCs.',
    'WIPRO': 'A leading Indian global IT company.',
    'CTS': 'Commonly refers to Cognizant Technology Solutions.',
    'ZOHO': 'An Indian multinational technology company that makes web-based business tools.',
    'NIKE': 'An American multinational corporation that designs and markets footwear, apparel, and equipment.',
    'UBER': 'A provider of mobility as a service.',
    'HP': 'Short for Hewlett-Packard, an American multinational information technology company.',
    'GOOGLE': 'Known for its search engine and Android.',
    'APPLE': 'Designer of the iPhone and Mac.',
    'AMAZON': 'Largest e-commerce and cloud company.',
    'ORACLE': 'A major database and enterprise software company.',
    'INFOSYS': 'A global leader in digital services.',
    'COGNIZANT': 'A leading American provider of IT services.',
    'INTEL': 'The world\'s largest and highest valued semiconductor chip manufacturer.',
    'META': 'Formerly known as Facebook, Inc.',
    'TESLA': 'Leading electric vehicle and clean energy company.',
    'NETFLIX': 'A provider of streaming entertainment services.',
    'ADOBE': 'Software giant known for creative tools.',
    'PAYPAL': 'An American company operating an online payments system.',
    'MICROSOFT': 'Creator of the Windows OS.',
    'ACCENTURE': 'A global professional services company.',
    'CAPGEMINI': 'A French multinational professional services company.',
    'QUALCOMM': 'American corporation that creates semiconductors.',
    'SAMSUNG': 'A South Korean multinational manufacturing conglomerate.',
    'JPMORGAN': 'A leading global financial services firm.',
    'GOLDMAN': 'A leading global investment banking, securities and investment management firm.',
    'DELOITTE': 'A multinational professional services network.',
    'WALMART': 'An American multinational retail corporation.',

    // English
    'BOOK': 'A written or printed work consisting of pages.',
    'PEN': 'An instrument for writing or drawing with ink.',
    'LIFE': 'The existence of an individual being.',
    'LOVE': 'An intense feeling of deep affection.',
    'HOME': 'The place where one lives permanently.',
    'WORK': 'Activity involving mental or physical effort done in order to achieve a purpose or result.',
    'PLAY': 'Engage in activity for enjoyment and recreation rather than a serious or practical purpose.',
    'FAST': 'Moving or capable of moving at high speed.',
    'SLOW': 'Moving or operating, or with a speed, less than usual.',
    'BIG': 'Of considerable size, extent, or intensity.',
    'BEAUTY': 'A combination of qualities that pleases the senses.',
    'ACTIVE': 'Engaging in physically energetic pursuits.',
    'FAMILY': 'A group of one or more parents and their children.',
    'SIMPLE': 'Easily understood or done.',
    'FRIEND': 'A person whom one knows and with whom one has a bond of affection.',
    'NATURE': 'The phenomena of the physical world.',
    'GARDEN': 'A piece of ground, adjoining a house, used for growing flowers, fruit, or vegetables.',
    'SCHOOL': 'An institution for educating children.',
    'TRAVEL': 'Go from one place to another, typically over a distance of some length.',
    'HEALTH': 'The state of being free from illness or injury.',
    'MUSIC': 'Vocal or instrumental sounds combined in such a way as to produce beauty of form.',
    'PEACE': 'Freedom from disturbance; tranquility.',
    'EPHEMERAL': 'Lasting for a very short time.',
    'LOQUACIOUS': 'Tending to talk a great deal.',
    'QUINTESSENTIAL': 'Representing the most perfect example of a quality.',
    'SERENDIPITY': 'The occurrence of events by chance in a happy way.',
    'NOMENCLATURE': 'The choosing of names for things.',
    'MAGNITUDE': 'The great size or extent of something.',
    'RESILIENCE': 'The capacity to recover quickly from difficulties.',
    'ELOQUENCE': 'Fluent or persuasive speaking or writing.',
    'LABYRINTH': 'A complicated irregular network of passages or paths in which it is difficult to find one\'s way.'
};

class HangmanGame {
    constructor() {
        this.category = localStorage.getItem('game_category') || 'programming';
        this.difficulty = localStorage.getItem('game_difficulty') || 'easy';
        this.targetWord = '';
        this.guessedLetters = {}; // Changed to Object for counts
        this.wrongAttempts = 0;
        this.maxAttempts = 6;
        this.totalScore = 0;
        this.currentRoundScore = 0;
        this.round = 1;
        this.streak = 0;
        this.isGameOver = false;
        this.hintsUsed = 0;

        // Setup restart button
        document.getElementById('modal-restart-btn').onclick = () => this.resetGame();

        // Setup quit button
        document.getElementById('quit-quest-btn').onclick = () => {
            if (confirm('Are you sure you want to quit this quest?')) {
                this.endRound('QUIT');
            }
        };

        this.init();
        window.game = this; // Attach to window for the global onclick handlers
    }

    resetGame() {
        this.totalScore = 0;
        this.round = 1;
        this.streak = 0;
        document.getElementById('score-display').textContent = `Score: 0`;
        document.getElementById('modal-overlay').style.display = 'none';
        this.init();
    }

    downloadResult(format) {
        const username = localStorage.getItem('username') || 'Player';
        const date = new Date().toLocaleString();
        const content = `
HANGMAN QUEST - BATTLE REPORT
-----------------------------
Player: ${username}
Category: ${this.category.toUpperCase()}
Difficulty: ${this.difficulty.toUpperCase()}
Total Rounds: ${this.round}
Final Score: ${this.totalScore}
Date: ${date}
-----------------------------
Status: ${this.isGameOver ? 'COMPLETED' : 'QUIT'}
        `.trim();

        const filename = `Hangman_Quest_${username}_Report`.replace(/ /g, '_');

        switch (format) {
            case 'txt':
                this.saveBlob(new Blob([content], { type: 'text/plain' }), `${filename}.txt`);
                break;
            case 'csv':
                const csv = `Field,Value\nUsername,${username}\nCategory,${this.category}\nDifficulty,${this.difficulty}\nRounds,${this.round}\nScore,${this.totalScore}\nDate,${date}`;
                this.saveBlob(new Blob([csv], { type: 'text/csv' }), `${filename}.csv`);
                break;
            case 'pdf':
                const { jsPDF } = window.jspdf;
                const doc = new jsPDF();
                doc.setFontSize(22);
                doc.text("HANGMAN QUEST REPORT", 20, 30);
                doc.setFontSize(14);
                doc.text(`Player: ${username}`, 20, 50);
                doc.text(`Category: ${this.category}`, 20, 60);
                doc.text(`Difficulty: ${this.difficulty}`, 20, 70);
                doc.text(`Rounds Completed: ${this.round}`, 20, 80);
                doc.text(`Final Score: ${this.totalScore}`, 20, 90);
                doc.text(`Date: ${date}`, 20, 100);
                doc.save(`${filename}.pdf`);
                break;
            case 'xlsx':
                const wb = XLSX.utils.book_new();
                const wsData = [
                    ["Field", "Value"],
                    ["Username", username],
                    ["Category", this.category],
                    ["Difficulty", this.difficulty],
                    ["Rounds", this.round],
                    ["Score", this.totalScore],
                    ["Date", date]
                ];
                const ws = XLSX.utils.aoa_to_sheet(wsData);
                XLSX.utils.book_append_sheet(wb, ws, "Quest Results");
                XLSX.writeFile(wb, `${filename}.xlsx`);
                break;
            case 'docx':
                // Simple HTML blob trick for basic DOCX
                const html = `
                    <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
                    <head><meta charset='utf-8'><title>Quest Report</title></head>
                    <body>
                        <h1>HANGMAN QUEST REPORT</h1>
                        <p><b>Player:</b> ${username}</p>
                        <p><b>Category:</b> ${this.category}</p>
                        <p><b>Difficulty:</b> ${this.difficulty}</p>
                        <p><b>Rounds:</b> ${this.round}</p>
                        <p><b>Score:</b> ${this.totalScore}</p>
                        <p><b>Date:</b> ${date}</p>
                    </body>
                    </html>
                `;
                this.saveBlob(new Blob([html], { type: 'application/msword' }), `${filename}.doc`);
                break;
        }
    }

    saveBlob(blob, filename) {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        link.click();
    }

    init() {
        // Setup UI info
        document.getElementById('display-category').textContent = this.category.replace('_', ' ');
        document.getElementById('display-difficulty').textContent = this.difficulty;
        document.getElementById('round-count').textContent = this.round;
        document.getElementById('streak-display').textContent = `🔥 Streak: ${this.streak}`;
        const hintBtn = document.getElementById('ai-hint-btn');
        if (hintBtn) hintBtn.style.display = 'none'; // Auto-hint enabled, hide button

        // Pick random word
        const wordsList = WORDS[this.category][this.difficulty];
        this.targetWord = wordsList[Math.floor(Math.random() * wordsList.length)].toUpperCase();

        // Reveal Hint automatically
        const hintText = document.getElementById('hint-text');
        if (hintText) {
            const hint = HINTS[this.targetWord] || `It's a word from the ${this.category} category.`;
            hintText.innerHTML = `<span style="color: var(--primary-color); font-weight: 800; text-transform: uppercase;">Hint:</span> ${hint}`;
        }

        // Reset per-round state
        this.guessedLetters = {}; // Reset counts
        this.wrongAttempts = 0;
        this.currentRoundScore = 0;
        this.isGameOver = false;

        this.resetHangmanSVG();

        // Auto-reveal spaces
        if (this.targetWord.includes(' ')) {
            this.guessedLetters[' '] = [...this.targetWord].filter(c => c === ' ').length;
        }

        this.renderWord();
        this.renderKeyboard();
        this.updateLives();
    }

    resetHangmanSVG() {
        for (let i = 0; i < 6; i++) {
            const part = document.getElementById(`part-${i}`);
            if (part) part.classList.remove('visible');
        }
    }

    renderWord() {
        const container = document.getElementById('word-display');
        container.innerHTML = '';

        // Track how many of each letter have been revealed
        const revealCounts = {};

        [...this.targetWord].forEach((char, index) => {
            const slot = document.createElement('div');
            slot.className = 'letter-slot';

            // Increment the count for this letter
            revealCounts[char] = (revealCounts[char] || 0) + 1;

            // Check if this specific instance (e.g., the 2nd 'S') has been guessed enough times
            const timesGuessed = this.guessedLetters[char] || 0;
            slot.textContent = (timesGuessed >= revealCounts[char]) ? char : '';

            container.appendChild(slot);
        });
    }

    renderKeyboard() {
        const container = document.getElementById('keyboard');
        container.innerHTML = '';
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        [...alphabet].forEach(char => {
            const btn = document.createElement('button');
            btn.className = 'key';
            btn.textContent = char;

            // If all instances of this letter are found, disable it
            const totalInWord = [...this.targetWord].filter(c => c === char).length;
            const currentlyGuessed = this.guessedLetters[char] || 0;
            if (totalInWord > 0 && currentlyGuessed >= totalInWord) {
                btn.disabled = true;
                btn.classList.add('correct');
            } else if (currentlyGuessed > 0 && totalInWord === 0) {
                btn.disabled = true;
                btn.classList.add('wrong');
            }

            btn.onclick = () => this.handleGuess(char, btn);
            container.appendChild(btn);
        });
    }

    handleGuess(letter, btnElement) {
        if (this.isGameOver) return;

        // In this version, we increment a counter for the letter
        this.guessedLetters[letter] = (this.guessedLetters[letter] || 0) + 1;

        const instancesInWord = [...this.targetWord].filter(c => c === letter).length;

        if (instancesInWord > 0) {
            // Correct guess (one instance)
            this.playSound('correct');
            this.totalScore += 20;
            this.renderWord();

            // If all instances are found now, mark as correct and disable
            if (this.guessedLetters[letter] >= instancesInWord) {
                btnElement.classList.add('correct');
                btnElement.disabled = true;
            }

            this.checkWin();
        } else {
            // Wrong guess
            btnElement.classList.add('wrong');
            btnElement.disabled = true;
            this.playSound('wrong');
            this.wrongAttempts++;
            this.showHangmanPart();
            this.updateLives();
            this.totalScore = Math.max(0, this.totalScore - 5);
            this.streak = 0;
            document.getElementById('streak-display').textContent = `🔥 Streak: ${this.streak}`;
            this.checkLose();
        }

        document.getElementById('score-display').textContent = `Score: ${this.totalScore}`;
    }



    showHangmanPart() {
        const part = document.getElementById(`part-${this.wrongAttempts - 1}`);
        if (part) part.classList.add('visible');
    }

    updateLives() {
        document.getElementById('lives-count').textContent = this.maxAttempts - this.wrongAttempts;
    }

    playSound(type) {
        const audio = document.getElementById(`sound-${type}`);
        if (audio) {
            audio.currentTime = 0;
            audio.play().catch(e => console.log('Audio disabled'));
        }
    }

    checkWin() {
        const isWon = [...this.targetWord].every(char => (this.guessedLetters[char] || 0) >= [...this.targetWord].filter(c => c === char).length);
        if (isWon) {
            this.totalScore += 50; // Round bonus
            this.streak++;
            this.endRound('WIN');
        }
    }

    checkLose() {
        if (this.wrongAttempts >= this.maxAttempts) {
            this.endRound('LOSE');
        }
    }

    async endRound(result) {
        this.isGameOver = true;
        this.playSound(result === 'WIN' ? 'win' : 'lose');

        if (result === 'WIN') {
            // Show brief animation or just load next round
            setTimeout(() => {
                if (!this.isGameOver) return; // Guard
                this.round++;
                this.init();
            }, 1500);

            // Notification
            this.showToast(`Round ${this.round} Complete! +50 Bonus`);
        } else {
            // Full Game Over or Quit Modal
            this.showGameOverModal(result);
        }
    }

    showToast(msg) {
        const toast = document.createElement('div');
        toast.style.cssText = `
            position: fixed; top: 100px; left: 50%; transform: translateX(-50%);
            background: var(--success); color: white; padding: 12px 24px;
            border-radius: 30px; font-weight: 800; z-index: 2000;
            box-shadow: 0 4px 15px rgba(0,0,0,0.3); animation: fadeIn 0.3s;
        `;
        toast.textContent = msg;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 2000);
    }

    async showGameOverModal(result) {
        const modal = document.getElementById('modal-overlay');
        const title = document.getElementById('modal-title');
        const msg = document.getElementById('modal-msg');
        const sc = document.getElementById('modal-score');
        const target = document.getElementById('target-word');

        if (result === 'QUIT') {
            title.textContent = 'QUEST ENDED';
            title.style.color = 'var(--warning)';
        } else {
            title.textContent = 'QUEST FAILED!';
            title.style.color = 'var(--danger)';
        }

        target.textContent = this.targetWord;
        sc.textContent = `${this.totalScore} pts (Reached Round ${this.round})`;

        modal.style.display = 'flex';

        try {
            await window.api.scores.save({
                score: this.totalScore,
                difficulty: this.difficulty,
                category: this.category,
                result: result === 'QUIT' ? 'quit' : 'lose'
            });
        } catch (error) {
            console.error('Failed to save:', error);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (!localStorage.getItem('token')) {
        window.location.href = '/index.html';
        return;
    }
    new HangmanGame();
});
