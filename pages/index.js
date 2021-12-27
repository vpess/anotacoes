import Head from 'next/head'
import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import Note from '../components/Note.js'

export default function Home({ posts }) {
  
  return (
    <div>
      <Head>
        <title>Anotações™</title>
      </Head>

      <div className="posts">
        {posts.map((post, index) => (
          <Note key={index} post={post} />
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() { //Pega dados de um diretório especificado e transforma numa página estática

//Pega os arquivos da pasta 'md' 
  const files = fs.readdirSync(path.join('md'));
//Pega o slug e frontmatter da pasta 'md'
  const posts = files.map((filename) => {
    //cria slug, que será o nome do arquivo de markdown sem a extensão
    const slug = filename.replace('.md', '');

    //pega o frontmatter, que são os dados iniciais dos markdowns
    const markdownWithMeta = fs.readFileSync(path.join('md', filename), 'utf-8')

    const { data: frontmatter } = matter(markdownWithMeta)

    return {
      slug, 
      frontmatter,
    }
  })

  //console.log(posts)

  return {
    props: {
      posts: posts,
    },
  }

}