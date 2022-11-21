import { houseList } from "../datas/houseList";
import HouseItem from "../components/HouseItems";
import "../styles/ChoiceList.css"

function ChoiceList() {
  return (
    <div>
      <div className="kasa-house-list">
        {houseList.map(({ id, cover, title }) => (
          <HouseItem 
          id={id} 
          cover={cover} 
          title={title} />
        ))}
      </div>
    </div>
  );
}

export default ChoiceList
