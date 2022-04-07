const data =[{
        titulo: "HTML5,CSS3 y JavaScript" ,
        img: "./src/img/curso1.jpg", 
        valor: "./src/img/estrellas.png" ,
        precio: 14.99,
        id:1,
        descrip:"Aprende HTML CSS y JavaScript a tu ritmo y conviertete en desarrollador web profesional, tendrás acceso de por vida"
    },
    {
        titulo: "Aprende a programar" ,
        img: "./src/img/curso2.jpg" ,
        valor: "./src/img/estrellas.png" ,
        precio: 9.99,
        id:2,
        descrip:"Conoce los fundamentos y principios básicos de la programación creando proyectos"
    },
    {
        titulo: "Curso de Guitarra" ,
        img: "./src/img/curso3.jpg" ,
        valor: "./src/img/estrellas.png" ,
        precio: 9.99,
        id:3,
        descrip:"Aprende guitarra con instructores expertos, aprende más de 29 canciones "
    },
    {
        titulo: "Curso de React Native" ,
        img: "./src/img/curso4.jpg" ,
        valor: "./src/img/estrellas.png" ,
        precio: 17.99,
        id:4,
        descrip:"Aprende a crear, desarrollar y mantener aplicaciones andorid, iOS con React Native"
    },
    {
        titulo: "Curso de Electrónica" ,
        img: "./src/img/curso5.jpg" ,
        valor: "./src/img/estrellas.png" ,
        precio: 16.99,
        id:5,
        descrip:"Comprende el funcionamiento de los circuitos eléctricos que conforman nuestra vida y aprende a desarrollarlos"
    },
    {
        titulo: "Aprende Machine Learning" ,
        img: "./src/img/curso6.jpg" ,
        valor: "./src/img/estrellas.png" ,
        precio: 13.99,
        id:6,
        descrip:"En este curso conocerás los principios del Machine Learning y aprenderás a implementarlo en tus aplicaciones"

    },
    {
        titulo: "Curso de NodeJS" ,
        img: "./src/img/curso7.jpg" ,
        valor: "./src/img/estrellas.png" ,
        precio: 11.99,
        id:7,
        descrip:"BootCamp de NodeJS, MVC, API's Rest + de 15 Apps"
    },
    {
        titulo: "Curso de React JS" ,
        img: "./src/img/curso8.jpg" ,
        valor: "./src/img/estrellas.png" ,
        precio: 15.99,
        id:8,
        descrip:"Desarrolla aplicaciones web con React JS, incluye nextJS, Context, Redux,  MERN y más. Construye 15 Apps y consigue un trabajo "
    },
    {
        titulo: "Aprende Apollo + GraphQL" ,
        img: "./src/img/curso9.jpg" ,
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