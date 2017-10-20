var elements = document.getElementsByTagName('*');

for (var i = 0; i <elements.length; i++) {
	var element = elements[i];
	for (var j = 0; j <element.childNodes.length; j++) {
		var curr = element.childNodes[j];
		if(curr.nodeType==3 || curr.nodeType==4 || curr.nodeType==8){
			var text = curr.nodeValue;

			text = text.replace(/\bDonald Trump\b/g, "Crime Master Gogo");
			text = text.replace(/\bMr\. Trump\b/g, "Crime Master Gogo");
			
			curr.nodeValue=text;
		}
	}
}