window.onload = function(){

    //time to trigger css animations
    document.body.setAttribute("class", document.body.getAttribute('class') + " loaded")


        resizeDiv();

        window.onresize = function(event) {
        resizeDiv();
        };
        window.addEventListener('resize', resizeDiv);

        function resizeDiv() 
        {//height == x axis, width == y axis

          var w = window.innerWidth;
          var h = window.innerHeight;
          var asp = ( h / w );
          var area = ( h * w );

          var imgContainer = document.getElementsByClassName("treeContainer")[0].children;
          var imgs = imgContainer.length;
        
        for (var i = 0; i < imgs; i++) {

            //responsive, full-screen                
          if ( w > h) {
            imgContainer[i].classList.remove("fullwidth");
            imgContainer[i].classList.add("fullheight");
          } else if ( h > w ){
            imgContainer[i].classList.remove("fullheight");
            imgContainer[i].classList.add("fullwidth");
          }

            //ajust left-margin to center absolute image      
            var ImgWidth = imgContainer[i].offsetWidth; 
            var ImgMargin = ImgWidth / 2;
            imgContainer[i].style.marginLeft = -ImgMargin + "px";


        }




        }











}