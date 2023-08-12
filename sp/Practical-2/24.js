// Create an array of products
const Cars = [
    { name: 'supra', supply: 10, price: 300 },
    { name: 'GTR R35', supply: 20, price: 500 },
    { name: 'Mustang GT', supply: 15, price: 350 }
  ];
  


  const nameModels=(car)=>{
        let list=[];
        for(let i=0;i< car.length;i++){
            list.push(car[i].name)
        }
        console.log(list);
        return list;

  }
  nameModels(Cars);


  const totalPrice=(car)=>{
      let list=0;
      for(let i =0;i<car.length;i++){
          list += car[i].supply*car[i].price;
      }
      console.log(list);
      return list;
  }
  totalPrice(Cars);
