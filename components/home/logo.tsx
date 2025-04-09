import { Box, Image, Heading, Button} from 'theme-ui'
import { ThemeProvider } from 'theme-ui'
import theme from '#/lib/theme'

const Logo = () => { 
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
        }}>
                <Heading sx={{
                    marginTop: '15vh',
                    color: '#DBDBDB',
                    fontSize: '5rem',
                    marginBottom: '20px'
                
                }}>brightbeam</Heading>
                <Heading sx={{
                    color: '#DBDBDB',
                    fontSize: '5rem',
                    marginBottom: '20px'
                
                }}>engraving</Heading>
        </Box>

    )
}
export default Logo