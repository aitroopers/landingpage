const data = {
    home: {
        banner: {
            title: 'Modern Applications',
            subtitle: "We Make Smart Modern Tech",
            content: "At AI Troopers, we build mobile and web applications that utilizes artificial intelligence. Ai Troopers, LLC is technology service company that is dedicated to bring smart\n" +
                "modern techs to businesses.",
            background:"img/header-bg.jpg"
        },
        features: [
            {
                title: 'Cross Platform Mobile Apps',
                content: "We build mobile apps compatible for both Android, Web and Apple users",
                icon: "fa-apple"
            },
            {
                title: "Smart Add-ons",
                content: "We integrate chatbots, analytics and smart searches to your existing applications",
                icon: "fa-search"
            },
            {
                title: "Great Design",
                content: "We will make your application stand out immediately by its responsiveness to different devices, dynamic content, online payment flow and beautiful design.",
                icon: "fa-pencil"
            },

        ],
        portfolio: {
            title:"Track Record",
            summary:"We Have a Diverse Track Record with Building Applications From react apps to Financial Data Analytics",
            history:[
            {
                title: 'Radio Logos Music Broadcasting',
                content: "This react native app allows our client to broadcast music to its users.",
                icon: "/img/f1.png",
                link: "https://play.google.com/store/apps/details?id=al.radiologos&hl=en_US"
            },
            {
                title: 'African Scholarship Exchange',
                content: "This is a fund raising website we built for our client to attract donations for African exchange students ",
                icon: "/img/f2.png",
                link: "africanscholarshipexchange.org"
            },
            {
                title: "Finaius Financial Data Vendor",
                content: "Finaius is a financial data platform we built to extract unstructured data to understand macro economics.",
                icon: "/img/f3.png",
                link: "www.finaius.com"
            }
        ]

        }
    },

    about: {
        summary: {
            title: "AI Driven Technology",
            content: "AI Troopers, LLC is technology service company dedicated to bring modern applications to our enterprise partners.  We are mostly active in data analytic for financial service companies."
        },
        teams: [
            {name: 'Rocky Xu', role: "President", icon: "/img/rocky.png"},
            {name: "Veer Singh", role: "Engineer", icon: "/img/veer.png"}
        ],
        skills: [
            'Django', 'React JS', 'Quantitative Finance', 'Chatbots', 'Tensorflow', 'Natural Language Processing'
        ]

    },
    footer: {
        about: 'AI Troopers LLC is a technology company that build modern apps and big data analytics.',
        contact:{
            content: "Feel free to contact us for a product demo. We are extremely friendly.",
            email:"aitroopers@gmail.com",
            phone:"347-543-9459"
        }

    }


};


export default data