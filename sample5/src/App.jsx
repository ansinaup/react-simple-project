import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './Cards.jsx'
import Header from './Header.jsx'

function App() {
  const[searchItem,setSearchItem]=useState("")

  let data = [
    {
      name: "Castlevania",
      image:
       "https://m.media-amazon.com/images/I/81vCuIwTqBL._AC_UF1000,1000_QL80_.jpg",
      idMeal: "cartoon series",
    },
    {
      name: "Kung Fu Panda: The Dragon Knight",
      image: "https://genz-mag.com/wp-content/uploads/2022/06/Kung-Fu-Panda-The-Dragon-Knight-is-Coming-to-Netflix-1-1.jpg",
      idMeal: "cartoon series",
    },
    {
      name: "The Dragon Prince",
      image: "https://m.media-amazon.com/images/M/MV5BMjA5MjEwODU1MV5BMl5BanBnXkFtZTgwNzk0MzA5NTM@._V1_QL75_UY281_CR11,0,190,281_.jpg",
      idMeal: "cartoon series",

    },
    {
      name: "The Way Back",
      image: "https://play-lh.googleusercontent.com/s4Pxl1nqBQzUjEvwE4IDzQfXIlvngAlLcn3A3OCZEbLQXcFZc4XKTb-6k8hgxAQyo4HH",
      idMeal: "Movies",
    },
    {
      name: "Avatar",
      image: "https://m.media-amazon.com/images/I/51MKE4kDEeL.jpg",
      idMeal: "Movies",
    },
    {
      name: "Shutter Island",
      image: "https://play-lh.googleusercontent.com/jalongU-EtEyIVLHphasHtuoJML1ROTMFUXizvzGQ_zq2B0JBZYkcVLC7FUq61f9Yll9ClMzHfuXNUNx3w",
      idMeal: "Movies",
    },
    {
      name: "Friends",
      image: "https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg",
      idMeal: "series",
    },
    {
      name: "Lost",
      image: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/183bc5b0672e9aab23cb9ecfda185382082df5dbc7807777c272809f998a5a8b._RI_TTW_.jpg",
      idMeal: "series",
    },
    {
      name: "Peaky Blinders",
      image: "https://th-thumbnailer.cdn-si-edu.com/oLWBKV8-ZmmpnOsDoq2ew3Nc48U=/1000x750/filters:no_upscale():focal(634x85:635x86)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/7b/ba/7bba298e-7e2e-44f0-adb9-b47dfdc1e240/p05m69vt.jpg",
      idMeal: "series",
    },
  ];

  const handleOnChange=(e)=>{
    const searchItem = e.target.value
    console.log(searchItem);
    setSearchItem(searchItem)
  }

  const result=data.filter((data)=>{
    if(data.idMeal===searchItem){
      return true
    }
    else if (data.name===searchItem){
      return true
    }
  })



  return (
    <>
    
      <div className='div1'>
        <input className='btn'  type='text' placeholder='search' onChange={handleOnChange}></input>


      </div>
      <div className='div2'>{
        result.map(({ name, image, idMeal }) => {
          return (

            <Cards para={idMeal} title={name} image={image} />

          )

        })
      }

      </div>

    </>
  )
}

export default App
