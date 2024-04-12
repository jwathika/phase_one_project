const myApi = fetch('/api');
const table = document.getElementById('myTable');
const countryForm = document.getElementById('searchForm');
const countryInput = document.getElementById('');
window.onload = () => {
	myApi
		.then((res) => res.json())
		.then((data) => {
			// for (let i = 0; i < data.length; i++) {
			// 	let newData = data[i];
			// 	console.log(newData);
			// }
			//for loop was not working since data is returned as object instead of array
			// convert then iterate, then now fill the table data

			const newArray = Object.values(data);
			newArray.forEach((leaderData) => {
				leaderData.forEach((newData) => {
					// main problem was trying to fetch each language one by one
					let languages = newData.running_total.languages
						.slice(0, 3)
						.map((lang) => lang.name)
						.join(', ');
					let row = `<tr>
					<td>${newData.rank}</td>
					<td>
					<div style="display: flex; align-items: center;">
                    <img src="${newData.user.photo}" alt="User Photo" style="width: 50px; height: 50px; margin-right: 10px;">
                    <span>${newData.user.display_name}</span>
                </div>
					</td>
					<td>${newData.user.city.title_including_country}</td>
					<td>${newData.running_total.human_readable_daily_average}</td>
					<td>${languages}</td>
				</tr>`;
					table.innerHTML += row;
				});
			});
			countryForm.addEventListener('submit', (event) => {
				event.preventDefault();
				const query = countryInput.value;
				console.log(query);
				fetch(`${myApi}`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ country_code: query }),
				});
			});
		})
		.catch((err) => console.error(err));
};
