const myApi = '/api';
const table = document.getElementById('myTable');
const searchInput = document.getElementById('search-input');
let usersData = [];

window.onload = () => {
	fetch(myApi)
		.then((res) => res.json())
		.then((data) => {
			usersData = Object.values(data).flatMap((leaderData) => leaderData);
			renderTable(usersData);
		})
		.catch((err) => console.error(err));

	searchInput.addEventListener('keyup', () => {
		const searchVal = searchInput.value.trim();
		console.log(searchVal);
		searchedData(searchVal);
	});

	const searchedData = (searchVal) => {
		const filteredUsers = usersData.filter((user) =>
			user.user.display_name.toLowerCase().includes(searchVal.toLowerCase())
		);
		if (filteredUsers.length > 0) {
			renderTable(filteredUsers);
		} else {
			alert('Not found');
		}
	};

	const renderTable = (users) => {
		table.innerHTML = '';
		users.forEach((user) => {
			let languages = user.running_total.languages
				.slice(0, 3)
				.map((lang) => lang.name)
				.join(', ');
			const row = document.createElement('tr');
			row.innerHTML = `<td>
                <div style="display: flex; align-items: center;">
                    <img src="${user.user.photo}" alt="User Photo" style="width: 50px; height: 50px; margin-right: 10px;">
                    <span>${user.user.display_name}</span>
                </div>
            </td>
            <td>${user.user.city.title_including_country}</td>
            <td>${user.running_total.human_readable_daily_average}</td>
            <td>${languages}</td>`;
			table.appendChild(row);
		});
	};

	// countryForm.addEventListener('submit', (event) => {
	// 	event.preventDefault();
	// 	const query = searchInput.value;
	// 	console.log(query);
	// 	fetch(myApi, {
	// 		method: 'POST',
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 		},
	// 		body: JSON.stringify({ country_code: query }),
	// 	});
	// });
};
