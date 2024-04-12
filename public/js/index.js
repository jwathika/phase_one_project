const myApi = fetch('/api');
const table = document.getElementById('myTable');

window.onload = () => {
	myApi
		.then((res) => res.json())
		.then((data) => {
			// for (let i = 0; i < data.length; i++) {
			// 	let newData = data[i];
			// 	console.log(newData);
			// }
			//for loop was not working since data is returned as object instead of array
			// convert then iterate
			const newArray = Object.values(data);
			newArray.forEach((leaderData) => {
				leaderData.forEach((newData) => {
					newData.forEach((newerData) => {
						console.log(newerData);
						let row = `<tr>
                <td>${newerData}</td>
                        </tr>
                `;
						table.innerHTML += row;
					});
				});
			});
		})
		.catch((err) => console.error(err));
};
