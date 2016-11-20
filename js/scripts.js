function checkOnclickEvent() {
	var list = document.getElementById('Lista'),
		add = document.getElementById('addElem'),
		listNumber = document.getElementsByTagName('li');

	add.addEventListener('click', function() {
	list.innerHTML += '<li>item ' + listNumber.length + '</li>';
	});
}
checkOnclickEvent();