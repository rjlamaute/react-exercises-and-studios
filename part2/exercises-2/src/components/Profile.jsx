import './styles.css';
import Button from './Button';
import oceans from './oceans.json';

function Profile()
{
   let listItem = oceans.map((ocean) => {
      <div key={ocean.id}>
         <img src={ocean.image} alt={ocean.name} className='img'></img>
      </div>;
   });
   return(
      <>
         <ul>
            {listItem}
         </ul>
         <Button />
      </>
   );
}

export default Profile;
