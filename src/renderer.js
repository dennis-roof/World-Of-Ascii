/**
 * Renderer javascript functions
 * ---
 * These functions are responsible for drawing everything to screen
 */

/**
 * mapToHtml (string): convert map and colormap to a color ASCII HTML screen
 * ---
 * Parameters in options:
 * map (string): current ASCII map
 * colorMap (string): colormap for current ASCII map
 * charSet (object): unused
 * colorSet (object): hex color codes (string value including #) for ASCII symbols (keys)
 * lineLength (integer): number of characters on a single map line, used to break map into multiline screen
 */
function screenToHtml( screen )
{
	var map = screen.map;
	var colorMap = screen.colorMap;
	var maskMap = screen.maskMap;
	
	var charSet = gameMaps.charSet;
	var colorSet = gameMaps.colorSet;
	var lineLength = gameMaps.levels[ gameMaps.currentLevel ].lineLength;
	
	var htmlMap = '';
	
	var playerPosition = getCoordinate( gameMaps.levels[ gameMaps.currentLevel ].playerPosition );
	var showSplashScreen = gameMaps.levels[ gameMaps.currentLevel ].showSplashScreen;
	
	for (var position = 0; position < map.length; position++) {
		var character = map[position];
		var color = colorSet[ colorMap[position] ];
		
		if (! showSplashScreen && position === playerPosition)
			color = '#DDD';
		
		if (character === '>') character = '&gt';
		if (character === ' ') character = '&nbsp;';
		if (character === "\\") character = '&#92;';
		
		if (! showSplashScreen && maskMap[position] === '0') character = '&nbsp;';
		
		htmlMap += '<span style="color: ' + color + ';">' + character + '</span>';
		
		if ((position+1) % lineLength === 0) htmlMap += '<br />';
	}
	
	return htmlMap;
}

/**
 * drawPlayer (string): draws player @ on map and return updated map
 * ---
 * Parameters
 * map (string): current ASCII map
 * player (object): should include keys x and y with integer values, current player position on map
 * lineLength (integer): number of character on a single map line, used to break map into multiline screen
 */
function drawPlayer(screen)
{
	var playerCoordinate = getPlayerCoordinate();
	
	screen.map = screen.map.substr(0, playerCoordinate) + '@' + screen.map.substr(playerCoordinate+1);
	
	return screen;
}

function generateFogOfWar()
{
	if (gameMaps.levels[ gameMaps.currentLevel ].maskMap.length > 0)
		return;
	
	var enableFogOfWar = gameMaps.levels[ gameMaps.currentLevel ].enableFogOfWar;
	
	var map = getMap();
	var lineLength = gameMaps.levels[ gameMaps.currentLevel ].lineLength;
	var lastMapLine = lineLength * 23;
	for (var position = 0; position < map.length; position++) {
		var fogValue = ((enableFogOfWar && (position < lastMapLine)) ? '0' : '1');
		gameMaps.levels[ gameMaps.currentLevel ].maskMap += fogValue;
	}
	
	revealFogOfWar();
}

function revealFogOfWar()
{
	var lineLength = gameMaps.levels[ gameMaps.currentLevel ].lineLength;
	var playerCoordinate = getPlayerCoordinate();
	var map = getMap();
	
	var firstRevealRowCoordinate = playerCoordinate - lineLength - 1;
	var secondRevealRowCoordinate = playerCoordinate - 1;
	var thirdRevealRowCoordinate = playerCoordinate + lineLength - 1;
	
	var topCoordinate = playerCoordinate - (lineLength * 2);
	var topCheckCoordinate = playerCoordinate - lineLength;
	var leftCoordinate = playerCoordinate - 2;
	var leftCheckCoordinate = playerCoordinate - 1;
	var rightCoordinate = playerCoordinate + 2;
	var rightCheckCoordinate = playerCoordinate + 1;
	var bottomCoordinate = playerCoordinate + (lineLength * 2);
	var bottomCheckCoordinate = playerCoordinate + lineLength;
	
	var maskMap = gameMaps.levels[ gameMaps.currentLevel ].maskMap;
	
	maskMap = maskMap.substr(0, firstRevealRowCoordinate) + Array(4).join('1') + maskMap.substr(firstRevealRowCoordinate + 3);
	maskMap = maskMap.substr(0, secondRevealRowCoordinate) + Array(4).join('1') + maskMap.substr(secondRevealRowCoordinate + 3);
	maskMap = maskMap.substr(0, thirdRevealRowCoordinate) + Array(4).join('1') + maskMap.substr(thirdRevealRowCoordinate + 3);
	
	if (topCoordinate > 0 && ! isSightBlocker(map, topCheckCoordinate))
		maskMap = maskMap.substr(0, topCoordinate) + '1' + maskMap.substr(topCoordinate + 1);
	if (leftCoordinate > 0 && ! isSightBlocker(map, leftCheckCoordinate))
		maskMap = maskMap.substr(0, leftCoordinate) + '1' + maskMap.substr(leftCoordinate + 1);
	if (rightCoordinate > 0 && ! isSightBlocker(map, rightCheckCoordinate))
		maskMap = maskMap.substr(0, rightCoordinate) + '1' + maskMap.substr(rightCoordinate + 1);
	if (bottomCoordinate > 0 && ! isSightBlocker(map, bottomCheckCoordinate))
		maskMap = maskMap.substr(0, bottomCoordinate) + '1' + maskMap.substr(bottomCoordinate + 1);
	
	gameMaps.levels[ gameMaps.currentLevel ].maskMap = maskMap;
	
	return true;
}

