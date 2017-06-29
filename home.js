function Appliances(name,power,weight,tumbler){
	this.name=name;
	this.power=power;
	this.weight=weight;
	this.tumbler=tumbler;
}
		
Appliances.prototype.status=function(){
return console.log('Name: '+ this.name+ ', Power: ' + this.power + ', Weight: ' + this.weight + ', Turn onn/Turn off: ' + this.tumbler);
}		
		
		function Iron(name, power,weight,tumbler,streamGenerator){
			Appliances.apply(this,arguments);
			this.streamGenerator=streamGenerator;
		}
		Iron.prototype=new Appliances(); 
		var iron=new Iron('Iron', 2400, 1.67, false, true);
		
		
		function Vacuum(name, power,weight,tumbler,typeClean){
			Appliances.apply(this,arguments);
			this.typeClean=typeClean;
		}			
		Vacuum.prototype=new Appliances();
		var vacuum=new Vacuum('VacuumCleaner',1800, 4.6, false, 'wet');
		
		
		function Refregerator(name, power,weight,tumbler,high){
			Appliances.apply(this,arguments);
			this.high=high;
		}
		Refregerator.prototype=new Appliances();
		var ref=new Refregerator('Refregerator', 250, 74, false, 195);
		
		
		function TV(name, power,weight,tumbler,diagonal){
			Appliances.apply(this,arguments);
			this.diagonal=diagonal;
		}		
		TV.prototype=new Appliances();
		var tv=new TV('TV', 70, 3.6, false, 22);
		
		
		function WashingMachine(name, power,weight,tumbler,classEnergy){
			Appliances.apply(this,arguments);
			this.classEnergy=classEnergy;
		}					
		WashingMachine.prototype=new Appliances();
		var wash=new WashingMachine('Wash', 190, 65, false, 'A');
		
		
		//Conteiner
		var home=[iron,vacuum,ref,tv,wash];	
		
		//Count of devices
		function countDevices(home){
		var count=0;
			for (var obj in home){
				if(home.hasOwnProperty(obj)) count++;
			}
			return alert('Number of all devices in the house:'+count);
		}
		countDevices(home);
	
		console.log('There are following devices in the house:');
		for (var obj in home){
				console.log(home[obj]);
			}
		
		
		for (var i=0; i<home.length;i++){
			if (confirm('Do you want to plug in ' + home[i].name + '?')){
				home[i].tumbler=true;
			}
		}
			
		
		//Power of devices
		function powerConsumption(home){
		var sum=0;
			for(var i=0; i<home.length; i++){
				if(home[i].tumbler===true){
					sum+=home[i].power;
				}
			}
			return alert('Power of switched devices='+sum);
		} 
		powerConsumption(home);
				
		
		
		//Sort by power by asc
		function comparePower(deviceA, deviceB){
			return deviceA.power-deviceB.power;
		}
		home.sort(comparePower);
		
		if (confirm('Do you want to sort devices by power?')){
			console.log('Sorting by power (asc)');
				for(var i=0; i<home.length;i++){
					console.log(home[i].name);
				}	
		}		
					
		
		//Sort by weight by desc
		function compareWeight(deviceA,deviceB){
			return deviceB.weight-deviceA.weight;
		}
		home.sort(compareWeight);
		
		if (confirm('Do you want to sort devices by weight?')){
		console.log('Sorting by weight (desc)');
		for(var i=0; i<home.length;i++){
			console.log(home[i].name);
		}
		}		
		
		
		//Find elements by range of power
		var minP=prompt('For search enter the min range of power:',0);
		var maxP=prompt('For search enter the max range of power:',10000);
		
		function findElementByPower(home,minP,maxP){
			var elementsPower=[];
			
			for(var i=0; i<home.length; i++){
				if((home[i].power>=minP)&&(home[i].power<=maxP)){
					elementsPower.push(home[i]);
				}				
			} 		
			
			if(elementsPower.length<=0){
				alert ('There is no such device');
			}
			else {
				console.log('Found elements in a given range of power:');
				console.log(elementsPower);
			}
		} 
		findElementByPower(home,minP,maxP);
		
		//Find elements by range of weight
		var minW=prompt('For search enter the min range of weight:',0);
		var maxW=prompt('For search enter the max range of weight:',10000);
		
		function findElementByWeight(home,minW,maxW){
			var elementsWeight=[];
			
			for(var i=0; i<home.length; i++){
				if((home[i].weight>=minW)&&(home[i].weight<=maxW)){
					elementsWeight.push(home[i]);
				}				 
			}
			
			if(elementsWeight.length<=0){
				alert ('There is no such device');
			}
			else {
				console.log('Found elements in a given range of weight:');
				console.log(elementsWeight);
			}
		}
		findElementByWeight(home,minW, maxW);
		
            