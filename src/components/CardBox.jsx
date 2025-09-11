import { useNavigate } from "react-router-dom";
import Card from "./Card";
import PromotedCard from "./PromotedCard";

const CardBox = ({ restaurantList }) => {
  const navigate = useNavigate();
  const ProCard = PromotedCard(Card);

  return (
    <div className="w-4/5 m-auto flex flex-wrap gap-8 items-center justify-center p-8">
      {restaurantList.map((restaurant) => {
        const cardInfo = {
          name: restaurant?.info?.name,
          cuisines: restaurant?.info?.cuisines,
          avgRating: restaurant?.info?.avgRating,
          costForTwo: restaurant?.info?.costForTwoMessage,
          locality: restaurant?.info?.locality,
        };

        if (restaurant?.info?.avgRating >= 4.3) {
          return (
            <ProCard
              {...cardInfo}
              key={restaurant?.info?.id}
              onClick={() => {
                navigate(`/menu/${restaurant.info.id}`);
              }}
            />
          );
        }
        return (
          <Card
            {...cardInfo}
            key={restaurant?.info?.id}
            onClick={() => {
              navigate(`/menu/${restaurant.info.id}`);
            }}
          />
        );
      })}
    </div>
  );
};

export default CardBox;
