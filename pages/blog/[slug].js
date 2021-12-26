import Head from 'next/head'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'
import Link from 'next/link'

export default function PostPage({frontmatter: {title_note}, slug, content}) {
    return <>
        <Head>
        <title>Anotações™ | {title_note}</title>
        </Head>

    <Link href='/'>
        <a className='btn btn-back'>⬅️ Voltar</a>
    </Link>
    <div className='card card-page'>
    <h1 className='post-title'>{title_note}</h1>
    <div className='post-body'>
        <br></br>
        <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
    </div>
    </div>
    </>
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('md'))
    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('.md', '')
        },
    }))

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params: {slug} }) {
    const mdWithMeta = fs.readFileSync(path.join('md', slug + '.md'), 'utf-8')

    const {data:frontmatter, content} = matter(mdWithMeta)
    
    
    return {
        props: {
            frontmatter,
            slug,
            content
        },
    }
}