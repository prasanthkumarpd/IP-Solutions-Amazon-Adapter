			var api="https://144.21.93.75/ords/pdb1/ipsolws/sourcereg";

			function getSourceDetails() 
			{	
				//var api="https://144.21.93.75/ords/pdb1/ipsolws/sourcereg";
				var data = null;
				var getSource = new XMLHttpRequest();
				getSource.withCredentials = true;
				console.log("Before invoke ");
				//console.log("value : "+document.getElementById('Uname').value);
				getSource.addEventListener("readystatechange", function () {
													  if (this.readyState === 4) 
													  {    
														var tj = null; 
														tj=JSON.parse(this.responseText);
														document.getElementById('Uname').value= tj.items[0].user_name;
														document.getElementById('Pwd').value= tj.items[0].password;
														document.getElementById('CloudUrl').value= tj.items[0].cloud_url;
														document.getElementById('DBDir').value= tj.items[0].db_directory_name;
														document.getElementById('DocName').value= tj.items[0].doc_name;
														/*console.log(this.responseText);
														console.log("value of first element: "+sak);*/
														}
						});
				getSource.open("GET", api+"/get/1");
				getSource.setRequestHeader("authorization", "Basic cGR4OnBkeA==");
				getSource.setRequestHeader("cache-control", "no-cache");
				getSource.setRequestHeader("postman-token", "81dbdefd-6239-44be-1820-00510628cad0");
				getSource.send(data);
			}
			
			function UpdateSourceDetails() 
			{	
				//var api="https://144.21.93.75/ords/pdb1/ipsolws/sourcereg";
				var data = null;
				var updateSource = new XMLHttpRequest();
				
				updateSource.withCredentials = true;
				updateSource.addEventListener("readystatechange", function () {
														if (this.readyState === 4) 
														{
				     										alert(this.responseText);
				   										}
						});

				updateSource.open("PUT", api+"/put/1");
				updateSource.setRequestHeader("authorization", "Basic cGR4OnBkeA==");
				updateSource.setRequestHeader("user_name", document.getElementById('Uname').value);
				updateSource.setRequestHeader("password", document.getElementById('Pwd').value);
				updateSource.setRequestHeader("cloud_url", document.getElementById('CloudUrl').value);
				updateSource.setRequestHeader("db_directory_name", document.getElementById('DBDir').value);
				updateSource.setRequestHeader("doc_name", document.getElementById('DocName').value);
				updateSource.setRequestHeader("cache-control", "no-cache");
				updateSource.setRequestHeader("postman-token", "031bb243-5852-a010-df4e-e86c04c9ca2e");
				updateSource.send(data);		 
			}

			function clearSource()
			{
				document.getElementById('Uname').value= null;
				document.getElementById('Pwd').value= null;
				document.getElementById('CloudUrl').value= null;
				document.getElementById('DBDir').value= null;
				document.getElementById('DocName').value= null;
			}			
