import { Component } from "react"
import Link from "next/link"
import Router from "next/router"
import Notification from "components/Notification"
import { sendPost } from "utils/request"

import { pageWrapper } from "utils/wrapper"

class ManagePostPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: "",
      content: ""
    }
  }

  handleCreateNewPost = () => {
    sendPost("/api/posts", null, this.state)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div style={{ maxWidth: 700, margin: "30px auto" }}>
        <Link href="/manage">
          <a><h3>Back</h3></a>
        </Link>

        <Link href="/manage/post-management/new">
          <a><h3>Create new post</h3></a>
        </Link>
      </div>
    )
  }
}

export default pageWrapper(null)(ManagePostPage)