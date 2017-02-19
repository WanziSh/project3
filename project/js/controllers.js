angular.module('myApp')
	
	.controller('HomeCtrl',['$css','$http',function($css,$http){
		$css.add('./css/home.css')
		var self = this;
		$http.get('./data/swiper.json')
			.success(function(result){
				console.log(result);
				self.dataeds = result.first;
			})
			.error(function(errorStr){
				console.log(errorStr);
			})
		//一定要写js进行swiper对象的初始化
		var mySwiper = new Swiper('.h_top .swiper-container', {
			autoplay: 2000,//可选选项，自动滑动
			//操作swiper之后，还可以继续自动播放
			autoplayDisableOnInteraction : false,
			//分页器
			pagination : '.h_top .swiper-pagination',
			//环路(注意：设置这个后每个分页原理会改变，写样式的时候小心)
			loop : true,
			observer:true,
			grabCursor : true
			
		})
		
		var mySwiper1 = new Swiper('.wine .swiper-container', {
			slidesPerView : 3.5,
			grabCursor : true
		})
//		var mySwiper2 = new Swiper('.seablue .swiper-container',{
//			slidesPerView : 3.5,
//			grabCursor : true
//		})
//		var mySwiper3 = new Swiper('.bosspurple .swiper-container',{
//			slidesPerView : 3.5,
//			grabCursor : true,
//		})
		var mySwiper4 = new Swiper('.fruit .swiper-container',{
			slidesPerView : 3.5,
			grabCursor : true
		})
		$(".lazyImg").lazyload({
			effect:"fadeIn"
		})
		
		
		
		$(".a").hover(function(){
			$(".a1").animate({"top":-50},300)
			$(".a2").animate({"top":-50},300)
		},function(){
			$(".a1").animate({"top":+0},300)
			$(".a2").animate({"top":+0},300)
		})

		$(".b").hover(function(){
			$(".b1").animate({"top":-50},300)
			$(".b2").animate({"top":-50},300)
		},function(){
			$(".b1").animate({"top":+0},300)
			$(".b2").animate({"top":+0},300)
		})

		$(".c1").click(function(){
			document.body.scrollTop = 0;
		})
		// document.body.scrollTop>1000&&$(".a").show()&&$(".b").show()
		$(window).on("scroll",function(){
			var h = document.documentElement.scrollTop || document.body.scrollTop;

			if(h>500){
				$(".a").show()
				$(".b").show()

			}else{
				$(".a").hide()
				$(".b").hide()
			}
			if(h>800){
				$(".c").show()
			}else{
				$(".c").hide()
			}

		})
	}])
	.controller('SortCtrl',['$css',function($css){
		$css.add('./css/sort.css')
		var self = this;
	}])
	.controller('CartCtrl',['$css',function($css){
		$css.add('./css/cart.css')
		var self = this;
	}])
	.controller('CartaddCtrl',['$css','$routeParams','$rootScope','$interval','$http','$location',function($css,$routeParams,$rootScope,$interval,$http,$location){
		$css.add('./css/cartadd.css')
		var self = this;
		$http.get('./data/self.json')
			.success(function(result){
				var receiveId3 = null;
				var receiveId4 = null;
				var receiveId6 = null;
				self.cartdata = result.second;
//				var arr3 = $rootScope.newArr;
				for(var cartdataObj of self.cartdata){
					if(cartdataObj.id == $routeParams.cartNumber){
						$rootScope.newArr.push(cartdataObj)
////						while(true){
		//						var idv = $rootScope.newArr.indexOf(cartdataObj);
		//						console.log(idv);
		//						var idx = $rootScope.newArr.lastIndexOf(cartdataObj);
		//						console.log(idx);
		//						if(idv != idx ){$rootScope.newArr.splice(idx,1);console.log("qqqqq")}
//							}
						for(var arrObj of $rootScope.newArr){
							if(arrObj.id == cartdataObj.id ){
								var idv = $rootScope.newArr.indexOf(arrObj);
								var idx = $rootScope.newArr.lastIndexOf(cartdataObj);
								if(idv != idx ){$rootScope.newArr.splice(idx,1);}
							}
						}
						console.log($rootScope.newArr2);
						for(var arrObj5 of $rootScope.newArr2){
							if(arrObj5.id == cartdataObj.id){
								receiveId6 = arrObj5.numberli;
								console.log(receiveId6);
							}
						}
						receiveId3 = cartdataObj.id;
						receiveId4 = cartdataObj.numberli;
					}
				}
				self.backId = receiveId3;
//				console.log(receiveId6);
				self.numberli = receiveId6 ;
			})
			.error(function(errorStr){
				console.log(errorStr);
			})
			
			
			
			
			
			
			
		self.myArr = $rootScope.newArr;
		self.backId = $routeParams.cartNumber
		self.goBackGo = function(){
			$location.path('introduce/:idnumber');
		}
		self.addition = function(id){
			for(aObj of self.myArr){
				console.log(id);
				if(aObj.id == id){
					console.log(aObj.id);
					$rootScope.number5
					aObj.numberli += 1;
				}
			}
		}
		self.cutdown = function(id){
			for(aObj of self.myArr){
				if(aObj.id == id){
					if(aObj.numberli < 0){
						alert("不能为负")
						aObj.numberli = 0;
					}
					aObj.numberli -= 1;
				}
			}
		}
	}])
	.controller('MineCtrl',['$css',function($css){
		$css.add('./css/mine.css')
		var self = this;
	}])
	.controller('DetailCtrl',['$css','$routeParams','$location','$http',function($css,$routeParams,$location,$http){
		$css.add('./css/detail.css');
		var self = this;
		$http.get('./data/self.json')
			.success(function(result){
				self.data = result.first;
				self.wine = result.second;
				self.third = result.third;
				self.fourth = result.fourth;
			})
			.error(function(errorStr){
				console.log(errorStr);
			})
		self.goBack = function(){
			$location.path('home');
		}
		self.xianshi = function(){
			$(".yincang" ).toggle();
		}
	}])
	.controller('IntroduceCtrl',['$css','$location','$http','$interval','$routeParams','$rootScope',function($css,$location,$http,$interval,$routeParams,$rootScope){
		$css.add('./css/introduce.css')
		var self = this;
		$http.get('./data/data.json')
			.success(function(result){
				self.imgs = result.data;
				
			})
			.error(function(errorStr){
				console.log(errorStr);
			})
		$http.get('./data/self.json')
			.success(function(result){
				var receiveId2 = null;
				var receiveId = null;
				self.affirm = result.second;
				for(var affirmObj of self.affirm){
//					$rootScope.newArr2.push(affirmObj);
					if(affirmObj.id == $routeParams.idnumber){
						receiveId2 = affirmObj;
						receiveId = affirmObj.id;
						self.numberli = affirmObj.numberli
					}
				}
				self.affirmId = receiveId;
				self.xiangqingObj = receiveId2;
			})
			.error(function(errorStr){
				console.log(errorStr);
			})
			self.addeds = function(id){
				console.log(id);
				for( cObj of self.affirm){
					if(cObj.id ==  $routeParams.idnumber){
						cObj.numberli += 1;
						console.log(cObj);
//						$rootScope.newArr2.push(cObj);
						console.log("&&&&&&&&&&&&&&");
						console.log($rootScope.newArr2);
						for( arrObj2 of $rootScope.newArr2){
							if(arrObj2.id == id){
								var idv = $rootScope.newArr2.indexOf(arrObj2);
								var idx = $rootScope.newArr2.lastIndexOf(cObj);
								if(idv != idx){$rootScope.newArr2.splice(idv,1)}
							}
						}
					}
				}
			}
			self.cuts = function(id){
				for( cObj of self.affirm){
					if(cObj.id ==  $routeParams.idnumber){
						cObj.numberli -= 1;
//						$rootScope.newArr2.push(cObj)
						for( arrObj2 of $rootScope.newArr2){
							if(arrObj2.id == cObj.id){
								var idv = $rootScope.newArr2.indexOf(arrObj2);
								var idx = $rootScope.newArr2.lastIndexOf(cObj);
								if(idv != idx){$rootScope.newArr2.splice(idv,1)}
								console.log($rootScope.newArr2)
							}
						}
					}
				}
			}	
			
			for(arrObj3 of $rootScope.newArr2){
				
				if(arrObj3.id == $routeParams.idnumber){
					console.log(arrObj3.numberli)
					self.numberli = arrObj3.numberli;
				
					console.log("***---**++++*");
				}
			}
			console.log("*****++++*");
			console.log($rootScope.newArr2);
			
//			self.lastNumber2 = $rootScope.number5 ;
//			console.log(self.lastNumber2);
			
			
			
			
			
		var mySwiper5 = new Swiper('.commodity .swiper-container', {
			autoplay: 2000,//可选选项，自动滑动
			//操作swiper之后，还可以继续自动播放
			autoplayDisableOnInteraction : false,
			//分页器
			pagination : '.commodity .swiper-pagination',
			//环路(注意：设置这个后每个分页原理会改变，写样式的时候小心)
			loop : true,
			observer:true,//修改swiper自己或子元素时，自动初始化swiper
			grabCursor : true
		})
		self.goBackTo = function(){
			$location.path('detail');
		}
		self.reveal = function(){
			$(".no" ).toggle();
		}
		var date1 = new Date();
		var date2 = new Date("2017-07-01 00:00:00");
		var date3 = date2 - date1;	
		fn();
		$interval(fn, 1000);
		function fn () {
			var day,hour,second,min;
			date3 -= 1000;
			var day = Math.floor(date3/(1000 * 60 * 60 * 24));
			var date4 =date3 - day*(1000 * 60 * 60 * 24);
			var hour =  Math.floor(date4/(60 * 60 * 1000));
			var date5 = date4 - hour*(60 * 60 * 1000);
			var second = Math.floor(date5/(60 * 1000));
			var date6 = date5- second*(60 * 1000);
			var min = Math.floor(date6/ 1000);
			self.day = day;
			self.hour = hour;
			self.second = second;
			self.min = min;
		}
//		console.log("****");
		$(".cut").click(function(){
			var a = parseInt($(".tonumber").html());
			var n = parseInt($(".transmit").html());
			$(".transmit").html(parseInt(n-1));
			$(".tonumber").html(parseInt( a - 1 ));
			if($(".tonumber").html()<0 || $(".transmit").html()<0){
				alert("不能为负");
				$(".tonumber").html(0);
				$(".transmit").html(0);
			}
		})
		$(".added").click(function(){
			var a = parseInt($(".tonumber").html());
			var n = parseInt($(".transmit").html());
			$(".transmit").html(parseInt(n+1))
			$(".tonumber").html(parseInt(a+1));
			if($(".tonumber").html()>10 || $(".transmit").html()>10){
				confirm("已达上线");
				$(".tonumber").html(9);
				$(".transmit").html(9)
			}
		})
		$(".addcart").click(function(){
			$(".aside").html(parseInt($(".transmit").html()))
			$(".aside").show()
			if($(".aside").html()<1){
				$(".aside").hide() 
			}
		})
	}])
//		self.addeds = function(id){
//					for(cObj of self.affirm){
//						if(cObj.id == id){
//							cObj.numberli += 1;
//						}
//					}
//				}
//				self.cuts = function(id){
//					for(cObj of self.affirm){
//						if(cObj.id == id){
//							cObj.numberli -= 1;
//						}
//					}
//				}	
//			})

//var a = parseInt(self.xiangqingObj.numberli)
//		$(".transmit").html(a);
//		console.log($(".tonumber"))