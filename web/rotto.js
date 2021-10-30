      const candidates = [];
      for (i = 1; i <= 45; i += 1) {
        candidates.push(i);
      }
      let mixedNum = [];

      while (candidates.length > 0) {
        let num = Math.floor(Math.random() * candidates.length); //0-44까지의 정수
        let leftNum = candidates.splice(num, 1)[0];
        mixedNum.push(leftNum);
      }
      console.log(mixedNum);
      let bonus = mixedNum[mixedNum.length - 1] 
      console.log(bonus);


      
      let lottoNum = mixedNum.slice(0, 6).sort((prev, curr) => prev - curr);
      console.log(lottoNum);


      let lottoNum2 = mixedNum.splice(0, 6); 
      console.log(lottoNum2);
      console.log(lottoNum2);


      console.log(`로또숫자 ${lottoNum} / 보너스 숫자 ${bonus}`)


      let show = document.querySelector("#show");


      function showFn(num, show) {
        let ball = document.createElement('span');

        ball.textContent = num;
        show.appendChild(ball);

        //ball css            
        if (num < 10) {
          color = 'yellow';
        } else if (num < 20) {
          color = 'aqua';
        } else if (num < 30) {
          color = 'pink';
        } else if (num < 40) {
          color = 'skyblue';
        } else {
          color = 'gold';
        }

        ball.style.backgroundColor = color;
        ball.style.display = 'inline-block';
        ball.style.margin = '10px';
        ball.style.padding = '15px';
        ball.style.borderRadius = '50%';

        ball.className = 'No' + lottoNum[num];

      };

      for (let i = 0; i < lottoNum.length; i += 1) {

        function closure(j) {

          setTimeout(function() {
            showFn(lottoNum[j], show);
          }, j * 1000);
        }
        closure(i);
      }
      setTimeout(function() {
        showFn(bonus, show);
      }, 7000);
