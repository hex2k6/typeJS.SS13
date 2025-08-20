import { Component } from 'react'

type PostProps = {
    id: number;
    title: string;
    content: string;
    author: string;
}
export class DetailPost  extends Component<PostProps> {
  render() {
    return (
      <div>
        <div style={{ borderBottom: "1px solid gray", padding: "10px", marginBottom: "10px" }}>
            <b>
                <p>Id: {this.props.id}</p>
                <p>Title: {this.props.title}</p>
                <p>Content: {this.props.content}</p>
                <p>Author: {this.props.author}</p>
            </b>
        </div>
      </div>
    )
  }
}