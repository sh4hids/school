import { withRouter } from "next/router";
import { Layout } from "../src/layouts";

const Page = withRouter(props => (
  <Layout>
    <h1>{props.router.query.title}</h1>
    <p>
      This is the blog post content. Lorem ipsum dolor sit amet, consectetur
      adipisicing elit. Ipsum voluptatum, numquam veritatis ipsam quidem,
      suscipit mollitia maiores sed perspiciatis nulla alias odio molestiae, sit
      blanditiis dolorum corporis vel veniam qui!
    </p>
    <p>
      Dolor sit amet, consectetur adipisicing elit. Ab distinctio, natus
      accusantium nostrum non quos molestiae tenetur impedit at voluptates
      corporis. Dolorum, sit, non. Mollitia, optio officiis asperiores illo
      error.
    </p>
  </Layout>
));

export default Page;
