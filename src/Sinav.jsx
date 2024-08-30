import React, { useState } from 'react';

function Sinav() {
  return (
    <Container />
  );
}

function Container() {
  return (
    <div className="containers">
      <div className="baslik">
        <img src="src/assets/img/Group 83 (1).svg" alt="" />
        <h1>Accessibility</h1>
      </div>
      <Header />
    </div>
  );
}

function Header() {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const correctAnswer = 0; // Doğru cevabın indexi (0: A, 1: B, 2: C, 3: D)

  const handleAnswerClick = (index) => {
    setSelectedAnswer(index);
  };

  const handleSubmit = () => {
    if (selectedAnswer !== null) {
      localStorage.setItem('selectedAnswer', selectedAnswer);
      alert('Cevabınız kaydedildi!');
    } else {
      alert('Lütfen bir cevap seçin.');
    }
  };

  const getButtonStyle = (index) => {
    if (selectedAnswer === null) return {};

    if (index === correctAnswer) return { backgroundColor: 'green' };
    if (index === selectedAnswer) return { backgroundColor: 'red' };

    return {};
  };

  return (
    <div className="headers">
      <h1>Which of these color contrast ratios defines the minimum WCAG 2.1 Level AA requirement for normal text?</h1>
      <div className="btns">
        <button style={getButtonStyle(0)} onClick={() => handleAnswerClick(0)}>
          <span>A</span> 4.5 : 1
        </button>
        <button style={getButtonStyle(1)} onClick={() => handleAnswerClick(1)}>
          <span>B</span> 3 : 1
        </button>
        <button style={getButtonStyle(2)} onClick={() => handleAnswerClick(2)}>
          <span>C</span> 2.5 : 1
        </button>
        <button style={getButtonStyle(3)} onClick={() => handleAnswerClick(3)}>
          <span>D</span> 5 : 1
        </button>
      <Buttonsbmt handleSubmit={handleSubmit} />
      </div>
    </div>
  );
}

function Buttonsbmt({ handleSubmit }) {
  return (
    <div className="submitBtn">
      <button onClick={handleSubmit}>Submit Answer</button>
    </div>
  );
}

export default Sinav;
