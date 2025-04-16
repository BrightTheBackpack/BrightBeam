import Head from 'next/head'
import { Box, Image, Heading, Button} from 'theme-ui'
import Logo from '#/components/home/logo'
import Sub from '#/components/home/subheader'
import Products from "#/components/home/products"
const Home = () => { 
    return (
        <Box sx={{
            backgroundColor: '#0D0C0C',
            color: '#DBDBDB',

        }}>
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
        }}>
            <Box sx={{ 
            padding: '20px',
            justifyContent: 'top', 
            backgroundColor: '#0D0C0C',
            color: '#DBDBDB',
            display: 'flex',

            position: 'relative',
            height: '100vh',
            width: '50vw',
            flexDirection: 'column',
             }}>
                <Logo />
                <Sub />
               
              

            </Box>
            <Box sx={{
                backgroundColor: '#0D0C0C',
                width: '50vw',
                justifyContent: 'top', 
                position: 'relative',

                height: '100vh',
                display: 'flex',
    
                flexDirection: 'column',
                alignItems: 'center',
    

            }}>
                <Image sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginTop: '10vh',
                    width: '25vw',
                }}src="/engraving.png" >

                </Image>
            </Box>

            
        </Box>
        <Products/>

        </Box>
    )
}
export default Home