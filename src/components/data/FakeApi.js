const productos = [
    {
      id: '01',
      name: 'random1',
      category: 'ropa',
      oferta: true,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis',
      price: 75,
      img: 'https://picsum.photos/320/200',
      stock: 5,
      top: false,

    },
    {
      id: '02',
      name: 'random2',
      category: 'ropa',
      oferta: false,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis',
      price: 70,
      img: 'https://picsum.photos/321/200',
      hashtags: ['#compraya', '#ultimoprod', '#random'],
      stock: 15,
      top: false,
    },
    {
      id: '03',
      name: 'random3',
      category: 'ropa',
      oferta: false,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis',
      price: 100,
      img: 'https://picsum.photos/322/200',
      hashtags: ['#compraya', '#ultimoprod', '#random'],
      stock: 7,
      top: true,
    },
    {
      id: '04',
      name: 'random4',
      category: 'muebles',
      oferta: true,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis',
      price: 75,
      img: 'https://picsum.photos/323/200',
      hashtags: ['#compraya', '#ultimoprod', '#random'],
      stock: 3,
      top: false,
    },
    {
      id: '05',
      name: 'random5',
      category: 'muebles',
      oferta: false,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis',
      price: 90,
      img: 'https://picsum.photos/324/200',
      hashtags: ['#compraya', '#ultimoprod', '#random'],
      stock: 10,
      top: false,
    },
    {
      id: '06',
      name: 'random6',
      category: 'muebles',
      oferta: false,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis',
      price: 50,
      img: 'https://picsum.photos/325/200',
      hashtags: ['#compraya', '#ultimoprod', '#random'],
      stock: 4,
      top: true,
    },
    {
      id: '07',
      name: 'random7',
      category: 'linea blanca',
      oferta: true,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis',
      price: 50,
      img: 'https://picsum.photos/326/200',
      hashtags: ['#compraya', '#ultimoprod', '#random'],
      stock: 4,
      top: false,
    },
    {
      id: '08',
      name: 'random8',
      category: 'linea blanca',
      oferta: true,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis',
      price: 50,
      img: 'https://picsum.photos/327/200',
      hashtags: ['#compraya', '#ultimoprod', '#random'],
      stock: 4,
      top: true,
    },
    {
      id: '09',
      name: 'random9',
      category: 'linea blanca',
      oferta: true,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis',
      price: 50,
      img: 'https://picsum.photos/327/200',
      hashtags: ['#compraya', '#ultimoprod', '#random'],
      stock: 4,
      top: false,
    },
  ];
  
  //imagenes:
  //carpeta en public
  //img:'/img/logo192.png'
  //carpeta src:
  //img:require('../images/logo512.png')
  
  export const getProducts = () => {
    let error = false;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!error) {
          resolve(productos);
        } else {
          reject('Hubo un error intente mas tarde');
        }
      }, 2000);
    });
  };
  