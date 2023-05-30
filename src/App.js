import './App.css';
import { useState } from 'react';
function App() {

  const [topImage, setTopImage] = useState('');
  const [bottomImage, setBottomImage] = useState('');
  const [shoesImage, setShoesImage] = useState('');

  const [topDescription, setTopDescription] = useState('');
  const [bottomDescription, setBottomDescription] = useState('');
  const [shoesDescription, setShoesDescription] = useState('');



  const clothing = [
    {
    description: 'Michael Kors Blue Dress Shirt',
    type: "top",
    dressCode: 'formal',
    imageUrl:
    'https://slimages.macysassets.com/is/image/MCY/products/0/optimized/19226370_fpx.tif?$browse$&wid=376&fmt=webp',
    },
    {
    description: 'Calvin Klein Steel Gray Dress Shirt',
    type: "top",
    dressCode: 'formal',
    imageUrl:
    'https://slimages.macysassets.com/is/image/MCY/products/2/optimized/19714862_fpx.tif?bgc=255,255,255&wid=400&qlt=90,0&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=webp',
    },
    {
    description: 'Michael Kors Pink Dress Shirt',
    type: "top",
    dressCode: 'formal',
    imageUrl:
    'https://slimages.macysassets.com/is/image/MCY/products/3/optimized/21014523_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$&fmt=webp',
    },
    {
    description: 'Michael Kors White Dress Shirt',
    type: "top",
    dressCode: 'formal',
    imageUrl:
    'https://slimages.macysassets.com/is/image/MCY/products/8/optimized/10468918_fpx.tif?$browse$&wid=376&fmt=webp',
    },
    {
    description: 'Alfani Short Sleeve Shirt',
    type: "top",
    dressCode: 'casual',
    
    imageUrl:
    'https://slimages.macysassets.com/is/image/MCY/products/1/optimized/20929261_fpx.tif?$browse$&wid=376&fmt=webp',
    },
    {
    description: 'Tommy Hilfiger white Short Sleeve Shirt',
    type: "top",
    dressCode: 'casual',
    imageUrl:
    'https://slimages.macysassets.com/is/image/MCY/products/1/optimized/8789631_fpx.tif?$browse$&wid=376&fmt=webp',
    },
    {
    description: 'Wrangler Graphic T-shirt',
    type: "top",
    dressCode: 'sport',
    imageUrl:
    'https://slimages.macysassets.com/is/image/MCY/products/8/optimized/21436348_fpx.tif?$browse$&wid=376&fmt=webp',
    },
    {
    description: 'Adidas red T-shirt',
    type: "top",
    dressCode: 'sport',
    imageUrl:
    'https://slimages.macysassets.com/is/image/MCY/products/2/optimized/13336822_fpx.tif?$thumb$&wid=376',
    },
    {
    description: 'Nike Giannis Basketball Sneakers',
    type: "shoes",
    dressCode: 'sport',
    imageUrl:
    'https://slimages.macysassets.com/is/image/MCY/products/0/optimized/21824750_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$&fmt=webp',
    },
    {
    description: 'Adidas High Top Sneakers',
    type: "shoes",
    dressCode: 'sport',
    
    imageUrl:
    'https://slimages.macysassets.com/is/image/MCY/products/0/optimized/18588060_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$&fmt=webp',
    },
    {
    description: 'Sperry Brown Shoes',
    type: "shoes",
    dressCode: 'casual',
    imageUrl:
    'https://slimages.macysassets.com/is/image/MCY/products/2/optimized/524862_fpx.tif?$thumb$&wid=376',
    },
    {
    description: 'Sperry Blue Shoes',
    type: "shoes",
    dressCode: 'casual',
    imageUrl:
    'https://slimages.macysassets.com/is/image/MCY/products/6/optimized/21650286_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$&fmt=webp',
    },
    {
    description: 'Casual White Pants',
    type: "bottom",
    dressCode: 'casual',
    imageUrl:
    'https://n.nordstrommedia.com/id/sr3/0e7486a9-93bb-47d9-947c-5a4052ff4157.jpeg?h=365&w=240&dpr=2',
    },
    {
    description: 'Dress Blue Pants',
    type: "bottom",
    dressCode: 'formal',
    imageUrl:
    'https://slimages.macysassets.com/is/image/MCY/products/1/optimized/8353081_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$&fmt=webp',
    },
    {
    description: 'Slim Fit Stretch Khaki Pants',
    type: "bottom",
    dressCode: 'casual',
    
    imageUrl:
    'https://slimages.macysassets.com/is/image/MCY/products/3/optimized/10067433_fpx.tif?op_sharpen=1&wid=700&hei=855&fit=fit,1&fmt=webp',
    },
    {
    description: 'Brown Dress Pants',
    type: "bottom",
    dressCode: 'formal',
    imageUrl:
    'https://slimages.macysassets.com/is/image/MCY/products/0/optimized/10067390_fpx.tif?$thumb$&wid=376',
    },
    {
    description: 'Black Dress Pants',
    type: "bottom",
    dressCode: 'formal',
    imageUrl:
    'https://slimages.macysassets.com/is/image/MCY/products/3/optimized/11786133_fpx.tif?$browse$&wid=376&fmt=webp',
    },
    {
    description: 'Adidas Track Pants',
    type: "bottom",
    dressCode: 'sport',
    imageUrl:
    'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0d80911fe0e24f8eb67fac3800e8bee0_9366/Tiro_21_Sweat_Pants_Black_GM7336_21_model.jpg',
    },
    {
    description: 'Adidas Jogger Pants',
    type: "bottom",
    dressCode: 'sport',
    imageUrl:
    'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/f5bf3559e3514ebc8afeac840145abf8_9366/tiro-21-sweat-pants.jpg',
    },
    ];

    console.log(clothing.length)

    const getCasual = (arr) => {
      const casualTop = '';
      const casualBottom = '';
      const casualShoes = '';
      const casualTopDesc = '';
      const casualBottomDesc = '';
      const casualShoesDesc = '';

      const casualArr = arr.filter(item=>{
        return item.dressCode === "casual"
      })
      const casualTops = casualArr.filter(item=>{
          return item.type === "top"
        })
      
      const casualBottoms = casualArr.filter(item=>{
        return item.type === "bottom"
      })
      
      const casualShoesArr = casualArr.filter(item=>{
        return item.type === "shoes"
      })
      
      // if(){
      //   Math.floor(casualArr.length * Math.random()) 
      // }
      // setTopImage('')
      // setTopDescription('')
      // setBottomImage('')
      // setBottomDescription('')
      // setShoesImage('')
      // setTopDescription('')

      return console.log(casualArr)
      
    }
    const getSport = (arr) => {
      const sportTop = '';
      const sportBottom = '';
      const sportShoes = '';
      const sportTopDesc = '';
      const sportBottomDesc = '';
      const sportShoesDesc = '';
      const sportArr = arr.filter(item=>{
        return item.dressCode === "sport"
      })
      // if(){
      //   Math.floor(casualArr.length * Math.random()) 
      // }
      // setTopImage('')
      // setTopDescription('')
      // setBottomImage('')
      // setBottomDescription('')
      // setShoesImage('')
      // setTopDescription('')
      return console.log(sportArr)   
    }
    const getFormal = (arr) => {
      const formalArr = arr.filter(item=>{
        return item.dressCode === "formal"
      })
      const formalTop = '';
      const formalBottom = '';
      const formalShoes = '';
      const formalTopDesc = '';
      const formalBottomDesc = '';
      const formalShoesDesc = '';
      // if(){
      //   Math.floor(casualArr.length * Math.random()) 
      // }
      // setTopImage('')
      // setTopDescription('')
      // setBottomImage('')
      // setBottomDescription('')
      // setShoesImage('')
      // setTopDescription('')
      return console.log(formalArr)   
    }


  
  return (
    <div id="outer-container">
      <div id="inner-container">
        <div id = "header" className="inner-divs">
          <h3 style={{color: "blue",fontWeight: "bold", marginTop: "40px"}}>OUTFIT PLANNER</h3>
          <p>FIND WHAT TO WEAR</p>
        </div>
        <div id="button-div" className="inner-divs">
          <p style={{fontWeight: "bold"}}>Fashion Style/Dress Code</p>
          <div 
          className="buttons"
          onClick={getCasual(clothing)}
          >
            <p>Casual</p>
          </div>
          <div 
          className="buttons"
          onClick={getSport(clothing)}
          >
            <p>Sport</p>
          </div>
          <div 
          className="buttons"
          onClick={getFormal(clothing)}
          >
            <p>Formal</p>
          </div>
        </div>
        <div className='clothing-divs' >
          <div>TOP</div>
          <div className='image-container'>
            {/* <img src={topImage} alt ={topDescription}></img> */}
          </div>

        </div>
        <div className='clothing-divs' >
          <div>BOTTOM</div>
          <div className='image-container'>
            {/* <img src={bottomImage} alt ={bottomDescription}></img> */}

          </div>

        </div>
        <div className='clothing-divs' >
          <div>SHOES</div>
          <div className='image-container'>
            {/* <img src={shoesImage} alt ={shoesDescription}></img> */}
          </div>

        </div>
      </div>

    </div>
    
    
    
    )
}

export default App;
