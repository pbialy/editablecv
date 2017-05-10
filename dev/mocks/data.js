const data = {
    editMode: false,
    pageColor: "orange",
    headerSection: {
        name: 'Euzebiusz',
        surname: 'Kowalski',
        job: 'Javascript Developer'
    },
    dataSection: {
        phone: '503112234',
        email: 'wesoly_romek997@wp.pl',
        www: 'javascript.crockford.com',
        twitter: 'twitter.com/boredpanda'
    },
    experiencesSection: {
        experiences: [{
            dateFrom: '11/2016',
            dateTo: '03/2017',
            position: 'Programista C++',
            tasks: [
                'projektowanie aplikacji backendowej dla NASA',
                'szkolenia z programowania dla Pań z recepcji',
                'wdrażanie innowacyjnych metodyk pracy'
            ]
        }, {
            dateFrom: '03/2016',
            dateTo: '09/2016',
            position: 'Pomoc doraźna dla Google',
            tasks: [
                'stworzenie kodu który uchronił serwis przed przeciążeniem',
                'szkolenia dla pracowników'
            ]
        }, {
            dateFrom: '05/2014',
            dateTo: '02/2016',
            position: 'Kasjer w Biedronce',
            tasks: [
                'obsługa klienta',
                'układanie produktów',
                'liczenie pieniędzy',
                'transport utargu do banku za pomocą opancerzonego rowerka',
                'spanie na zapleczu'
            ]
        }]
    },
    skillsSection: {
        skills: [{
            name: 'Dowodzenie',
            val: '70%'
        }, {
            name: 'Kondycja',
            val: '100%'
        }, {
            name: 'Estetyka',
            val: '20%'
        }],
    }
}

export default data
