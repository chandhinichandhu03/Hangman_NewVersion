const WORDS_DATASET = {
    programming: {
        easy: [
            {
                word: 'CODE',
                meaning: 'Instructions written in a programming language.',
                synonyms: ['program', 'script', 'source'],
                antonyms: ['disorder', 'chaos'],
                fact: 'The first computer programmer was Ada Lovelace in 1843, who wrote an algorithm for Charles Babbage\'s mechanical engine.',
                origin: 'From Latin "codex", meaning block of wood or book.',
                pronunciation: '/koʊd/'
            },
            {
                word: 'LOOP',
                meaning: 'A sequence of instructions that is continually repeated until a condition is met.',
                synonyms: ['cycle', 'reiteration', 'sequence'],
                antonyms: ['stop', 'end', 'termination'],
                fact: 'Infinite loops can cause programs to freeze or crash because they consume all available memory or CPU.',
                origin: 'From Middle English "loupe", of Celtic origin.',
                pronunciation: '/luːp/'
            },
            {
                word: 'DATA',
                meaning: 'Facts and statistics collected together for reference or analysis.',
                synonyms: ['information', 'statistics', 'facts'],
                antonyms: ['nothing', 'void'],
                fact: 'The word "data" is technically plural; its singular form is "datum".',
                origin: 'From Latin "datum", meaning "something given".',
                pronunciation: '/ˈdeɪtə/'
            },
            {
                word: 'BUGS',
                meaning: 'Errors, flaws, or faults in a software program that cause it to produce incorrect results.',
                synonyms: ['error', 'defect', 'glitch'],
                antonyms: ['feature', 'correctness'],
                fact: 'The term "bug" was popularized by Grace Hopper in 1947 when she found a literal moth stuck in a relay of the Harvard Mark II computer.',
                origin: 'Middle English, originally meaning a phantom or goblin.',
                pronunciation: '/bʌɡz/'
            },
            {
                word: 'FILE',
                meaning: 'A resource for storing information, which is available to a computer program.',
                synonyms: ['document', 'record', 'folder'],
                antonyms: ['emptiness'],
                fact: 'The extension of a file (like .txt or .png) tells the operating system what application should open it.',
                origin: 'From Latin "filum", meaning "thread", because documents were kept on a string.',
                pronunciation: '/faɪl/'
            }
        ],
        medium: [
            {
                word: 'PYTHON',
                meaning: 'A high-level general-purpose programming language known for readability.',
                synonyms: ['language', 'scripting'],
                antonyms: ['low-level'],
                fact: 'Python was created by Guido van Rossum and named after the British comedy group "Monty Python".',
                origin: 'Created in late 1980s in the Netherlands.',
                pronunciation: '/ˈpaɪθɑːn/'
            },
            {
                word: 'DOCKER',
                meaning: 'A platform designed to build, run, and share containerized applications.',
                synonyms: ['containerizer', 'virtualizer'],
                antonyms: ['monolith'],
                fact: 'Docker containers share the host operating system kernel, making them much lighter than traditional Virtual Machines.',
                origin: 'Coined in 2013 from the word dockworker or docker.',
                pronunciation: '/ˈdɒkər/'
            },
            {
                word: 'SYNTAX',
                meaning: 'The set of rules that defines the combinations of symbols that are considered to be correctly structured programs.',
                synonyms: ['grammar', 'rules', 'structure'],
                antonyms: ['semantics', 'meaning'],
                fact: 'A single misplaced semicolon or bracket can cause a syntax error, preventing the program from compiling.',
                origin: 'From Greek "syntaxis", meaning "arrangement".',
                pronunciation: '/ˈsɪntæks/'
            },
            {
                word: 'SERVER',
                meaning: 'A computer program or device that provides functionality or resources to other clients.',
                synonyms: ['host', 'mainframe', 'provider'],
                antonyms: ['client', 'receiver'],
                fact: 'Tim Berners-Lee used a NeXT computer as the world\'s first web server in 1890.',
                origin: 'From Old French "servir", meaning "to serve".',
                pronunciation: '/ˈsɜːrvər/'
            },
            {
                word: 'GITHUB',
                meaning: 'A developer platform that allows developers to host, version-control, and share code.',
                synonyms: ['repository', 'git host'],
                antonyms: ['local drive'],
                fact: 'Github is home to over 100 million developers and the largest host of open-source projects in the world.',
                origin: 'Founded in 2008, combining Git (version control) and Hub.',
                pronunciation: '/ˈɡɪthʌb/'
            }
        ],
        hard: [
            {
                word: 'ALGORITHM',
                meaning: 'A process or set of rules to be followed in calculations or other problem-solving operations.',
                synonyms: ['procedure', 'formula', 'method'],
                antonyms: ['randomness', 'haphazardness'],
                fact: 'Search engines use algorithms to rank billions of web pages in milliseconds based on relevance.',
                origin: 'Derived from the Latinized name of the Persian mathematician Al-Khwarizmi.',
                pronunciation: '/ˈælɡərɪðəm/'
            },
            {
                word: 'RECURSION',
                meaning: 'A programming technique in which a function calls itself directly or indirectly.',
                synonyms: ['self-reference', 'looping'],
                antonyms: ['iteration'],
                fact: 'To prevent infinite recursion, a function must have a "base case" that stops the execution.',
                origin: 'From Latin "recurrere", meaning "to run back".',
                pronunciation: '/rɪˈkɜːrʒən/'
            },
            {
                word: 'BLOCKCHAIN',
                meaning: 'A decentralized, distributed ledger that records the provenance of a digital asset.',
                synonyms: ['ledger', 'cryptography'],
                antonyms: ['centralized database'],
                fact: 'The first block in a blockchain is called the "Genesis Block".',
                origin: 'Popularized by Satoshi Nakamoto in 2008 for Bitcoin.',
                pronunciation: '/ˈblɒktʃeɪn/'
            },
            {
                word: 'MIDDLEWARE',
                meaning: 'Software that acts as a bridge between an operating system or database and applications.',
                synonyms: ['bridge', 'intermediary'],
                antonyms: ['frontend', 'backend'],
                fact: 'In modern frameworks like Express, middleware functions execute sequentially to parse requests and handle authentication.',
                origin: 'Coined in 1968 at the NATO Software Engineering Conference.',
                pronunciation: '/ˈmɪdəlwer/'
            },
            {
                word: 'ENCRYPTION',
                meaning: 'The process of converting information or data into a code, especially to prevent unauthorized access.',
                synonyms: ['ciphering', 'encoding', 'cryptography'],
                antonyms: ['decryption', 'deciphering'],
                fact: 'Advanced Encryption Standard (AES) is used worldwide to secure online banking, messaging, and government secrets.',
                origin: 'From Greek "kryptos", meaning "hidden".',
                pronunciation: '/ɛnˈkrɪpʃən/'
            }
        ],
        expert: [
            {
                word: 'ASYNCHRONOUS',
                meaning: 'An execution model where operations can run independently of the main program flow, avoiding blocking.',
                synonyms: ['non-blocking', 'concurrent'],
                antonyms: ['synchronous', 'blocking'],
                fact: 'JavaScript utilizes an event loop to execute asynchronous tasks like network calls without freezing the browser interface.',
                origin: 'From Greek "a-" (not) + "syn" (together) + "chronos" (time).',
                pronunciation: '/eɪˈsɪŋkrənəs/'
            },
            {
                word: 'POLYMORPHISM',
                meaning: 'The provision of a single interface to entities of different types, in object-oriented programming.',
                synonyms: ['overriding', 'overloading', 'variety'],
                antonyms: ['monomorphism'],
                fact: 'Allows code to process objects differently depending on their data type or class, simplifying system extensibility.',
                origin: 'From Greek "poly" (many) + "morphe" (form).',
                pronunciation: '/ˌpɒlɪˈmɔːrfɪzəm/'
            },
            {
                word: 'HERMETICITY',
                meaning: 'The state or quality of being completely airtight or isolated from external execution environments.',
                synonyms: ['isolation', 'sandboxing'],
                antonyms: ['openness', 'leakiness'],
                fact: 'Hermetic build systems ensure that builds depend strictly on declared dependencies, ensuring identical results on any machine.',
                origin: 'Derived from Hermes Trismegistus, the patron of alchemy.',
                pronunciation: '/ˌhɜːrməˈtɪsɪti/'
            },
            {
                word: 'MEMOIZATION',
                meaning: 'An optimization technique used to speed up computer programs by storing the results of expensive function calls.',
                synonyms: ['caching', 'optimization'],
                antonyms: ['recalculation'],
                fact: 'Memoization is a specific form of caching that works only with pure functions (functions with no side effects).',
                origin: 'Coined by Donald Michie in 1968, derived from "memorandum".',
                pronunciation: '/ˌmɛmoʊaɪˈzeɪʃən/'
            },
            {
                word: 'CONTAINERIZATION',
                meaning: 'A form of virtualization where applications run in isolated user spaces called containers.',
                synonyms: ['sandboxing', 'virtualization'],
                antonyms: ['bare-metal'],
                fact: 'Unlike hardware virtualization, containerization virtualization occurs at the operating system level, saving memory.',
                origin: 'Adapted from physical cargo shipping methods in the mid-20th century.',
                pronunciation: '/kənˌteɪnəraɪˈzeɪʃən/'
            }
        ]
    },
    movies: {
        easy: [
            {
                word: 'JAWS',
                meaning: 'A famous thriller film about a man-eating great white shark attacking beachgoers.',
                synonyms: ['shark film', 'thriller'],
                antonyms: ['comedy'],
                fact: 'Jaws was the first film to reach $100 million at the box office, inventing the modern "summer blockbuster".',
                origin: 'Released in 1975, directed by Steven Spielberg.',
                pronunciation: '/dʒɔːz/'
            },
            {
                word: 'AVATAR',
                meaning: 'A sci-fi film depicting humans colonizing a habitable moon named Pandora.',
                synonyms: ['blockbuster', 'sci-fi'],
                antonyms: ['documentary'],
                fact: 'Avatar became the highest-grossing film of all time, utilizing groundbreaking 3D viewing technology.',
                origin: 'Directed by James Cameron, released in 2009.',
                pronunciation: '/ˈævətɑːr/'
            },
            {
                word: 'SHREK',
                meaning: 'An animated comedy about a grumpy ogre who finds his swamp occupied by fairy tale creatures.',
                synonyms: ['fairy tale', 'animation'],
                antonyms: ['horror'],
                fact: 'Shrek won the first-ever Academy Award for Best Animated Feature in 2002.',
                origin: 'Based on the 1990 book by William Steig.',
                pronunciation: '/ʃrɛk/'
            },
            {
                word: 'COCO',
                meaning: 'An animated movie about a boy transported to the Land of the Dead.',
                synonyms: ['musical', 'pixar'],
                antonyms: ['tragedy'],
                fact: 'Coco features an all-Latino voice cast and is heavily inspired by Mexico\'s Day of the Dead festival.',
                origin: 'Pixar Animation Studios, 2017.',
                pronunciation: '/ˈkoʊkoʊ/'
            },
            {
                word: 'DUNE',
                meaning: 'A sci-fi epic set on the desert planet Arrakis, containing rare spice.',
                synonyms: ['desert epic', 'sci-fi'],
                antonyms: ['romance'],
                fact: 'The "spice" in Dune is a substance that extends human life and enables interstellar travel.',
                origin: 'Based on Frank Herbert\'s legendary 1965 science fiction novel.',
                pronunciation: '/duːn/'
            }
        ],
        medium: [
            {
                word: 'TITANIC',
                meaning: 'An epic romance and disaster film focusing on the sinking of an unsinkable ship.',
                synonyms: ['romance', 'disaster'],
                antonyms: ['action'],
                fact: 'Titanic won 11 Academy Awards, a record tied only by Ben-Hur and Lord of the Rings: Return of the King.',
                origin: 'Directed by James Cameron, released in 1997.',
                pronunciation: '/taɪˈtænɪk/'
            },
            {
                word: 'BATMAN',
                meaning: 'A superhero movie featuring the Dark Knight of Gotham City fighting crime.',
                synonyms: ['caped crusader', 'superhero'],
                antonyms: ['villain'],
                fact: 'Christian Bale, Michael Keaton, and Ben Affleck have all played the titular character.',
                origin: 'Created by Bob Kane and Bill Finger in DC Comics (1939).',
                pronunciation: '/ˈbætˌmæn/'
            },
            {
                word: 'GLADIATOR',
                meaning: 'An epic historical drama following a betrayed Roman general who becomes a gladiator.',
                synonyms: ['historical drama', 'sword-and-sandal'],
                antonyms: ['modern sci-fi'],
                fact: 'Russell Crowe won the Oscar for Best Actor for his role as Maximus Decimus Meridius.',
                origin: 'Directed by Ridley Scott, 2000.',
                pronunciation: '/ˈɡlædiˌeɪtər/'
            },
            {
                word: 'INCEPTION',
                meaning: 'A heist film where thieves enter targets\' dreams to steal or plant ideas.',
                synonyms: ['mind-bending', 'heist'],
                antonyms: ['straightforward'],
                fact: 'The film\'s ending cut-to-black leaves the audience guessing if the top keeps spinning or falls.',
                origin: 'Written and directed by Christopher Nolan, 2010.',
                pronunciation: '/ɪnˈsɛpʃən/'
            },
            {
                word: 'FROZEN',
                meaning: 'A musical fantasy film following princess Anna on a journey to find her icy sister Elsa.',
                synonyms: ['disney', 'animation', 'musical'],
                antonyms: ['silent film'],
                fact: 'The song "Let It Go" spent 33 weeks in the Billboard top 100 chart.',
                origin: 'Inspired by Hans Christian Andersen\'s fairy tale "The Snow Queen".',
                pronunciation: '/ˈfroʊzən/'
            }
        ],
        hard: [
            {
                word: 'PULPFICTION',
                meaning: 'A crime film blending eclectic dialogue, dark humor, and nonlinear storylines.',
                synonyms: ['indie classic', 'crime thriller'],
                antonyms: ['mainstream romance'],
                fact: 'The movie\'s title refers to the cheap pulp magazines popular in the mid-20th century.',
                origin: 'Directed by Quentin Tarantino, 1994.',
                pronunciation: '/pʌlp ˈfɪkʃən/'
            },
            {
                word: 'MEMENTO',
                meaning: 'A mystery thriller about a man with short-term memory loss trying to find his wife\'s killer.',
                synonyms: ['psychological thriller', 'noir'],
                antonyms: ['linear drama'],
                fact: 'The movie is structured in two parts: one sequence in color running backward, and one in black-and-white running forward.',
                origin: 'Christopher Nolan, 2000; based on a story by his brother Jonathan.',
                pronunciation: '/mɪˈmɛntoʊ/'
            },
            {
                word: 'WHIPLASH',
                meaning: 'A film depicting the intense, abusive relationship between a jazz drummer student and his conductor.',
                synonyms: ['drumming drama', 'indie'],
                antonyms: ['light comedy'],
                fact: 'Miles Teller did his own drumming in the film, and the blood on the drum kit was real.',
                origin: 'Written and directed by Damien Chazelle, 2014.',
                pronunciation: '/ˈwɪpˌlæʃ/'
            },
            {
                word: 'AMADEUS',
                meaning: 'A period biographical drama movie about the fictionalized rivalry between Mozart and Salieri.',
                synonyms: ['biopic', 'period film'],
                antonyms: ['modern action'],
                fact: 'The movie won 8 Academy Awards and was filmed almost entirely in Prague using natural light.',
                origin: 'Based on Peter Shaffer\'s 1979 stage play.',
                pronunciation: '/ˌæməˈdeɪəs/'
            },
            {
                word: 'SCARFACE',
                meaning: 'A crime drama tracking the rise and fall of Cuban refugee drug lord Tony Montana.',
                synonyms: ['gangster film', 'mob movie'],
                antonyms: ['police procedural'],
                fact: 'Al Pacino\'s character famously says, "Say hello to my little friend!" before a major shootout.',
                origin: '1983 remake of the 1932 film of the same name.',
                pronunciation: '/ˈskærfeɪs/'
            }
        ],
        expert: [
            {
                word: 'CINEMATOGRAPHY',
                meaning: 'The art of photography and camerawork in filmmaking.',
                synonyms: ['filming', 'camerawork', 'visuals'],
                antonyms: ['editing', 'acting'],
                fact: 'Director of Photography (DP) coordinates lighting, lenses, and camera movement to establish the film\'s mood.',
                origin: 'From Greek "kinema" (movement) + "graphein" (to write).',
                pronunciation: '/ˌsɪnəməˈtɒɡrəfi/'
            },
            {
                word: 'CHAIAROSCURO',
                meaning: 'The distribution of light and shade in a picture, widely used in film noir to create suspense.',
                synonyms: ['contrast', 'shadowing'],
                antonyms: ['flat lighting'],
                fact: 'Originally an art technique popularized by Caravaggio, it was adopted by cinematic directors to portray moral ambiguity.',
                origin: 'From Italian "chiaro" (clear/light) + "scuro" (dark).',
                pronunciation: '/kiˌɑːrəˈskjʊəroʊ/'
            },
            {
                word: 'STEREOSCOPY',
                meaning: 'A technique for creating the illusion of depth in an image by means of stereoscopic binocular vision.',
                synonyms: ['3D imaging', 'depth-perception'],
                antonyms: ['2D flat visual'],
                fact: 'Used to record 3D movies by capturing two separate images representing left and right eyes.',
                origin: 'From Greek "stereos" (solid) + "skopein" (to look at).',
                pronunciation: '/ˌstɛriˈɒskəpi/'
            },
            {
                word: 'DIEGETIC',
                meaning: 'Sound whose source is visible on the screen or whose source is implied to be present by the action of the film.',
                synonyms: ['in-universe sound', 'realistic audio'],
                antonyms: ['non-diegetic', 'background score'],
                fact: 'Voices of characters, sounds made by objects in the story, and music from instruments inside the film are diegetic.',
                origin: 'From Greek "diegesis", meaning "narration or storytelling".',
                pronunciation: '/ˌdaɪəˈdʒɛtɪk/'
            },
            {
                word: 'ANAMORPHIC',
                meaning: 'A widescreen filming technique in which an image is squeezed horizontally by a special lens and stretched in projection.',
                synonyms: ['widescreen', 'lens-squeeze'],
                antonyms: ['spherical', 'standard screen'],
                fact: 'Anamorphic lenses are famous for creating horizontal blue lens flares and oval background blur (bokeh).',
                origin: 'From Greek "ana" (back/again) + "morphe" (form).',
                pronunciation: '/ˌænəˈmɔːrfɪk/'
            }
        ]
    },
    animals: {
        easy: [
            {
                word: 'BEAR',
                meaning: 'A large, heavy mammal with thick fur and a very short tail.',
                synonyms: ['grizzly', 'ursine'],
                antonyms: ['feline'],
                fact: 'Bears hibernate in winter to conserve energy when food supplies are low.',
                origin: 'From Proto-Germanic "beron", meaning "the brown one".',
                pronunciation: '/ber/'
            },
            {
                word: 'WOLF',
                meaning: 'A wild carnivorous mammal of the dog family, living and hunting in packs.',
                synonyms: ['lupine', 'wild dog'],
                antonyms: ['domestic dog'],
                fact: 'A wolf pack has a highly structured social hierarchy, led by an alpha male and female.',
                origin: 'From Proto-Germanic "wulfaz".',
                pronunciation: '/wʊlf/'
            },
            {
                word: 'DEER',
                meaning: 'A hoofed grazing or browsing animal, with branched bony antlers that are shed annually.',
                synonyms: ['stag', 'doe', 'fawn'],
                antonyms: ['predator'],
                fact: 'Only male deer grow antlers, with the exception of reindeer where both sexes grow them.',
                origin: 'From Old English "deor", meaning wild animal in general.',
                pronunciation: '/dɪər/'
            },
            {
                word: 'DUCK',
                meaning: 'A waterbird with a broad blunt bill, short legs, webbed feet, and a waddling gait.',
                synonyms: ['mallard', 'waterfowl'],
                antonyms: ['raptor'],
                fact: 'Ducks have highly waterproof feathers due to an oil gland near their tail.',
                origin: 'From Old English "duce", meaning "diver".',
                pronunciation: '/dʌk/'
            },
            {
                word: 'LION',
                meaning: 'A large tawny-colored cat that lives in social groups called prides.',
                synonyms: ['pride leader', 'feline'],
                antonyms: ['prey'],
                fact: 'Lions are known as the "King of the Jungle", but they actually live in grasslands and savannas, not jungles.',
                origin: 'From Latin "leo" and Greek "leon".',
                pronunciation: '/ˈlaɪən/'
            }
        ],
        medium: [
            {
                word: 'PANDA',
                meaning: 'A large bearlike mammal with characteristic black and white markings, native to China.',
                synonyms: ['bamboo bear'],
                antonyms: ['carnivore'],
                fact: 'Pandas must consume up to 38 kilograms of bamboo every day to meet their nutritional needs.',
                origin: 'From French "panda", originally of Nepali origin.',
                pronunciation: '/ˈpændə/'
            },
            {
                word: 'ZEBRA',
                meaning: 'An African wild horse with black-and-white stripes and an erect mane.',
                synonyms: ['striped horse', 'equine'],
                antonyms: ['predator'],
                fact: 'No two zebras have the exact same stripe pattern; they are as unique as human fingerprints.',
                origin: 'From Old Portuguese "zevra", meaning wild ass.',
                pronunciation: '/ˈziːbrə/'
            },
            {
                word: 'EAGLE',
                meaning: 'A large bird of prey with a massive hooked bill and long broad wings.',
                synonyms: ['raptor', 'bird of prey'],
                antonyms: ['prey bird'],
                fact: 'Eagles have eyesight that is at least four times sharper than that of a human.',
                origin: 'From Latin "aquila", meaning "black eagle".',
                pronunciation: '/ˈiːɡəl/'
            },
            {
                word: 'SHARK',
                meaning: 'A large predatory fish with a cartilaginous skeleton and multiple rows of teeth.',
                synonyms: ['elasmobranch', 'marine predator'],
                antonyms: ['herbivore fish'],
                fact: 'Sharks do not have bones; their skeleton is made entirely of cartilage, the same material as human ears.',
                origin: 'Origin uncertain, possibly from German "scharke", meaning villain.',
                pronunciation: '/ʃɑːrk/'
            },
            {
                word: 'KOALA',
                meaning: 'A bear-like arboreal Australian marsupial that feeds almost exclusively on eucalyptus leaves.',
                synonyms: ['native bear'],
                antonyms: ['placental mammal'],
                fact: 'Koalas sleep up to 20 hours a day because eucalyptus leaves require immense energy to digest.',
                origin: 'From Dharug (Australian Aboriginal language) "gula".',
                pronunciation: '/koʊˈɑːlə/'
            }
        ],
        hard: [
            {
                word: 'PLATYPUS',
                meaning: 'A semi-aquatic egg-laying mammal with a bill like a duck and webbed feet, native to Australia.',
                synonyms: ['duckbill', 'monotreme'],
                antonyms: ['placental'],
                fact: 'Male platypuses have venomous spurs on their hind feet, making them one of the few venomous mammals.',
                origin: 'From Greek "platupous", meaning "flat-footed".',
                pronunciation: '/ˈplætɪpəs/'
            },
            {
                word: 'CHAMELEON',
                meaning: 'A lizard known for its ability to change color, prehensile tail, and independently moving eyes.',
                synonyms: ['color-shifter', 'lizard'],
                antonyms: ['mammal'],
                fact: 'Chameleons change color not for camouflage, but to regulate body temperature and communicate mood.',
                origin: 'From Greek "khamaileon", meaning "dwarf lion".',
                pronunciation: '/kəˈmiːliən/'
            },
            {
                word: 'OCTOPUS',
                meaning: 'A soft-bodied, eight-limbed mollusk of the order Octopoda, highly intelligent.',
                synonyms: ['cephalopod', 'eight-limbed marine animal'],
                antonyms: ['vertebrate'],
                fact: 'An octopus has three hearts and blue blood (colored by copper-based hemocyanin).',
                origin: 'From Greek "oktopous", meaning "eight-footed".',
                pronunciation: '/ˈɒktəpəs/'
            },
            {
                word: 'KANGAROO',
                meaning: 'A large plant-eating marsupial with long powerful hind legs and a thick tail, native to Australia.',
                synonyms: ['macropod', 'marsupial'],
                antonyms: ['canine'],
                fact: 'Kangaroos cannot walk backward; their tail and muscular legs lock them in forward locomotion.',
                origin: 'From Guugu Yimithirr language word "gangurru".',
                pronunciation: '/ˌkæŋɡəˈruː/'
            },
            {
                word: 'RHINOCEROS',
                meaning: 'A large, heavily built plant-eating mammal with one or two horns on its snout.',
                synonyms: ['rhino', 'ungulate'],
                antonyms: ['rodent'],
                fact: 'Rhinoceros horns are not made of bone, but of keratin—the same protein that makes up human hair and nails.',
                origin: 'From Greek "rhinokeros", meaning "nose-horned".',
                pronunciation: '/raɪˈnɒsərəs/'
            }
        ],
        expert: [
            {
                word: 'MONOTREME',
                meaning: 'A primitive mammal that lays eggs instead of giving birth to live young.',
                synonyms: ['egg-laying mammal'],
                antonyms: ['marsupial', 'placental'],
                fact: 'Only five living species of monotremes exist: the platypus and four species of echidnas.',
                origin: 'From Greek "monos" (single) + "trema" (hole), referring to the cloaca.',
                pronunciation: '/ˈmɒnəʊtriːm/'
            },
            {
                word: 'PARTHENOGENESIS',
                meaning: 'A natural form of asexual reproduction in which growth and development of embryos occur without fertilization.',
                synonyms: ['asexual reproduction', 'virgin birth'],
                antonyms: ['sexual reproduction'],
                fact: 'Certain species of lizards, bees, and sharks can reproduce via parthenogenesis when mates are absent.',
                origin: 'From Greek "parthenos" (virgin) + "genesis" (origin).',
                pronunciation: '/ˌpɑːrθɪnoʊˈdʒɛnəsɪs/'
            },
            {
                word: 'ECHOLOCATION',
                meaning: 'The location of objects by reflected sound, used by animals such as bats and dolphins.',
                synonyms: ['sonar', 'bio-sonar'],
                antonyms: ['sight', 'vision'],
                fact: 'Bats emit high-frequency squeaks and parse the return echo to map obstacles and prey in total darkness.',
                origin: 'Coined by Donald Griffin in 1944, combining "echo" and "location".',
                pronunciation: '/ˌɛkoʊloʊˈkeɪʃən/'
            },
            {
                word: 'PREHENSILE',
                meaning: 'An animal limb or tail capable of grasping or holding objects.',
                synonyms: ['grasping', 'clinging'],
                antonyms: ['non-grasping'],
                fact: 'New World monkeys possess prehensile tails that function as a fifth limb, holding their full weight.',
                origin: 'From Latin "prehendere", meaning "to grasp".',
                pronunciation: '/prɪˈhɛnsaɪl/'
            },
            {
                word: 'MUTUALISM',
                meaning: 'An ecological interaction between two species where each individual benefits from the activity of the other.',
                synonyms: ['symbiosis', 'cooperation'],
                antonyms: ['parasitism', 'competition'],
                fact: 'Clownfish and sea anemones exhibit mutualism: the fish gets shelter, and the anemone gets clean and protected.',
                origin: 'Coined in 1873 to describe biological relationships.',
                pronunciation: '/ˈmjuːtʃuəlɪzəm/'
            }
        ]
    },
    countries: {
        easy: [
            {
                word: 'INDIA',
                meaning: 'A vast South Asian country with diverse terrain and heritage.',
                synonyms: ['bharat', 'hindustan'],
                antonyms: [],
                fact: 'India is the world\'s most populous country and the birthplace of chess, yoga, and major religions.',
                origin: 'Named after the Indus River.',
                pronunciation: '/ˈɪndiə/'
            },
            {
                word: 'CHINA',
                meaning: 'A populous nation in East Asia whose landscape spans grassland, desert, and mountains.',
                synonyms: ['zhongguo', 'peoples republic'],
                antonyms: [],
                fact: 'The Great Wall of China is the longest man-made structure in the world, stretching over 21,000 kilometers.',
                origin: 'Derived from the Qin Dynasty.',
                pronunciation: '/ˈtʃaɪnə/'
            },
            {
                word: 'BRAZIL',
                meaning: 'The largest country in both South America and Latin America.',
                synonyms: ['brasil'],
                antonyms: [],
                fact: 'Brazil is home to the Amazon Rainforest, which produces 20% of the Earth\'s oxygen.',
                origin: 'Named after the brazilwood tree.',
                pronunciation: '/brəˈzɪl/'
            },
            {
                word: 'ITALY',
                meaning: 'A boot-shaped European country with a long Mediterranean coastline.',
                synonyms: ['italia', 'italian republic'],
                antonyms: [],
                fact: 'Italy has the highest number of UNESCO World Heritage Sites in the world.',
                origin: 'Derived from ancient Oscan "Viteliu", meaning land of young bulls.',
                pronunciation: '/ˈɪtəli/'
            },
            {
                word: 'EGYPT',
                meaning: 'A country linking northeast Africa with the Middle East, rich in monuments.',
                synonyms: ['misr', 'land of pharaohs'],
                antonyms: [],
                fact: 'The Great Pyramid of Giza is the only surviving wonder of the Ancient World.',
                origin: 'From Greek "Aigyptos", representing the temple of Ptah in Memphis.',
                pronunciation: '/ˈiːdʒɪpt/'
            }
        ],
        medium: [
            {
                word: 'FRANCE',
                meaning: 'A country in Western Europe encompassing medieval cities, alpine villages, and beaches.',
                synonyms: ['la france', 'french republic'],
                antonyms: [],
                fact: 'France is the most visited country in the world, welcoming nearly 90 million tourists annually.',
                origin: 'Derived from the Germanic tribe of Franks.',
                pronunciation: '/fræns/'
            },
            {
                word: 'CANADA',
                meaning: 'A country in North America stretching from the US border to the Arctic Circle.',
                synonyms: ['great white north'],
                antonyms: [],
                fact: 'Canada contains over 60% of the world\'s lakes, containing major fresh water reserves.',
                origin: 'From Huron-Iroquois word "kanata", meaning "village" or "settlement".',
                pronunciation: '/ˈkænədə/'
            },
            {
                word: 'GERMANY',
                meaning: 'A Western European country with a landscape of forests, rivers, mountain ranges, and history.',
                synonyms: ['deutschland', 'federal republic'],
                antonyms: [],
                fact: 'Germany\'s Autobahn highway network is famous for having no federally mandated speed limit on sections.',
                origin: 'From Latin "Germania", used by Julius Caesar to describe tribes.',
                pronunciation: '/ˈdʒɜːrməni/'
            },
            {
                word: 'TURKEY',
                meaning: 'A nation straddling eastern Europe and western Asia, with cultural connections to ancient empires.',
                synonyms: ['turkiye', 'anatolia'],
                antonyms: [],
                fact: 'Istanbul, Turkey, is the only city in the world that spans across two continents (Europe and Asia).',
                origin: 'Named after the Turkic people.',
                pronunciation: '/ˈtɜːrki/'
            },
            {
                word: 'NORWAY',
                meaning: 'A Scandinavian country encompassing mountains, glaciers, and deep coastal fjords.',
                synonyms: ['norge', 'kingdom of norway'],
                antonyms: [],
                fact: 'Norway introduced salmon sushi to the Japanese in the 1980s as a trade initiative.',
                origin: 'From Old Norse "Norðvegr", meaning "the northward route".',
                pronunciation: '/ˈnɔːrweɪ/'
            }
        ],
        hard: [
            {
                word: 'SWITZERLAND',
                meaning: 'A mountainous Central European country, home to numerous lakes, villages, and high peaks.',
                synonyms: ['helvetia', 'swiss confederation'],
                antonyms: [],
                fact: 'Switzerland is famous for its political neutrality, having not fought an international war since 1815.',
                origin: 'Named after the canton of Schwyz.',
                pronunciation: '/ˈswɪtsərlənd/'
            },
            {
                word: 'ARGENTINA',
                meaning: 'A country in the southern half of South America, spanning the Andes mountains.',
                synonyms: ['argentine republic'],
                antonyms: [],
                fact: 'The tango dance originated in the suburbs of Buenos Aires in the late 19th century.',
                origin: 'From Latin "argentum", meaning silver, reflecting early explorers\' rumors of silver mountains.',
                pronunciation: '/ˌɑːrdʒənˈtiːnə/'
            },
            {
                word: 'SINGAPORE',
                meaning: 'A sovereign island country and city-state in maritime Southeast Asia.',
                synonyms: ['lion city', 'singapura'],
                antonyms: [],
                fact: 'Singapore is one of only three city-states in the world; the others are Monaco and Vatican City.',
                origin: 'From Sanskrit "Simhapura", meaning "Lion City".',
                pronunciation: '/ˈsɪŋəpɔːr/'
            },
            {
                word: 'LUXEMBOURG',
                meaning: 'A small European country, bordered by Belgium, France, and Germany, known for banking.',
                synonyms: ['grand duchy'],
                antonyms: [],
                fact: 'Luxembourg is the only remaining sovereign Grand Duchy in the world, ruled by a Grand Duke.',
                origin: 'From Saxon castle name "Lucilinburhuc", meaning "little fortress".',
                pronunciation: '/ˈlʌksəmbɜːrɡ/'
            },
            {
                word: 'INDONESIA',
                meaning: 'A country in Southeast Asia and Oceania, between the Indian and Pacific Oceans.',
                synonyms: ['nusantara'],
                antonyms: [],
                fact: 'Indonesia is the largest archipelagic state in the world, consisting of over 17,000 islands.',
                origin: 'From Greek "Indos" (India) and "nesos" (island).',
                pronunciation: '/ˌɪndəˈniːʒə/'
            }
        ],
        expert: [
            {
                word: 'LIECHTENSTEIN',
                meaning: 'A tiny, doubly landlocked German-speaking microstate between Austria and Switzerland.',
                synonyms: ['principality of liechtenstein'],
                antonyms: [],
                fact: 'Liechtenstein is the world\'s leading producer of high-quality false teeth, manufacturing 60 million individual units per year.',
                origin: 'Named after the Liechtenstein dynasty that purchased the land in 1699.',
                pronunciation: '/ˈlɪktənstaɪn/'
            },
            {
                word: 'MADAGASCAR',
                meaning: 'An island country lying off the southeastern coast of Africa, biodiversity hotspot.',
                synonyms: ['malagasy republic'],
                antonyms: [],
                fact: 'Over 90% of Madagascar\'s wildlife, including lemurs, is found nowhere else on Earth.',
                origin: 'Derived from "Madageiscar", a corruption of Mogadishu recorded by Marco Polo.',
                pronunciation: '/ˌmædəˈɡæskər/'
            },
            {
                word: 'AZERBAIJAN',
                meaning: 'A nation boundary between Eastern Europe and Western Asia, on the Caspian Sea.',
                synonyms: ['land of fire'],
                antonyms: [],
                fact: 'Known as the "Land of Fire" due to natural gas vents that burn constantly, like the Yanar Dag mountain.',
                origin: 'Derived from Atropates, a Persian satrap of the late 4th century BC.',
                pronunciation: '/ˌæzərbaɪˈdʒɑːn/'
            },
            {
                word: 'KYRGYZSTAN',
                meaning: 'A landlocked country in Central Asia, dominated by the Tian Shan mountain range.',
                synonyms: ['kyrgyz republic'],
                antonyms: [],
                fact: 'Kyrgyzstan has the world\'s longest read poem, the "Epic of Manas", which contains over 500,000 lines.',
                origin: 'Combines "Kyrgyz" (derived from Turkic "forty", representing tribes) + "stan" (land).',
                pronunciation: '/ˌkɪərɡɪˈstɑːn/'
            },
            {
                word: 'MAURITANIA',
                meaning: 'A country in Northwest Africa, bordered by the Atlantic Ocean and Sahara Desert.',
                synonyms: ['islamic republic of mauritania'],
                antonyms: [],
                fact: 'Mauritania contains the "Eye of the Sahara" (Richat Structure), a circular geological feature visible from space.',
                origin: 'Named after the ancient Berber kingdom of Mauretania.',
                pronunciation: '/ˌmɔːrɪˈteɪniə/'
            }
        ]
    },
    technology: {
        easy: [
            {
                word: 'CHIP',
                meaning: 'A small piece of semiconducting material, usually silicon, on which an integrated circuit is fabricated.',
                synonyms: ['microchip', 'processor', 'semiconductor'],
                antonyms: [],
                fact: 'Modern microchips can fit billions of individual transistors in an area the size of a fingernail.',
                origin: 'From Middle English meaning a small piece wood/stone.',
                pronunciation: '/tʃɪp/'
            },
            {
                word: 'WIFI',
                meaning: 'A facility allowing computers, smartphones, or other devices to connect to the internet wirelessly.',
                synonyms: ['wireless connection', 'wlan'],
                antonyms: ['wired cable'],
                fact: 'Wi-Fi was invented by Australian researchers attempting to detect exploding black holes using radio waves.',
                origin: 'Coined by branding firm Interbrand in 1999 as a play on "hi-fi" (high fidelity).',
                pronunciation: '/ˈwaɪ faɪ/'
            },
            {
                word: 'DRONE',
                meaning: 'An unmanned aerial vehicle or aircraft operated by remote control or onboard computers.',
                synonyms: ['quadcopter', 'uav'],
                antonyms: [],
                fact: 'Drones are widely used for mapping, aerial photography, agricultural inspection, and package delivery.',
                origin: 'Old English "dran", meaning male bee (making a low humming sound).',
                pronunciation: '/droʊn/'
            },
            {
                word: 'BYTE',
                meaning: 'A unit of data that is eight binary digits long, representing a single character.',
                synonyms: ['data unit'],
                antonyms: [],
                fact: 'The term "byte" was coined by Werner Buchholz in 1956, deliberate spelling swap of "bite" to avoid confusion with "bit".',
                origin: 'Formed from "bite" and "binary digit".',
                pronunciation: '/baɪt/'
            },
            {
                word: 'APP',
                meaning: 'An application, especially as downloaded by a user to a mobile device.',
                synonyms: ['application', 'software', 'program'],
                antonyms: [],
                fact: 'The Apple App Store launched in 2008 with only 500 apps; now it hosts over 1.8 million apps.',
                origin: 'Shortening of "application" popularized in the late 2000s.',
                pronunciation: '/æp/'
            }
        ],
        medium: [
            {
                word: 'LAPTOP',
                meaning: 'A microcomputer that is portable and suitable for use while traveling.',
                synonyms: ['notebook', 'portable computer'],
                antonyms: ['desktop computer'],
                fact: 'The Osborne 1, released in 1981, is considered the first portable computer, weighing 11 kilograms.',
                origin: 'Coined as a machine designed to be placed on a user\'s lap.',
                pronunciation: '/ˈlæpˌtɒp/'
            },
            {
                word: 'ROUTER',
                meaning: 'A power device that forwards data packets between computer networks.',
                synonyms: ['gateway', 'modem link'],
                antonyms: [],
                fact: 'Routers parse the destination IP address of incoming traffic and choose the fastest path to redirect it.',
                origin: 'From French "route", meaning path or highway.',
                pronunciation: '/ˈruːtər/'
            },
            {
                word: 'PIXEL',
                meaning: 'A minute area of illumination on a display screen, one of many from which an image is composed.',
                synonyms: ['picture element', 'dot'],
                antonyms: [],
                fact: 'An 8K display screen has over 33 million pixels displaying colors simultaneously.',
                origin: 'Combination of "pix" (pictures) and "el" (element) in 1965.',
                pronunciation: '/ˈpɪksəl/'
            },
            {
                word: 'SENSOR',
                meaning: 'A device which detects or measures a physical property and records or responds to it.',
                synonyms: ['detector', 'transducer'],
                antonyms: [],
                fact: 'Smartphones have over 10 sensors, including accelerometers, gyroscopes, magnetometers, and light sensors.',
                origin: 'From Latin "sensus", meaning "sense".',
                pronunciation: '/ˈsɛnsər/'
            },
            {
                word: 'MODEM',
                meaning: 'A combined device for modulation and demodulation, connecting computers to phone lines.',
                synonyms: ['network adapter'],
                antonyms: [],
                fact: 'Classic dial-up modems converted computer data into audible frequencies that sounded like screeches.',
                origin: 'Portmanteau of MOdulator-DEModulator coined in the 1950s.',
                pronunciation: '/ˈmoʊdəm/'
            }
        ],
        hard: [
            {
                word: 'PROCESSOR',
                meaning: 'An integrated circuit that performs the primary calculations and operational logic of a computer.',
                synonyms: ['central processing unit', 'cpu', 'silicon engine'],
                antonyms: [],
                fact: 'Moore\'s Law states that the number of transistors on microprocessors doubles roughly every two years.',
                origin: 'From Latin "procedere", meaning "to go forward".',
                pronunciation: '/ˈprɒsɛsər/'
            },
            {
                word: 'BROADBAND',
                meaning: 'A high-capacity transmission technique using a wide range of frequencies, enabling fast internet.',
                synonyms: ['high-speed connection', 'cable internet'],
                antonyms: ['dial-up', 'narrowband'],
                fact: 'Unlike dial-up, broadband does not block telephone lines and provides an "always-on" connection.',
                origin: 'From "broad" and "band" (range of frequencies) in the mid-20th century.',
                pronunciation: '/ˈbrɔːdbænd/'
            },
            {
                word: 'MAINFRAME',
                meaning: 'A large high-speed computer, especially one supporting numerous workstations or peripherals.',
                synonyms: ['central computer', 'host server'],
                antonyms: ['microcomputer'],
                fact: 'Mainframe computers are still widely used by banks and insurance companies to process billions of transactions securely.',
                origin: 'Refers to the large cabinet (frame) that housed the central processor in early computers.',
                pronunciation: '/ˈmeɪnfreɪm/'
            },
            {
                word: 'TELEMETRY',
                meaning: 'The automatic measurement and transmission of data from remote sources to receiving systems for monitoring.',
                synonyms: ['remote monitoring', 'log transmission'],
                antonyms: [],
                fact: 'Spacecraft transmit telemetry back to Earth, containing diagnostics about temperature, fuel levels, and speed.',
                origin: 'From Greek "tele" (far off) + "metron" (measure).',
                pronunciation: '/təˈlɛmɪtri/'
            },
            {
                word: 'FIRMWARE',
                meaning: 'Permanent software programmed into a read-only memory chip, providing hardware control.',
                synonyms: ['microcode', 'embedded code'],
                antonyms: ['app software'],
                fact: 'Firmware resides in non-volatile storage like ROM or flash memory, and boots before the operating system runs.',
                origin: 'Coined by Ascher Opler in 1967 to describe a status between hardware and software.',
                pronunciation: '/ˈfɜːrmwɛər/'
            }
        ],
        expert: [
            {
                word: 'MECHATRONICS',
                meaning: 'Technology combining electronics and mechanical engineering, used in automation.',
                synonyms: ['electromechanical engineering', 'robotics'],
                antonyms: [],
                fact: 'Mechatronics is critical to self-driving cars, industrial assembly robots, and smart prosthetic limbs.',
                origin: 'Coined by Tetsuro Mori, a senior engineer of Yaskawa Electric in 1969.',
                pronunciation: '/ˌmɛkəˈtrɒnɪks/'
            },
            {
                word: 'NANOTECHNOLOGY',
                meaning: 'The branch of technology that deals with dimensions and tolerances of less than 100 nanometers.',
                synonyms: ['molecular engineering'],
                antonyms: ['macro-engineering'],
                fact: 'A sheet of newspaper is about 100,000 nanometers thick, demonstrating the scale of nanotechnology.',
                origin: 'First defined by Norio Taniguchi in 1974.',
                pronunciation: '/ˌnænoʊtɛkˈnɒlədʒi/'
            },
            {
                word: 'CRYPTOGRAPHY',
                meaning: 'The art of writing or solving codes, securing communication in the presence of adversaries.',
                synonyms: ['ciphering', 'encryption coding'],
                antonyms: ['plaintext'],
                fact: 'Public-key cryptography uses a pair of keys: a public key for encryption and a private key for decryption.',
                origin: 'From Greek "kryptos" (hidden) + "graphein" (to write).',
                pronunciation: '/krɪpˈtɒɡrəfi/'
            },
            {
                word: 'SUPERCONDUCTOR',
                meaning: 'A substance capable of conducting electricity without resistance, typically at very low temperatures.',
                synonyms: ['zero-resistance conductor'],
                antonyms: ['insulator', 'resistor'],
                fact: 'Superconductors exhibit the Meissner effect, where they expel magnetic fields, allowing magnets to levitate above them.',
                origin: 'Discovered by Heike Kamerlingh Onnes in 1911.',
                pronunciation: '/ˌsuːpərkənˈdʌktər/'
            },
            {
                word: 'CYBERSECURITY',
                meaning: 'The state of being protected against the unauthorized use of electronic data, or the measures taken to achieve this.',
                synonyms: ['it security', 'digital defense'],
                antonyms: ['cybercrime', 'vulnerability'],
                fact: 'Ransomware is a major cybersecurity threat where attackers encrypt files and demand payment for decryption keys.',
                origin: 'Coined in the late 1980s as computer networks began expanding globally.',
                pronunciation: '/ˌsaɪbərsɪˈkjʊərɪti/'
            }
        ]
    },
    sports: {
        easy: [
            {
                word: 'GOLF',
                meaning: 'A game played on a large open-air course, in which a small hard ball is struck with clubs into holes.',
                synonyms: ['links game'],
                antonyms: [],
                fact: 'Golf is one of the only two sports ever played on the Moon; Alan Shepard hit a golf ball on the Moon in 1971.',
                origin: 'From Scottish word "gouf", meaning to strike.',
                pronunciation: '/ɡɒlf/'
            },
            {
                word: 'SWIM',
                meaning: 'Propel oneself through water using the limbs.',
                synonyms: ['diving', 'aquatic movement'],
                antonyms: ['sinking', 'walking'],
                fact: 'Swimming burns major calories because water is roughly 800 times denser than air, providing resistance.',
                origin: 'Old English "swimman".',
                pronunciation: '/swɪm/'
            },
            {
                word: 'POLO',
                meaning: 'A game played on horseback with long-handled mallets and a wooden ball.',
                synonyms: ['horse game'],
                antonyms: [],
                fact: 'Polo originated in ancient Persia around the 6th century BC as a training game for cavalry units.',
                origin: 'From Balti (Tibetan dialect) word "pulu", meaning ball.',
                pronunciation: '/ˈpoʊloʊ/'
            },
            {
                word: 'GOAL',
                meaning: 'The object of a player\'s ambition or effort; an area where balls are directed to score points.',
                synonyms: ['objective', 'target', 'score post'],
                antonyms: [],
                fact: 'In soccer, the standard dimensions of a goal are 7.32 meters wide and 2.44 meters high.',
                origin: 'Middle English "gol", meaning boundary or limit.',
                pronunciation: '/ɡoʊl/'
            },
            {
                word: 'JUDO',
                meaning: 'A sport of Japanese origin in which the combatants attempt to throw or pin their opponent.',
                synonyms: ['martial art', 'grappling'],
                antonyms: [],
                fact: 'Judo translates to "the gentle way", emphasizing using the opponent\'s own strength and momentum against them.',
                origin: 'Created in Japan in 1882 by Jigoro Kano.',
                pronunciation: '/ˈdʒuːdoʊ/'
            }
        ],
        medium: [
            {
                word: 'SOCCER',
                meaning: 'A game played by two teams of eleven players with a round ball that may not be touched with hands.',
                synonyms: ['football', 'association football'],
                antonyms: [],
                fact: 'Soccer is the most popular sport in the world, with over 4 billion active fans globally.',
                origin: 'Abbreviation of "association" (assoc) + "-er" in 19th-century England.',
                pronunciation: '/ˈsɒkər/'
            },
            {
                word: 'TENNIS',
                meaning: 'A racket sport played individually against a single opponent or between two teams of two players.',
                synonyms: ['court game', 'lawn tennis'],
                antonyms: [],
                fact: 'Wimbledon is the oldest tennis tournament in the world, requiring players to wear all-white outfits.',
                origin: 'From French "tenez", meaning "take!" or "receive!" shouted by servers.',
                pronunciation: '/ˈtɛnɪs/'
            },
            {
                word: 'BOXING',
                meaning: 'A sport in which two opponents fight using their fists, wearing protective gloves.',
                synonyms: ['pugilism', 'prizefighting'],
                antonyms: [],
                fact: 'Modern boxing rules are based on the Marquess of Queensberry rules, established in 1867.',
                origin: 'Old English "box", meaning to blow or strike.',
                pronunciation: '/ˈbɒksɪŋ/'
            },
            {
                word: 'CRICKET',
                meaning: 'A bat-and-ball game played between two teams of eleven players on a field centered on a pitch.',
                synonyms: ['wicket game'],
                antonyms: [],
                fact: 'The longest cricket match in history lasted 9 days between South Africa and England in 1939.',
                origin: 'Derived from Middle Dutch "kricke", meaning a stick.',
                pronunciation: '/ˈkrɪkɪt/'
            },
            {
                word: 'CYCLING',
                meaning: 'The sport or activity of riding a bicycle.',
                synonyms: ['biking', 'wheel movement'],
                antonyms: [],
                fact: 'The Tour de France is the most famous cycling race in the world, covering over 3,500 kilometers.',
                origin: 'From Greek "kuklos", meaning circle or wheel.',
                pronunciation: '/ˈsaɪklɪŋ/'
            }
        ],
        hard: [
            {
                word: 'BASKETBALL',
                meaning: 'A game played between two teams of five players, scoring by throwing a ball through an elevated hoop.',
                synonyms: ['hoop game'],
                antonyms: [],
                fact: 'Basketball was invented in 1891 by James Naismith, who used peach baskets as the original hoops.',
                origin: 'Coined by Naismith from the words "basket" and "ball".',
                pronunciation: '/ˈbɑːskɪtbɔːl/'
            },
            {
                word: 'GYMNASTICS',
                meaning: 'Exercises developing or demonstrating physical agility, coordination, and strength.',
                synonyms: ['tumbling', 'aerobics'],
                antonyms: [],
                fact: 'In gymnastics, scoring was capped at a perfect 10 until 2006, when the system split difficulty and execution.',
                origin: 'From Greek "gymnazein", meaning "to train naked".',
                pronunciation: '/dʒɪmˈnæstɪks/'
            },
            {
                word: 'WRESTLING',
                meaning: 'A sport of physical combat where competitors grapple to pin each other.',
                synonyms: ['grappling', 'clinch fight'],
                antonyms: [],
                fact: 'Wrestling is depicted in ancient cave drawings dating back over 15,000 years, making it one of the oldest sports.',
                origin: 'From Old English "wræstlian", meaning to twist or turn.',
                pronunciation: '/ˈrɛslɪŋ/'
            },
            {
                word: 'ATHLETICS',
                meaning: 'A collection of sporting events that involve competitive running, jumping, throwing, and walking.',
                synonyms: ['track and field'],
                antonyms: [],
                fact: 'Athletics was the core component of the ancient Olympic Games in Greece, which began in 776 BC.',
                origin: 'From Greek "athletes", meaning "contestant for a prize".',
                pronunciation: '/æθˈlɛtɪks/'
            },
            {
                word: 'BADMINTON',
                meaning: 'A racket sport played using a shuttlecock across a high net.',
                synonyms: ['shuttlecock game'],
                antonyms: [],
                fact: 'The shuttlecock, or "birdie", is made from the left-wing feathers of a goose.',
                origin: 'Named after the Duke of Beaufort\'s Badminton House in Gloucestershire.',
                pronunciation: '/ˈbædmɪntən/'
            }
        ],
        expert: [
            {
                word: 'EQUESTRIAN',
                meaning: 'The skill or sport of horse riding, horse-driving, or vaulting.',
                synonyms: ['horsemanship', 'riding'],
                antonyms: [],
                fact: 'Equestrianism is the only Olympic sport where men and women compete directly on equal terms.',
                origin: 'From Latin "equester", meaning "belonging to a horseman".',
                pronunciation: '/ɪˈkwɛstriən/'
            },
            {
                word: 'DECATHLON',
                meaning: 'An athletic event taking place over two days, consisting of ten track and field events.',
                synonyms: ['ten-event contest'],
                antonyms: [],
                fact: 'The winner of the Olympic decathlon is traditionally crowned the title of "World\'s Greatest Athlete".',
                origin: 'From Greek "deka" (ten) + "athlon" (contest).',
                pronunciation: '/dɪˈkæθlɒn/'
            },
            {
                word: 'STEEPLECHASE',
                meaning: 'A track race over hurdles and water jumps, or a horse race over fences.',
                synonyms: ['obstacle race'],
                antonyms: [],
                fact: 'Historically, the race was run from one church steeple to another, jumping over streams and stone walls.',
                origin: 'Originating in Ireland in 18th-century cross-country horse racing.',
                pronunciation: '/ˈstiːpəltʃeɪs/'
            },
            {
                word: 'VELODROME',
                meaning: 'An arena for track cycling, featuring a banked oval track.',
                synonyms: ['cycling track'],
                antonyms: [],
                fact: 'Velodrome tracks are steeply banked, up to 45 degrees, allowing riders to maintain high speeds in corners.',
                origin: 'From French "velodrome", combining "velocipede" (bicycle) + Greek "dromos" (course).',
                pronunciation: '/ˈvɛlədroʊm/'
            },
            {
                word: 'BIATHLON',
                meaning: 'A winter sport combining cross-country skiing and rifle shooting.',
                synonyms: ['ski-shoot contest'],
                antonyms: [],
                fact: 'Competitors must control their heart rate from full exertion to total calm to aim and fire rifles accurately.',
                origin: 'From Greek "bi-" (two) + "athlon" (contest) in 1958.',
                pronunciation: '/baɪˈæθlɒn/'
            }
        ]
    },
    science: {
        easy: [
            {
                word: 'ATOM',
                meaning: 'The basic unit of a chemical element, consisting of protons, neutrons, and electrons.',
                synonyms: ['particle', 'micro-unit'],
                antonyms: ['molecule', 'macro-compound'],
                fact: 'An atom is mostly empty space; if an atom were the size of a sports stadium, the nucleus would be a marble.',
                origin: 'From Greek "atomos", meaning "indivisible".',
                pronunciation: '/ˈætəm/'
            },
            {
                word: 'CELL',
                meaning: 'The basic structural, functional, and biological unit of all known living organisms.',
                synonyms: ['organism unit', 'micro-cell'],
                antonyms: [],
                fact: 'The human body contains an estimated 37 trillion cells, working together in tissues and organs.',
                origin: 'From Latin "cella", meaning "small room".',
                pronunciation: '/sɛl/'
            },
            {
                word: 'ACID',
                meaning: 'A chemical substance that neutralizes alkalis, turns litmus paper red, and has a pH less than 7.',
                synonyms: ['corrosive agent', 'sour substance'],
                antonyms: ['base', 'alkali'],
                fact: 'Stomach acid (hydrochloric acid) is strong enough to dissolve metal, but the stomach lining shields itself.',
                origin: 'From Latin "acidus", meaning "sour or sharp".',
                pronunciation: '/ˈæsɪd/'
            },
            {
                word: 'MASS',
                meaning: 'A coherent, typically large body of matter with no definite shape; the quantity of matter in an object.',
                synonyms: ['weight-measure', 'substance'],
                antonyms: ['nothingness', 'vacuum'],
                fact: 'Unlike weight, mass remains constant regardless of gravity; your mass is identical on Earth and the Moon.',
                origin: 'From Latin "massa", meaning lump or dough.',
                pronunciation: '/mæs/'
            },
            {
                word: 'GENE',
                meaning: 'A unit of heredity which is transferred from a parent to offspring to determine characteristics.',
                synonyms: ['hereditary factor', 'dna sequence'],
                antonyms: [],
                fact: 'Humans share approximately 60% of their genes with bananas, reflecting primitive molecular machinery.',
                origin: 'Coined by Wilhelm Johannsen in 1909 from Greek "genesis" (origin).',
                pronunciation: '/dʒiːn/'
            }
        ],
        medium: [
            {
                word: 'PHYSICS',
                meaning: 'The branch of science concerned with the nature and properties of matter and energy.',
                synonyms: ['natural philosophy', 'mechanics'],
                antonyms: [],
                fact: 'Physics deals with scales ranging from subatomic particles (quarks) to the entire observable universe.',
                origin: 'From Greek "physika", meaning "natural things".',
                pronunciation: '/ˈfɪzɪks/'
            },
            {
                word: 'BIOLOGY',
                meaning: 'The scientific study of life and living organisms, including their structure, growth, and evolution.',
                synonyms: ['life science'],
                antonyms: [],
                fact: 'The word "biology" was popularized by Jean-Baptiste Lamarck in 1802.',
                origin: 'From Greek "bios" (life) + "logia" (study of).',
                pronunciation: '/baɪˈɒlədʒi/'
            },
            {
                word: 'GRAVITY',
                meaning: 'The force that attracts a body toward the center of the earth, or toward any other physical body.',
                synonyms: ['gravitational pull', 'attraction'],
                antonyms: ['levitation', 'buoyancy'],
                fact: 'In general relativity, gravity is described as the curvature of spacetime caused by mass and energy.',
                origin: 'From Latin "gravitas", meaning "weight or heaviness".',
                pronunciation: '/ˈɡrævɪti/'
            },
            {
                word: 'OXYGEN',
                meaning: 'A colorless, odorless reactive gas, the chemical element of atomic number 8.',
                synonyms: ['life gas', 'element 8'],
                antonyms: [],
                fact: 'Liquid oxygen is pale blue and highly magnetic, reacting strongly to magnetic fields.',
                origin: 'From Greek "oxys" (acid) + "genes" (producer), named by Antoine Lavoisier.',
                pronunciation: '/ˈɒksɪdʒən/'
            },
            {
                word: 'MATTER',
                meaning: 'Physical substance in general, as distinct from mind and spirit; that which occupies space.',
                synonyms: ['substance', 'physical mass'],
                antonyms: ['antimatter', 'vacuum'],
                fact: 'Matter can exist in states other than solid, liquid, and gas—such as plasma and Bose-Einstein condensates.',
                origin: 'From Latin "materia", meaning "timber or source material".',
                pronunciation: '/ˈmætər/'
            }
        ],
        hard: [
            {
                word: 'CHEMISTRY',
                meaning: 'The branch of science that deals with the identification of the substances of which matter is composed.',
                synonyms: ['chemical science', 'alchemy science'],
                antonyms: [],
                fact: 'Chemistry was historically derived from alchemy, which attempted to transmute lead into gold.',
                origin: 'From Arabic "al-kimiya", meaning the art of transformation.',
                pronunciation: '/ˈkɛmɪstri/'
            },
            {
                word: 'EVOLUTION',
                meaning: 'The process by which different kinds of living organisms are thought to have developed from earlier forms.',
                synonyms: ['adaptation', 'natural selection', 'development'],
                antonyms: ['stasis'],
                fact: 'Charles Darwin did not write the word "evolution" until the sixth edition of "On the Origin of Species".',
                origin: 'From Latin "evolutio", meaning "unrolling of a book".',
                pronunciation: '/ˌiːvəˈluːʃən/'
            },
            {
                word: 'ASTRONOMY',
                meaning: 'The branch of science that deals with celestial objects, space, and the physical universe.',
                synonyms: ['stargazing', 'space science'],
                antonyms: [],
                fact: 'The light we see from stars took thousands of years to travel to Earth, showing the stars as they were.',
                origin: 'From Greek "astron" (star) + "nomos" (lawing).',
                pronunciation: '/əˈstrɒnəmi/'
            },
            {
                word: 'MAGNETISM',
                meaning: 'A physical phenomenon produced by the motion of electric charge, resulting in attractive forces.',
                synonyms: ['magnetic force', 'attraction power'],
                antonyms: ['repulsion'],
                fact: 'The Earth acts as a giant magnet, shielding life from harmful cosmic radiation using the magnetosphere.',
                origin: 'Named after Magnesia, a region in Greece where loadstones were discovered.',
                pronunciation: '/ˈmæɡnɪtɪzəm/'
            },
            {
                word: 'NEUROLOGY',
                meaning: 'The branch of medicine or science dealing with the anatomy, functions, and organic disorders of nerves.',
                synonyms: ['brain science', 'nervous system study'],
                antonyms: [],
                fact: 'The brain contains approximately 86 billion neurons, sending signals at speeds of up to 430 km/h.',
                origin: 'From Greek "neuron" (nerve) + "logia" (study of).',
                pronunciation: '/njʊəˈrɒlədʒi/'
            }
        ],
        expert: [
            {
                word: 'ENTROPY',
                meaning: 'A thermodynamic quantity representing the unavailability of a system\'s thermal energy for conversion.',
                synonyms: ['disorder', 'randomness'],
                antonyms: ['order', 'organization'],
                fact: 'The Second Law of Thermodynamics states that the total entropy of an isolated system always increases over time.',
                origin: 'Coined by Rudolf Clausius in 1865, from Greek "entrope", meaning transformation.',
                pronunciation: '/ˈɛntrəpi/'
            },
            {
                word: 'MITOCHONDRIA',
                meaning: 'An organelle found in large numbers in most cells, in which biochemical processes of respiration occur.',
                synonyms: ['cellular powerhouse', 'organelle'],
                antonyms: [],
                fact: 'Mitochondria possess their own distinct DNA, inherited exclusively from the maternal parent.',
                origin: 'From Greek "mitos" (thread) + "chondrion" (granule).',
                pronunciation: '/ˌmaɪtəˈkɒndriə/'
            },
            {
                word: 'CHROMATOGRAPHY',
                meaning: 'A technique for the separation of a mixture by passing it in solution or suspension through a medium.',
                synonyms: ['separation analysis'],
                antonyms: [],
                fact: 'Used to analyze inks, food dyes, blood samples, and identify contaminants in forensic science.',
                origin: 'From Greek "chroma" (color) + "graphein" (to write).',
                pronunciation: '/ˌkroʊməˈtɒɡrəfi/'
            },
            {
                word: 'ASTROPHYSICS',
                meaning: 'The branch of astronomy concerned with the physical relations of celestial bodies.',
                synonyms: ['space physics'],
                antonyms: [],
                fact: 'Astrophysicists use spectral lines of starlight to deduce the chemical composition of distant galaxies.',
                origin: 'Combines "astron" (star) + "physika" (physics) in the late 19th century.',
                pronunciation: '/ˌæstroʊˈfɪzɪks/'
            },
            {
                word: 'PHOTOSYNTHESIS',
                meaning: 'The process by which green plants use sunlight to synthesize nutrients from carbon dioxide and water.',
                synonyms: ['carbon fixation', 'plant energy conversion'],
                antonyms: [],
                fact: 'Chlorophyll absorbs red and blue light, reflecting green light, which is why plants appear green.',
                origin: 'From Greek "phos" (light) + "synthesis" (putting together).',
                pronunciation: '/ˌfoʊtoʊˈsɪnθəsɪs/'
            }
        ]
    },
    history: {
        easy: [
            {
                word: 'ROME',
                meaning: 'The capital city of Italy, historically the center of a massive empire.',
                synonyms: ['eternal city'],
                antonyms: [],
                fact: 'At its peak, the Roman Empire spanned three continents and contained over 20% of the world\'s population.',
                origin: 'Legend says it was founded in 753 BC by twins Romulus and Remus.',
                pronunciation: '/roʊm/'
            },
            {
                word: 'KING',
                meaning: 'The male ruler of an independent state, especially one who inherits the position.',
                synonyms: ['monarch', 'ruler', 'sovereign'],
                antonyms: ['subject', 'peasant'],
                fact: 'King Louis XIV of France ruled for 72 years, the longest verified reign of any sovereign in history.',
                origin: 'From Proto-Germanic "kuningaz", meaning "lineage ruler".',
                pronunciation: '/kɪŋ/'
            },
            {
                word: 'WARS',
                meaning: 'Periods of armed conflict between different countries or different groups within a country.',
                synonyms: ['battle', 'hostilities', 'conflict'],
                antonyms: ['peace', 'treaty'],
                fact: 'The shortest war in history was between Britain and Zanzibar in 1896; Zanzibar surrendered after 38 minutes.',
                origin: 'From Old French "werre", meaning "to confuse or embroil".',
                pronunciation: '/wɔːrz/'
            },
            {
                word: 'TOMB',
                meaning: 'A large vault, typically an underground one, for burying the dead.',
                synonyms: ['sepulchre', 'grave', 'crypt'],
                antonyms: [],
                fact: 'The tomb of Emperor Qin Shi Huang contains the Terracotta Army, thousands of clay soldiers guarding his rest.',
                origin: 'From Greek "tumbos", meaning burial mound.',
                pronunciation: '/tuːm/'
            },
            {
                word: 'NILE',
                meaning: 'A major north-flowing river in northeastern Africa, critical to ancient history.',
                synonyms: ['egyptian river'],
                antonyms: [],
                fact: 'Ancient Egyptians based their calendar on the Nile\'s annual flooding, which provided fertile silt.',
                origin: 'From Greek "Neilos", representing the river valley.',
                pronunciation: '/naɪl/'
            }
        ],
        medium: [
            {
                word: 'EMPIRE',
                meaning: 'An extensive group of states or countries under a single supreme authority, typically an emperor.',
                synonyms: ['realm', 'sovereignty', 'kingdom'],
                antonyms: ['republic', 'democracy'],
                fact: 'The British Empire was the largest empire in history, covering a quarter of the Earth\'s total land area.',
                origin: 'From Latin "imperium", meaning command or authority.',
                pronunciation: '/ˈɛmpaɪər/'
            },
            {
                word: 'DYNASTY',
                meaning: 'A line of hereditary rulers of a country.',
                synonyms: ['house', 'lineage', 'regime'],
                antonyms: [],
                fact: 'The Yamato Dynasty of Japan is the oldest continuous hereditary monarchy in the world, starting in 660 BC.',
                origin: 'From Greek "dynasteia", meaning power or lordship.',
                pronunciation: '/ˈdɪnəsti/'
            },
            {
                word: 'PAPYRUS',
                meaning: 'A material prepared in ancient Egypt from the pithy stem of a water plant, used to write on.',
                synonyms: ['scroll', 'parchment', 'paper'],
                antonyms: [],
                fact: 'Papyrus rolls were sensitive to dampness, which is why ancient scrolls survived mainly in dry deserts.',
                origin: 'From Greek "papyros", the source of the English word "paper".',
                pronunciation: '/pəˈraɪərəs/'
            },
            {
                word: 'VIKINGS',
                meaning: 'Scandinavian seafaring pirates and traders who raided and settled in Europe from the 8th to 11th centuries.',
                synonyms: ['norsemen', 'raiders'],
                antonyms: [],
                fact: 'Vikings never actually wore horned helmets in battle; this was a myth created by 19th-century costume designers.',
                origin: 'From Old Norse "vikingr", meaning "creek-dweller or pirate".',
                pronunciation: '/ˈvaɪkɪŋz/'
            },
            {
                word: 'COLOSSEUM',
                meaning: 'A large amphitheater in Rome, famous for gladiatorial contests.',
                synonyms: ['amphitheater', 'arena'],
                antonyms: [],
                fact: 'The Colosseum could hold up to 80,000 spectators and had a retractable canvas awning to provide shade.',
                origin: 'Named after a colossal statue of Nero that stood nearby.',
                pronunciation: '/ˌkɒləˈsiːəm/'
            }
        ],
        hard: [
            {
                word: 'FEUDALISM',
                meaning: 'The dominant social system in medieval Europe, based on land holding in exchange for military service.',
                synonyms: ['manorialism', 'vassalage'],
                antonyms: ['capitalism', 'mercantilism'],
                fact: 'Under feudalism, serfs were legally bound to the land and could not leave without their lord\'s permission.',
                origin: 'From Medieval Latin "feodum", meaning fief or land estate.',
                pronunciation: '/ˈfjuːdəlɪzəm/'
            },
            {
                word: 'RENAISSANCE',
                meaning: 'The revival of European art and literature under the influence of classical models in the 14th–16th centuries.',
                synonyms: ['rebirth', 'cultural revival'],
                antonyms: ['dark ages'],
                fact: 'The Renaissance began in Florence, Italy, funded heavily by the wealthy Medici banking family.',
                origin: 'From French, meaning literally "rebirth".',
                pronunciation: '/rəˈneɪsəns/'
            },
            {
                word: 'PARCHMENT',
                meaning: 'A stiff, thin material made from the prepared skin of an animal and used as a durable writing surface.',
                synonyms: ['vellum', 'scroll skin'],
                antonyms: ['papyrus'],
                fact: 'Parchment was highly durable; historical documents like the Magna Carta were written on it, surviving centuries.',
                origin: 'Named after the ancient city of Pergamon, where it was refined.',
                pronunciation: '/ˈpɑːrtʃmənt/'
            },
            {
                word: 'CRUSADES',
                meaning: 'A series of medieval military expeditions made by Europeans to recover the Holy Land from Muslim rule.',
                synonyms: ['holy wars', 'campaigns'],
                antonyms: [],
                fact: 'There were nine major Crusades spanning over two centuries, dramatically altering European-Middle Eastern trade.',
                origin: 'From French "croisade", meaning "marked with the cross".',
                pronunciation: '/kruːˈseɪdz/'
            },
            {
                word: 'SCRIPTORIUM',
                meaning: 'A room set apart for writing, especially one in a monastery where manuscripts were copied by scribes.',
                synonyms: ['writing room', 'monastic study'],
                antonyms: [],
                fact: 'Monastic scriptoria were kept quiet and unheated to prevent candles from melting or dripping on costly vellum.',
                origin: 'From Latin "scribere", meaning "to write".',
                pronunciation: '/skrɪpˈtɔːriəm/'
            }
        ],
        expert: [
            {
                word: 'PALEOGRAPHY',
                meaning: 'The study of ancient writing systems and the deciphering and dating of historical manuscripts.',
                synonyms: ['manuscript study', 'ancient script decoding'],
                antonyms: [],
                fact: 'Paleography is crucial to dating documents before printing, analyzing changes in letterforms and abbreviations.',
                origin: 'From Greek "palaios" (old) + "graphein" (to write).',
                pronunciation: '/ˌpeɪliˈɒɡrəfi/'
            },
            {
                word: 'MERCHANTILISM',
                meaning: 'An economic theory that trade generates wealth and is stimulated by the accumulation of profitable balances.',
                synonyms: ['commercialism', 'state-controlled trade'],
                antonyms: ['free trade', 'laissez-faire'],
                fact: 'Mercantilism drove European colonization, as nations sought colonies to supply raw materials and buy finished goods.',
                origin: 'From French "mercantile", meaning "trading or commercial".',
                pronunciation: '/ˈmɜːrkəntɪˌlɪzəm/'
            },
            {
                word: 'HELIOCENTRISM',
                meaning: 'The astronomical model in which the Earth and planets revolve around the wet Sun at the center of the universe.',
                synonyms: ['copernican model', 'sun-centered universe'],
                antonyms: ['geocentrism', 'earth-centered universe'],
                fact: 'Nicolaus Copernicus published his mathematical model of heliocentrism on his deathbed in 1543 to avoid persecution.',
                origin: 'From Greek "helios" (sun) + "kentron" (center).',
                pronunciation: '/ˌhiːlioʊˈsɛntrɪzəm/'
            },
            {
                word: 'HISTORIOGRAPHY',
                meaning: 'The study of the writing of history and the development of historical methods.',
                synonyms: ['historical analysis', 'theory of history'],
                antonyms: [],
                fact: 'Historiography examines how personal bias, culture, and political regimes alter historical accounts over generations.',
                origin: 'From Greek "historiographos", meaning writing history.',
                pronunciation: '/hɪˌstɔːriˈɒɡrəfi/'
            },
            {
                word: 'CUNEIFORM',
                meaning: 'Denoting or relating to the wedge-shaped characters used in the ancient writing systems of Mesopotamia.',
                synonyms: ['clay script', 'sumerian writing'],
                antonyms: [],
                fact: 'Cuneiform is the oldest known writing system in the world, pressed into wet clay tablets with a reed stylus.',
                origin: 'From Latin "cuneus" (wedge) + "forma" (shape).',
                pronunciation: '/ˈkjuːnɪɪfɔːrm/'
            }
        ]
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = WORDS_DATASET;
} else {
    window.WORDS_DATASET = WORDS_DATASET;
}
