import { Card } from "../../common/Task/card";
import honeyImage from "../../../img/honey.png";
import goldenImage from "../../../img/golden.png";
import redImage from "../../../img/red.png";
import robustImage from "../../../img/robust.png";
import salvajeImage from "../../../img/salvaje.png";
import temploImages from "../../../img/templo.png";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container">
      <h2 className="greeting">{greeting}</h2>
      <div className="list-container">
        <Card
          img={honeyImage}
          title="Cerveza HONEY"
          description="lorem ipsum"
          stock="Disponible"
        />
        <Card
          img={goldenImage}
          title="TEXAS GOLDEN ALE"
          description="lorem ipsum"
          stock="Disponible"
        />
        <Card
          img={redImage}
          title="FARO IRISH RED"
          description="lorem ipsum"
          stock="Disponible"
        />
        <Card
          img={robustImage}
          title="ROBUST PORTER"
          description="lorem ipsum"
          stock="Disponible"
        />
        <Card
          img={salvajeImage}
          title="SALVAJE FOREIGN EXTRA STOUT"
          description="lorem ipsum"
          stock="No Disponible"
        />
        <Card
          img={temploImages}
          title="IPA TEMPLO DORADO"
          description="lorem ipsum"
          stock="Disponible"
        />
      </div>
    </div>
  );
};

export default ItemListContainer;
