let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];

function RateARecipe(props) {

  function GiveRating() {
    return <h3>{stars[props.rating - 1]}</h3>;
  }

  if (props.rating <= 5 & props.rating >= 1) {
    return <GiveRating />
  } else {
    return null;
  }

}



export default RateARecipe;

//conditional to render stars based on a number provided in App.js
