const eventStatistcs = () => {

    const tenPercentMajor = JSON.parse(localStorage.getItem('tenPercentMajor'));
    const tenPercentMinor = JSON.parse(localStorage.getItem('tenPercentMinor'));
    const tenPercentCapacity = JSON.parse(localStorage.getItem('tenPercentCapacity'));

    const eventStatistcs = document.getElementById('eventStatics');

    for (let index = 0; index < tenPercentCapacity.length; index++) {

        let table = `
        <tr>
            <td colspan="2">${tenPercentMajor[index].name} ${tenPercentMajor[index].percentage}%</td>
            <td colspan="2">${tenPercentMinor[index].name} ${tenPercentMinor[index].percentage}%</td>
            <td colspan="1">${tenPercentCapacity[index].name} (${tenPercentCapacity[index].capacity})</td>
        </tr>
        `;

        eventStatistcs.innerHTML += table;

    }

};

const upcomingEventsStaticsByCategory = () => {

    const categoriesWithReserves = JSON.parse(localStorage.getItem('categoriesWithReserves'));

    const upcomingEventsStaticsByCategory = document.getElementById('upcomingEventsStaticsByCategory');

    for (let index = 0; index < categoriesWithReserves.length; index++) {

        let table = `
        <tr>
            <td colspan="2">${categoriesWithReserves[index].category}</td>
            <td colspan="2">${categoriesWithReserves[index].reserves}</td>
            <td colspan="1">${categoriesWithReserves[index].percentage}%</td>
        </tr>
        `;

        upcomingEventsStaticsByCategory.innerHTML += table;

    }
};

const pastEventsStaticsByCategory = () => {

    const theLastList = JSON.parse(localStorage.getItem('theLastList'));

    const pastEventsStaticsByCategory = document.getElementById('pastEventsStaticsByCategory');

    for (let index = 0; index < theLastList.length; index++) {

        let table = `
        <tr>
            <td colspan="2">${theLastList[index].category}</td>
            <td colspan="2">${theLastList[index].reserves}</td>
            <td colspan="1">${theLastList[index].percentage}%</td>
        </tr>
        `;

        pastEventsStaticsByCategory.innerHTML += table;

    }
};



eventStatistcs();
upcomingEventsStaticsByCategory();
pastEventsStaticsByCategory();