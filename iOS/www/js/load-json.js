$(document).ready(function(){
                  var output = $('#output'); // this will get called in the main index.
                  var output1 = $('#output1');
                  var output2 = $('#output2');
                  var output3 = $('#output3');
                  var output4 = $('#output4');
                  var output5 = $('#output5');
                  var output6 = $('#output6');
                  var output7 = $('#output7');
                  var output8 = $('#output8');
                  var output9 = $('#output9');
                  var output10 = $('#output10');
                  var output11 = $('#output11');
                  var output12 = $('#output12');
                  var output13 = $('#output13');
                  var output14 = $('#output14');
                  var output15 = $('#output15');
                  var output16 = $('#output16');
                  var output17 = $('#output17');
                  var output18 = $('#output18');
                  var output21 = $('#output21');
                  var output22 = $('#output22');
                  $.ajax({
                         url: 'http://coyote.dallbee.com:81',
                         dataType: 'jsonp',
                         jsonp: 'jsoncallback',
                         timeout: 5000,
                         success: function(data, status){
                         var d = new Date(); // gets date
                         var weekNum = d.getDay(); // gets day, returns a number hence below
                         var hours = d.getHours();
                         if(hours == "0"){
                         hours = 12;
                         };
                         if( hours > 12){
                         hours = hours - 12;
                         };
                         var weekday=new Array(7); // array to match against the returned d.getDay() above.
                         weekday[0]="Sunday";
                         weekday[1]="Monday";
                         weekday[2]="Tuesday";
                         weekday[3]="Wednesday";
                         weekday[4]="Thursday";
                         weekday[5]="Friday";
                         weekday[6]="Saturday";
                         var wt = new Array(11);
                         var a = 0;
                         var b = 0;
                         wt[0]=" ";
                         wt[1]=" ";
                         wt[2]=" ";
                         wt[3]=" ";
                         wt[4]=" ";
                         wt[5]=" ";
                         wt[6]=" ";
                         wt[7]=" ";
                         wt[8]=" ";
                         wt[9]=" ";
                         wt[10]=" ";
                         var wp = new Array(11);
                         wp[0]=" ";
                         wp[1]=" ";
                         wp[2]=" ";
                         wp[3]=" ";
                         wp[4]=" ";
                         wp[5]=" ";
                         wp[6]=" ";
                         wp[7]=" ";
                         wp[8]=" ";
                         wp[9]=" ";
                         wp[10]=" ";
                         $.each(data, function(i,item){
                                if(i == weekday[weekNum]){ // if today, parse the data
                                output18.text( i + "'s Schedule : " ); // show the day
                                //k is iterator, t holds elements and can get accessed via .time/.program below
                                $.each(item, function(k, t){
                                       wt[a++] = t.time;
                                       wp[b++] = t.program;
                                       }) // .each
                                for(var k= 0; k < wt.length; k++){
                                var p = "";
                                var h = 0;
                                var s = "";
                                s = wt[k];
                                p = wt[k+1];
                                if(hours == s[h]){
                                output21.text(wt[k]);
                                output22.text(wp[k]);
                                };
                                if(hours >= s[h] && hours <= p[h]){
                                output21.text(wt[k]);
                                output22.text(wp[k]);
                                };
                                };
                                } // if
                                }); // first .each
                         output.text(wt[0]);
                         output1.text(wt[1]);
                         output2.text(wt[2]);
                         output3.text(wt[3]);
                         output4.text(wt[4]);
                         output5.text(wt[5]);
                         output6.text(wt[6]);
                         output7.text(wt[7]);
                         output8.text(wt[8]);
                         output9.text(wp[0]);
                         output10.text(wp[1]);
                         output11.text(wp[2]);
                         output12.text(wp[3]);
                         output13.text(wp[4]);
                         output14.text(wp[5]);
                         output15.text(wp[6]);
                         output16.text(wp[7]);
                         output17.text(wp[8]);
                         
                         }, 
                         // success close
                         error: function(){
                         console.log('There was an error loading the data.');
                         }
                         });
                  
                  
                  });