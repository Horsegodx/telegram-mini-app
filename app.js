const propertiesData = [
  {
    id: 1,
    title: "Уютная 1-комн. квартира в центре",
    description: "Светлая квартира с евроремонтом, новая сантехника, теплые полы.",
    price: "10 500 000 руб.",
    image: "images/Frame1.png",
    address: "ул. Центральная, 10"
  },
  {
    id: 2,
    title: "Офис в бизнес-центре",
    description: "Просторный офис 50 кв.м. с видом на город.",
    price: "75 000 руб./мес.",
    image: "images/Frame2.png",
    address: "пр. Деловой, 25"
  },
  {
    id: 3,
    title: "Студия в новостройке",
    description: "Свободная планировка, панорамные окна.",
    price: "7 800 000 руб.",
    image: "images/Frame3.jpg",
    address: "ул. Новая, 15"
  },
  {
    id: 4,
    title: "Торговое помещение",
    description: "Помещение 80 кв.м. на первом этаже.",
    price: "120 000 руб./мес.",
    image: "images/Frame4.jpg",
    address: "ул. Торговая, 5"
  }
];

document.addEventListener('DOMContentLoaded', function() {
    console.log("Создаем карточки...");
    const container = document.getElementById('properties-container');
    
    if (!container) {
        console.error("Ошибка: контейнер не найден!");
        return;
    }
    
    propertiesData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'property-card';
        card.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="property-image">
            <div class="property-info">
                <h3>${item.title}</h3>
                <p class="address">📍 ${item.address}</p>
                <p class="description">${item.description}</p>
                <p class="property-price">${item.price}</p>
            </div>
        `;
        container.appendChild(card);
    });
    
    console.log("Готово! Создано карточек:", propertiesData.length);
});