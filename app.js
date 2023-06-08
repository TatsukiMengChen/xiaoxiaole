libs = [
	[
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0]
	],
	[
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 1, 1, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0]
	],
	[
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 1, 1, 1, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0]
	],
	[
		[0, 0, 0, 0, 0],
		[0, 1, 1, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0]
	],
	[
		[0, 0, 0, 0, 0],
		[0, 1, 1, 1, 0],
		[0, 0, 0, 1, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0]
	],
	[
		[0, 0, 0, 0, 0],
		[0, 1, 1, 0, 0],
		[0, 0, 1, 1, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0]
	],
	[
		[0, 0, 0, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 1, 1, 1, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0]
	],
	[
		[0, 0, 0, 0, 0],
		[0, 1, 1, 0, 0],
		[0, 1, 1, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0]
	],
	[
		[0, 0, 0, 0, 0],
		[0, 1, 0, 0, 0],
		[0, 1, 0, 0, 0],
		[0, 1, 1, 1, 0],
		[0, 0, 0, 0, 0]
	],
	[
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[1, 1, 1, 1, 1],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0]
	],
	[
		[0, 0, 0, 0, 0],
		[0, 1, 1, 1, 0],
		[0, 1, 1, 1, 0],
		[0, 1, 1, 1, 0],
		[0, 0, 0, 0, 0]
	]
]
colors = ["#F44336","#FFA726","#FFEB3B","#64DD17","#00E5FF","#2196F3","#D500F9"]
score = 0
lineScore = [10, 20, 40, 65, 90, 120]
currentLibs = []
currentColors = []
board = [
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0]
]
placed = [false, false, false]

haveShowedPlace = false

function refreshScore() {
	$("#score-num").text(score)
}

function getRandItem() {
	var id = Math.floor((Math.random() * libs.length));
	var direction = Math.floor((Math.random() * 4) + 1);
	var data = [
		[],
		[],
		[],
		[],
		[]
	]
	if (direction == 1) {
		for (var i = 0; i < 5; i++) {
			for (var j = 0; j < 5; j++) {
				data[i][j] = libs[id][i][j]
			}
		}
	} else if (direction == 2) {
		for (var i = 0; i < 5; i++) {
			for (var j = 0; j < 5; j++) {
				data[j][i] = libs[id][4 - i][j]
			}
		}
	} else if (direction == 3) {
		for (var i = 0; i < 5; i++) {
			for (var j = 0; j < 5; j++) {
				data[i][j] = libs[id][4 - i][4 - j]
			}
		}
	} else if (direction == 4) {
		for (var i = 0; i < 5; i++) {
			for (var j = 0; j < 5; j++) {
				data[j][i] = libs[id][i][4 - j]
			}
		}
	}
	return data
}

function setItem(id, data,color) {
	for (var i = 0; i < 5; i++) {
		for (var j = 0; j < 5; j++) {
			if (data[i][j] == 1) {
				$(id).children().eq(i).children().eq(j).css({
					"background-color": color,
					"border": "solid 1px #bbdefb"
				});
			} else {
				$(id).children().eq(i).children().eq(j).css({
					"background-color": "",
					"border": "solid 1px rgba(0,0,0,0)"
				});
			}

		}
	}
}

function refreshLib() {
	if (placed[0] == true && placed[1] == true && placed[2] == true) {
		for (var i = 0; i < 3; i++) {
			currentLibs[i] = getRandItem()
			currentColors[i] = colors[Math.floor((Math.random() * 7))]
			var item = $("#lib").children().eq(i)
			setItem(item, currentLibs[i], currentColors[i])
			$(item).css({
				"visibility": ""
			})
		}
		placed = [false, false, false]
	}
}
for (var i = 0; i < 3; i++) {
	currentLibs[i] = getRandItem()
	currentColors[i] = colors[Math.floor((Math.random() * 7))]
	setItem($("#lib").children().eq(i), currentLibs[i],currentColors[i])
}

function canPlace(x, y, id) {
	for (var i = 0; i < 5; i++) {
		for (var j = 0; j < 5; j++) {
			if (currentLibs[id][i][j] == 1) {
				if (y + i >= 0 && y + i <= 7 && x + j >= 0 && x + j <= 7) {
					if (board[y + i][x + j] == 0) {} else {
						return false
					}
				} else {
					return false
				}
			}
		}
	}
	return true
}

