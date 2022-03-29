var leftc = 0;
			var upc = 21;
			function left() {
				if(leftc <= -25) {
					var answerl = `position: absolute; left: 1435px; top: ${upc}px`;
					document.getElementById("character").style = answerl;
					leftc = 1435;
				}
				leftc -= 25;
				var answerl = `position: absolute; left: ${leftc}px; top: ${upc}px`
				document.getElementById("character").style = answerl;
			}
			function right() {
				if(leftc >= 1410) {
					var answerl = `position: absolute; left: 10px; top: ${upc}px`;
					document.getElementById("character").style = answerl;
					leftc = 10;
				}
				leftc += 25;
				var answerl = `position: absolute; left: ${leftc}px; top: ${upc}px`
				document.getElementById("character").style = answerl;
			}
			function up() {
				if(upc <= 0) {
					var answerl = `position: absolute; left: ${leftc}px; top: 700px`;
					document.getElementById("character").style = answerl;
					upc = 700;
				}
				upc -= 25;
				var answerl = `position: absolute; left: ${leftc}px; top: ${upc}px`
				document.getElementById("character").style = answerl;
			}
			function down() {
				if(upc >= 700) {
					var answerl = `position: absolute; left: ${leftc}px; top: 0px`;
					document.getElementById("character").style = answerl;
					upc = 0;
				}
				upc += 25;
				var answerl = `position: absolute; left: ${leftc}px; top: ${upc}px`
				document.getElementById("character").style = answerl;
			}
			function down() {
				if(upc >= 700) {
					var answerl = `position: absolute; left: ${leftc}px; top: 0px`;
					document.getElementById("character").style = answerl;
					upc = 0;
				}
				upc += 25;
				var answerl = `position: absolute; left: ${leftc}px; top: ${upc}px`
				document.getElementById("character").style = answerl;
			}
			function teleport() {
				document.getElementById("preparing").innerText = "Preparing...";
				document.getElementById("preparing").disabled = true;
				function go() {
					leftc = Math.floor(Math.random() * (1435 - 1 + 1) + 1)
					upc = Math.floor(Math.random() * (700 - 1 + 1) + 1)
					var answerl = `position: absolute; left: ${leftc}px; top: ${upc}px`
					document.getElementById("character").style = answerl;
					document.getElementById("preparing").innerText = "Teleport";
					document.getElementById("preparing").disabled = false;
				}
				setTimeout(go, Math.floor(Math.random() * (3000 - 1000 + 1) + 1000))
			}