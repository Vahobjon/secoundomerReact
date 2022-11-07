import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { Component } from 'react'
import "./Search.css"

export default class Search extends Component {
  render() {
    return (
      <Box sx={{
        width:"98%",
        height:"100vh",
        display:"flex",
        // position:"fixed",
        // overflow:"scroll",
        bgcolor:"#181818",
        listStyle:"none",
        
        
      }}>
       <Box sx={{
        width:"40%",
        height:"100vh",
        // border: "solid 4px red ",
        
       }}>
        
       </Box>
       <Box sx={{
       
        

       }}>
        <Box sx={{
          width:"100%",
          height:"7vh",
          // border: "solid 4px red ",
          position:"fixed",

        }}>
          navbar
        </Box>
        <Box marginBottom={"40px"}
       sx={{
        width:"100%",
        height:"100%",
        ml: 7,
        color:"white",
        overflow:"scroll",
        mb:"40px"
        
        
       }}>
        <Typography variant='h5' sx={{
          mt:6
       }}>
        Результаты поиска “Создание сайта”
        </Typography>
        <Typography
        sx={{
            width:"60%",
            padding:"15px",
            backgroundColor: "#202020",
            boxShadow:" 0px 15px 25px rgba(0, 0, 0, 0.35)",
            borderRadius: "5px",
            mt:4


        }}>
          <Typography variant='h5' sx={{
            mb:2
          }} >
          Как писать код быстро и безболезненно?
          </Typography  >
          <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.

          </Typography>

            <Typography sx={{
              display:'flex',
              justifyContent:"space-between"
            }}>
       
           <Typography sx={{
            display:"flex",
            gap:"20px",
            mt:3,
            color: "#828282"
           }}>
           <li>21.06.2020</li>
              <li>создание сайтов</li>
           </Typography>
           <Typography sx={{
            mt:3,
            color:"blue"

           }}>
           перейти
           </Typography>
            </Typography>
        </Typography>
         <Box
          sx={{
            width:"60%",
            padding:"15px",
            backgroundColor: "#202020",
            boxShadow:" 0px 15px 25px rgba(0, 0, 0, 0.35)",
            borderRadius: "5px",
            mt:4


        }}>
        <Typography sx={{
          fontSize:"22px"
        }}>
        Купил новый ноутбук за 150 000 руб
        </Typography>

         <Typography 
         sx={{
              display:'flex',
              justifyContent:"space-between"
            }}>
       
           <Typography 
           sx={{
            display:"flex",
            gap:"20px",
            mt:3,
            color: "#828282"
           }}>
           <li>21.06.2020</li>
              <li>продвижение видео</li>
           </Typography>
           <Typography sx={{
            mt:3,
            color:"blue"

           }}>
           перейти
           </Typography>
            </Typography>
         </Box>


         <Box
          sx={{
            width:"60%",
            padding:"15px",
            backgroundColor: "#202020",
            boxShadow:" 0px 15px 25px rgba(0, 0, 0, 0.35)",
            borderRadius: "5px",
            mt:4


        }}>
        <Typography sx={{
          fontSize:"22px"
        }}>
        Как писать код быстро и безболезненно?
        </Typography>

        <Typography variant='14px'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.

        </Typography>

         <Typography sx={{
              display:'flex',
              justifyContent:"space-between"
            }}>
       
           <Typography 
           sx={{
            display:"flex",
            gap:"20px",
            mt:3,
            color: "#828282"
           }}>
           <li>21.06.2020</li>
              <li>создание сайтов</li>
           </Typography>
           <Typography sx={{
            mt:3,
            color:"blue"

           }}>
           перейти
           </Typography>
            </Typography>
         </Box>
         <Box 
         sx={{
            width:"60%",
            padding:"15px",
            backgroundColor: "#202020",
            boxShadow:" 0px 15px 25px rgba(0, 0, 0, 0.35)",
            borderRadius: "5px",
            mt:4


        }}>
        <Typography sx={{
          fontSize:"22px"
        }}>
        Купил новый ноутбук за 150 000 руб
        </Typography>

         <Typography sx={{
              display:'flex',
              justifyContent:"space-between"
            }}>
       
           <Typography 
           sx={{
            display:"flex",
            gap:"20px",
            mt:3,
            color: "#828282"
           }}>
           <li>21.06.2020</li>
              <li>продвижение видео</li>
           </Typography>
           <Typography sx={{
            mt:3,
            color:"blue"

           }}>
           перейти
           </Typography>
            </Typography>
         </Box>
       </Box>

       </Box>
       
      </Box>
    )
  }
}
