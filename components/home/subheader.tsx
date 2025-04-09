import { Box, Image, Heading, Button} from 'theme-ui'
import { ThemeProvider } from 'theme-ui'
import theme from '#/lib/theme'

const Subheader = () => { 
    return (
        <Box>
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
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    WebkitTextFillColor: 'transparent',

                    backgroundImage: 'linear-gradient(90deg, #FF2D2D, #FEB626)',
                }}>Memories </Heading>
                <Heading sx={{
                    display:'inline-block',
                    fontSize: 3,
                }}>, One </Heading>{" "}
                <Heading sx={{
                    display:'inline-block',
                    fontSize: 4,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    WebkitTextFillColor: 'transparent',

                    backgroundImage: 'linear-gradient(90deg, #0D608C, #06A6FF)',

                }}>Beam </Heading>{" "}
                <Heading sx={{
                    display:'inline-block',
                    fontSize: 3,
                }}>at a Time </Heading>

                </Box>
                <Heading sx={{
                    fontSize: 2
                }}>
                Get sustainably engraved products at a low cost
                </Heading>
                <Heading sx={{
                    fontSize: 2,
                }}>
                    Order in-person or online

                </Heading>
        </Box>
    )
}
export default Subheader