import { Box, Image, Heading, Button} from 'theme-ui'
import { ThemeProvider } from 'theme-ui'
import theme from '#/lib/theme'

const Header = () => { 
    return (
        <ThemeProvider theme={theme}>
        <Box sx={{ 
            padding: '20px',
            justifyContent: 'space-between', 
            backgroundColor: '#0D0C0C',
            position: 'relative',
            display: 'flex',
             }}>
            <Box sx={{
                display: 'flex',
                gap: '5px',
                alignItems: 'center',
            }}>  
                <Heading as="h1" sx={{ color: '#DBDBDB',  }}>b</Heading>
                <Heading as="h1" sx={{ color: '#DBDBDB',  }}>|</Heading>
                <Heading as="h1" sx={{
                        backgroundImage: 'linear-gradient(90deg, #0D608C, #06A6FF)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent',
                        WebkitTextFillColor: 'transparent',
                  }}>brightbeam engraving</Heading>


            </Box>
            <Box sx={{
                display: 'flex',
                gap: '70px',
                padding: '0px 40px',
                backgroundColor: '#0D0C0C',

            }}>
            <Button variant="flush" sx={{backgroundColor: '#0D0C0C',}}><Heading as="h2">ORDER</Heading></Button>
            <Button variant="flush" sx={{backgroundColor: '#0D0C0C',}}><Heading as="h2">CONTACT</Heading></Button>
            <Button variant="flush" sx={{backgroundColor: '#0D0C0C',}}><Heading as="h2">ABOUT</Heading></Button>

            </Box>
        </Box>
        </ThemeProvider>

    )
}
export default Header