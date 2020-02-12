import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby";

const SecondPage = ({ data }) => (
  <Layout>
    <SEO title="User page" />
    <h1>Users page</h1>
    <br /><br />
    <table>
    <thead>
    <tr>
    <th>Id</th>
    <th>email</th>
    </tr>
    </thead>
    <tbody>
    { data.allUsersJson.nodes.map((user, index) => (<tr key={index}>
      <td>{user.id}</td>
      <td>{user.email}</td>
      </tr>))}
    </tbody>
    </table>
  </Layout>
)

export default SecondPage;

export const query = graphql`
  query Users {
    allUsersJson {
      nodes {
        id
        email
      }
    }
  }
`;