function generateMonsters()
{
	if (gameMaps.levels[ gameMaps.currentLevel ].monsters.length > 0)
		return;
	
	var map = getMap();
	
	for (var n = 0; n < gameMaps.levels[ gameMaps.currentLevel ].initMonsters.length; n++) {
		var monster = gameMaps.levels[ gameMaps.currentLevel ].initMonsters[n];
		
		if (monster.x !== undefined && monster.y !== undefined) {
			gameMaps.levels[ gameMaps.currentLevel ].monsters.push(monster);
		} else if (monster.spawnRate !== undefined) {
			for (var position = 0; position < map.length; position++) {
				if (! isWall(map, position) && Math.random() < monster.spawnRate) {
					var coordinates = convertCoordinateToXY(position);
					
					var generatedMonster = {
						character: monster.character, 
						color: monster.color, 
						x: coordinates.x, 
						y: coordinates.y, 
						aggressive: true, 
						hp: monster.hp,
						exp: monster.exp
					};
					
					if (monster.dialogue !== undefined) generatedMonster.dialogue = monster.dialogue;
					
					gameMaps.levels[ gameMaps.currentLevel ].monsters.push(generatedMonster);
				}
			}
		}
	}
}

function moveMonster(monsterIndex, monster)
{
	var deltaX = (((Math.random() * 3) >> 0) - 1);
	var deltaY = (((Math.random() * 3) >> 0) - 1);
	
	changeMonsterPosition( monsterIndex, deltaX, deltaY );
	if (! monsterCanMove(monsterIndex)) changeMonsterPosition( monsterIndex, (-1 * deltaX), (-1 * deltaY) );
	
	return getCoordinate(monster);
}

function drawMonsters(isMovement, screen)
{
	for (var m = 0; m < gameMaps.levels[ gameMaps.currentLevel ].monsters.length; m++) {
		var monster = gameMaps.levels[ gameMaps.currentLevel ].monsters[m];
		
		if (monster === undefined) continue;
		
		monsterCoordinate = (isMovement ? moveMonster(m, monster) : getCoordinate(monster));
		
		screen.map = screen.map.substr(0, monsterCoordinate) + monster.character + screen.map.substr(monsterCoordinate+1);
		screen.colorMap = screen.colorMap.substr(0, monsterCoordinate) + monster.color + screen.colorMap.substr(monsterCoordinate+1);
		
		screen = drawDialogue(screen, monster, monsterCoordinate);
	}
	
	return screen;
}

function drawDialogue(screen, monster, monsterCoordinate)
{
	if (monster === undefined || monster.dialogue === undefined) return screen;
	
	var player = getPlayerPosition();
	
	if (player.x >= (monster.x-1) && player.x <= (monster.x+1) && player.y >= (monster.y-1) && player.y <= (monster.y+1)) {
		var lineLength = gameMaps.levels[ gameMaps.currentLevel ].lineLength;
		
		var dialogueArrowCoordinate = monsterCoordinate - lineLength + 1;
		if (dialogueArrowCoordinate < 0) return screen;
		
		if ((monsterCoordinate % lineLength) < (monster.dialogue.length / 2 >> 0)) return screen;
		
		var dialogueCoordinate = monsterCoordinate - (2*lineLength) - (monster.dialogue.length / 2 >> 0);
		
		// if dialogue coordinate falls off screen, don't draw dialogue
		if (dialogueCoordinate < 0) return screen;
		
		// if dialogue is split between two screen lines, don't draw dialogue
		if (((dialogueCoordinate+monster.dialogue.length) % lineLength) < (dialogueCoordinate % lineLength)) return screen;
		
		screen.map = screen.map.substr(0, dialogueArrowCoordinate) + '/' + screen.map.substr(dialogueArrowCoordinate+1);
		screen.colorMap = screen.colorMap.substr(0, dialogueArrowCoordinate) + 'x' + screen.colorMap.substr(dialogueArrowCoordinate+1);
		screen.maskMap = screen.maskMap.substr(0, dialogueArrowCoordinate) + '1' + screen.maskMap.substr(dialogueArrowCoordinate+1);
		
		screen.map = screen.map.substr(0, dialogueCoordinate) + monster.dialogue + screen.map.substr(dialogueCoordinate + monster.dialogue.length);
		screen.colorMap = screen.colorMap.substr(0, dialogueCoordinate) + Array(monster.dialogue.length+1).join('x') + screen.colorMap.substr(dialogueCoordinate + monster.dialogue.length);
		screen.maskMap = screen.maskMap.substr(0, dialogueCoordinate) + Array(monster.dialogue.length+1).join('1') + screen.maskMap.substr(dialogueCoordinate + monster.dialogue.length);
	}
	
	return screen;
}

function drawStats(screen)
{
	var lineLength = gameMaps.levels[ gameMaps.currentLevel ].lineLength;
	
	var coordinate = 23 * lineLength + 2;
	var statText = ' Level ' + getPlayerLevel() + ' |';
	statText += ' Experience: ' + Array((gameMaps.playerExp % gameMaps.playerLevelExp) + 1).join('=') + Array(gameMaps.playerLevelExp - (gameMaps.playerExp % gameMaps.playerLevelExp)).join(' ');
	
	screen.map = screen.map.substr(0, coordinate) + statText + screen.map.substr(coordinate + statText.length);
	
	return screen;
}

/**
 * getWorld (void): (re)draws current map state to screen using RivetsJS library
 */
function getWorld(isMovement)
{
	if (! gameMaps.levels[ gameMaps.currentLevel ].showSplashScreen) {
		generateMonsters();
		generateFogOfWar();
		if (isMovement)
			revealFogOfWar();
	}
	
	
	var screen = getScreen();

	if (gameMaps.levels[ gameMaps.currentLevel ].showSplashScreen) {
		return screenToHtml( screen );
	} else {
		return screenToHtml( drawStats( drawPlayer( drawMonsters(isMovement, screen) ) ) );
	}
}
