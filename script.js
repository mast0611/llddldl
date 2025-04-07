const choices = ['가위', '바위', '보']; // 게임의 선택지

// 사용자가 선택한 가위, 바위, 보
document.getElementById('rockBtn').addEventListener('click', function() { playGame('바위'); });
document.getElementById('paperBtn').addEventListener('click', function() { playGame('보'); });
document.getElementById('scissorsBtn').addEventListener('click', function() { playGame('가위'); });

// 게임 진행
function playGame(userChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // 결과 비교
    let resultMessage;
    let resultIcon;
    if (userChoice === computerChoice) {
        resultMessage = `비겼습니다! 상대도 ${computerChoice}를 선택했습니다.`;
        resultIcon = 'info';
    } else if (
        (userChoice === '가위' && computerChoice === '보') ||
        (userChoice === '바위' && computerChoice === '가위') ||
        (userChoice === '보' && computerChoice === '바위')
    ) {
        resultMessage = `당신이 이겼습니다! 상대는 ${computerChoice}를 선택했습니다.`;
        resultIcon = 'success';
    } else {
        resultMessage = `당신이 졌습니다. 상대는 ${computerChoice}를 선택했습니다.`;
        resultIcon = 'error';
    }

    // 화면에 결과 출력
    updateChoiceDisplay(userChoice, 'userChoice');
    updateChoiceDisplay(computerChoice, 'computerChoice');
    document.getElementById('result').innerText = resultMessage;

    // SweetAlert2 팝업 표시
    Swal.fire({
        title: '게임 결과',
        text: resultMessage,
        icon: resultIcon,
        confirmButtonText: '확인',
        confirmButtonColor: '#4CAF50'
    });
}

// 선택된 항목을 화면에 표시하고, 글씨 크기 변경
function updateChoiceDisplay(choice, elementId) {
    const choiceElement = document.getElementById(elementId);
    choiceElement.innerHTML = `<span class="selected">${choice}</span>`;

    // 이미 선택된 항목에만 `selected` 클래스를 추가하여 글씨 크기를 키움
    setTimeout(() => {
        choiceElement.querySelector('span').classList.remove('selected');
    }, 500);
}
