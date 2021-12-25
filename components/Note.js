import Link from 'next/link'

export default function Note({ post }) {
    return (
        <div class="card">

            <Link href={`/blog/${post.slug}`}>
                <img src={post.frontmatter.cover_image} alt='' />
            </Link>

            <h2>{post.frontmatter.title}</h2>
            
            <div className='post-excerpt'>{post.frontmatter.excerpt}</div>

            <p>Data de atualização: {post.frontmatter.update}</p>
            
            <Link href={`/blog/${post.slug}`}>
                <a className='btn'>Acessar</a>
            </Link>
            <br /><br />
            
            
        </div>
    )
}