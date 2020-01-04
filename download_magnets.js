function downloadMagnets(){
	
	var resolution = prompt("Have you clicked \"Show More\"?\nEnter a resolution to download: ", "1080");
	if (resolution != null) {
		if(parseInt(resolution) == NaN){
			alert("Please enter a numerical resolution, for example '240', '720', or '1080'.");
		}else{
			var showLinks = document.getElementsByClassName("link-"+resolution+"p");
		
			var magnets = "";
			for (var i = 0 ; i < showLinks.length; i++) {
				var element = showLinks[i].getElementsByClassName("hs-magnet-link")[0];
				element = element.getElementsByTagName("a")[0];
				magnets += element.getAttribute('href') + "\n";
			};
			
			document.body.innerHTML += "<textarea id=\"magnetLinks\">"+magnets+"</textarea>"
			var copyText = document.getElementById("magnetLinks");
			copyText.select();
			document.execCommand("copy");
		
			alertDone();
		}
		
	}
}

async function alertDone(){
	await sleep(1000);
	alert("Magnet links have been copied into your clipboard.\nPaste them into your torrent client.");
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


