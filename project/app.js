//主入口文件
//依赖于路由和css两个模块
angular.module('myApp',['ngRoute','angularCSS'])
	.run(['$window','$rootScope',function($window,$rootScope){
		$rootScope.$on('$locationChangeSuccess',function(){
			if($window.location.href.indexOf('introduce') != -1){
				$rootScope.rootIsIntroduceFooterShow = true;
				$rootScope.rootIsFooterShow = false;
			}else{
				$rootScope.rootIsFooterShow = true;
				$rootScope.rootIsIntroduceFooterShow = false;
			}
			if($window.location.href.indexOf('detail') != -1){
				$rootScope.rootIsFooterShow = false;
			}else{
				$rootScope.rootIsFooterShow = true;
			}
			
		})
		$rootScope.newArr = [];
		$rootScope.newArr2 = [];
	}])
	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/home',{
//			template:'<h1>首页</h1>'
			templateUrl:'./view/home.html',
			controller:'HomeCtrl as homeCtrl'
		})
		.when('/sort',{
//			template:'<h1>超市</h1>',
			templateUrl:'./view/sort.html',
			controller:'SortCtrl as sortCtrl'
		})
		//带参数(name和age是形参，不要忘记冒号)
		.when('/cart',{
//			template:'<h1>购物车</h1>'
			templateUrl:'./view/cart.html',
			controller:'CartCtrl as cartCtrl'
		})
		.when('/mine',{
//			template:'<h1>我的</h1>'
			templateUrl:'./view/mine.html',
			controller:'MineCtrl as mineCtrl'
		})
		.when('/detail',{
			templateUrl:'./view/detail.html',
			controller:'DetailCtrl as detailCtrl'
		})
		.when('/introduce/:idnumber',{
			templateUrl:'./view/introduce.html',
			controller:'IntroduceCtrl as introduceCtrl'
		})
		.when('/cartadd/:cartNumber',{
			templateUrl:'./view/cartadd.html',
			controller:'CartaddCtrl as cartaddCtrl'
		})
		.otherwise({
			redirectTo:'/home'
		})
	}])
