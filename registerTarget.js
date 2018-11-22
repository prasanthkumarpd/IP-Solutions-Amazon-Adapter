			var api="https://144.21.93.75/ords/pdb1/ipsolws/targetreg";

			function getTargetDetails() 
			{	
				//var api="https://144.21.93.75/ords/pdb1/ipsolws/targetreg";
				var data = null;

				var getTarget = new XMLHttpRequest();
				getTarget.withCredentials = true;
				console.log("Before invoke ");
				//console.log("value : "+document.getElementById('Uname').value);
				getTarget.addEventListener("readystatechange", function () {
													  if (this.readyState === 4) 
													  {    
														var tj = null; 
														tj=JSON.parse(this.responseText);
														document.getElementById('AWSKey').value= tj.items[0].aws_access_key_id;
														document.getElementById('SecKey').value= tj.items[0].secret_key;
														document.getElementById('SelId').value= tj.items[0].seller_id;
														document.getElementById('DevId').value= tj.items[0].developer_id;
														document.getElementById('DevName').value= tj.items[0].developer_name;
														/*console.log(this.responseText);
														console.log("value of first element: "+sak);*/
														}
				});
				getTarget.open("GET", api+"/get/1");
				getTarget.setRequestHeader("authorization", "Basic cGR4OnBkeA==");
				getTarget.setRequestHeader("cache-control", "no-cache");
				getTarget.setRequestHeader("postman-token", "81dbdefd-6239-44be-1820-00510628cad0");
				getTarget.send(data);
			}	
			
			function UpdateTargetDetails() 
			{	
				//var api="https://144.21.93.75/ords/pdb1/ipsolws/targetreg";
				var data = null;
				var updateTarget = new XMLHttpRequest();
				
				updateTarget.withCredentials = true;
				updateTarget.addEventListener("readystatechange", function () {
														if (this.readyState === 4) 
														{
				     										alert(this.responseText);
				   										}
						});

				updateTarget.open("PUT", api+"/put/1");
				updateTarget.setRequestHeader("authorization", "Basic cGR4OnBkeA==");
				updateTarget.setRequestHeader("aws_access_key_id", document.getElementById('AWSKey').value);
				updateTarget.setRequestHeader("secret_key", document.getElementById('SecKey').value);
				updateTarget.setRequestHeader("seller_id", document.getElementById('SelId').value);
				updateTarget.setRequestHeader("developer_id", document.getElementById('DevId').value);
				updateTarget.setRequestHeader("developer_name", document.getElementById('DevName').value);
				/*updateTarget.setRequestHeader("aws_access_key_id", "AKIAJV5WBZ5HFLRKS6GQ");
				updateTarget.setRequestHeader("secret_key", "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");
				updateTarget.setRequestHeader("seller_id", "A2JFYH8OV4B8LI");
				updateTarget.setRequestHeader("developer_id", "4975-8375-8544");
				updateTarget.setRequestHeader("developer_name", "PHC Ecommerce Int.");*/
				updateTarget.setRequestHeader("cache-control", "no-cache");
				updateTarget.setRequestHeader("postman-token", "031bb243-5852-a010-df4e-e86c04c9ca2e");
				updateTarget.send(data);		 
			}
			
			function clearTarget()
			{
				document.getElementById('AWSKey').value= null;
				document.getElementById('SecKey').value= null;
				document.getElementById('SelId').value= null;
				document.getElementById('DevId').value= null;
				document.getElementById('DevName').value= null;
			}				
