function fish() {
  const fishes = ["붕어", "잉어", "상어", "빈 바늘", "돌멩이"];
  const result = fishes[Math.floor(Math.random() * fishes.length)];
  document.getElementById("result").innerText = `🎉 ${result}를(을) 잡았습니다!`;
}
