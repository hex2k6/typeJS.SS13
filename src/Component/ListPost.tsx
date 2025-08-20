import { Component } from 'react'
import { DetailPost } from './DetailPost';

interface List{
    id: number,
    title: string,
    content: string,
    author: string,
}

export default class ListPost extends Component<{},{lists: List[]}> {
    constructor(props: {}){
        super(props);
        this.state = {  
            lists: [
                {
                    id: 1,
                    title: "Tại sao học ReactJS",
                    content: "Học ReactJS để đi làm",
                    author: "David",
                },
                {
                    id: 2,
                    title: "Props trong ReactJS",
                    content: "Props giúp truyền dữ liệu từ conponents con xuống components cha",
                    author: "Linda",
                },
                {
                    id: 3,
                    title: "State trong ReactJS là gì",
                    content: "State giúp dữ trạng thái dữ liệu bên trong một components",
                    author: "Khạc",
                },
            ]
        }
    }
  render() {
    
    return (
      <div>
        <h3>Danh sách bài viết:</h3>
        {this.state.lists.map((list) => (
            <DetailPost
                key = {list.id}
                id = {list.id}
                title = {list.title}
                content={list.content}
                author={list.author}
            />
        ))}
      </div>
    )
  }
}