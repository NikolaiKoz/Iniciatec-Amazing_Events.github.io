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
eventStatistcs();