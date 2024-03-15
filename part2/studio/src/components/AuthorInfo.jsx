import "./styling.css";
import recipedata from "./recipe.json";

function AuthorInfo() {

  const authorName = recipedata.map((data) => {
    <div key={data.name}>{data.author}</div>
  })

  const authorimage = recipedata.map((data) => {
    <div>
      <img src={data.authorImage} className="authorImage"></img>
    </div>
  })

  const authorURL = recipedata.map((data) => {
    <div>
      <a href={data.website}>{data.website}</a>
    </div>
  })

  return <div>
    {authorimage}
    {authorName}
    {authorURL}
  </div>;
 }

 export default AuthorInfo;

 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
