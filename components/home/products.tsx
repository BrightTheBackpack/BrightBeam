import { Box, Image, Heading, Button, Grid} from 'theme-ui'
import { ThemeProvider } from 'theme-ui'
import theme from '#/lib/theme'

const Products = () => { 
    return (
        <Box sx={{
            backgroundColor: '#0D0C0C',
            color: '#DBDBDB',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: '10vh',
            paddingBottom: '10vh',
        }}>
            <Grid columns={[2, 2]} gap={2}   sx={{
            rowGap: 4,     // vertical gap (Y)
            columnGap: 7,  // horizontal gap (X)
             }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '25vw',
                    backgroundColor: '#2D2A2A',
                    borderRadius: '20px',
                }}>
                    <Image src="/engraving.png" />
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '25vw',
                    backgroundColor: '#2D2A2A',
                    borderRadius: '20px',
                }}>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '25vw',
                    borderRadius: '20px',
                    backgroundColor: '#2D2A2A',
                }}>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '25vw',
                    backgroundColor: '#2D2A2A',
                    borderRadius: '20px',
                }}>
                    <Image src="/engraving.png" />

                </Box>
            </Grid>
        </Box>
      
    )
}
export default Products