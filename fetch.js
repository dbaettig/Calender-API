const infoElement = document.getElementById('infoElement');
const search = document.getElementById('search');
const content = document.getElementById('content');
const days = document.getElementsByClassName('days');
const addButton = document.getElementById('addButton');

search.addEventListener('change', function () {
    const searchValue = search.value;
    const li = document.createElement('li')
    li.innerText = search.value




    fetchCalender();

    function fetchCalender(getDate) {
        fetch('https://api.dryg.net/dagar/v2.1/2018')

            .then(function (response) {
                return response.json();
            })
            .then(function (calender) {
                displayCalender(calender);
            })

            .catch(function (error) {
                console.log(error);
            })
    }




    function displayCalender(calender) {

        let info = '';
        for (var i = 0; i < calender.dagar.length; i++) {
            console.log(calender.dagar[i])

            if (searchValue == calender.dagar[i].datum) {


                if (!calender.dagar[i].helgdag) {
                    calender.dagar[i].helgdag = " ";
                }

                if (!calender.dagar[i].namnsdag) {
                    " ";
                }

                info += `
     <div class="days">
        <h3> ${calender.dagar[i].datum} </h3>
        <li>  ${calender.dagar[i].helgdag} </li>
        <li> Veckodag: ${calender.dagar[i].veckodag} </li>
        <li> Vecka: ${calender.dagar[i].vecka} </li>
        <li> Röd dag:  ${calender.dagar[i] ["röd dag"]} </li>
        <li> Namnsdag: ${calender.dagar[i].namnsdag} </li>
      </div>   
      
`;

                infoElement.innerHTML = info;

            } //closes forloop

        } //closes first if statement

    } //closes displaycalender function

}) // closes search addlistener
