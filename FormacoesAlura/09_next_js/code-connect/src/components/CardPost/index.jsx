import Image from "next/image"
import { Avatar } from "../Avatar"

export const CardPost = ({ post }) => {
  return (
    <div>
        <article>
            <header>
                <figure>
                    <Image src={post.cover} width={250} height={250} alt={post.title}/>
                </figure>
            </header>
            <section>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </section>
            <footer>
                <Avatar 
                    imageSrc={post.author.avatar}
                    name={post.author.name}
                />
            </footer>
        </article>
    </div>
  )
}

export default CardPost
