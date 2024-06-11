<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Page</title>
</head>
<body>
    <h1>Admin Page</h1>
    <form id="cardForm">
        <div>
            <label for="cardTitle">Card Title:</label>
            <input type="text" id="cardTitle">
        </div>
        <div>
            <label for="cardText">Card Text:</label>
            <textarea id="cardText"></textarea>
        </div>
        <div>
            <label for="cardImg">Card Image URL:</label>
            <input type="text" id="cardImg">
        </div>
        <div>
            <label for="cardIndex">Card Index:</label>
            <input type="number" id="cardIndex" min="0" max="4">
        </div>
        <button type="button" onclick="updateCardData()">Update Card</button>
    </form>

    <script>
        function updateCardData() {
            const title = document.getElementById('cardTitle').value;
            const text = document.getElementById('cardText').value;
            const img = document.getElementById('cardImg').value;
            const index = parseInt(document.getElementById('cardIndex').value);

            const cardData = JSON.parse(localStorage.getItem('cardData')) || [];
            cardData[index] = { title, text, img };
            localStorage.setItem('cardData', JSON.stringify(cardData));

            alert('Card data updated!');
        }
    </script>
</body>
</html>