function clearPlace() {
	if (haveShowedPlace) {
		haveShowedPlace = false
		for (i in showedPlace) {
			$("#board").children().eq(showedPlace[i][0]).children().eq(showedPlace[i][1]).css({
				"background-color": ""
			});
		}
	}
}

function showPlace(x, y, id) {
	if (canPlace(x, y, id)) {
		clearPlace()
		haveShowedPlace = true
		showedPlace = []
		for (var i = 0; i < 5; i++) {
			for (var j = 0; j < 5; j++) {
				if (currentLibs[id][i][j] == 1) {
					showedPlace.push([y + i, x + j])
					$("#board").children().eq(y + i).children().eq(x + j).css({
						"background-color": "#CCFF90"
					});
				}
			}
		}
	} else {
		clearPlace()
	}
}

function clearLine() {
	var lines = [
		[],
		[]
	]
	for (i in board) {
		let isLine = true
		for (j in board[i]) {
			if (board[i][j] == 0) {
				isLine = false
			}
		}
		if (isLine) {
			lines[0].push(Number(i))
		}
	}
	for (i in board) {
		let isLine = true
		for (j in board[i]) {
			if (board[j][i] == 0) {
				isLine = false
			}
		}
		if (isLine) {
			lines[1].push(Number(i))
		}
	}
	console.log(lines)
	var linesNum = 0
	for (i in lines[0]) {
		linesNum++
		for (var j = 0; j < 8; j++) {
			board[lines[0][i]][j] = 0
			$("#board").children().eq(lines[0][i]).children().eq(j).css({
				"background-color": ""
			});
		}
	}
	for (i in lines[1]) {
		linesNum++
		for (var j = 0; j < 8; j++) {
			board[j][lines[1][i]] = 0
			$("#board").children().eq(j).children().eq(lines[1][i]).css({
				"background-color": ""
			});
		}
	}
	if (linesNum != 0) {
		score += lineScore[linesNum - 1]
	}
}



$('.lib-pre').on('touchstart', function(e) {
	var touch = e.originalEvent.targetTouches[0];
	var X = touch.pageX;
	var Y = touch.pageY
	preID = $(this).attr('num');
	setItem($("#pre"), currentLibs[preID], currentColors[preID])
	$("#pre").css({
		"display": "block"
	})
	preSize = $("#pre").width()
	$("#pre").css({
		"left": X - preSize / 2,
		"top": Y - preSize
	})
	boardXY = $("#board").offset()
	boardSize = $("#board").width()
	itemSize = $("#board").children().eq(0).children().eq(0).width()
});

$('.lib-pre').on('touchmove', function(e) {
	var touch = e.originalEvent.targetTouches[0];
	var X = touch.pageX;
	var Y = touch.pageY
	//console.log("touchmove", X, Y,X-preWidth/2)
	$("#pre").css({
		"left": X - preSize / 2,
		"top": Y - preSize
	})
	var x = Math.floor(((X - preSize / 2) - boardXY.left + itemSize/2) / (boardSize / 8))
	var y = Math.floor(((Y - preSize) - boardXY.top + itemSize/2) / (boardSize / 8))
	showPlace(x, y, preID)
});

$('.lib-pre').on('touchend', function(e) {
	var touch = e.originalEvent.changedTouches[0];
	var X = touch.pageX;
	var Y = touch.pageY
	$("#pre").css({
		"display": "none"
	})
	var x = Math.floor(((X - preSize / 2) - boardXY.left + itemSize/2) / (boardSize / 8))
	var y = Math.floor(((Y - preSize) - boardXY.top + itemSize/2) / (boardSize / 8))
	if (canPlace(x, y, preID)) {
		for (var i = 0; i < 5; i++) {
			for (var j = 0; j < 5; j++) {
				if (currentLibs[preID][i][j] == 1) {
					score++
					board[y + i][x + j] = 1
					$("#board").children().eq(y + i).children().eq(x + j).css({
						"background-color": currentColors[preID]
					});
				}
			}
		}
		haveShowedPlace = false
		showedPlace = []
		placed[preID] = true
		$(this).css({
			"visibility": "hidden"
		})
		refreshLib()
		clearLine()
		refreshScore()
	}
})