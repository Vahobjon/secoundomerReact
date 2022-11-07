import { Box, Typography, Button  } from '@mui/material'
import React, { Component } from 'react'
import img1 from '../images/Rectangle 21.jpg'
import img2 from '../images/2.jpg'


export default class Work extends Component {
  render() {
    return (
      <Box sx={
        {
          display:"flex",
          bgcolor:"black",


        }
      }>
        <Box sx={{
          width:"30%",
          height:"100vh",
          // border:"2px solid red",

        }}>
          
        </Box>
        <Box sx={{
          width:"70%",
          height:"100vh",
          // border:"2px solid red",
          
          
        }}>
          <Box sx={{
          width:"100%",
          height:"7vh",
          // border:"2px solid red",
          position:"fixed",

          
        }}>

          </Box>
          <Box sx={{
          width:"100%",
          height:"93%",
          // border:"2px solid red",
          ml:7,
          mt:7,
          overflow:"scroll"

          
          
        }}>
          <Box sx={{
            width:"100%",
            height:"79%",
            // bgcolor:"white",
            display:"flex"

          }}>
            <Box sx={{
            width:"29%",
            height:"100%",
            // bgcolor:"gray",
            overflow:'hidden'

          }}>
            <img sx={{
            
            }} src={img1} alt="rasm" />

             </Box>
            <Box sx={{
            width:"65%",
            height:"100%",
            // bgcolor:"yellow",
            background: "#202020",
            boxShadow: "0px 15px 25px rgba(0, 0, 0, 0.35)",
            borderRadius: "5px",

          }}> <Typography sx={{
            mt:6,
            ml: 5,
            fontSize:"28px",
            fontWeight:"500",
            lineHeight:"28px",
            color:"#ffff",
          }}>
            altermono.com</Typography>
              <Typography sx={{
                width:"60%",
                color: "#D2D2D2",
                lineHeight:"30px",
                fontFamily:'sans-serif',
                mt:7,
                ml:5,
                fontSize:"18px"

              }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.

              </Typography>
              <Box sx={{
                width:"100%",
                display:"flex",
                gap:"15px",
                mt:7,
                ml:5
              }}>
                <Button sx={{
                  bgcolor:"#EA8C1E"
                }} variant="outlined">дизайн</Button>
              <Button sx={{
                bgcolor:"#EA8C1E"
              }} variant="outlined">создание сайта</Button>
              <Button sx={{
                bgcolor:"#EA8C1E"
              }} variant="outlined">SMM</Button>
              
              </Box>
              <Button sx={{
                ml:35,
                mt:3
              }} variant='contained'>
              Перейти на сайт

              </Button>
             </Box>
          </Box>
          <Box sx={{
            width:"95%",
            height:"79%",
            // bgcolor:'gray',
            mt:3,
            display:"flex"
            
          }}>
            <Box>
              <img src={img2} alt="" />
            </Box>
            <Box sx={{
              // overflow:'scroll',
              width:"79%"

            }}>
            <Box sx={{
            width:"100%",
            height:"95%",
            // bgcolor:"yellow",
            background: "#202020",
            boxShadow: "0px 15px 25px rgba(0, 0, 0, 0.35)",
            borderRadius: "5px",
          
          

          }}> <Typography sx={{
            
            ml: 5,
            fontSize:"28px",
            fontWeight:"500",
            lineHeight:"28px",
            color:"#ffff",
          }}>
            altermono.com</Typography>
              <Typography sx={{
                width:"60%",
                color: "#D2D2D2",
                lineHeight:"30px",
                fontFamily:'sans-serif',
                mt:7,
                ml:5,
                fontSize:"18px"

              }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.

              </Typography>
              <Box sx={{
                width:"100%",
                display:"flex",
                gap:"15px",
                mt:7,
                ml:5
              }}>
                <Button sx={{
                  bgcolor:"#EA8C1E"
                }} variant="outlined">дизайн</Button>
              <Button sx={{
                bgcolor:"#EA8C1E"
              }} variant="outlined">создание сайта</Button>
              <Button sx={{
                bgcolor:"#EA8C1E"
              }} variant="outlined">SMM</Button>
              
              </Box>
              <Button sx={{
                ml:35,
                mt:3
              }} variant='contained'>
              Перейти на сайт

              </Button>
             </Box>
            </Box>
          </Box>
          </Box>
        </Box>

      </Box>

    )
  }
}
