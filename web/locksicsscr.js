const computer = document.querySelector('#computer');
let left = 0;
let computerPosition = {
    바위: '0',
    가위: '-100px',
    보: '-270px',
}

function computerChoice(value) {
    return Object.entries(computerPosition).find(function (el) {
        return el[1] === value;
        console.log(el[0])
    })[0];
}

let timeControl;

function timeControlFn() {
    timeControl = setInterval(function () {
        if (left === computerPosition.바위) {
            left = computerPosition.가위;
        } else if (left === computerPosition.가위) {
            left = computerPosition.보;
        } else {
            left = computerPosition.바위;
        }
        computer.style.background = 'url(https://blog.kakaocdn.net/dn/dEfPIp/btqRxZvIwfQ/ZxcvaXl4f4TG4S08igTeak/img.jpg)' + left + ' 0 no-repeat';
    }, 150);
}

timeControlFn();

const score = {
    바위: 1,
    가위: 0,
    보: -1,
}

let btnActive = false;

document.querySelectorAll('.btn').forEach(function (el) {
    el.addEventListener('click', function () {

        if (btnActive) {
            return false;
        }
        btnActive = true;
        clearInterval(timeControl);
        setTimeout(function () {
            timeControlFn();
            btnActive = false;
        }, 1000);

        let myChoice = this.textContent;
        console.log(`나의 결과: ${myChoice} / 컴퓨터의 결과: ` + computerChoice(left));

        let myScore = score[myChoice];
        let computerScore = score[computerChoice(left)];
        let scoreDifference = myScore - computerScore;
        resultShow = document.querySelector('#resultShow');

        if (scoreDifference === 0) {
            resultShow.textContent = '비겼습니다.';
        } else if ([1, -2].includes(scoreDifference)) {
            resultShow.textContent = '이겼습니다.';
        } else {
            resultShow.textContent = '졌습니다.ㅠ';
        }
    });
});