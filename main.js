function chrono () {
	 var curtime=0;
	 this.curtime=curtime;
	 var intervalID;
	 $('#compteur').text(curtime),
	this.start = function() {
		curtime++,
		$('#compteur').text(curtime),
		$('#start').prop("disabled",true)
		}
	this.debut = function() {
		this.intervalID=setInterval(this.start,1000)
	}
	this.pause = function() {
		clearInterval(this.intervalID),
		$('#start').prop("disabled",false)
	}

	this.stop = function (){
		clearInterval(this.intervalID),
		console.log(curtime),
		curtime = 0,
		$('#compteur').text(curtime),
		$('#start').prop("disabled",false)
	}}

min= new chrono()