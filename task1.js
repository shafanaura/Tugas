// 1). charAt() adalah metode untuk mengembalikan character dari index yang telah ditentukan
const str = "Darling";
console.log(str.charAt(3));

// 2). split() adalah metode untuk membagi string menjadi array substring dan mengembalikan array baru tanpa mengubah string asli
const str2 = "Listen To Me";
console.log(str2.split(" "));

// 3). toLowerCase() adalah metode untuk mengkonversi string menjadi huruf kecil semua
const str3 = "You're so Handsome";
console.log(str3.toLowerCase());

// 4). filter() adalah metode untuk membuat array baru dengan semua elemen yang lulus pengujian yang diimplementasikan oleh fungsi yang disediakan
const num = [3, 6, 1, 12, 14, 10];
function checkNum(num) {
	return num > 5;
}
console.log(num.filter(checkNum));

// 5). join() adalah metode untuk menggabungkan semua elemen daru sebuah array
const str4 = ["Tamanan", "is", "my", "village"];
console.log(str4.join(" "));

// 6). map() adalah metode untuk membuat array baru dengan hasil pemanggilan fungsi yang disediakan pada setiap elemen dalam array ini
var persons = [
	{ firstname: "Shafa", lastname: "Naura" },
	{ firstname: "Justin", lastname: "Bieber" },
];

function getFullName(item) {
	var fullname = [item.firstname, item.lastname].join(" ");
	return fullname;
}

console.log(persons.map(getFullName));

// 7). pop() adalah metode untuk menghapus elemen terakhir dari array dan mengembalikan elemen tersebut
var element = str4.pop();
console.log(element);

// 8). push() adalah metode untuk menambahkan elemen yang diberikan di bagian terakhir array dan mengembalikan panjang array baru
const str5 = str4.push("Tulungagung");
console.log(str4);

// 9). reverse() adalah metode untuk membalikkan elemen array. Elemen array pertama menjadi yang terakhir dan yang terakhir menjadi yang pertama
const checkNum2 = num.reverse();
console.log(checkNum2);

// 10). sort() adalah metode untuk mengurutkan elemen array
const checkNum3 = num.sort(function (a, b) {
	return a - b;
});
console.log(checkNum3);
