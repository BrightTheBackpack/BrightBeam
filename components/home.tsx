import Head from 'next/head'
import { Box, Image, Heading, Button} from 'theme-ui'

const Home = () => { 
    return (
        <Box sx={{ 
            padding: '20px',
            justifyContent: 'top', 
            backgroundColor: '#0D0C0C',
            color: '#DBDBDB',
            display: 'flex',
            position: 'relative',
            height: '100vh',
            flexDirection: 'column',
             }}>
                <Heading sx={{
                    
                    color: '#DBDBDB',
                    fontSize: '5rem',
                    marginBottom: '20px'
                
                }}>brightbeam</Heading>
                <Heading sx={{
                    color: '#DBDBDB',
                    fontSize: '5rem',
                    marginBottom: '20px'
                
                }}>engraving</Heading>
                <Box sx={{
                    display:'inline-block',

                }}>
                <Heading sx={{
                    display:'inline-block',
                    fontSize: 3,
                }}>Engraving </Heading>{" "}
                <Heading sx={{
                    display:'inline-block',
                    fontSize: 4,
                    backgroundImage: 'linear-gradient(90deg, #FF2D2D, #FEB626)',
                }}>Memories </Heading>
                <Heading sx={{
                    display:'inline-block',
                    fontSize: 3,
                }}>, One </Heading>{" "}
                <Heading sx={{
                    display:'inline-block',
                    fontSize: 4,
                    backgroundImage: 'linear-gradient(90deg, #0D608C, #06A6FF)',

                }}>Beam </Heading>{" "}
                <Heading sx={{
                    display:'inline-block',
                    fontSize: 3,
                }}>at a Time </Heading>

                </Box>

        </Box>
    )
}
export default Home