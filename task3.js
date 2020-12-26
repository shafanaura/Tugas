function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
	if (nilaiAwal < nilaiAkhir && dataArray.length > 5) {
		const printFilter = dataArray.filter((dataArray) => {
			return dataArray > nilaiAwal && dataArray < nilaiAkhir;
		});
		const printSort = printFilter.sort((min, max) => min - max);
		printResult(printSort);
	} else if (nilaiAwal > nilaiAkhir) {
		console.log("Nilai akhir harus lebih besar dari nilai awal");
	} else {
		console.log("Jumlah angka dalam dataArray harus lebih dari 5");
	}
}

function printResult(result) {
	console.log(result);
}

seleksiNilai(3, 21, [12, 20, 4, 2, 5, 18, 6]);
