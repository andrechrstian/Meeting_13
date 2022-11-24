import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h1>Halo</h1>
//     </div>
//   );
// }
// export default App

// const App = () => {
//   return (
//     <h1>Tes</h1>
//   )
// }
// export default App

// function App () {
//   const usia = 25
//   return (
//     <h1> Halo usia saya {usia}</h1>
//   )
// }

// export default App

// const App = ()=> {
//   const usia = 25
//   return (
//     <h1>Hi usia saya {usia}</h1>
//   )
// }

// export default App



const App = () => {
  const usia = 25
  const nama = 'Andre'
  const waktu = new Date().getDate()
  const isOpen = false;
  const bottom = 'celana'
  const tahunSekarang = new Date().getFullYear()
  const tahunLahir = 1997
  

  const renderToko = (isOpen) => {
    return isOpen ? "Toko Buka" : "Toko Tutup"
  }

  const renderWarteg = (isOpen) => {
     
      if (isOpen = true ) {
       return  "Toko Buka"
    }else  {
       return  "Toko Tutup"
    }  
  }

  const gender = (param) => {
    if (param = "Celana") {
      return "Aku Cowok"
    }if (param = "Rok")  {
      return "Aku Cewek"
    }
  } 


  const checkUsia = (param1, param2) => {
    return param1-param2
  }


  const students = [
    {
      id : 1,
      name : "Budi"
    },
    {
      id : 2,
      name : "rahmat"
    },
    {
      id : 3,
      name : "indah"
    }
  ]

  return (
  <>
    <p>Hi nama saya {usia}</p>
    <p>Panjang nama saya {nama.length}</p>
    <p> Hari ini tanggal {waktu}</p>
    <p>{!isOpen ? "Toko Buka" : "Toko Tutup"}</p>
    <p>{renderToko()}</p>
    <p>{renderWarteg()}</p>
    <p>{gender(bottom)}</p>
    <p>Usia saya adalah {checkUsia (tahunSekarang, tahunLahir)}</p>
    {
      students.map (item => {
        return (
         // <div >
          <p> nomor absen {item.id} {item.name}</p>
        //  </div>
        )
      }
      )
    }

    {
        //TUGAS 13 FILTER DAN MAP NAMA
        students.filter (itemFilter => {
          return itemFilter.id < 3
        }) 
        .map (itemFilter => {
          return (
            <p>"{itemFilter.name}"</p>
          )
        })
      
      }
    </>
    )
  }
  
  export default App