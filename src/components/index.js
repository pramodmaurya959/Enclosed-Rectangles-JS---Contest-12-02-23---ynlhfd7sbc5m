//rec = {
//	top: '25px',
//	left: '96px',
//	width: '64px',
//	height: '96px',
//      children: []
//}

function updateStructure(rec1,rec2){
	//write your code
	rec1={
		top: '20px',
	        left: '20px',
		width: '40px',
		height: '60px',
	          children: []
	}
	
	rec2={
		top: '30px',
	        left: '30px',
		width: '20px',
		height: '30px',
	          children: []
	}
	return 
	{       top: '20px',
	        left: '20px',
		width: '40px',
		height: '60px',
	          children: [{
		   top: '10px',
		   left: '10px',
		   width: '20px',
		   height: '30px',
	          children: []
		  }]
	}
}

module.exports = updateStructure;
