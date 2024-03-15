export default function HobbyList() {
    let hobby1 = "https://en.wikipedia.org/wiki/Figure_skating";
    let hobby2 = "https://en.wikipedia.org/wiki/Pole_dance";
    let hobbyLinks = [hobby1, hobby2];

    return (
    <div>
       <a href={hobbyLinks[0]}>Figure Skating</a>
       <br></br>
       <a href={hobbyLinks[1]}>Pole dance</a>
    </div>
    )

}
