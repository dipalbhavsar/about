import ghpages from 'gh-pages'

// replace with your repo url
ghpages.publish(
  "public",
  {
    branch: "master",
    repo: "dipalbhavsar.github.io/about",
  },
  () => {
    console.log("Deploy Complete!")
  }
)