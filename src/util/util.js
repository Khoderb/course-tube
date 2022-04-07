

const data =[{
        titulo: "HTML5,CSS3 y JavaScript" ,
        img: "https://media.istockphoto.com/photos/web-programming-language-banner-picture-id1320976968?b=1&k=20&m=1320976968&s=170667a&w=0&h=X0qZR_rISHzfUuVLoC_qpF5XGiSGSHun1Usa8PmuTWg=", 
        valor: "./src/img/estrellas.png" ,
        precio: 14.99,
        id:1,
        descrip:"Aprende HTML CSS y JavaScript a tu ritmo y conviertete en desarrollador web profesional, tendrás acceso de por vida"
    },
    {
        titulo: "Aprende a programar" ,
        img: "https://images.unsplash.com/photo-1632910138458-5bf601f3835e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbWVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" ,
        valor: "./src/img/estrellas.png" ,
        precio: 9.99,
        id:2,
        descrip:"Conoce los fundamentos y principios básicos de la programación creando proyectos"
    },
    {
        titulo: "Curso de Guitarra" ,
        img: "https://images.unsplash.com/photo-1454922915609-78549ad709bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z3VpdGFyJTIwcGxheWVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" ,
        valor: "./src/img/estrellas.png" ,
        precio: 9.99,
        id:3,
        descrip:"Aprende guitarra con instructores expertos, aprende más de 29 canciones "
    },
    {
        titulo: "Curso de React Native" ,
        img: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVhY3QlMjBtb2JpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" ,
        valor: "./src/img/estrellas.png" ,
        precio: 17.99,
        id:4,
        descrip:"Aprende a crear, desarrollar y mantener aplicaciones andorid, iOS con React Native"
    },
    {
        titulo: "Curso de Electrónica" ,
        img: "https://media.istockphoto.com/photos/rendering-of-cyberpunk-ai-circuit-board-technology-background-central-picture-id1351979162?b=1&k=20&m=1351979162&s=170667a&w=0&h=wSgWKOuS96mJAhATyMLDeeWBnqkA9IWNh87k56ltpvg=" ,
        valor: "./src/img/estrellas.png" ,
        precio: 16.99,
        id:5,
        descrip:"Comprende el funcionamiento de los circuitos eléctricos que conforman nuestra vida y aprende a desarrollarlos"
    },
    {
        titulo: "Aprende Machine Learning" ,
        img: "https://media.istockphoto.com/photos/artificial-intelligence-digital-concept-abstract-brains-inside-light-picture-id1366475366?b=1&k=20&m=1366475366&s=170667a&w=0&h=88l9xe-SYPf2huqfiPsm5Fd6RQexqnyT9RbSNAGgRCA=" ,
        valor: "./src/img/estrellas.png" ,
        precio: 13.99,
        id:6,
        descrip:"En este curso conocerás los principios del Machine Learning y aprenderás a implementarlo en tus aplicaciones"

    },
    {
        titulo: "Curso de NodeJS" ,
        img: "data:image/png;base64,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",
        valor: "./src/img/estrellas.png" ,
        precio: 11.99,
        id:7,
        descrip:"BootCamp de NodeJS, MVC, API's Rest + de 15 Apps"
    },
    {
        titulo: "Curso de React JS" ,
        img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhY3QlMjBqc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" ,
        valor: "./src/img/estrellas.png" ,
        precio: 15.99,
        id:8,
        descrip:"Desarrolla aplicaciones web con React JS, incluye nextJS, Context, Redux,  MERN y más. Construye 15 Apps y consigue un trabajo "
    },
    {
        titulo: "Aprende Apollo + GraphQL" ,
        img: "https://wp.apollographql.com/wp-content/uploads/2021/08/Apollo-Gateway_-Illustration-1.png" ,
        valor: "./src/img/estrellas.png" ,
        precio: 14.99,
        id:9,
        descrip:"Lleva ReactJS al siguiente Nivel con Apollo + GraphQL, nextJS, backend y mucho más, domina ReactJS"
    }];

export const getData = () =>{ 
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(data),2000)
    })
}