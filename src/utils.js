/**
 * Utilities javascript functions
 * ---
 * Small useful re-usable functions
 */
 
function getPlayerPosition()
{
	return gameMaps.levels[ gameMaps.currentLevel ].playerPosition;
}

function getPlayerLevel()
{
	return ((gameMaps.playerExp / gameMaps.playerLevelExp >> 0) + 1);
}
 
function changePlayerPosition( deltaX, deltaY )
{
	gameMaps.levels[ gameMaps.currentLevel ].playerPosition.x += deltaX;
	gameMaps.levels[ gameMaps.currentLevel ].playerPosition.y += deltaY;
}
 
function changeMonsterPosition( monsterIndex, deltaX, deltaY )
{
	gameMaps.levels[ gameMaps.currentLevel ].monsters[monsterIndex].x += deltaX;
	gameMaps.levels[ gameMaps.currentLevel ].monsters[monsterIndex].y += deltaY;
}

function changeLevelIfRequired()
{
	var exits = gameMaps.levels[ gameMaps.currentLevel ].exits;
	
	if (exits === []) return;
	
	for (var i = 0; i < exits.length; i++) {
		if (gameMaps.levels[ gameMaps.currentLevel ].playerPosition.x === exits[i].x)
			if (gameMaps.levels[ gameMaps.currentLevel ].playerPosition.y === exits[i].y)
				gameMaps.currentLevel = exits[i].level;
	}
}

function getMap()
{
	if (gameMaps.levels[ gameMaps.currentLevel ].showSplashScreen) {
		return gameMaps.levels[ gameMaps.currentLevel ].splashMap.replace(/[ \t]/g, '').replace(/_/g, ' ');
	} else {
		return gameMaps.levels[ gameMaps.currentLevel ].map.replace(/[ \t]/g, '').replace(/_/g, ' ');
	}
}

function getColorMap()
{
	var colorMapIndex = (gameMaps.colorMapSwitch ? 0 : 1);
	
	if (gameMaps.levels[ gameMaps.currentLevel ].showSplashScreen) {
		return gameMaps.levels[ gameMaps.currentLevel ].splashColorMaps[colorMapIndex].replace(/[ \t]/g, '');
	} else {
		return gameMaps.levels[ gameMaps.currentLevel ].colorMaps[colorMapIndex].replace(/[ \t]/g, '');
	}
}

function getMaskMap()
{
	return gameMaps.levels[ gameMaps.currentLevel ].maskMap;
}

function getScreen()
{
	return {
		map: getMap(),
		colorMap: getColorMap(),
		maskMap: getMaskMap()
	};
}

function getCoordinate(monster)
{
	return monster.x + (monster.y * gameMaps.levels[ gameMaps.currentLevel ].lineLength);
}

/**
 * getPlayerCoordinate (integer): get player coordinate as a map string index
 * ---
 * Parameters:
 * player (object): should include keys x and y with integer values, current player position on map
 * lineLength (integer): number of characters on a single map line, used to break map into multiline screen
 */
function getPlayerCoordinate()
{
	var player = getPlayerPosition();
	
	return getCoordinate(player);
}

function convertCoordinateToXY(coordinate)
{
	var lineLength = gameMaps.levels[ gameMaps.currentLevel ].lineLength;
	
	return {
		x: (coordinate % lineLength), 
		y: ((coordinate / lineLength) >> 0)
	};
}

function isWall(map, playerCoordinate)
{
	return (gameMaps.walls.indexOf(map[playerCoordinate]) !== -1);
}

function isSightBlocker(map, playerCoordinate)
{
	return (gameMaps.sightBlockers.indexOf(map[playerCoordinate]) !== -1);
}

function isNpcCollision(player, canAttack)
{
	for (var m = 0; m < gameMaps.levels[ gameMaps.currentLevel ].monsters.length; m++) {
		var monster = gameMaps.levels[ gameMaps.currentLevel ].monsters[m];
		
		if (monster !== undefined && player.x === monster.x && player.y === monster.y) {
			if (! monster.aggressive)
				return false;
			
			if (canAttack && monster.hp > 0)
				gameMaps.levels[ gameMaps.currentLevel ].monsters[m].hp -= 1;
			
			if (gameMaps.levels[ gameMaps.currentLevel ].monsters[m].hp === 0) {
				var playerExpGain = Math.ceil(monster.exp / getPlayerLevel());
				gameMaps.playerExp += playerExpGain;
				console.log(gameMaps.playerExp);
				delete gameMaps.levels[ gameMaps.currentLevel ].monsters[m];
			}
			
			return true;
		}
	}
	
	return false;
}

/**
 * playerCanMove (boolean): check if current map position is within map bounds and passable (not a wall) 
 * ---
 * Parameters:
 * map (string): current ASCII map
 * player (object): should include keys x and y with integer values, current player position on map
 * lineLength (integer): number of characters on a single map line, used to break map into multiline screen
 */
function playerCanMove()
{
	var player = getPlayerPosition();
	
	var isWithinMap = npcIsWithinMap(player);
	
	var playerCoordinate = getPlayerCoordinate();
	
	var map = getMap();
	
	var isPassable = ! isWall(map, playerCoordinate);
	var isCollision = isNpcCollision(player, true);
	
	return (isWithinMap && isPassable && ! isCollision);
}

function npcIsWithinMap(monster)
{
	var lineLength = gameMaps.levels[ gameMaps.currentLevel ].lineLength;
	
	return (monster.x > 0 && monster.x < (lineLength-1) && monster.y > 0 && monster.y < 23);
}

function monsterCanMove(monsterIndex)
{
	var monster = gameMaps.levels[ gameMaps.currentLevel ].monsters[monsterIndex];
	var player = gameMaps.levels[ gameMaps.currentLevel ].playerPosition;
	
	var isWithinMap = npcIsWithinMap(monster);
	
	var monsterCoordinate = getCoordinate(monster);
	
	var map = getMap();
	
	var isPassable = ! isWall(map, monsterCoordinate);
	var isPlayer = (monster.x === player.x && monster.y === player.y);
	var isCollision = isNpcCollision(player, false);
	
	return (isWithinMap && isPassable && ! isPlayer && ! isCollision);
}
