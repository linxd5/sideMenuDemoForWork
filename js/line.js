 var back = document.getElementById('back');
   back.onclick=function(){
    history.go(-1);
   }
 layer1.each(function(i, children) {
        this.click(function() {
             if (changeColor == 0) {
                this.fill({ color: '#99CCFF', opacity: 0.5 });
                if(count == 0){
                    originX = map.get(this)[0];
                    originY = map.get(this)[1];
                    count=1;
                    alert(originX+"===="+originY);
                 }else{
                   targetX = map.get(this)[0];
                   targetY = map.get(this)[1];
                   count = 0;
                 }
                
                    changeColor = 1;
             }
             else {
                 this.fill({ color: '#3366ff', opacity: 0.5 });
                 originY = "";
                 originY = "";
                 targetX = "";
                 targetY = "";
                 changeColor = 0;
             }

         });
      });

