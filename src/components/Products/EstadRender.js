import React from "react";
  import {
  
  Sector, Cell, ResponsiveContainer, 
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";

 
import { ProductContext } from "../../context/products";

export default function EstadRender( ) {

  const { listaporcen, dedo, categ } = React.useContext(ProductContext);


   const dat = dedo.map(item => item );
  //console.log(ded)

  const name = categ.map(item => item );


  const obj = {...dedo};
  console.log(obj)


//   const res =[];
// Object.keys(name).forEach((key, i)=> res.push({label: key, value: Object.values(obj)[i]}))

// console.log(res)





  var result = {};
name.forEach((key, i) => result[key] = dat[i]);


const res = Object.entries(result).map(([key, value]) => ({
  label: key,
  value: value
}))



//  const res = Object.entries(result)
//                      .map(([key, value]) => ({ [key]: value }));
// //                       .map(([key, value]) => ({id:result[value], name: result[key]}));
// //                      //.map(key => ({id:result[value], name: result[key]}));
  console.log(res);
 


// const res = Object.keys(result)
//                      .map(key => ({id: Number(key), name: result[key]}));
//                    //.map(key => ({id: result[name], name: result[key]}));
// console.log(res);
  
  // const res = [
  //   { label: "Facebook", value: 2000000000 },
  //   { label: "Instagram", value: 1500000000 },
  //   { label: "Twiter", value: 1000000000 },
  //   { label: "Telegram", value: 500000000 },
  // ];
  // console.log(res)


 
 
  return (



    
       <>

       
              <div class="row">

              
                    <div class="col-lg-6 grid-margin stretch-card">
                            <div class="card">
                              <div class="card-body">
                                <h4 class="card-title">Variación diaria</h4>
                                 
                                <div class="table-responsive">
                                  <table class="table table-hover">
                                    <thead>
                                      <tr>
                                        <th>Día</th>
                                        <th>Recaudación</th>
                                        <th>Variación</th>
                                       </tr>
                                    </thead>
                                    <tbody>
                                 
                                {categ.map(post => (
  

                                      <tr>
                                        <td> {post}</td>
                                        <td>$  </td>
                                         
                                            <td >    </td>
                                        

                                            <td class="text-success">   % <i class="mdi mdi-arrow-up"></i></td>
                                         
                                            <td class="text-danger">   % <i class="mdi mdi-arrow-down"></i></td>
                                         

                                      </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>



                <div class="col-lg-6 grid-margin stretch-card">
                  <div class="card">
                    <div class="card-body">
                      <h4 class="card-title">Variación semanal</h4>
                       
                      <div class="table-responsive">
                        <table class="table table-hover">
                          <thead>
                            <tr>
                                    <th>semana</th>
                                    <th>Recaudación</th>
                                    <th>Variación</th>
                            </tr>
                          </thead>
                          <tbody>
                                     

                                      <tr>
                                        <td> </td>
                                        <td>$  </td>
                                             <td >    </td>
 
                                            <td class="text-success">  % <i class="mdi mdi-arrow-up"></i></td>
                                             <td class="text-danger">  % <i class="mdi mdi-arrow-down"></i></td>
 
                                      </tr>
                           </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>



       <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={res}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" stackId="a" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>



                      <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={res}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#8884d8"
            label="value"
          />
          <Tooltip dataKey="value"/>
        </PieChart>



     

    <BarChart
          width={500}
          height={300}
          data={res}
          margin={{
            top: 5,
            right: 30,
            left: 80,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="label"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis dataKey="value" />

          <Tooltip />

          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="value" fill="#8884d8" background={{ fill: "#eee" }} />
        </BarChart>



     
   






                 </div>
               









 
  </>

  );
}






 
		
		