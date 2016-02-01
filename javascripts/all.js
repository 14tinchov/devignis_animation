function reset_animation(logo,max_elements){
  logo.stop();
  logo.attr({opacity: 1});
  for (i = 0; i <= max_elements; i++) {
    element = logo.select("#pog_" + i);
    element.stop();
    element.attr({opacity: 1});
  }
}

//Animation 1
function animation1(logo, time, min_opacity, max_opacity){
  min_opacity = typeof min_opacity !== 'undefined' ? min_opacity : 0;
  max_opacity = typeof max_opacity !== 'undefined' ? max_opacity : 1;

  logo.animate({opacity: min_opacity}, time,
    function(){
      logo.animate({opacity: max_opacity}, time, 
      function(){
        logo.attr({opacity: max_opacity});
        animation1(logo,time);
      }
    );
    }
  );
}
//Animation 1 END

//Animation 2
function animation2(logo, max_elements, max_time, min_time, min_opacity, max_opacity){

  max_time = typeof max_time !== 'undefined' ? max_time : 1000;
  min_time = typeof min_time !== 'undefined' ? min_time : 0;
  min_opacity = typeof min_opacity !== 'undefined' ? min_opacity : 0;
  max_opacity = typeof max_opacity !== 'undefined' ? max_opacity : 1;

  for (i = 0; i <= max_elements; i++) {
    time    = Math.floor((Math.random() * max_time) + min_time);
    element = logo.select("#pog_" + i);
    animation1(element, time, min_opacity, max_opacity);
  }
}
//Animation 2 END

//Animation 3
function animation3(logo, max_elements, min_opacity, max_opacity, max_time, min_time){
  animation2(logo, max_elements, max_time, min_time, min_opacity);
  animation1(logo, 2500, min_opacity, max_opacity);
}
//Animation 3 END

//Animation 4
function animation4(logo, max_elements){
  var g = logo.group();

  for (i = 0; i <= max_elements; i++) {
    element = logo.select("#pog_" + i);
    g.add(element);
  }

  g.animate({ transform: 't0,0r1800' }, 600, function(){
    g.animate({ transform: 't0,0r40' }, 200, function(){
      g.animate({ transform: 't0,0r-40' }, 200, function(){
        g.animate({ transform: 't0,0r0' }, 200);
      });
    });
  });


}
//Animation 4 END

//Animation 5
function animation5(logo){
  var coordinates = [
   [-25,0],
   [-20,10],
   [-15,15],
   [-23,-7],
   [-21,-15],
   [20,-10],
   [20,5],
   [-10,0],
   [25,15],
   [-5,20],
   [8,20],
   [35,15],
   [10,-15],
   [-10,-20],
   [17,-35],
   [0,-5],
   [10,-30]
  ]
  
  for (i = 0; i < coordinates.length; i++) {
    element = logo.select("#pog_" + i);
    cord = 't'+coordinates[i][0]+','+ coordinates[i][1];

    element.animate({ transform: cord }, 500, function(){
      element.animate({ transform: cord }, 1000, function(){
        origin_cord(logo, coordinates);
        // remove the comment and check ;D
        // console.log(i);
      });
    });
  }  

}

//Animation 5 END

//Animation 6 END
  function animation6(logo){
  var coordinates = [
   [-275,100],
   [-220,110],
   [-250,115],
   [-183,-17],
   [-171,-115],
   [160,-100],
   [150,50],
   [-110,100],
   [125,150],
   [-150,150],
   [180,150],
   [175,150],
   [180,-150],
   [-200,-100],
   [197,-50],
   [200,-50],
   [210,-100]
  ]

  
  for (i = 0; i < coordinates.length; i++) {
    opacity    = Math.random()
    element = logo.select("#pog_" + i);
    cord = 't'+coordinates[i][0]+','+ coordinates[i][1] + 'r1200';

    element.animate({ transform: cord, opacity: opacity }, 500, function(){
      element.animate({ transform: cord }, 3000, function(){
        origin_cord(logo, coordinates);
        // remove the comment and check ;D
        // console.log(i);
      });
    });
  }  

}

//Animation 6 END

function origin_cord(logo, coordinates){
  for (i = 0; i < coordinates.length; i++) {
    element = logo.select("#pog_" + i);
    element.animate({ transform: 't0,0', opacity: 1}, 300);
  }
}


//START !
window.onload = function() {
  var logo = Snap.select('#devignis_logo');
  logo.attr({ viewBox: "55 150 500 500" });
  var number_polygons = 16;
  var min_time = 1000;
  var max_time = 1500;
  var min_opacity = 0.3;
  var max_opacity = 1;

  $('#animations').on('change', function(){
    reset_animation(logo,number_polygons);
    switch (parseInt(this.value)) {
      case 1:
        animation1(logo, 1500);
        break;
      case 2:
        // I know how many polygons there are in SVG
        // and their ids are pog_0, pog_1, ..., pog_16
        animation2(logo, number_polygons, max_time, min_time);
        break;
      case 3:
        animation3(logo, number_polygons, min_opacity, max_opacity, max_time, min_time);
        break;
      case 4:
        animation4(logo, number_polygons);
        break;
      case 5:
        animation5(logo);
        break;
      case 6:
        animation6(logo);
        break;
    }
  });

}

