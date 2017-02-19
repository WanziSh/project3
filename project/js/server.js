angular.module('myApp')
	.factory('HomeService',[function(){
		
	}])
	.factory('IntroduceService',[function(){
		var date1 = new Date();
		var date2 = new Date("2017-07-01 00:00:00");
		var date3 = date2 - date1;	
		var day,hour,second,min;
		setInterval(function(){
			
			date3 -= 1000;
			var day = Math.floor(date3/ (1000 * 60 * 60 * 24));
			console.log(day);
			var date4 =date3 - day*(1000 * 60 * 60 * 24);
			var hour =  Math.floor(date4/(60 * 60 * 1000));
			var date5 = date4 - hour*(60 * 60 * 1000);
			console.log(hour);
			var second = Math.floor(date5/(60 * 1000));
			var date6 = date5- second*(60 * 1000);
			var min = Math.floor(date6/ 1000);
			console.log(min);
//			self.day = day;
//			self.hour = hour;
//			self.second = second;
//			self.min = min;
		},1000)
		return {
			day:function(){
				return day
			},
			hour:function(){
				return hour
			},
			second:function(){
				return second
			},
			min:function(){
				return min
			}
		}
	}])
