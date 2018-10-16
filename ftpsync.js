var chokidar = require("chokidar");

var watcher = chokidar.watch(".", {
	ignored: /(^|[\/\\])\../,
	persistent: true
});

watcher
	.on("add", function(path) {
		console.log("File", path, "has been added");
	})
	.on("change", function(path) {
		console.log("File", path, "has been changed");
	})
	.on("unlink", function(path) {
		console.log("File", path, "has been removed");
	})
	.on("error", function(error) {
		console.error("Error happened", error);
	});

process.stdin.resume();
process.stdin.setEncoding("utf8");

process.stdin.on("data", function(text) {
	text = text.trim();
	if (text.trim() === "quit") {
		console.log("quiting");
		process.exit();
	} else if (text.trim() === "ping") {
		console.log("pong");
	} else {
		console.log(text);
	}
});

