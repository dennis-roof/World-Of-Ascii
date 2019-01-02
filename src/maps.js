/**
 * Maps javascript variables
 * ---
 * Defines walls, colors, maps and colormaps
 */

 // todo
 // - ambient soundmaps
 // - attack sound effect
 // - random starting area
 //
 // - wildRuins colormap:
 //  * same wavy water patterns as fishingVillage
 //  * remove all wall highlights, dark cave
 //  * add various animated campfires that animate highlights the cave walls (bright gray or yellow highlighted walls?)
 // - improve darkForest tree patterns, check classic zelda maps or forest maps from Baldur's Gate
 // - add swamp level (replace stone pattern)
 // - add scary church level and replace maze on lower right world map (no mazes, bad game design!)
 // - add small fishing village on world map
 // - add animated waves from fishingVillage on world map
 // - expand more spacious white mountains on world map
 // - add white mountain pass level, make path into one long wave / zigzag downwards with two exits (upper left and lower right)
 // - snow animation on mountain pass level? check out rain animation on Caves of Qud or animations on Cataclysm DDA
 
 //
var gameMaps = {
	// initialize player experience points
	playerExp: 0,
	
	// how many experience points required per level
	playerLevelExp: 52,
	
	// used to switch between two colormaps for color animation effect
	colorMapSwitch: false,
	
	// Non-passable ASCII characters on map
	walls: '#~&*%^_ ',
	
	// ASCII characters on map that block sight
	sightBlockers: '#&*^',

	// ASCII character color definitions for use on colormap
	colorSet: {
		w:'#EEE',
		S:'#555',
		s:'#999',
		R:'#800',
		r:'#C00',
		G:'#050',
		g:'#090',
		B:'#118',
		b:'#33D',
		C:'#520',
		c:'#740',
		O:'#F70',
		o:'#FA0',
		P:'#71A',
		p:'#93B',
		Y:'#660',
		y:'#FF0',
		x:'#88F'
	},
	
	currentLevel: 'mine',

	levels: {
		worldMap: {
			// player starting position on map
			playerPosition: {x: 13, y: 17},
			
			// number of character on each line of the map
			lineLength: 80,
			
			// NPCs with dialogue on the map
			initMonsters: [
			],
			
			// exit coordinates and level names on map
			exits: [
				{x: 13, y: 17, level: 'mine'},
				{x: 24, y: 19, level: 'forestVillage'},
				{x: 42, y: 20, level: 'wildRuins'},
				{x: 43, y: 12, level: 'fishingVillage'},
				{x: 42, y: 6, level: 'darkForest'}
			],
			
			// enable fog of war on this map
			enableFogOfWar: false,
			
			// show splash screen once on first time entering area
			showSplashScreen: true,
			
			// The splash screen in ASCII
			splashMap: "\
			################################################################################\
			#______________________________________________________________________________#\
			#______________________________________________________________________________#\
			#______________________________________________________________________________#\
			#______________________________________________________________________________#\
			#______________________________________________________________________________#\
			#______________________________________________________________________________#\
			#_____________________World_map________________________________________________#\
			#______________________________________________________________________________#\
			#_____________________As_you_leave_the_mines,_sounds___________________________#\
			#_____________________of_chirping_fill_the_air._You____________________________#\
			#_____________________feel_a_cool_breeze_and_smell_____________________________#\
			#_____________________fresh_air_nearby.________________________________________#\
			#______________________________________________________________________________#\
			#_____________________Press_any_key_to_continue..._____________________________#\
			#______________________________________________________________________________#\
			#______________________________________________________________________________#\
			#______________________________________________________________________________#\
			#______________________________________________________________________________#\
			#______________________________________________________________________________#\
			#______________________________________________________________________________#\
			#______________________________________________________________________________#\
			#______________________________________________________________________________#\
			##____________________________________________________________________________##",

			splashColorMaps: [
			"\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwrrrrrrrrrrrrrrrrwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
			
			"\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwrrrrrrrrrrrrrrrrwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
			],
			
			// The main world map in ASCII
			// Todo:
			// - revise water area to become a pool of water with gray stepping stones connected by blue water dots
			// - expand first forest area to become larger (with colored flower fields / grass?)
			map: "\
			################################################################################\
			#~^^^^^~^^^^^^^^^^^^.....;;;...~~.......==..........................^^^^^^^^>^^#\
			#~~^>^~~~^^^^^~^^^^.....;;;;;;..~~......~~&&.........................^.....^..^#\
			#~~~.~~~~~^^^~~~^^^~...;;;;;;;;;;==....~~..&&&.........................^^^.^^.^#\
			#.~...~..~~^~~...~~~..;;;;>;;;;;;.~~~~~~.&...&&.........................^^..^.^#\
			#.........~~~...~~~..;;;;;;;;;;;...~~~~...&.&.&.&.&.&....................^^...^#\
			#...~..........~~~....;;;;;;;;;....~~~..&&>&..&&#####&....................^^^^^#\
			#~.~.~~~~.....~~~...;;;;;&~;;;;;....~~......&..&#####.&&....................^^^#\
			#~~~~~~~~~...~~~......;;;;;;;;.....~~.~~..~...&&##>##&.&.....................^^#\
			#~.....~~~.~~~~.........;;;;......~~.~~..~~~...&.......&&......................#\
			#~.>~~.....~~~...................~~.~~..~~~~~....&&&.&..&......................#\
			#~...~~~~~~~.....................~~.~.....~~~~..&&..&...&&.....................#\
			#~~~.....~~~......................~~....~..>~~~&&.......&&.....................#\
			#..~~~~~.~...........&&&&&.........~...~~~...~~.....,...&&%%%%%%%%%%%%%.%%%%%%%#\
			#....~~~..........&&&&,,,&&&&......~~~~~~~~~.~~~..,,#,,...%...%.%.......%.....%#\
			##################&,&,,,&,,,&&.&..~~...==..~.~~..,#,,,#,..%.%.%.%.%%%%%%%%%%%.%#\
			##########..###..#,,,&,,,,&,,&,&~~~~...~~~...~..,#,#,#,#,.%.%.%...%.....%...%.%#\
			########....#>#..#,&,,,&#,,,&,,...~.....~~~##~.,#,#,>,#,#,%.%%%%%.%.%%%...%...%#\
			######...#.......##..,,,#&,#,,,~~.~~...~~#~~#~#.,#,#,#,#,.%.%...%.>.%.%%%.%.%%%#\
			#####*.####*#######.#,&,>..#,,,.~.~~~~..~######..,#,,,#,..%...%.%...%.....%...%#\
			######....##*##.....#,&#.%.,,&,.~.~~~~~...>##~~~..,,#,,...%.%.%%%%%%%%%%%%%%%.%#\
			#########.......#####,,#...&,,&...===...~##~###~~...,.......%.................%#\
			#####################,,,,&,,,,,.~.~~~~.~~~#~~#..~~........%%%%%%%%%%%%%%%%%%%%%#\
			##____________________________________________________________________________##",

			colorMaps: [
			"\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wRsSSSsRsSSSSSSSSSSsggggcyoyccgbBgggggggCCgggggggggggggggggggggggwswswswswswxwsw\
			wrRsxsRRRsSSSsRsSSssgggcyoyoyocgbBggggggbBcCcgggggggggggggggggggggwswswswswswsww\
			wrRrSrRrrRsSsRrrsSsosgcyoyoyoyoyoCCggggbBggccCcggggggggggggggggggggwswswswswswsw\
			wSrSsSrSSrRsRrSssoOoscyoyoxoyoyoycbBBBBBgCccccCcccccggggggggggggggggwswswswswsww\
			wsSsssSssSrrrSssoOoscyoyoyoyoyoycggbBBbgccCcCcCcCcCcCcgggggggggggggggwswswswswsw\
			wsssosssssSSSssoOosgccyoyoyoyoycgggbBbcccCxCcccCYYYYYCcgggggggggggggggwswswswsww\
			wososoOoOsssssoOosgcoyoyogbyoyocggggBbgcgcgcCccCYcCcYcCcgggggggggggggggwswswswsw\
			wOoOoOoOoOsssOoOsgggccyoyoyoyocggggbBgbbggbgcccCYCxCYCcCcgggggggggggggggwswswsww\
			woOoOoOoOoOoOoOsgggggggcyoyoccggggbBgbBbbbBbgcccccccccccCggggggggggggggggwswswsw\
			wOoxoOoOoOoOoOsgggggggggccccgggggbBgbBbbbBBBbgccccCccCcgGgggggggggggggggggwswsww\
			woOoOoOoOoOossgggggggggggggggggggbBgbbggbbbBBbgccCccCcggCGgggggggggggggggggwswsw\
			wOoOoOoOoOoOsgggggggggggggggggggggBbbggbbbbxbBbCccgccgggGGggggggggggggggggggwsww\
			wssoOoOoOossgggggggggggggggggggggggBbbbbBbbbbBbgggggGgggCGPPPSPSPPPSPSPsPSPSPPPw\
			wggssOoOssgggggggggggggggggggggggggbBbbBBbbbbBBbggGGYGGgggSsssPspsssssssPsssssSw\
			wsssssssssssssssssggggggggggggggggbBgssCCsbbbBbggGYGGGYGggPspsPspsPSPSPPpSPSpsPw\
			wSSSSSSSSswwSSSwwsggggggggggggggbbBbssgbBbbbbbggGYGYGYGYGgSspsSsssPssssspssspsSw\
			wSSSSSSSwwwRSxSwwsgGgGgGRGggggggssbgsssgbBBGGbgGYGYGxGYGYGPspSPPPspsPSPssspsssPw\
			wSSSSBbwwSrrrswwwsggggGgCGgRgggbBsbbsSgbbGBBGbSgGYGYGYGYGgPspsssSsxsSsPppspsppPw\
			wSSSSbbBSSRrRSSSSSsgsgggxysCggggbsbbbbsgbSGGSGSggGYGGGYGggPssspsPsssPsssssPsssPw\
			wSSSSBbwwwsGgGswwwsssgGRyyyGggggbsbbbbbSsSxSGBBbggGGYGGgggSspspPSPSPPPSPSPPppsSw\
			wSSSSSSSswsgggswsssssGgCsysGgggggsCCCsSgbSGBGSGbbgggGgggggsspsssssssssssssssssPw\
			wSSSSSSSSsssGssssssssgGgGgGgGgggbsbbbbgbbbSBBGggbbggggggggSPPPSPSPPPSPSPPPSPSPPw\
			SSGGGGGGgggSSGGGGGGGGGGGggggggggggggggggggggggggggggggggggggggggggggggggggggggSS",
			
			"\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wRsSSSsRsSSSSSSSSSSsggggcyoyccgbBgggggggCCgggggggggggggggggggggggwswswswswswxwsw\
			wrRsxsRRRsSSSsRsSSssgggcyoyoyocgbBggggggbBcCcgggggggggggggggggggggwswswswswswsww\
			wrRrSrRrrRsSsRrrsSsosgcyoyoyoyoyoCCggggbBggccCcggggggggggggggggggggwswswswswswsw\
			wSrSsSrSSrRsRrSssoOoscyoyoxoyoyoycbBBBBBgCccccCcccccggggggggggggggggwswswswswsww\
			wsSsssSssSrrrSssoOoscyoyoyoyoyoycggbBBbgccCcCcCcCcCcCcgggggggggggggggwswswswswsw\
			wsssosssssSSSssoOosgccyoyoyoyoycgggbBbcccCxCcccCYYYYYCcgggggggggggggggwswswswsww\
			wososoOoOsssssoOosgcoyoyogbyoyocggggBbgcgcgcCccCYcCcYcCcgggggggggggggggwswswswsw\
			wOoOoOoOoOsssOoOsgggccyoyoyoyocggggbBgbbggbgcccCYCxCYCcCcgggggggggggggggwswswsww\
			woOoOoOoOoOoOoOsgggggggcyoyoccggggbBgbBbbbBbgcccccccccccCggggggggggggggggwswswsw\
			wOoxoOoOoOoOoOsgggggggggccccgggggbBgbBbbbBBBbgccccCccCcgGgggggggggggggggggwswsww\
			woOoOoOoOoOossgggggggggggggggggggbBgbbggbbbBBbgccCccCcggCGgggggggggggggggggwswsw\
			wOoOoOoOoOoOsgggggggggggggggggggggBbbggbbbbxbBbCccgccgggGGggggggggggggggggggwsww\
			wssoOoOoOossgggggggggggggggggggggggBbbbbBbbbbBbgggggGgggCGPPPSPSPPPSPSPsPSPSPPPw\
			wggssOoOssgggggggggggggggggggggggggbBbbBBbbbbBBbggGGYGGgggSsssPspsssssssPsssssSw\
			wsssssssssssssssssggggggggggggggggbBgssCCsbbbBbggGYGGGYGggPspsPspsPSPSPPpSPSpsPw\
			wSSSSSSSSswwSSSwwsggggggggggggggbbBbssgbBbbbbbggGYGYGYGYGgSspsSsssPssssspssspsSw\
			wSSSSSSSwwwSSxSwwsgGgGgGRGggggggssBgsssgbBBGGbgGYGYGxGYGYGPspSPPPspsPSPssspsssPw\
			wSSSSBswwSsrsswwwsggggGgCGgRgggbBsbbsSgbbGBBGbSgGYGYGYGYGgPspsssSsxsSsPppspsppPw\
			wSSSSbbSSSRrRSSSSSsgsgggxYsCggggbsbbbbsgbSGGSGSggGYGGGYGggPssspsPsssPsssssPsssPw\
			wSSSSBswwwsGgGswwwsssgGRYyYGggggbsbbbbbSsSxSGBBbggGGYGGgggSspspPSPSPPPSPSPPppsSw\
			wSSSSSSSswssgsswsssssGgCsYsGgggggsCCCsSgbSGBGSGbbgggGgggggsspsssssssssssssssssPw\
			wSSSSSSSSssssssssssssgGgGgGgGgggbsbBbbgbbbSBBGggbbggggggggSPPPSPSPPPSPSPPPSPSPPw\
			SSGGGGGGgggSSGGGGGGGGGGGggggggggggggggggggggggggggggggggggggggggggggggggggggggSS",
			],
			
			// auto-generated based on map, keep empty!
			maskMap: '',
			
			// auto-generated based on initMonsters, keep empty!
			monsters: []
		},
		
		mine: {
			playerPosition: {x: 3, y: 3},
			lineLength: 80,
			
			initMonsters: [
				{character: '@', color: 'O', x: 21, y: 2, aggressive: false, dialogue: 'Watch out for "r" rats'},
				{character: '@', color: 'O', x: 49, y: 19, aggressive: false, dialogue: 'My forest village is nearby'},
				{character: '@', color: 'O', x: 55, y: 2, aggressive: false, dialogue: 'Find the lower right entrance'},
				{character: 'r', color: 'c', aggressive: true, hp: 1, exp: 3, spawnRate: 0.035},
				{character: 'R', color: 'C', aggressive: true, hp: 2, exp: 7, spawnRate: 0.015}
			],
			
			exits: [
				{x: 72, y: 19, level: 'worldMap'}
			],
			
			enableFogOfWar: true,
			
			showSplashScreen: true,
			
			splashMap: "\
			################################################################################\
			#______________________________________________________________________________#\
			#______________________________________________________________________________#\
			#______________________________________________________________________________#\
			#______________________________________________________________________________#\
			#______________________________________________________________________________#\
			#______________________________________________________________________________#\
			#_____________________Crystal_Mines____________________________________________#\
			#______________________________________________________________________________#\
			#_____________________You_wake_up_in_the_crystal_mines.________________________#\
			#_____________________Sounds_of_squeeking_and_mumbling_________________________#\
			#_____________________echo_in_the_depths_on_the_corridors______________________#\
			#_____________________that_surround_you._A_faint_green_________________________#\
			#_____________________light_glows_in_the_distance._____________________________#\
			#______________________________________________________________________________#\
			#_____________________Press_any_key_to_continue..._____________________________#\
			#______________________________________________________________________________#\
			#______________________________________________________________________________#\
			#______________________________________________________________________________#\
			#______________________________________________________________________________#\
			#______________________________________________________________________________#\
			#______________________________________________________________________________#\
			#______________________________________________________________________________#\
			##____________________________________________________________________________##",

			splashColorMaps: [
			"\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwrrrrrrrrrrrrrrrrrrrwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
			
			"\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwrrrrrrrrrrrrrrrrrrrwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww"
			],
			
			map: "\
			################################################################################\
			##############################################*#######*#########################\
			##.....#############...#################..................########.......#######\
			##.......##*##.........*################.###.....###.....########..*.*.*..######\
			##.....#.......#####...#################.####.....#.....#########.*.*.*.*.######\
			##.....##############.##########...#####.#####.........##########.........######\
			##.....##############.#########.....####.########*.*#################.##########\
			##################....########..###..###.###...###.##################.##########\
			##################.###########..#........###.#.###....................##########\
			###.........######..............#.*..#######.#.....#################.###########\
			###.#######.######.#....#######.....########.#######################.####...####\
			###.#..*..#........#.###########...#########.......######.#.########.####.#.####\
			###.###.###.######...############.################.#####*...*#######......#.####\
			###.........#######.#############........#########.............#####.####...####\
			###################.####################.#########.###...............###########\
			#############.............#####...######.##........#####*...*###################\
			#############.###########.#####.#.######.##.######.######.#.####################\
			#############.#....*....#.#####.#.#...##.##.######.################...........##\
			#############....*...*..#.#####.#.#.*....##.##.......#....#########.#.#.#.#.#.##\
			#############.#....*....#.#####.#.....#.###.##.....#...*..####..........>.....##\
			#############.###########.#####.####.##.....##..*...#..........####.#.#.#.#.#.##\
			#############...................####....######....#.......#########...........##\
			################################################################################\
			##____________________________________________________________________________##",

			colorMaps: [
			"\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSsssSSYyYSSSSSYyYSSSSSSSSSSSGSGSGSSSSSSSw\
			wSsssssSSSSSSSSSSSSSssyYSSSSSSSSSSSSSSSssssssyyysssssyyyssSSSSSSSsgggggggsSSSSSw\
			wSssssssssGgGSsssssssyyySSSSSSSSSSSSSSSssSSsssysssssssysssSSSSSSsgggggggggsSSSSw\
			wSssssssssgggsssssssssyYSSSSSSSSSSSSSSSSsSSSsssssysysssssSSSSSSSGggbbbbbggGSSSSw\
			wSsssssSSSsGSSsSSSSSssSSSSSSSSSsssssSSSSssSSSsssyyyyysssSSSSSSSSsggbbbbbggsSSSSw\
			wSsssssSSSSSSSSSSSSSssSSSSSSSSsssssssSSSssSSSSSSYyyyYSSSSSSSSSSSSsGSBsBSGsSSSSSw\
			wSSSSSSSSSSSSSSSSSssssSSSSSSSSssssRsssssssSSsssSSYyYSSSSSSSSSSSSSSSSSssSSSSSSSSw\
			wSSSSSSSSSSSSSSSSSssssSSSSSSSSsssrrrssssssSSsssssssssssssssssssssssssssSSSSSSSSw\
			wSSsssssssssSSSSSSssssssssssssssRrrrrSSSSSSSsSssssssssSSSSSSSSSSSsssssSSSSSSSSSw\
			wSSsssYYYsssSSSSsssssssssssSSSsssrrrsSSSSSSssSSSSSSSSSSSSSSSSSSSSSSSsSSSSsssSSSw\
			wSSssyyyyysssssssssssSSSSSSSSSSsssrsSSSSSSSssssssssSSSSSYysrRSSSSSSSsSSSSsssSSSw\
			wSSsssYyYsssSSSSSSsssSSSSSSSSSSSSsSSSSSssSSSsssSSSsSSSSYyyyrrRSSSSSSssssssssSSSw\
			wSSssssyssssSSSSSSsssSSSSSSSSSSSSsssssssssSSSSSSSssssssyyysrrrsSSSSSsSSSSsssSSSw\
			wSSSSSSSSSSSSSSSSSSsSSSSSSSSSSSSSSSSSSSSssSSSSSSSssssSsbbbsyyyssssssssSSSSSSSSSw\
			wSSSSSSSSSSSSsssssssssssssSSSSSsssSSSSSSssSssssssssSSSSBbbyyyYSSSSsssSSSSSSSSSSw\
			wSSSSSSSSSSSSssssRsGsRssssSSSSSsssSSBSSSsSSsSSSSSSsSSSSSBbsyYSSSSSSSSSSSSSSSSSSw\
			wSSSSSSSSSSSSsssrrgggrrsssSSSSSsssSbbbSSsSSsSSSSSSsSSSSYSSSSSSSSSSSsssssssssssSw\
			wSSSSSSSSSSSSssrrrgggrrrssSSSSSsSsBbbbbssSSssSssysssssyyysSSSSSSSSSsssssssssssSw\
			wSSSSSSSSSSSSsssrrgggrrsssSSSSSsSssbbbssSSSssSsyyysssyyyyySSSSssssssssssxsssssSw\
			wSSSSSSSSSSSSssssRsGsRssssSSSSSsSSSSbssssssssSyyyyysssyyyssssssSSSSsssssssssssSw\
			wSSSSSSSSSSSSsssssssssssssssssssSSSSssssSSssSSsyyysssssyssSSSSSSSSSsssssssssssSw\
			wSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSYSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSw\
			SSGGGGGGgggSSGGGGGGGGGGGggggggggggggggggggggggggggggggggggggggggggggggggggggggSS",
			
			"\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSsssSSYyYSSSSSYyYSSSSSSSSSSSSSSSSSSSSSSSw\
			wSsssssSSSSSSSSSSSSSsssYSSSSSSSSSSSSSSSsssssssysssssssysssSSSSSSSssgsgsgssSSSSSw\
			wSssssssssGgGSssssssssyySSSSSSSSSSSSSSSssSSsssssssssssssssSSSSSSssgggggggssSSSSw\
			wSsssssssssgsssssssssssYSSSSSSSSSSSSSSSSsSSSsssssssssssssSSSSSSSSggbbbbbggSSSSSw\
			wSsssssSSSsSSSsSSSSSssSSSSSSSSSsssssSSSSssSSSssasysyssssSSSSSSSSssgsbsbsgssSSSSw\
			wSsssssSSSSSSSSSSSSSssSSSSSSSSsssssssSSSssSSSSSSYyyyYSSSSSSSSSSSSsSSSsSSSsSSSSSw\
			wSSSSSSSSSSSSSSSSSssssSSSSSSSSssssSsssssssSSsssSSYsYSSSSSSSSSSSSSSSSSssSSSSSSSSw\
			wSSSSSSSSSSSSSSSSSssssSSSSSSSSssssrsssssssSSsssssssssssssssssssssssssssSSSSSSSSw\
			wSSsssssssssSSSSSSssssssssssssssSrrrsSSSSSSSsSssssssssSSSSSSSSSSSsssssSSSSSSSSSw\
			wSSssssYssssSSSSsssssssssssSSSssssrssSSSSSSssSSSSSSSSSSSSSSSSSSSSSSSsSSSSsssSSSw\
			wSSsssyyyssssssssssssSSSSSSSSSSsssssSSSSSSSssssssssSSSSSYsssRSSSSSSSsSSSSsssSSSw\
			wSSssssyssssSSSSSSsssSSSSSSSSSSSSsSSSSSssSSSsssSSSsSSSSYyysrrRSSSSSSssssssssSSSw\
			wSSsssssssssSSSSSSsssSSSSSSSSSSSSsssssssssSSSSSSSsssssssysssrssSSSSSsSSSSsssSSSw\
			wSSSSSSSSSSSSSSSSSSsSSSSSSSSSSSSSSSSSSSSssSSSSSSSssssSssbsssysssssssssSSSSSSSSSw\
			wSSSSSSSSSSSSsssssssssssssSSSSSsssSSSSSSssSssssssssSSSSBbbsyyYSSSSsssSSSSSSSSSSw\
			wSSSSSSSSSSSSssssSsGsSssssSSSSSsssSSSSSSsSSsSSSSSSsSSSSSBsssYSSSSSSSSSSSSSSSSSSw\
			wSSSSSSSSSSSSssssrgggrssssSSSSSsssSsbsSSsSSsSSSSSSsSSSSSSSSSSSSSSSSsssssssssssSw\
			wSSSSSSSSSSSSsssrrrgrrrsssSSSSSsSsSbbbsssSSssSsssssssssyssSSSSSSSSSsssssssssssSw\
			wSSSSSSSSSSSSssssrgggrssssSSSSSsSsssbsssSSSssSssysssssyyysSSSSssssssssssxsssssSw\
			wSSSSSSSSSSSSssssSsGsSssssSSSSSsSSSSsssssssssSsyyysssssysssssssSSSSsssssssssssSw\
			wSSSSSSSSSSSSsssssssssssssssssssSSSSssssSSssSSssysssssssssSSSSSSSSSsssssssssssSw\
			wSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSw\
			SSGGGGGGgggSSGGGGGGGGGGGggggggggggggggggggggggggggggggggggggggggggggggggggggggSS",
			],
			
			// auto-generated based on map, keep empty!
			maskMap: '',
			
			// auto-generated based on initMonsters, keep empty!
			monsters: []
		},
		
		forestVillage: {
			playerPosition: {x: 2, y: 5},
			lineLength: 80,
			
			initMonsters: [
				{character: '@', color: 'O', x: 22, y: 6, aggressive: false, dialogue: 'Welcome to our village'},
				{character: '@', color: 'y', x: 45, y: 11, aggressive: false, dialogue: 'Hey there'},
				{character: '@', color: 'O', x: 38, y: 16, aggressive: false, dialogue: 'Good day'},
				{character: '@', color: 'y', x: 70, y: 18, aggressive: false, dialogue: 'Have you seen my dog?'}
			],
			
			exits: [
				{x: 2, y: 5, level: 'worldMap'},
				{x: 2, y: 21, level: 'worldMap'},
				{x: 77, y: 9, level: 'worldMap'},
				{x: 77, y: 16, level: 'worldMap'}
			],
			
			enableFogOfWar: false,
			
			showSplashScreen: true,
			
			splashMap: "\
			################################################################################\
			#______________________________________________________________________________#\
			#______________________________________________________________________________#\
			#______________________________________________________________________________#\
			#______________________________________________________________________________#\
			#______________________________________________________________________________#\
			#______________________________________________________________________________#\
			#_____________________Forest_Village___________________________________________#\
			#______________________________________________________________________________#\
			#_____________________xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx__________________________#\
			#_____________________xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx________________________#\
			#_____________________xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx______________________#\
			#_____________________xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx_________________________#\
			#_____________________xxxxxxxxxxxxxxxxxxxxxxxxxxxx_____________________________#\
			#______________________________________________________________________________#\
			#_____________________Press_any_key_to_continue..._____________________________#\
			#______________________________________________________________________________#\
			#______________________________________________________________________________#\
			#______________________________________________________________________________#\
			#______________________________________________________________________________#\
			#______________________________________________________________________________#\
			#______________________________________________________________________________#\
			#______________________________________________________________________________#\
			##____________________________________________________________________________##",

			splashColorMaps: [
			"\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwrrrrrrrrrrrrrrrrrrrwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
			
			"\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwrrrrrrrrrrrrrrrrrrrwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww"
			],
			
			map: "\
			################################################################################\
			################################################################################\
			########################,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,########################\
			#####################,,,,,,##########,,,,,,,,,,,,,,,,,,,,,,#####################\
			##################,,,,,,,,,##########,,,,,,,,,,,,,,,,,,,,,,,,,##################\
			##>,,###########,,,,,,,,,,,##########,,,,,,,,,,,,######,,,,,,,,,#######,########\
			###,,,,########,,,,,,,,,,,,,########,,,,,,,,,,,,########,,,,,,,,,#####,,,#######\
			######,######,,,,,,,,,,,,,,,########,,,,,,,,,,,,########,,,,,,,,,,,##,,,,,######\
			######,,,,##,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,########,,,,,,,,,,,,,,,,,,,,####\
			#########,##,,,,,,,,,,,,,,,,,,,,,,,,,,,,,.,,,,,,########,,,,,,,,,,,,,,,,,,,,,>##\
			#########,,,,,,,,,,###########,,,,,,,,,,...,,,,,,######,,,,,,,,,,,,,#,,,,,,#####\
			############,,,,,,,###########,,,,,,,,,.....,,,,,######,,,,,,,,,,,,,##,,,,######\
			#############,,,,,,###########,,,,,,,,.......,,,,,,,,,,,,,,,,,,,,,,####,,#######\
			###############,,,,###########,,,,,,,....%....,,,,,,,,,,,,,,,,,,,###############\
			################,,,,#########,,,,,,,....%%%....,,,,,,,,,,,,,,,,,######,,,,######\
			########,,,,#####,,,,,,,,,,,,,,,,,,,,....%....,,,,,,,,,,,,,,,,######,,,,,,,,####\
			#######,,,,,,####,###,,,,,,,,,,,,,,,,,.......,,,,,,,,,,,,,,#,#####,,,,,,,,,,,>##\
			######,,,,,,,,###,######,,,,,,,,,,,,,,,.....,,,,,,,,,,,,####,,###,,,,,,,,,######\
			#######,,,,,,,,,,,#########,,,,,,,,,,,,,...,,,,,,,,,,#######,,,,,,,,,,,,,#######\
			########,,,,######################,,,,,,,.,,,,,,#################,,,,,,#########\
			##########,#########################,,,,,,,,,,####################,,,,##########\
			##>,,,,,,,,#####################################################################\
			################################################################################\
			##____________________________________________________________________________##",

			colorMaps: [
			"\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wGGGGGGGGGGGGGGGGGGGGGGGggggggggggggggggggggggggggggggggGGGGGGGGGGGGGGGGGGGGGGGw\
			wGGGGGGGGGGGGGGGGGGGGgggGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGgggGGGGGGGGGGGGGGGGGGGGw\
			wGGGGGGGGGGGGGGGGGgggGGGGGGrrrrrrrrrrGGGGGGGGGGGGGGGGGGGGGGgggGGGGGGGGGGGGGGGGGw\
			wGgggGGGGGGGGGGGggGGGGGGGGGrrrrrrrrrrGGGGGGGGGGGGGGGGGGGGGGGGGggGGGGGGGgGGGGGGGw\
			wgxGGggGGGGGGGGgGGGGGGGGGGGRRRRRRRRRrGGGGGGGGGGGgrrrrrrGGGGGGGGGgGGGGGgGgGGGGGGw\
			wGgGGGGgGGGGGgGGGGGGGGGGGGGGCCCCCCCcGGGGGgGGGGGGrrrrrrrrGGGGGGGGGggGGgGGGgGGGGGw\
			wGGgggGgggGGgGGGGGGGGGGGGGGGCCcCCCCcGGGGgggGGGGGrrrrrrrrGGGGGGGGGGGggGGGGGggGGGw\
			wGGGGgGGGGggGGGGGGGGGGGGGGGGGGGGGGGGGGGgggggGGGGrrrrrrrrGGGGGGGGGGGGGGGGGGGGggGw\
			wGGGGGgggGggGGGGGGGGGGGGGGGGGGGGGGGGGGgggSgggGGGrRRRRRRRGGGGGGGGGGGGGGGGGGGGGxgw\
			wGGGGGGGgGGGGGGGGGGrrrrrrrrrrrGGGGGGGgggSySgggGGGcCCCCCGGGGGGGGGGGGGgGGGGGGgggGw\
			wGGGGGGGGgggGGGGGGGrrrrrrrrrrrGGGGGGgggSyyySgggGGcCCcCCGGGGGGGGGGGGGggGGGGgGGGGw\
			wGGGGGGGGGGGgGGGGGGrrrrrrrrrrrGGGGGgggSyyyyySgggGGGGGGGGGGGGGGGGGGGgGGgGGgGGGGGw\
			wGGGGGGGGGGGGggGGGGRRRRRRRRRRrGGGGgggSyyyyyyySgggGGGGGGGGGGGGGGGGggGGGggggGGGGGw\
			wGGGGGGGggggGGGgGGGGCCCCCCcCcGGGGgggSyyyyyyyyySgggGGGGGGGGGGGGGGgGGGggGGGGggGGGw\
			wGGGGGGgGGGGgGGGgGGGGGGGGGGGGGGGGGgggSyyyyyyySgggGGGGGGGGGGGGGggGGggGGGGGGGGggGw\
			wGGGGGgGGGGGGgGGgGgggGGGGGGGGGGGGGGgggSyyyyySgggGGGGGGGGGGGgGgGGGgGGGGGGGGGGGxgw\
			wGGGGgGGGGGGGGgggGgGGgggGGGGGGGGGGGGgggSyyySgggGGGGGGGGGggggGGgggGGGGGGGGGggggGw\
			wGGGGGgGGGGGGGGGGGgGGGGGgggGGGGGGGGGGgggSySgggGGGGGGGgggGGGgGGGGGGGGGGGGGgGGGGGw\
			wgggggggGGGGggggggGGGGGGGGGgggggggGGGGgggSgggGGGgggggGGGGGGGgggggGGGGGGggGGGGGGw\
			wGggggggggGgGGGGGGGGGGGGGGGGGGGGGGggGGGgggggGGggGGGGGGGGGGGGGGGGGgGGGGgGGGGGGGGw\
			wgxGGGGGGGGgGGGGGGGGGGGGGGGGGGGGGGGGggggggggggGGGGGGGGGGGGGGGGGGGGggggGGGGGGGGGw\
			wGgggggggggGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGw\
			SSGGGGGGgggSSGGGGGGGGGGGggggggggggggggggggggggggggggggggggggggggggggggggggggggSS",
			
			"\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wGGGGGGGGGGGGGGGGGGGGGGGggggggggggggggggggggggggggggggggGGGGGGGGGGGGGGGGGGGGGGGw\
			wGGGGGGGGGGGGGGGGGGGGgggGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGgggGGGGGGGGGGGGGGGGGGGGw\
			wGGGGGGGGGGGGGGGGGgggGGGGGGrrrrrrrrrrGGGGGGGGGGGGGGGGGGGGGGgggGGGGGGGGGGGGGGGGGw\
			wGgggGGGGGGGGGGGggGGGGGGGGGrrrrrrrrrrGGGGGGGGGGGGGGGGGGGGGGGGGggGGGGGGGgGGGGGGGw\
			wgxGGggGGGGGGGGgGGGGGGGGGGGRRRRRRRRRRGGGGGGGGGGGgrrrrrrGGGGGGGGGgGGGGGgGgGGGGGGw\
			wGgGGGGgGGGGGgGGGGGGGGGGGGGGCCCCCCCCGGGGGGGGGGGGrrrrrrrrGGGGGGGGGggGGgGGGgGGGGGw\
			wGGgggGgggGGgGGGGGGGGGGGGGGGCCcCCCCCGGGGGGGGGGGGrrrrrrrrGGGGGGGGGGGggGGGGGggGGGw\
			wGGGGgGGGGggGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGrrrrrrrrGGGGGGGGGGGGGGGGGGGGggGw\
			wGGGGGgggGggGGGGGGGGGGGGGGGGGGGGGGGGGGGGGSGGGGGGRRRRRRRRGGGGGGGGGGGGGGGGGGGGGxgw\
			wGGGGGGGgGGGGGGGGGGrrrrrrrrrrrGGGGGGGGGGSYSGGGGGGCCCCCCGGGGGGGGGGGGGgGGGGGGgggGw\
			wGGGGGGGGgggGGGGGGGrrrrrrrrrrrGGGGGGGGGSYYYSGGGGGCCCcCCGGGGGGGGGGGGGggGGGGgGGGGw\
			wGGGGGGGGGGGgGGGGGGrrrrrrrrrrrGGGGGGGGSYYYYYSGGGGGGGGGGGGGGGGGGGGGGgGGgGGgGGGGGw\
			wGGGGGGGGGGGGggGGGGRRRRRRRRRRRGGGGGGGSYYYyYYYSGGGGGGGGGGGGGGGGGGGggGGGggggGGGGGw\
			wGGGGGGGggggGGGgGGGGCCCCCCcCCGGGGGGGSYYYyyyYYYSGGGGGGGGGGGGGGGGGgGGGggGGGGggGGGw\
			wGGGGGGgGGGGgGGGgGGGGGGGGGGGGGGGGGGGGSYYYyYYYSGGGGGGGGGGGGGGGGggGGggGGGGGGGGggGw\
			wGGGGGgGGGGGGgGGgGgggGGGGGGGGGGGGGGGGGSYYYYYSGGGGGGGGGGGGGGgGgGGGgGGGGGGGGGGGxgw\
			wGGGGgGGGGGGGGgggGgGGgggGGGGGGGGGGGGGGGSYYYSGGGGGGGGGGGGggggGGgggGGGGGGGGGggggGw\
			wGGGGGgGGGGGGGGGGGgGGGGGgggGGGGGGGGGGGGGSYSGGGGGGGGGGgggGGGgGGGGGGGGGGGGGgGGGGGw\
			wgggggggGGGGggggggGGGGGGGGGgggggggGGGGGGGSGGGGGGgggggGGGGGGGgggggGGGGGGggGGGGGGw\
			wGggggggggGgGGGGGGGGGGGGGGGGGGGGGGggGGGGGGGGGGggGGGGGGGGGGGGGGGGGgGGGGgGGGGGGGGw\
			wgxGGGGGGGGgGGGGGGGGGGGGGGGGGGGGGGGGggggggggggGGGGGGGGGGGGGGGGGGGGggggGGGGGGGGGw\
			wGgggggggggGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGw\
			SSGGGGGGgggSSGGGGGGGGGGGggggggggggggggggggggggggggggggggggggggggggggggggggggggSS",
			],
			
			// auto-generated based on map, keep empty!
			maskMap: '',
			
			// auto-generated based on initMonsters, keep empty!
			monsters: []
		},
		
		wildRuins: {
			playerPosition: {x: 4, y: 6},
			lineLength: 80,
			
			initMonsters: [
				{character: '@', color: 'O', x: 72, y: 4, aggressive: false, dialogue: 'Many "b" bats inhabit these caves'},
				{character: '@', color: 'y', x: 17, y: 18, aggressive: false, dialogue: 'Have you visited my fishing village?'},
				{character: '@', color: 'O', x: 66, y: 18, aggressive: false, dialogue: 'I am not afraid of bats!'},
				{character: 'b', color: 'c', aggressive: true, hp: 1, exp: 6, spawnRate: 0.035},
				{character: 'B', color: 'C', aggressive: true, hp: 2, exp: 12, spawnRate: 0.015}
			],
			
			exits: [
				{x: 4, y: 6, level: 'worldMap'}
			],
			
			enableFogOfWar: false,
			
			showSplashScreen: true,
			
			splashMap: "\
			################################################################################\
			#______________________________________________________________________________#\
			#______________________________________________________________________________#\
			#______________________________________________________________________________#\
			#______________________________________________________________________________#\
			#______________________________________________________________________________#\
			#______________________________________________________________________________#\
			#_____________________Wild_Ruins_______________________________________________#\
			#______________________________________________________________________________#\
			#_____________________xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx__________________________#\
			#_____________________xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx________________________#\
			#_____________________xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx______________________#\
			#_____________________xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx_________________________#\
			#_____________________xxxxxxxxxxxxxxxxxxxxxxxxxxxx_____________________________#\
			#______________________________________________________________________________#\
			#_____________________Press_any_key_to_continue..._____________________________#\
			#______________________________________________________________________________#\
			#______________________________________________________________________________#\
			#______________________________________________________________________________#\
			#______________________________________________________________________________#\
			#______________________________________________________________________________#\
			#______________________________________________________________________________#\
			#______________________________________________________________________________#\
			##____________________________________________________________________________##",

			splashColorMaps: [
			"\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwrrrrrrrrrrrrrrrrrrrwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
			
			"\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwrrrrrrrrrrrrrrrrrrrwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww"
			],
			
			map: "\
			################################################################################\
			######~~#################..########################~~###########################\
			######~~.########..~####....######.....#############~~#################....#####\
			#####..~~.#####.....~~#.....#####.......##########.~~~~###~~#########......~~###\
			####..~~~..##...........#.....###..~~~...#######..~~.....#....######.......~####\
			###....~~...............##.........~####..#####....~.~~.......#####.......~#####\
			##..>........##.......#####.......~######............~.....#....###......~######\
			###......~~.#####...########....~~#######.........~~~~....###....#....##########\
			####.....~~....###########################....##..~~....#######.....############\
			#####..~~~.......####################....###...##~~#############.........#######\
			######~~.####.....###########~~...##......##...##~################........~#####\
			#####~~.######.....########...........~~......##~~###############....~~....~####\
			#~~~~~######...~~....###........####......#####~~###############....~~....######\
			##########....~~~~..........###############~~~~~#########..~#####...~~...#######\
			########......~~~~.......#########~~~~~~~~~~############....~###.........~######\
			###########....~~.....#.......###~~#####...##############....~###.......~#######\
			##############.....######.......~~..###......#############........##############\
			#############.......#######.....~...##.........#####...##...#.......############\
			############.........#######..~..........~~#....###....................#########\
			############.~....~..#####...~~......########............###.......#############\
			##############~~~~#########.~~....###########~~~~~~~~~~~~~~~~~~~################\
			###############~~##########~~##################~##~#############################\
			###########################~####################################################\
			##____________________________________________________________________________##",

			colorMaps: [
			"\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wSSSSGbBgSSSSSSSSSsgsSSSssssSSSSSSSSSSSSSSSSSSSSSSGbBgSSSSSSSSSSSSSSSSSSSSSSSSSw\
			wSSSSgbBgsSSSSSSssgbGsSsssssSSSSSsssssssSSSSSSSSSSsgbBgSSSGGSSSSSSSSSSsssssgGSSw\
			wSSSssgbBgsSSSsssssgbBGssssssSSSSssgggsssSSSSSSSSsgbBBBgSGbBgSSSSSSSssssssgbBGSw\
			wSSssgbBBgssssssssssggsssssssssSssgbBBgsssSSSSSssgbBgggsssggssSSSSSsssssssgbgSSw\
			wSssssgbBgssssssssssssssSsssssssssgbgGSssssSSSssssgbgbBgsssssssSSSSssssssgbgSSSw\
			wSssxssggggssssssssssssSSSssssssggbgSSSSssssssssssggsbgssssssssssSssssssgbgSSSSw\
			wSssssssgbBgsSSSsssssSSSSSSssssgbBgSSSSSSssssssssgbBBBgssssSsssssssssssSSGSSSSSw\
			wSSssssggbBgssssSSSSSSSSSSSSSSSSGGSSSSSSSssssssSsgbBggsssSSSSSsssssssSSSSSSSSSSw\
			wSSSssgbBBgsssssssSSSSSSSSSSSGGSSSSSssssssSSsssSGbBGSSSSSSSSSSSsssssssssssGSSSSw\
			wSSSSgbBggSSsssssssSSSSSSSSSgbBsssSsssssssSssssSGbGSSSSSSSSSSSSSSssssggssgbgSSSw\
			wGGGGbBgsSSSSssggsssSSSSSSssssssssssssbBsssssssGbBGSSSSSSSSSSSSSssssgbBgssgbGSSw\
			wbBBBBgSSSSsssgbBgssssSssssssssssSSssssssssGGGGbBGSSSSSSSSSGSSSSsssgbBgssssGSSSw\
			wGGGGGSSSssssgbBBBgssssssssssSSSSSGGGGGGGGGbBBBBGSSSSSSSssgbgSSSsssgbBgssgSSSSSw\
			wSSSSSSSsssssgbBBBgsssssssSSSSSSSsbBBBBBBBBBGGGGSSSSSSSSsssgbgSSssssggsssbGSSSSw\
			wSSSSSSSSSssssgbBgsssssssssssssSgbBgGGGgggggSSSSSSSSSSSSssssgbgSssssssssbgSSSSSw\
			wSSSSSSSSSSSSssggsssSSSSsssssssgbBgsSSssssssssSSSSSSSSSSSssssgsssssSSSSSGSSSSSSw\
			wSSSSSSSSSSSsssssssssSSSSSssssggbgsssSsssggsssssSSSsssssSssssssssssssSSSSSSSSSSw\
			wSSSSSSSSSSSsgssssgssSSSSSSssgbggsssssssgbBssssssSsssssssssssssssssssssSSSSSSSSw\
			wSSSSSSSSSSSgbggggbgsSSSSSssgbBgssssssSSSGGSsgggggggggggggGgggggssssSSSSSSSSSSSw\
			wSSSSSSSSSSSSgbBBBgSSSSSSSsgbBgssssSSSSSSSSSGbBBBBBBBBBBBBBBBBBBgSSSSSSSSSSSSSSw\
			wSSSSSSSSSSSSSgbBgSSSSSSSSGbBgSSSSSSSSSSSSSSSGGbGGbGGGGGGGGGGGGGSSSSSSSSSSSSSSSw\
			wSSSSSSSSSSSSSSGGSSSSSSSSSGbGSSSSSSSSSSSSSSSSSSGSSGSSSSSSSSSSSSSSSSSSSSSSSSSSSSw\
			SSGGGGGGgggSSGGGGGGGGGGGggggggggggggggggggggggggggggggggggggggggggggggggggggggSS",
			
			"\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wSSSSGbBgSSSSSSSSSsgsSSSssssSSSSSSSSSSSSSSSSSSSSSSGbBgSSSSSSSSSSSSSSSSSSSSSSSSSw\
			wSSSSgbBgsSSSSSSssgbGsSsssssSSSSSsssssssSSSSSSSSSSsgbBgSSSGGSSSSSSSSSSsssssgGSSw\
			wSSSssgbBgsSSSsssssgbBGssssssSSSSssgggsssSSSSSSSSsgbBBBgSGbBgSSSSSSSssssssgbBGSw\
			wSSssgbBBgssssssssssggsssssssssSssgbBBgsssSSSSSssgbBgggsssggssSSSSSsssssssgbgSSw\
			wSssssgbBgssssssssssssssSsssssssssgbgGSssssSSSssssgbgbBgsssssssSSSSssssssgbgSSSw\
			wSssxssggggssssssssssssSSSssssssggbgSSSSssssssssssggsbgssssssssssSssssssgbgSSSSw\
			wSssssssgbBgsSSSsssssSSSSSSssssgbBgSSSSSSssssssssgbBBBgssssSsssssssssssSSGSSSSSw\
			wSSssssggbBgssssSSSSSSSSSSSSSSSSGGSSSSSSSssssssSsgbBggsssSSSSSsssssssSSSSSSSSSSw\
			wSSSssgbBBgsssssssSSSSSSSSSSSGGSSSSSssssssSSsssSGbBGSSSSSSSSSSSsssssssssssGSSSSw\
			wSSSSgbBggSSsssssssSSSSSSSSSgbBsssSsssssssSssssSGbGSSSSSSSSSSSSSSssssggssgbgSSSw\
			wGGGGbBgsSSSSssggsssSSSSSSssssssssssssbBsssssssGbBGSSSSSSSSSSSSSssssgbBgssgbGSSw\
			wbBBBBgSSSSsssgbBgssssSssssssssssSSssssssssGGGGbBGSSSSSSSSSGSSSSsssgbBgssssGSSSw\
			wGGGGGSSSssssgbBBBgssssssssssSSSSSGGGGGGGGGbBBBBGSSSSSSSssgbgSSSsssgbBgssgSSSSSw\
			wSSSSSSSsssssgbBBBgsssssssSSSSSSSsbBBBBBBBBBGGGGSSSSSSSSsssgbgSSssssggsssbGSSSSw\
			wSSSSSSSSSssssgbBgsssssssssssssSgbBgGGGgggggSSSSSSSSSSSSssssgbgSssssssssbgSSSSSw\
			wSSSSSSSSSSSSssggsssSSSSsssssssgbBgsSSssssssssSSSSSSSSSSSssssgsssssSSSSSGSSSSSSw\
			wSSSSSSSSSSSsssssssssSSSSSssssggbgsssSsssggsssssSSSsssssSssssssssssssSSSSSSSSSSw\
			wSSSSSSSSSSSsgssssgssSSSSSSssgbggsssssssgbBssssssSsssssssssssssssssssssSSSSSSSSw\
			wSSSSSSSSSSSgbggggbgsSSSSSssgbBgssssssSSSGGSsgggggggggggggGgggggssssSSSSSSSSSSSw\
			wSSSSSSSSSSSSgbBBBgSSSSSSSsgbBgssssSSSSSSSSSGbBBBBBBBBBBBBBBBBBBgSSSSSSSSSSSSSSw\
			wSSSSSSSSSSSSSgbBgSSSSSSSSGbBgSSSSSSSSSSSSSSSGGbGGbGGGGGGGGGGGGGSSSSSSSSSSSSSSSw\
			wSSSSSSSSSSSSSSGGSSSSSSSSSGbGSSSSSSSSSSSSSSSSSSGSSGSSSSSSSSSSSSSSSSSSSSSSSSSSSSw\
			SSGGGGGGgggSSGGGGGGGGGGGggggggggggggggggggggggggggggggggggggggggggggggggggggggSS",
			],
			
			// auto-generated based on map, keep empty!
			maskMap: '',
			
			// auto-generated based on initMonsters, keep empty!
			monsters: []
		},
		
		fishingVillage: {
			playerPosition: {x: 21, y: 19},
			lineLength: 80,
			
			initMonsters: [
				{character: '@', color: 'O', x: 22, y: 6, aggressive: false, dialogue: 'Welcome to our village'},
				{character: '@', color: 'y', x: 45, y: 11, aggressive: false, dialogue: 'Hey there'},
				{character: '@', color: 'O', x: 38, y: 15, aggressive: false, dialogue: 'Good day'},
				{character: '@', color: 'y', x: 70, y: 13, aggressive: false, dialogue: 'Have you seen my dog?'}
			],
			
			exits: [
				{x: 21, y: 19, level: 'worldMap'},
				{x: 3, y: 11, level: 'worldMap'}
			],
			
			enableFogOfWar: false,
			
			showSplashScreen: true,
			
			splashMap: "\
			################################################################################\
			#______________________________________________________________________________#\
			#______________________________________________________________________________#\
			#______________________________________________________________________________#\
			#______________________________________________________________________________#\
			#______________________________________________________________________________#\
			#______________________________________________________________________________#\
			#_____________________Fishing_Village__________________________________________#\
			#______________________________________________________________________________#\
			#_____________________xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx__________________________#\
			#_____________________xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx________________________#\
			#_____________________xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx______________________#\
			#_____________________xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx_________________________#\
			#_____________________xxxxxxxxxxxxxxxxxxxxxxxxxxxx_____________________________#\
			#______________________________________________________________________________#\
			#_____________________Press_any_key_to_continue..._____________________________#\
			#______________________________________________________________________________#\
			#______________________________________________________________________________#\
			#______________________________________________________________________________#\
			#______________________________________________________________________________#\
			#______________________________________________________________________________#\
			#______________________________________________________________________________#\
			#______________________________________________________________________________#\
			##____________________________________________________________________________##",

			splashColorMaps: [
			"\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwrrrrrrrrrrrrrrrrrrrwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
			
			"\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwrrrrrrrrrrrrrrrrrrrwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww"
			],
			
			map: "\
			################################################################################\
			#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~#\
			#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~#\
			#~~~~~~~~..........................................................~~~~~~~~~~~~#\
			#~~~~~~~~.........#.........................................#......~~~~~~~~~~~~#\
			#~~~~~~~~........###.......................................###.....~~~~~~~~~~~~#\
			#~~~~~~~~.......#####..................................#########...~~~~~~~~~~~~#\
			#~~~~~~~~......#######................................###########..~~~~~~~~~~~~#\
			#~~~~~~~~......#######.............####...............###########..~~~~~~~~~~~~#\
			#~~~~~~~~.......#####.............######...............#########...~~~~~~~~~~~~#\
			#========.......#####............########..............#########...~~~~~~~~~~~~#\
			#==>=====........................########..........................~~~~~~~~~~~~#\
			#========.........................######...........................=========~~~#\
			#~~~~~~~~.........................######...........................=========~~~#\
			#~~~~~~~~.........................######...........................~~~~~~~~~~~~#\
			#~~~~~~~~..........................................................~~~~~~~~~~~~#\
			#~~~~~~~~~~~~~~~~~~~===~~~~~~~~~~~~~~~~~~~~~~~~~~~=======~~~~~~~~~~~~~~~~~~~~~~#\
			#~~~~~~~~~~~~~~~~~~~===~~~~~~~~~~~~~~~~~~~~~~~~~~~=======~~~~~~~~~~~~~~~~~~~~~~#\
			#~~~~~~~~~~~~~~~~~~~===~~~~~~~~~~~~~~~~~~~~~~~~~~~=======~~~~~~~~~~~~~~~~~~~~~~#\
			#~~~~~~~~~~~~~~~~~~~=>=~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~#\
			#~~~~~~~~~~~~~~~~~~~===~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~#\
			#~~~~~~~~~~~~~~~~~~~===~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~#\
			#~~~~~~~~~~~~~~~~~~~===~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~#\
			##____________________________________________________________________________##",

			colorMaps: [
			"\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBw\
			wBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBw\
			wBBBBBBBBSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsBBBBBBBBBBBBw\
			wBBBBBBBBsSsSsSsSsRsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsRsSsSsSBBBBBBBBBBBBw\
			wBBBBBBBBSsSsSsSsRrRsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsRrRSsSsSBBBBBBBBBBBBw\
			wBBBBBBBBsSsSsSsRrBrRsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSRRRRrCrRRsSsBBBBBBBBBBBBw\
			wBBBBBBBBSsSsSsRrBbBrRsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSRrrrrCcCrrRSsBBBBBBBBBBBBw\
			wBBBBBBBBsSsSsSrBbbbBrSsSsSsSsSsSsSRRRRsSsSsSsSsSsSsSsrCCCCcccCCrsSBBBBBBBBBBBBw\
			wBBBBBBBBSsSsSsSBbbbbSsSsSsSsSsSsSRrrrrRsSsSsSsSsSsSsSsCccccccccsSsBBBBBBBBBBBBw\
			wCCCCCCCcsSsSsSsBbbBbSsSsSsSsSsSsRrGGGGrRsSsSsSsSsSsSsSCcccccCccSsSBBBBBBBBBBBBw\
			wCCxCCCCcSsSsSsSsSsSsSsSsSsSsSsSsrGggggGrSsSsSsSsSsSsSsSsSsSsSsSsSsBBBBBBBBBBBBw\
			wccccccccsSsSsSsSsSsSsSsSsSsSsSsSsGgggggSsSsSsSsSsSsSsSsSsSsSsSsSsSCCCCCCCCcbBBw\
			wbbbbbbbbSsSsSsSsSsSsSsSsSsSsSsSsSGgggggsSsSsSsSsSsSsSsSsSsSsSsSsSscccccccccbbBw\
			wbBbBbBbBsSsSsSsSsSsSsSsSsSsSsSsSsGgggGgSsSsSsSsSsSsSsSsSsSsSsSsSsSbbbbbbbbbbBBw\
			wBBBBBBBBSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsBbBbBbBbBBBBw\
			wBBBBBBBBBBBBBBBBBbbCCcbBBBBBBBBBBBBBBBBBBBBBBBBbbCCCCCCcbBBBBBBBBBBBBBBBBBBBBBw\
			wBBBBBBBBBBBBBBBBBBbCCcbbBBBBBBBBBBBBBBBBBBBBBBBBbCCCCCCcbbBBBBBBBBBBBBBBBBBBBBw\
			wBBBBBBBBBBBBBBBBBbbCCcbBBBBBBBBBBBBBBBBBBBBBBBBbbcccccccbBBBBBBBBBBBBBBBBBBBBBw\
			wBBBBBBBBBBBBBBBBBBbCxcbbBBBBBBBBBBBBBBBBBBBBBBBBbbbbbbbbbBBBBBBBBBBBBBBBBBBBBBw\
			wBBBBBBBBBBBBBBBBBbbCCcbBBBBBBBBBBBBBBBBBBBBBBBBBBbBbBbBbBBBBBBBBBBBBBBBBBBBBBBw\
			wBBBBBBBBBBBBBBBBBBbCCcbbBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBw\
			wBBBBBBBBBBBBBBBBBbbcccbBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBw\
			SSGGGGGGgggSSGGGGGGGGGGGggggggggggggggggggggggggggggggggggggggggggggggggggggggSS",
			
			"\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBw\
			wBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBw\
			wBBBBBBBBSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsBBBBBBBBBBBBw\
			wBBBBBBBBsSsSsSsSsRsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsRsSsSsSBBBBBBBBBBBBw\
			wBBBBBBBBSsSsSsSsRrRsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsRrRSsSsSBBBBBBBBBBBBw\
			wBBBBBBBBsSsSsSsRrBrRsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSRRRRrCrRRsSsBBBBBBBBBBBBw\
			wBBBBBBBBSsSsSsRrBbBrRsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSRrrrrCcCrrRSsBBBBBBBBBBBBw\
			wBBBBBBBBsSsSsSrBbbbBrSsSsSsSsSsSsSRRRRsSsSsSsSsSsSsSsrCCCCcccCCrsSBBBBBBBBBBBBw\
			wBBBBBBBBSsSsSsSBbbbbSsSsSsSsSsSsSRrrrrRsSsSsSsSsSsSsSsCccccccccsSsBBBBBBBBBBBBw\
			wCCCCCCCcsSsSsSsBbbBbSsSsSsSsSsSsRrGGGGrRsSsSsSsSsSsSsSCcccccCccSsSBBBBBBBBBBBBw\
			wCCxCCCCcSsSsSsSsSsSsSsSsSsSsSsSsrGggggGrSsSsSsSsSsSsSsSsSsSsSsSsSsBBBBBBBBBBBBw\
			wccccccccsSsSsSsSsSsSsSsSsSsSsSsSsGgggggSsSsSsSsSsSsSsSsSsSsSsSsSsSCCCCCCCCcBBBw\
			wbBbBbBbBSsSsSsSsSsSsSsSsSsSsSsSsSGgggggsSsSsSsSsSsSsSsSsSsSsSsSsSscccccccccbBBw\
			wBBBBBBBBsSsSsSsSsSsSsSsSsSsSsSsSsGgggGgSsSsSsSsSsSsSsSsSsSsSsSsSsSBbBbBbBbBBBBw\
			wBBBBBBBBSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsSsBBBBBBBBBBBBw\
			wBBBBBBBBBBBBBBBBBBbCCcBBBBBBBBBBBBBBBBBBBBBBBBBBbCCCCCCcBBBBBBBBBBBBBBBBBBBBBBw\
			wBBBBBBBBBBBBBBBBBBBCCcbBBBBBBBBBBBBBBBBBBBBBBBBBBCCCCCCcbBBBBBBBBBBBBBBBBBBBBBw\
			wBBBBBBBBBBBBBBBBBBbCCcBBBBBBBBBBBBBBBBBBBBBBBBBBbcccccccBBBBBBBBBBBBBBBBBBBBBBw\
			wBBBBBBBBBBBBBBBBBBBCxcbBBBBBBBBBBBBBBBBBBBBBBBBBBbBbBbBbBBBBBBBBBBBBBBBBBBBBBBw\
			wBBBBBBBBBBBBBBBBBBbCCcBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBw\
			wBBBBBBBBBBBBBBBBBBBCCcbBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBw\
			wBBBBBBBBBBBBBBBBBBbcccBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBw\
			SSGGGGGGgggSSGGGGGGGGGGGggggggggggggggggggggggggggggggggggggggggggggggggggggggSS",
			],
			
			// auto-generated based on map, keep empty!
			maskMap: '',
			
			// auto-generated based on initMonsters, keep empty!
			monsters: []
		},
		
		darkForest: {
			playerPosition: {x: 39, y: 19},
			lineLength: 80,
			
			initMonsters: [
				{character: '@', color: 'O', x: 72, y: 4, aggressive: false, dialogue: 'Many "b" bats inhabit these caves'},
				{character: '@', color: 'y', x: 17, y: 18, aggressive: false, dialogue: 'Have you visited my fishing village?'},
				{character: '@', color: 'O', x: 66, y: 18, aggressive: false, dialogue: 'I am not afraid of bats!'},
				{character: 's', color: 's', aggressive: true, hp: 1, exp: 8, spawnRate: 0.025},
				{character: 'S', color: 'S', aggressive: true, hp: 2, exp: 14, spawnRate: 0.01}
			],
			
			exits: [
				{x: 39, y: 19, level: 'worldMap'}
			],
			
			enableFogOfWar: true,
			
			showSplashScreen: true,
			
			splashMap: "\
			################################################################################\
			#______________________________________________________________________________#\
			#______________________________________________________________________________#\
			#______________________________________________________________________________#\
			#______________________________________________________________________________#\
			#______________________________________________________________________________#\
			#______________________________________________________________________________#\
			#_____________________Dark_Forest______________________________________________#\
			#______________________________________________________________________________#\
			#_____________________xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx__________________________#\
			#_____________________xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx________________________#\
			#_____________________xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx______________________#\
			#_____________________xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx_________________________#\
			#_____________________xxxxxxxxxxxxxxxxxxxxxxxxxxxx_____________________________#\
			#______________________________________________________________________________#\
			#_____________________Press_any_key_to_continue..._____________________________#\
			#______________________________________________________________________________#\
			#______________________________________________________________________________#\
			#______________________________________________________________________________#\
			#______________________________________________________________________________#\
			#______________________________________________________________________________#\
			#______________________________________________________________________________#\
			#______________________________________________________________________________#\
			##____________________________________________________________________________##",

			splashColorMaps: [
			"\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwrrrrrrrrrrrrrrrrrrrwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
			
			"\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwrrrrrrrrrrrrrrrrrrrwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww"
			],
			
			map: "\
			################################################################################\
			#&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&#\
			#&...........................&................................................&#\
			#&.............................................&&.........&&............&.....&#\
			#&....&........&&....,,,..........&&..............,,,.........................&#\
			#&........&&&.......,,,...&.................&....,,,,,...............&&.......&#\
			#&.............&...,,,.................&..........,,,.........................&#\
			#&,,,,...................~~~~..................&.........&...~~~~...&.........&#\
			#&,,,,.....................~~~~..&&......~~~..................~~..............&#\
			#&.,,..........&&............~~~~~........~~~...............~~~~..............&#\
			#&.........&..........&......&&&~~.........~~.............~~~~......&&........&#\
			#&...................................&.....~&&....&&&&....~~~~..............,,&#\
			#&.......&.....~~~~~.......................~~~~...............&............,,,&#\
			#&...............~~~..&..........&.........~.~~...........................,,,,&#\
			#&....&&..........~~~.....................~~............&..................,,,&#\
			#&.........&&......~~~~.........,,,,...&.~~..&......&.......................,,&#\
			#&...............................,,,,...........,,....................&.......&#\
			#&.........&................&&...,,,,..........,,,,...........&&&...&.........&#\
			#&................&&....&..........&&.&.......,,,,,,...&......................&#\
			#&.....................................>.......,,,,...........................&#\
			#&...................&..........................&.....................&&&.....&#\
			#&............................................................................&#\
			#&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&#\
			##____________________________________________________________________________##",

			colorMaps: [
			"\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccw\
			wcCCCCCCCCCCCCCCCCCCCCCCCCCCCcCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCcw\
			wcCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCcCCCCCCCCCCcCCCCCCCCCCCCCcCCCCCcw\
			wcCCCCcCCCCCCCCcCCCCCgGGCCCCCCCCCCcCCCCCCCCCCCCCCCgGGCCCCCCCCCCCCCCCCCCCCCCCCCcw\
			wcCCCCCCCCcCCCCCCCCCgGGCCCcCCCCCCCCCCCCCCCCCcCCCCgGGGGCCCCCCCCCCCCCCCcCCCCCCCCcw\
			wcCCCCCCCCCCCCCcCCCgGGCCCCCCCCCCCCCCCCCcCCCCCCCCCCgGGCCCCCCCCCCCCCCCCCCCCCCCCCcw\
			wcgGGGCCCCCCCCCCCCCCCCCCCbBBBCCCCCCCCCCCCCCCCCCcCCCCCCCCCcCCCbBBBCCCcCCCCCCCCCcw\
			wcgGGGCCCCCCCCCCCCCCCCCCCCCbBBBCCcCCCCCCCbBBCCCCCCCCCCCCCCCCCCbBCCCCCCCCCCCCCCcw\
			wcCgGCCCCCCCCCCcCCCCCCCCCCCCCbBBBBCCCCCCCCbBBCCCCCCCCCCCCCCCbBBBCCCCCCCCCCCCCCcw\
			wcCCCCCCCCCcCCCCCCCCCCcCCCCCCcccbBCCCCCCCCCbBCCCCCCCCCCCCCbBBBCCCCCCcCCCCCCCCCcw\
			wcCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCcCCCCCbccCCCCcCCCCCCCbBBBCCCCCCCCCCCCCCgGcw\
			wcCCCCCCCcCCCCCbBBBBCCCCCCCCCCCCCCCCCCCCCCCbBBBCCCCCCCCCCCCCCCcCCCCCCCCCCCCgGGcw\
			wcCCCCCCCCCCCCCCCbBBCCcCCCCCCCCCCcCCCCCCCCCbCbBCCCCCCCCCCCCCCCCCCCCCCCCCCCgGGGcw\
			wcCCCCcCCCCCCCCCCCbBBCCCCCCCCCCCCCCCCCCCCCbBCCCCCCCCCCCCcCCCCCCCCCCCCCCCCCCgGGcw\
			wcCCCCCCCCCcCCCCCCCbBBBCCCCCCCCCgGGGCCCcCbBCCcCCCCCCcCCCCCCCCCCCCCCCCCCCCCCCgGcw\
			wcCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCgGGGCCCCCCCCCCCgGCCCCCCCCCCCCCCCCCCCCcCCCCCCCcw\
			wcCCCCCCCCCcCCCCCCCCCCCCCCCCcCCCCgGGGCCCCCCCCCCgGGGCCCCCCCCCCCcCCCCCcCCCCCCCCCcw\
			wcCCCCCCCCCCCCCCCCcCCCCCcCCCCCCCCCCcCCcCCCCCCCgGGGGGCCCcCCCCCCCCCCCCCCCCCCCCCCcw\
			wcCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCxCCCCCCCgGGGCCCCCCCCCCCCCCCCCCCCCCCCCCCcw\
			wcCCCCCCCCCCCCCCCCCCCcCCCCCCCCCCCCCCCCCCCCCCCCCCcCCCCCCCCCCCCCCCCCCCCCcCCCCCCCcw\
			wcCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCcw\
			wccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccw\
			SSGGGGGGgggSSGGGGGGGGGGGggggggggggggggggggggggggggggggggggggggggggggggggggggggSS",
			
			"\
			wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
			wccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccw\
			wcCCCCCCCCCCCCCCCCCCCCCCCCCCCcCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCcw\
			wcCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCcCCCCCCCCCCcCCCCCCCCCCCCCcCCCCCcw\
			wcCCCCcCCCCCCCCcCCCCCgGGCCCCCCCCCCcCCCCCCCCCCCCCCCgGGCCCCCCCCCCCCCCCCCCCCCCCCCcw\
			wcCCCCCCCCcCCCCCCCCCgGGCCCcCCCCCCCCCCCCCCCCCcCCCCgGGGGCCCCCCCCCCCCCCCcCCCCCCCCcw\
			wcCCCCCCCCCCCCCcCCCgGGCCCCCCCCCCCCCCCCCcCCCCCCCCCCgGGCCCCCCCCCCCCCCCCCCCCCCCCCcw\
			wcgGGGCCCCCCCCCCCCCCCCCCCbBBBCCCCCCCCCCCCCCCCCCcCCCCCCCCCcCCCbBBBCCCcCCCCCCCCCcw\
			wcgGGGCCCCCCCCCCCCCCCCCCCCCbBBBCCcCCCCCCCbBBCCCCCCCCCCCCCCCCCCbBCCCCCCCCCCCCCCcw\
			wcCgGCCCCCCCCCCcCCCCCCCCCCCCCbBBBBCCCCCCCCbBBCCCCCCCCCCCCCCCbBBBCCCCCCCCCCCCCCcw\
			wcCCCCCCCCCcCCCCCCCCCCcCCCCCCcccbBCCCCCCCCCbBCCCCCCCCCCCCCbBBBCCCCCCcCCCCCCCCCcw\
			wcCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCcCCCCCbccCCCCcCCCCCCCbBBBCCCCCCCCCCCCCCgGcw\
			wcCCCCCCCcCCCCCbBBBBCCCCCCCCCCCCCCCCCCCCCCCbBBBCCCCCCCCCCCCCCCcCCCCCCCCCCCCgGGcw\
			wcCCCCCCCCCCCCCCCbBBCCcCCCCCCCCCCcCCCCCCCCCbCbBCCCCCCCCCCCCCCCCCCCCCCCCCCCgGGGcw\
			wcCCCCcCCCCCCCCCCCbBBCCCCCCCCCCCCCCCCCCCCCbBCCCCCCCCCCCCcCCCCCCCCCCCCCCCCCCgGGcw\
			wcCCCCCCCCCcCCCCCCCbBBBCCCCCCCCCgGGGCCCcCbBCCcCCCCCCcCCCCCCCCCCCCCCCCCCCCCCCgGcw\
			wcCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCgGGGCCCCCCCCCCCgGCCCCCCCCCCCCCCCCCCCCcCCCCCCCcw\
			wcCCCCCCCCCcCCCCCCCCCCCCCCCCcCCCCgGGGCCCCCCCCCCgGGGCCCCCCCCCCCcCCCCCcCCCCCCCCCcw\
			wcCCCCCCCCCCCCCCCCcCCCCCcCCCCCCCCCCcCCcCCCCCCCgGGGGGCCCcCCCCCCCCCCCCCCCCCCCCCCcw\
			wcCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCxCCCCCCCgGGGCCCCCCCCCCCCCCCCCCCCCCCCCCCcw\
			wcCCCCCCCCCCCCCCCCCCCcCCCCCCCCCCCCCCCCCCCCCCCCCCcCCCCCCCCCCCCCCCCCCCCCcCCCCCCCcw\
			wcCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCcw\
			wccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccw\
			SSGGGGGGgggSSGGGGGGGGGGGggggggggggggggggggggggggggggggggggggggggggggggggggggggSS",
			],
			
			// auto-generated based on map, keep empty!
			maskMap: '',
			
			// auto-generated based on initMonsters, keep empty!
			monsters: []
		}
	}
};
