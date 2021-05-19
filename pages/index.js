import Image from 'next/image'
import { Container, Card, Grid, Text, Heading, Link, Box, NavLink } from 'theme-ui'
import getPosts from '../lib/airtable'
import styles from '../styles/Home.module.css'



export default function Home({ posts }) {
  // console.log(posts)

  return (
    <>
    <Box as="header" sx={{ bg: 'sheet', color: 'text' }}>
      <Container sx={{ pt: 5, pb: [3, 4], textAlign: 'center' }}>
        <Heading as="h1" variant="title" color="red">
          lilvibeyloser multilink
        </Heading>
        <Grid
          gap={4}
          columns="auto auto"
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 2,
            mt: 3,
            mb: 4,
            a: { color: 'muted', transition: 'color .125s ease-in-out' }
          }}
        >
        </Grid>
      </Container>
    </Box>
    <div className={styles.main}>
      <Grid
      columns={[1, 1, 1]}
          gap={3}
          sx={{ code: { mt: 1, ml: -1, fontSize: 0 } }}
      >
        
          {posts.map(post => (
            <Link href={post.fields.url}>
            <Card
              sx={{
                backgroundImage: t => t.util.gx('cyan', 'blue'),
                color: 'white'
              }}
              key={post.fields.id}
            >
              <Heading variant="headline" as="h3" my={ 0 }>
                {post.fields.name}
              </Heading>

              <Text variant="lead" sx={{ right:0 }}>
                {post.fields.descr}
              </Text>

              <br />
            </Card>
            </Link>
          ))}
      
      </Grid>
    </div>
    </>
  )
}


export async function getServerSideProps() {
  const posts = await getPosts();

  return {
    props: {
      posts,
      revalidate: 1,
    },
  };
}