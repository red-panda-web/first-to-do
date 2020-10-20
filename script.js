"use strict"

document.addEventListener("DOMContentLoaded", function () {
	document.querySelector("#add").addEventListener("click", function () {
		let task = document.querySelector("#area").value; // получаем содержимое textarea
		let new_li = document.createElement("li");	// создаем новый элемент списка
		let checkbox = document.createElement("input");	// создаем чекбокс для этого элемента
		checkbox.setAttribute("type", "checkbox");
		let radios = document.getElementsByName("priority");	// получаем список радио кнопок
		let important = radios[0].checked ? true : false;	// проверяем выделен ли "важный" пункт

		if (important) new_li.classList.add("important");	// если выделен меняем оформление добавляющегося элемента списка

		new_li.append(checkbox);	// добавляем в новый элемент списка чекбокс
		new_li.append(" " + task);	// и введеный текст

		let ul = document.querySelector(".list ul"); // добавляем новый элемент списка в сам список
		ul.append(new_li);
	});

	document.querySelector("#del").addEventListener("click", function () {
		let li_list = document.querySelectorAll("li");	// выбираем все элементы списка

		for (let i = li_list.length - 1; i >= 0; i--) {
			if (li_list[i].firstElementChild.checked) li_list[i].remove();	// в цикле проверяем первого ребенка элемента на активированность и если истина, то удаляем
		}
	});
});