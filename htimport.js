let tagToAppend;
let resFile

async function parseImports(file) {
	var splitCmds = file.split('\n');
	for (var i = 0; i < splitCmds.length; i++) {
		let cmd = splitCmds[i];
		let splitCmd = cmd.split(' ');
		if (splitCmd[0].toLowerCase() === 'style') {
			let x = document.createElement("link");
			x.setAttribute("rel", "stylesheet");
			x.setAttribute("type", "text/css");
			x.setAttribute("href", splitCmd[1]);
			document.head.appendChild(x);
		}
		if (splitCmd[0].toLowerCase() === 'script') {
			let s = document.createElement("script");
			s.src = splitCmd[1];
			if (splitCmd[2] === 'module') {
				s.type = "module";
			}
			document.head.appendChild(s);
		}
	}
}

fetch(".imports")
	.then(async data => {
		if (data.status === 404) {
			throw Error('Imports file not found.');
		} else if (data.status !== 200) {
			throw Error('Something went wrong.');
		} else {
			let text = await data.text();
			parseImports(text);
		}
	}).catch(error => {
		throw Error(error);
	});