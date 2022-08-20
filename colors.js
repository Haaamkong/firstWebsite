var theme = 'day';

    const Body = {
      setBackgroundColor: function (backgroundColor) {
        // document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor', backgroundColor);
      },
      setColor: function (color) {
        // document.querySelector('body').style.color = color;
        $('body').css('color', color);
      }
    }

    const A = {
      setColor: function (color) {
        // var alist = document.querySelectorAll('a');
        // var i = 0;
        // while (i < alist.length) {
        //   alist[i++].style.color = color;
        // }
        $('a').css('color', color);
      }

    }

    function setButton(backgroundColor, value) {
      // var buttons = document.querySelectorAll('.night_day');
      // var j = 0;
      // while (j < buttons.length) {
      //   buttons[j].style.backgroundColor = backgroundColor;
      //   buttons[j].value = value;
      //   j++;
      // }
      $('.night_day').css('backgroundColor', backgroundColor);
      $('.night_day').val(value);
      
    }


    function nightDayHandler() {
      console.log(theme);

      if (theme === 'night') {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        A.setColor('blue');
        setButton('blue', 'night');
        theme = 'day';
      }
      else if (theme === 'day') {
        Body.setBackgroundColor('black');
        Body.setColor('white');
        A.setColor('powderblue');
        setButton('red', 'day');
        theme = 'night';
      }

    }