

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
        img: "https://www.hd-tecnologia.com/imagenes/articulos/2018/11/Millones-de-programadores-descargaron-una-librer%C3%ADa-infectada-800x474.png",
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