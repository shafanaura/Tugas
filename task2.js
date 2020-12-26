var persons = [
	"Abigail",
	"Alexandra",
	"Alison",
	"Amanda",
	"Angela",
	"Bella",
	"Carol",
	"Caroline",
	"Carolyn",
	"Deirdre",
	"Diana",
	"Elizabeth",
	"Ella",
	"Faith",
	"Olivia",
	"Penelope",
];

function searchName(inputName, inputNum, myCallback) {
	const filterItems = (arr, query) => {
		return arr.filter(
			(el) => el.toLowerCase().indexOf(query.toLowerCase()) !== -1,
		);
	};
	const hasil_filter_nama = filterItems(persons, inputName);
	myCallback(hasil_filter_nama, inputNum);
}

function searchNum(data, inputNum) {
	if (data == "") {
		console.log("Wrong input name");
	} else {
		if (inputNum > data.length) {
			console.log("Wrong input number");
		} else {
			const newArray = data.slice(0, inputNum);
			printResult(newArray);
		}
	}
}
function printResult(result) {
	console.log(result);
}
searchName("an", 2, searchNum);
