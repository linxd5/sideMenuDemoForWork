 var back = document.getElementById('back');
 	 back.onclick=function(){
 	 	history.go(-1);
 	 }
	// originX=layer5.get(0).attr('cx');
	// origenY=layer5.get(0).attr('cy');
  startPointName="A";
	layer1.each(function(i, children) {
			this.click(function() {
				 if (changeColor == 0) {
					this.fill({ color: '#99CCFF', opacity: 0.8 });
            endPointName = this.attr('id');
						// alert(originX+"===="+originY);
             originX = map.get(startPointName)[0];
             originY = map.get(startPointName)[1];
             // layer4.image('img/start_point.png', 8, 8).move(originX, originY);
					   targetX = map.get(this)[0];
					   targetY = map.get(this)[1];
             layer4.image('img/end_point.png', 8, 8).move(targetX, targetY);
					 //  var ellipse = this.ellipse(targetX,targetY).fill('#f09')
					// var text = this.text('终').move(targetX, targetY).font({ size: 6 }).fill({ color: '#f00' });
					   changeColor = 1;
				 }
				 else {
					 this.fill({ color: '#3366ff', opacity: 0.5 });
            endPointName="";
					 targetX = "";
					 targetY = "";
					 changeColor = 0;
				 }
				  // if((targetX==null||targetX==undefined)||(targetY==null||targetY==undefined)){
          if((startPointName==null||startPointName==undefined)||(endPointName==null||endPointName==undefined)){
					  	alert("请选择您要到达的目的地");
					  }else{
						  document.getElementById("seach").style.visibility="hidden";
						  document.getElementById("foot_show").style.visibility="hidden";
						  document.getElementById("foot_btn").style.visibility="visible";
					  }
            // alert(startPointName+"=="+endPointName);
            console.log(startPointName+"===="+endPointName);
	
			 });
		  });
       angular.module("httpExample", [])
            .controller("FetchController", ["$scope", "$http", function ($scope, $http) {
                // $scope.submit = function () {
                //     $http({
                //             url: "http://192.168.1.88:8080/promotion/shortestPathAction_findPath.do",
                //             // method: "POST",
                //             prames: {"startPointName":startPointName, "endPointName":endPointName,"mapID":15},
                //            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
                //     }).then(function(response) {
                //         console.log(response.data);
                //         // var [[49.9069,45.9631],[49.9069,17.6228],[98.4244,17.6228],[98.4244,32.9353],[172.139,17.6228],[172.139,32.9353],[240.811,17.6228],[240.811,64.2025],[251.581,27.4925],[240.811,27.4925]]
                //         // layer4.polyline(PointArry).fill('none').stroke({ width: 1 });
                //         // var line1 = layer4.line(49.9069,45.9631,49.9069,17.6228).stroke({ width: 3 }).fill('#ff0000');
                //         // var line1 = layer4.line(49.9069,17.6228,98.4244,17.6228).stroke({ width: 3 }).fill('#ff0000');

                //     }, function () {
                //         console.log("Error");
    
                //     });
                // };


                $scope.submit = function () {
                  layer4.image('img/start_point.png', 8, 8).move(originX, originY);
                  var json = {"startPointName":startPointName, "endPointName":endPointName,"mapID":15};
                      console.log(endPointName);
                    $http({
                            url: "http://192.168.1.88:8080/promotion/shortestPathAction_findPath.do",
                            method: "POST",
                            // headers : { 'Content-Type': 'application/x-www-form-urlencoded' },
                            params:json
                    }).success(function(result) {
                      var pathArry=result.fullPath.split(",");
                          for (var i = 0; i <pathArry.length; i++) {
                               var x = map.get(pathArry[i])[0];
                               var y = map.get(pathArry[i])[1];
                               // var x1 = map.get(pathArry[i+1])[0];
                               // var y1 = map.get(pathArry[i+1])[1];
                               //    layer4.line(x,y,x1,y1).stroke({ width: 3 }).fill('#ff0000');
                               var arry = [x,y];
                               console.log(arry);
                               pathPoint.push(arry);
                           }
                      console.log(pathPoint);
                       document.getElementById("seach").style.visibility="hidden";
                       document.getElementById("foot_btn").style.visibility="hidden";
                       document.getElementById("foot_show").style.visibility="visible";
                      layer4.polyline(pathPoint).fill('none').stroke({ width: 1 },{color:'#f30'});


                        // console.log(response.data);
                        // alert(result.pathLength);
                        // var [[49.9069,45.9631],[49.9069,17.6228],[98.4244,17.6228],[98.4244,32.9353],[172.139,17.6228],[172.139,32.9353],[240.811,17.6228],[240.811,64.2025],[251.581,27.4925],[240.811,27.4925]]
                        // layer4.polyline(PointArry).fill('none').stroke({ width: 1 });
                        // var line1 = layer4.line(49.9069,45.9631,49.9069,17.6228).stroke({ width: 3 }).fill('#ff0000');
                        // var line1 = layer4.line(49.9069,17.6228,98.4244,17.6228).stroke({ width: 3 }).fill('#ff0000')

                    }).error(function() {
                      console.log("Error");
                    });
                };

            }]);

