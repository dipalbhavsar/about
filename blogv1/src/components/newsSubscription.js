import React from "react"

const NewsSubscription = () => {
  return (
    <div
      className="sidebar-box subs-wrap img py-4"
      // style="background-image: url(images/bg_1.jpg);"
    >
      <div className="overlay"></div>
      <h3 className="mb-4 sidebar-heading">Newsletter</h3>
      <p className="mb-4">
        Far far away, behind the word mountains, far from the countries Vokalia
      </p>
      <form action="#" className="subscribe-form">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Email Address"
          />
          <input
            type="submit"
            value="Subscribe"
            className="mt-2 btn btn-white submit"
          />
        </div>
      </form>
    </div>
  )
}

export default NewsSubscription
