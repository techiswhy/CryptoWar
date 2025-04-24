// Запрос к серверу для получения рейтинга игроков
fetch('/ranking')
  .then(response => response.json())
  .then(data => {
    const rankingList = document.getElementById('ranking-list');
    data.forEach(player => {
      const li = document.createElement('li');
      li.textContent = `${player.username} — ${player.wins} побед`;
      rankingList.appendChild(li);
    });
  })
  .catch(error => {
    console.error('Ошибка при загрузке рейтинга:', error);
  });
